# Phase 5b: アイテムを購入できるようにする（buyItem + updateShopUI）

**ファイル**: `script.js`（追記）

---

## 書くコード（`initShop` 関数の後に追記）

```js
// 購入処理
function buyItem(index) {
	const item = items[index];

	// お金が足りるかチェック
	if (money >= item.price) {
		money -= item.price;       // 代金を払う
		item.count++;              // 個数を増やす
		item.price = Math.floor(item.price * 1.2); // 次の値段を1.2倍に

		// 能力を反映させる
		if (item.isAuto) {
			autoMoneyPerSec += item.power; // 自動生産アイテム
		} else {
			clickPower += item.power;      // クリック強化アイテム
		}

		updateDisplay();
		updateShopUI();
	}
}

// ショップボタンの見た目を更新（買えるか/買えないかの反映）
function updateShopUI() {
	items.forEach((item, index) => {
		const btn = document.getElementById("item-" + index);
		const countEl = document.getElementById("count-" + index);

		// 個数と値段の表示を更新
		btn.querySelector(".item-cost").innerText = item.price.toLocaleString() + "円";
		countEl.innerText = item.count;

		// 買えるかどうかでクラスを付け外しする
		if (money >= item.price) {
			btn.classList.remove("disabled");
		} else {
			btn.classList.add("disabled");
		}
	});
}
```

### `updateDisplay` 関数も変更

`updateShopUI()` の呼び出しを追加する。

```js
function updateDisplay() {
	scoreEl.innerText = money.toLocaleString();
	spsEl.innerText = "秒間: " + autoMoneyPerSec + " 円";
	updateShopUI(); // ← 追加
}
```

---

## ポイント

- `Math.floor(...)` は小数点以下を切り捨てる関数（値段が整数になるように使う）
- `btn.querySelector(".item-cost")` でボタンの中の特定要素を取得できる
- `classList.add("disabled")` / `classList.remove("disabled")` でCSSクラスを動的に付け外しする
- この時点でアイテムを購入できることを確認しよう
