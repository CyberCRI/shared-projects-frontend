import json
from pathlib import Path

BASE = Path(__file__).resolve().absolute().parent

GENERATES = [
    "src"
]

def without_base(path: Path) -> Path:
    return Path(str(path).removeprefix(str(BASE)))

exports = {
    ".": "./index.ts"
}
inline = []
for dir in GENERATES:
    if inline:
        inline.append("")
    inline.append(f"// {dir}")

    print("-------\n")
    for file in Path(BASE / dir).rglob("**/*"):
        print(file, without_base(file))
        name = "src/" + str(without_base(file).with_suffix(""))
        out = "src/" + str(without_base(file))
        if not file.is_file():
            continue
        exports[name] = out
        inline.append(f"export * from '{name}'")

with open("../index.ts", "w") as f:
    f.write("\n".join(inline))

# with open("package.json") as f:
#     packages = json.load(f)

# packages["exports"] = exports

# with open("package.json", "w") as f:
#     json.dump(packages, f, indent=2)
