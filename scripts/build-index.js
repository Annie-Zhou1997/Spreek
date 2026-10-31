// 扫描 notes/ 下所有 .md，生成 notes/index.json。网页靠它显示文件夹树。
// 用法：node scripts/build-index.js
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, "..", "notes");
const out = [];
function walk(dir, rel) {
  for (const name of fs.readdirSync(dir).sort((a, b) => a.localeCompare(b, "nl", { numeric: true }))) {
    if (name.startsWith(".") || name.startsWith("_")) continue;
    const full = path.join(dir, name), r = rel ? rel + "/" + name : name;
    if (fs.statSync(full).isDirectory()) walk(full, r);
    else if (name.endsWith(".md")) {
      const body = fs.readFileSync(full, "utf8");
      const m = body.match(/^\s*#\s+(.+)$/m);
      out.push({ path: r, title: (m ? m[1] : name.replace(/\.md$/, "")).trim(), folder: rel ? rel.split("/") : [], size: body.length, mtime: fs.statSync(full).mtimeMs });
    }
  }
}
walk(ROOT, "");
fs.writeFileSync(path.join(ROOT, "index.json"), JSON.stringify({ generated: new Date().toISOString(), notes: out }, null, 1));
console.log(out.length + " notes");
