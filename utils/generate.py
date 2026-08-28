# script to generate index.ts and exports in packages.json

import json
from pathlib import Path

BASE = Path(__file__).resolve().absolute().parent.parent / "src"

GENERATES = [
    "lib", "interfaces", "models", "apis"
]

def without_base(path: Path, dir: str) -> Path:
    return Path(str(path).removeprefix(str(BASE / dir)))

exports = {
    ".": {
        "types": "./dist/index.d.ts",
        "default": "./dist/index.js"
    }
}
for dir in GENERATES:
    inline = []
    last_folder = None
    for file in sorted(Path(BASE / dir).rglob("**/*"), key=lambda x: str(x)):
        bb = without_base(file, dir)

        name = "." + str(without_base(file, dir).with_suffix(""))
        out = "." + str(without_base(file, dir))
        if not file.is_file():
            continue

        parents = str(bb.parent)

        if last_folder != parents:
            if last_folder is not None:
                inline.append("")
            if parents.strip("/"):
                inline.append(f"// {parents.strip("/")}")
        last_folder = parents
        inline.append(f"export * from '{name}'")


    ex = dir
    exports["./" + str(ex)] = {
        "types": f"./dist/{dir}/index.d.ts",
        "default": f"./dist/{dir}/index.js"
    }

    index = Path(BASE / dir / "index.ts")
    with open(index, "w") as f:
        f.write("\n".join(inline).strip(" ").strip("\n") + "\n")


with open("package.json") as f:
    packages = json.load(f)

packages["exports"] = exports

with open("package.json", "w") as f:
    json.dump(packages, f, indent=2)
