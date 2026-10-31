# Spreek

荷兰语（或任何语言）学习笔记。网页里点一句读一句、点一个词读一个词，中文自动跳过不读。笔记是普通的 Markdown 文件，放在 `notes/` 里，按文件夹显示。

- **网页**：`index.html`，由 GitHub Pages 托管，手机和电脑打开同一个地址。
- **笔记**：`notes/**/*.md`。推送到 `main` 后网页自动更新（`.github/workflows/pages.yml` 会重新生成 `notes/index.json`）。
- **让 AI 整理笔记**：见 [NOTE_FORMAT.md](NOTE_FORMAT.md)，把那段说明和材料一起发给 AI。
- **本地预览**：`node scripts/build-index.js && npx serve .`，然后打开 http://localhost:3000 。

朗读用的是浏览器自带的声音（Web Speech API），不需要任何 API key。电脑上推荐 Chrome 或 Edge，iPhone 需要在系统设置里下载荷兰语声音。
