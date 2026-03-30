# Phase 3: クリックで増やす

**ファイル**: `script.js`（新規作成）

---

## 書くコード

```js
// ゲームの状態管理変数
let money = 0;
let clickPower = 1;
let autoMoneyPerSec = 0;

// アイテムデータ
const items = [
	{ id: "cursor",  name: "強化カーソル",     price: 15,   power: 1,   isAuto: false, count: 0 },
	{ id: "grandma", name: "優しいおばあちゃん", price: 100,  power: 5,   isAuto: true,  count: 0 },
	{ id: "farm",    name: "おにぎり工場",      price: 500,  power: 20,  isAuto: true,  count: 0 },
	{ id: "mine",    name: "具材鉱山",          price: 2000, power: 100, isAuto: true,  count: 0 },
];

// HTMLの要素を取得
const scoreEl = document.getElementById("score");
const spsEl = document.getElementById("sps");
const clickBtn = document.getElementById("clickBtn");
const shopContainer = document.getElementById("shopContainer");

// クリック処理
clickBtn.onclick = function () {
	money += clickPower;
	scoreEl.innerText = money; // 直接画面に表示
};
```

---

## ポイント

- `document.getElementById("score")` でHTML側の `id="score"` の要素を取得する
- `clickBtn.onclick = function() { ... }` でクリックしたときの処理を登録する
- `scoreEl.innerText = money` で画面の数字を書き換える
- この時点でクリックするとスコアが増えることを確認しよう
