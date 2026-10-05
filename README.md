# Games

用 GitHub Pages 發布的網頁遊戲集合(純 HTML/JS/Canvas,無需 build)。

```
.
├── index.html          # 遊戲大廳(讀取 games.json 產生清單)
├── games.json          # 遊戲清單
├── games/
│   ├── _template/      # 新遊戲範本
│   └── <game>/         # 每款遊戲一個資料夾:index.html、main.js、assets/
├── shared/
│   ├── css/            # 共用樣式
│   ├── js/             # 共用模組(遊戲迴圈、輸入)
│   └── assets/         # 共用圖片/音效
└── docs/               # 文件(見 NEW_GAME.md)
```

啟用方式:GitHub → Settings → Pages → Source 選此分支的 `/ (root)`。
本機預覽:`python3 -m http.server`(ES modules 需要 http,不能直接開檔案)。

## 開發工具(CloudPlay)

來源:[nathanonn/cloudplay](https://github.com/nathanonn/cloudplay)(MIT,授權見 `LICENSE-cloudplay`,說明見 `docs/cloudplay.md`)。
雲端 session 啟動時自動提供自架 Firecrawl 與 `playwright-cli`(可用來截圖測試遊戲)。

- `.claude/` — SessionStart hook 與 skills(內為連結)
- `.agents/skills/` — skills 實體
- `scripts/`、`docker/`、`config/` — 環境設定
- `CLAUDE.md` — 給 Claude 的使用規則
