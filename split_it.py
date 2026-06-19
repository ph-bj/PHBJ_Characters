import re

with open("src/App.tsx", "r", encoding="utf-8") as f:
    lines = f.readlines()

split_idx = 0
for i, line in enumerate(lines):
    if line.startswith("export default function App() {"):
        split_idx = i
        break

utils_lines = lines[:split_idx]
app_lines = lines[split_idx:]

# Export declarations in utils_lines
for i, line in enumerate(utils_lines):
    if re.match(r'^(const|let|var|function|type|interface)\s', line):
        utils_lines[i] = "export " + line

# Extract imports
imports = [line for line in utils_lines if line.startswith("import ")]
# Note: multi-line imports will be broken by this, but App.tsx has multi-line imports
# Let's extract imports correctly
import_block = ""
in_import = False
import_end_idx = 0
for i, line in enumerate(utils_lines):
    if line.startswith("import "):
        in_import = True
    if in_import:
        if line.strip() == "":
            pass
        if ";" in line or line.strip().endswith('}'): # simplified, might not work perfectly
            pass

    if "const worksData" in line:
        import_end_idx = i
        break

imports = "".join(utils_lines[:import_end_idx])

# Get names to import from utils
names_to_import = []
for line in utils_lines:
    m = re.match(r'^export\s+(?:const|let|var|function|type|interface)\s+([A-Za-z0-9_]+)', line)
    if m:
        names_to_import.append(m.group(1))

utils_content = "".join(utils_lines)
with open("src/utils.tsx", "w", encoding="utf-8") as f:
    f.write(utils_content)

app_imports = imports + f'\nimport {{ {", ".join(names_to_import)} }} from "./utils";\n\n'
# add components
app_imports += """import { LanguageSwitch } from "./components/LanguageSwitch";
import { NavMenuDropdown } from "./components/NavMenuDropdown";
import { LacunaeModal } from "./components/LacunaeModal";
import { QuestionsModal } from "./components/QuestionsModal";
import { WorkModal } from "./components/WorkModal";
import { LocationDetail } from "./components/LocationDetail";
import { ChapterReader } from "./components/ChapterReader";
import { CharacterCard } from "./components/CharacterCard";
import { CharacterDetail } from "./components/CharacterDetail";
import { GardenDetail } from "./components/GardenDetail";\n\n"""

with open("src/App.tsx", "w", encoding="utf-8") as f:
    f.write(app_imports + "".join(app_lines))
