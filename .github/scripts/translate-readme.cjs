const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs').promises;

async function translateReadme() {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY environment variable is not set');
    }

    console.log('Starting README translation process...');

    // 引数から対象ファイル名を取得（相対パスまたは絶対パスをそのまま使用）
    const targetFile = process.argv[2];
    if (!targetFile) {
      throw new Error('Target file name is required');
    }

    // ファイルの存在確認（受け取ったパスで直接確認）
    try {
      await fs.access(targetFile);
    } catch {
      throw new Error(`${targetFile} file not found`);
    }

    // 翻訳先ファイル名の生成（受け取ったファイル名に基づく）
    const readmePath = targetFile.replace('.ja.md', '.md');

    // Gemini API 初期化
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const japaneseContent = await fs.readFile(targetFile, 'utf-8');
    if (!japaneseContent.trim()) {
      console.log(`${targetFile} is empty, skipping translation.`);
      return;
    }

    console.log(`${targetFile} length: ${japaneseContent.length} chars`);
    console.log('Sending translation request to Gemini API...');

    const prompt = `Please translate the following Japanese Markdown text to English.
Keep the Markdown formatting intact, including headers, links, code blocks, and other formatting elements.
Make the translation natural and professional for an English-speaking developer audience.
If there are any technical terms or project-specific terms, keep them appropriate for a software development context.
Preserve all URLs, code snippets, and special formatting exactly as they are.

IMPORTANT: Return ONLY the translated Markdown content. Do NOT wrap the response in code blocks or add any extra formatting markers like \`\`\`markdown or \`\`\`.

Japanese text to translate:
${japaneseContent}`;

    const result = await model.generateContent(prompt);
    let translatedText = result.response.text().trim();

    // 不要なコードブロック除去
    translatedText = translatedText
      .replace(/^```markdown\s*\n/, '')
      .replace(/\n```\s*$/, '')
      .trim();

    // 既存ファイルと比較
    let existingContent = '';
    try {
      existingContent = await fs.readFile(readmePath, 'utf-8');
    } catch {
      console.log(`${readmePath} does not exist yet, will create new file`);
    }

    if (existingContent === translatedText) {
      console.log('No update needed');
      return;
    }

    await fs.writeFile(readmePath, translatedText, 'utf-8');
    console.log(`${readmePath} updated successfully!`);
  } catch (error) {
    console.error('Translation failed:', error.message);
    process.exit(1);
  }
}

translateReadme();
