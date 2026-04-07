# Mission C: セーブ機能をつける

**難しさ**: ★★★
**変更ファイル**: `index.html` / `script.js`

---

## 今のゲームの問題点

今の状態でページをリロードすると、スコアもアイテムの所持数もリセットされる。

ブラウザには **`localStorage`** という「データをブラウザに保存する仕組み」がある。
これを使うと、リロードしてもデータが残るようになる。

---

## localStorage の基本

```js
// データを保存する
localStorage.setItem("キー名", "値");

// データを読み込む
const value = localStorage.getItem("キー名");

// データを削除する
localStorage.removeItem("キー名");
```

数字やオブジェクトを保存するには、**文字列に変換**してから保存する必要がある。
`JSON.stringify` と `JSON.parse` を使う。

```js
// オブジェクトを保存する
const data = { money: 1000, clickPower: 5 };
localStorage.setItem("saveData", JSON.stringify(data));

// 保存したオブジェクトを読み込む
const loaded = JSON.parse(localStorage.getItem("saveData"));
console.log(loaded.money); // 1000
```

---

## Step 1: セーブ関数を作る

`script.js` の末尾（`initShop();` の前）に追加しよう。

```js
// ------------------------------------------
//  セーブ・ロード機能
// ------------------------------------------

// ゲームデータを保存する
function saveGame() {
    const saveData = {
        money: money,
        clickPower: clickPower,
        autoMoneyPerSec: autoMoneyPerSec,
        items: items.map(item => ({
            id: item.id,
            price: item.price,
            power: item.power,
            count: item.count,
        })),
    };
    localStorage.setItem("clickerSave", JSON.stringify(saveData));
    alert("セーブしました！");
}
```

---

## Step 2: ロード関数を作る

Step 1 のすぐ下に追加しよう。

```js
// ゲームデータを読み込む
function loadGame() {
    const raw = localStorage.getItem("clickerSave");
    if (!raw) return; // セーブデータがなければ何もしない

    const saveData = JSON.parse(raw);

    // 各変数に読み込む
    money = saveData.money;
    clickPower = saveData.clickPower;
    autoMoneyPerSec = saveData.autoMoneyPerSec;

    // アイテムの状態を復元する
    saveData.items.forEach(savedItem => {
        const item = items.find(i => i.id === savedItem.id);
        if (item) {
            item.price = savedItem.price;
            item.power = savedItem.power;
            item.count = savedItem.count;
        }
    });
}
```

---

## Step 3: ゲーム開始時にロードする

`script.js` の末尾の初期化部分を変更しよう。

```js
// 変更前
initShop();
updateDisplay();

// 変更後
loadGame();      // ← セーブデータを読み込む
initShop();
updateDisplay();
```

これでリロードしても保存データがあれば自動で読み込まれる。

---

## Step 4: セーブボタンを追加する

`index.html` の `.game-area` の中（`#clickBtn` の下）にボタンを追加しよう。

```html
<div class="game-area">
    <div class="score-container">
        <div id="score">0</div>
        <div class="unit">円</div>
        <div id="sps">秒間: 0 円</div>
    </div>
    <button id="clickBtn">🍙</button>
    <!-- ↓ セーブボタンを追加 -->
    <button id="saveBtn" onclick="saveGame()">💾 セーブ</button>
</div>
```

`style.css` にボタンのスタイルも追加しよう。

```css
#saveBtn {
    margin-top: 16px;
    padding: 8px 20px;
    font-size: 14px;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 6px;
    background-color: #fff;
}

#saveBtn:hover {
    background-color: #f0f0f0;
}
```

---

## 動作確認

1. ゲームを遊んでお金を増やす
2. 「セーブ」ボタンを押す → 「セーブしました！」と表示される
3. ページをリロードする
4. スコアとアイテムの状態が復元されていることを確認する

---

## チェックリスト

- [ ] `saveGame()` 関数を追加した
- [ ] `loadGame()` 関数を追加した
- [ ] ゲーム開始時に `loadGame()` を呼ぶようにした
- [ ] `index.html` にセーブボタンを追加した
- [ ] セーブ → リロード → データが残っていることを確認した

---

## さらにアレンジしたい人へ

**オートセーブ**: `setInterval` を使って、一定時間ごとに自動でセーブしよう。

```js
// 30秒ごとに自動セーブ
setInterval(function() {
    saveGame();
}, 30000);
```

**リセットボタン**: セーブデータを消してゲームをリセットする機能を追加しよう。

```js
function resetGame() {
    if (confirm("本当にリセットしますか？")) {
        localStorage.removeItem("clickerSave");
        location.reload(); // ページをリロードしてリセット
    }
}
```

**セーブ日時の表示**: いつセーブしたかを保存・表示してみよう。

```js
// saveGame() 内に追記
saveData.savedAt = new Date().toLocaleString("ja-JP");
```
