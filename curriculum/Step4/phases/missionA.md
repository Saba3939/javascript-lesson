# Mission A: ゲームのテーマを変える

**難しさ**: ★☆☆
**変更ファイル**: `index.html` / `style.css` / `script.js`

---

## Step 1: クリックする絵文字を変える

`index.html` を開いて `#clickBtn` の中身を変えよう。

```html
<!-- 変更前 -->
<button id="clickBtn">🍙</button>

<!-- 変更後（例: コーヒーにする場合） -->
<button id="clickBtn">☕</button>
```

好きな絵文字に変えてOK。絵文字は [emojipedia.org](https://emojipedia.org) で探せる。

---

## Step 2: スコアの単位を変える

`index.html` の `.unit` を変えよう。

```html
<!-- 変更前 -->
<div class="unit">円</div>

<!-- 変更後（例: カフェなら「杯」） -->
<div class="unit">杯</div>
```

`script.js` の `spsEl.innerText` の表示も変えると統一感が出る。

```js
// 変更前
spsEl.innerText = "秒間: " + autoMoneyPerSec + " 円";

// 変更後（例）
spsEl.innerText = "秒間: " + autoMoneyPerSec + " 杯";
```

---

## Step 3: アイテムの名前を変える

`script.js` の `items` 配列の `name` を変えよう。

```js
// 変更前（おにぎり屋テーマ）
const items = [
    { id: "cursor", name: "強化カーソル", price: 15, power: 1, isAuto: false, count: 0 },
    { id: "grandma", name: "優しいおばあちゃん", price: 100, power: 5, isAuto: true, count: 0 },
    { id: "farm", name: "おにぎり工場", price: 500, power: 20, isAuto: true, count: 0 },
    { id: "mine", name: "具材鉱山", price: 2000, power: 100, isAuto: true, count: 0 },
];

// 変更後（例: カフェテーマ）
const items = [
    { id: "cursor", name: "高級スプーン", price: 15, power: 1, isAuto: false, count: 0 },
    { id: "grandma", name: "バリスタ見習い", price: 100, power: 5, isAuto: true, count: 0 },
    { id: "farm", name: "コーヒーメーカー", price: 500, power: 20, isAuto: true, count: 0 },
    { id: "mine", name: "コーヒー農園", price: 2000, power: 100, isAuto: true, count: 0 },
];
```

---

## Step 4: 色を変える（任意）

`style.css` を変えて雰囲気を変えよう。

```css
/* 背景色を変える */
body {
    background-color: #fff8e1; /* 例: 温かみのある黄色系 */
}

/* ゲームエリアの背景 */
.game-area {
    background-color: #fffde7;
}

/* ショップエリアの背景 */
.shop-area {
    background-color: #fff9c4;
}

/* スコアの色 */
#score {
    color: #5d4037; /* 例: ブラウン系 */
}

/* アイテム値段の色 */
.item-cost {
    color: #795548; /* 例: ブラウン */
}
```

色は [coolors.co](https://coolors.co) や [paletton.com](https://paletton.com) で探せる。

---

## チェックリスト

- [ ] クリックボタンの絵文字を変えた
- [ ] スコアの単位を変えた
- [ ] アイテム名を全部変えた
- [ ] 色を変えてみた（任意）

---

## さらにアレンジしたい人へ

- ショップのタイトル（「ショップ」という文字）も変えてみよう
- `index.html` の `<title>` タグを変えてブラウザのタブ名も変えてみよう
- スコア表示の上に画像や絵文字でタイトルを追加してみよう
