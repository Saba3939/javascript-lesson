# Phase 4: 表示を更新する関数を作る

**ファイル**: `script.js`（Phase 3 を書き換え）

---

## 変更点

`scoreEl.innerText = money` の1行を **`updateDisplay()` 関数を呼ぶ形に変更**する。
そして `updateDisplay()` 関数と、末尾の初期化呼び出しを追加する。

---

## 書くコード（差分）

### onclick を変更

```js
// クリック処理
clickBtn.onclick = function () {
	money += clickPower;
	updateDisplay(); // ← scoreEl.innerText = money; から変更
};
```

### 関数を追加（末尾に追記）

```js
// 画面更新関数
function updateDisplay() {
	scoreEl.innerText = money.toLocaleString(); // 3桁区切り
	spsEl.innerText = "秒間: " + autoMoneyPerSec + " 円";
}

// ゲーム開始
updateDisplay();
```

---

## ポイント

- `money.toLocaleString()` で `1000` → `1,000` のように3桁区切りで表示できる
- 関数にまとめておくと、後でショップ購入後など「色々な場所から画面を更新したい」ときに `updateDisplay()` を呼ぶだけで済む
- 末尾の `updateDisplay()` はページを開いた瞬間に初期表示するために呼ぶ
