import importlib.util
import tempfile
import unittest
from pathlib import Path


SCRIPT_PATH = Path(__file__).with_name("check_large_files.py")
SPEC = importlib.util.spec_from_file_location("check_large_files", SCRIPT_PATH)
check_large_files = importlib.util.module_from_spec(SPEC)
assert SPEC.loader is not None
SPEC.loader.exec_module(check_large_files)


class LoadConfigTest(unittest.TestCase):
    def test_partial_config_overrides_default(self):
        with tempfile.TemporaryDirectory() as temp_dir:
            temp_path = Path(temp_dir)
            default_path = temp_path / "default.toml"
            config_path = temp_path / "config.toml"

            default_path.write_text(
                """
[settings]
max_lines = 500
issue_labels = ["refactoring", "code-quality", "automated"]

[scan]
include_patterns = ["**/*"]
exclude_patterns = ["**/*.md"]
exclude_files = []
""".strip(),
                encoding="utf-8",
            )
            config_path.write_text(
                """
[scan]
exclude_files = ["src/chord2mml_chord2ast.cjs"]
""".strip(),
                encoding="utf-8",
            )

            config = check_large_files.load_config(str(config_path), str(default_path))

            self.assertEqual(config["settings"]["max_lines"], 500)
            self.assertEqual(config["scan"]["include_patterns"], ["**/*"])
            self.assertEqual(config["scan"]["exclude_patterns"], ["**/*.md"])
            self.assertEqual(config["scan"]["exclude_files"], ["src/chord2mml_chord2ast.cjs"])

    def test_missing_repo_config_uses_default(self):
        with tempfile.TemporaryDirectory() as temp_dir:
            temp_path = Path(temp_dir)
            default_path = temp_path / "default.toml"

            default_path.write_text(
                """
[settings]
max_lines = 300

[scan]
exclude_files = []
""".strip(),
                encoding="utf-8",
            )

            config = check_large_files.load_config(str(temp_path / "missing.toml"), str(default_path))

            self.assertEqual(config["settings"]["max_lines"], 300)
            self.assertEqual(config["scan"]["exclude_files"], [])

    def test_missing_fallback_config_exits_cleanly(self):
        with tempfile.TemporaryDirectory() as temp_dir:
            temp_path = Path(temp_dir)
            config_path = temp_path / "config.toml"

            config_path.write_text(
                """
[scan]
exclude_files = ["src/chord2mml_chord2ast.cjs"]
""".strip(),
                encoding="utf-8",
            )

            with self.assertRaises(SystemExit) as exc:
                check_large_files.load_config(str(config_path), str(temp_path / "missing-default.toml"))

            self.assertEqual(exc.exception.code, 1)


if __name__ == "__main__":
    unittest.main()
