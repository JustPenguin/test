# 新增遊戲流程

1. `cp -r games/_template games/<遊戲名稱>`(名稱用小寫英文與連字號)
2. 修改 `games/<遊戲名稱>/main.js` 與 `index.html`
3. 在根目錄 `games.json` 新增一筆 `{ "id", "title", "description" }`
4. commit 並 push,GitHub Pages 會自動發布

遊戲專屬素材放 `games/<遊戲名稱>/assets/`,多款遊戲共用的放 `shared/`。
