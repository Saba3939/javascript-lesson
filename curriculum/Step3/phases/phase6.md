# Phase 6: 自動でお金が増えるようにする（setInterval）

**ファイル**: `script.js`（追記）

---

## 書くコード（`buyItem` 関数の前に追記）

```js
// 1秒ごとに自動でお金を増やすタイマー
setInterval(function () {
	if (autoMoneyPerSec > 0) {
		money += autoMoneyPerSec;
		updateDisplay();
	}
}, 1000); // 1000ミリ秒 = 1秒
```

---

## ポイント

- `setInterval(処理, 間隔ms)` で一定間隔で処理を繰り返せる
- `autoMoneyPerSec > 0` のチェックで、自動アイテムを何も買っていないときは何もしない
- おばあちゃんや工場を買うと `autoMoneyPerSec` が増えて、1秒ごとに加算されるようになる

---

## これでゲームの基本機能が完成！

動作確認リスト：
- [ ] クリックするとお金が増える
- [ ] アイテムを買うとお金が減り、個数が増える
- [ ] 強化カーソルを買うとクリックで増える量が増える
- [ ] おばあちゃん以降を買うと自動でお金が増える
- [ ] お金が足りないアイテムはグレーアウトされる

---

## おまけ: クリックエフェクトを追加しよう

余裕があれば `onclick` に以下を追記してみよう。

```js
clickBtn.onclick = function (e) {
	money += clickPower;

	// クリックした場所に数字を出す演出
	showParticle(e.clientX, e.clientY, "+" + clickPower);

	// ボタンをボヨンとさせる
	clickBtn.style.transform = "scale(0.9)";
	setTimeout(() => {
		clickBtn.style.transform = "scale(1)";
	}, 100);

	updateDisplay();
};

// クリック時の数字演出
function showParticle(x, y, text) {
	const el = document.createElement("div");
	el.className = "particle";
	el.innerText = text;
	el.style.left = x + "px";
	el.style.top = y + "px";
	el.style.color = "#333";
	document.body.appendChild(el);

	setTimeout(() => {
		el.remove();
	}, 1000);
}
```
