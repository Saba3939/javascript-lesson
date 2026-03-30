---
marp: true
theme: kosyu
paginate: true
---

<!-- _class: lead -->

# Step 2 Lv.7
# DOM操作（HTML連携）

---

## 目標

プログラム（計算結果）を画面に反映できるようになろう！
**これが一番大事なステップです！**

---

<!-- _class: section-header -->

# DOM操作
## HTMLをJSから動かそう

---

## 1. DOM（ドム）操作ってなに？

JavaScriptからHTMLを操ることを「DOM操作」と言います。
「HTMLにある要素（タグ）を見つけて、中身を書き換える」ことができます。

### 要素を見つける（取得）
Lv.1でつけた `id` を使って、HTMLの要素を見つけます。

```javascript
// HTMLにある id="score" の要素を見つけて、scoreElement という箱に入れる
let scoreElement = document.getElementById("score");
```

---

### 中身を書き換える

見つけた要素の `innerText`（インナー・テキスト）という場所を書き換えると、画面の文字が変わります。

```javascript
// 画面の文字を "100" に変える
scoreElement.innerText = 100;
```

---

<!-- _class: section-header -->

# イベント
## クリックに反応させよう

---

## 2. イベント（クリックした時）

「ボタンが押された時」に何かをするには、HTML側に `onclick`（オン・クリック）を書きます。

```html
<!-- ボタンを押したら、addScore() という関数を実行してね -->
<button onclick="addScore()">クリック！</button>
```

```javascript
function addScore() {
    console.log("ボタンが押されました！");
}
```

---

<!-- _class: section-header -->

# やってみよう！
## 実際に手を動かしてみよう 🖊️

---

## やってみよう！

次の手順で、クリックすると数字が増えるボタンを作ってみましょう。

1. **HTML**: `id="score"` をつけた `div` と、`onclick="countUp()"` をつけた `button` を作る。
2. **JS**: 変数 `count` を作って `0` にする。
3. **JS**: `countUp` 関数を作る。
4. **JS**: 関数の中で、`count` を `1` 増やす。
5. **JS**: `document.getElementById` で `score` 要素を取得して、`innerText` を `count` の値で上書きする。

---

### 解答例

**HTML**
```html
<div id="score">0</div>
<button onclick="countUp()">増やす</button>
```

**JavaScript**
```javascript
let count = 0;

function countUp() {
    // 1. 計算する
    count += 1;
    // 2. 画面の要素を見つける
    let scoreEl = document.getElementById("score");
    // 3. 画面を書き換える
    scoreEl.innerText = count;
}
```

---

## クリア条件

- [ ] HTMLに `onclick` を書いた。
- [ ] JSで `getElementById` を使って要素を取得した。
- [ ] ボタンを押すと、画面の数字が増えるようになった。
- [ ] **「変数の数字が変わっても、innerText を更新しない限り画面は変わらない」** ことを理解した。
