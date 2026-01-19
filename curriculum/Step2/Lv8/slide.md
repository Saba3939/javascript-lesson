---
marp: true
theme: default
paginate: true
---

# Step 2 Lv.8
## スタイルの動的操作

---

## 目標

**ゲームの演出（フィードバック）を作れるようになろう！**

---

## 1. JSで見た目を変える

Lv.1ではHTMLに直接 `style` を書きましたが、JavaScriptを使えば「後から」見た目を変えることができます。
例えば、「スコアが1000を超えたら文字を赤くする」といった演出ができます。

---

### 書き方のルール

`要素.style.プロパティ名 = "値"` という形で書きます。

```javascript
let title = document.getElementById("title");

// 文字の色を赤にする
title.style.color = "red";

// 文字の大きさを50pxにする
title.style.fontSize = "50px";
```

> **注意点**: CSSでは `font-size` のようにハイフンを使いますが、JSでは `fontSize` のように **キャメルケース（大文字区切り）** になります。
> - `background-color` → `backgroundColor`
> - `margin-top` → `marginTop`

---

## やってみよう！

次の条件を満たすプログラムを書いてみましょう。

1. **HTML**: `id="box"` をつけた `div` を作る（中身は適当な文字）。
2. **JS**: `box` 要素を取得する。
3. **JS**: `box` の背景色（background-color）を好きな色に変える。
4. **JS**: `box` の文字色（color）を白（white）に変える。

---

### 解答例

**HTML**
```html
<div id="box">色の変わる箱</div>
```

**JavaScript**
```javascript
let box = document.getElementById("box");

// 背景を青にする
// background-color ではなく backgroundColor と書く！
box.style.backgroundColor = "blue";

// 文字を白にする
box.style.color = "white";
```

---

## クリア条件

- [ ] `element.style` を使ってスタイルを変更できた。
- [ ] CSSのプロパティ名（ハイフン）をJSの書き方（キャメルケース）に変換できた。
- [ ] **「JSを使えば、CSSで定義した見た目を後から強制的に変更できる」** ことを理解した。
