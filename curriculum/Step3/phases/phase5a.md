# Phase 5a: ショップを画面に表示する（initShop）

**ファイル**: `script.js`（追記）

---

## 書くコード（末尾の `updateDisplay();` より前に追記）

```js
// ショップのアイテムリストを画面に生成する
function initShop() {
	items.forEach((item, index) => {
		// アイテム1つ分のボタン要素を作る
		const btn = document.createElement("div");
		btn.className = "shop-item";
		btn.id = "item-" + index;

		// ボタンの中身をHTMLで作る
		btn.innerHTML = `
			<div class="item-info">
				<span class="item-name">${item.name}</span>
				<span class="item-cost">${item.price}円</span>
			</div>
			<div class="item-count" id="count-${index}">0</div>
		`;

		// クリックしたら購入処理を呼ぶ
		btn.onclick = function () {
			buyItem(index); // Phase 5b で作る
		};

		// ショップエリアに追加
		shopContainer.appendChild(btn);
	});
}
```

### index.html のダミーを削除

`initShop()` がアイテムをJSで生成するので、Phase 1 で仮置きしたダミーは不要になる。
`<div id="shopContainer">` の中身を空にしよう。

```html
<div id="shopContainer"></div>
```

### 末尾の初期化部分も変更

```js
// ゲーム開始
initShop();      // ← 追加
updateDisplay();
```

---

## ポイント

- `items.forEach(...)` で配列のアイテムを1つずつ取り出してループする
- `document.createElement("div")` でJSからHTML要素を新しく作れる
- `innerHTML = \`...\`` のバッククォートは**テンプレートリテラル**といい、`${}` で変数を埋め込める
- `shopContainer.appendChild(btn)` で作った要素をページに追加する
- この時点でショップにアイテムが表示されることを確認しよう（まだ買えない）
