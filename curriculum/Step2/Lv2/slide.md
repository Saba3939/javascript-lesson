---
marp: true
theme: default
paginate: true
---

# Step 2 Lv.2
## 変数と演算

---

## 目標

**ゲーム内の数字（スコア）を管理できるようになろう！**

---

## 1. 変数（Variable）ってなに？

変数（へんすう）は、データをしまっておく**「箱」**のことです。
ゲームのスコアや、プレイヤーの名前などを覚えておくために使います。

---

### 変数の作り方

JavaScriptでは `let`（レット）を使って箱を作ります。

```javascript
// 「score」という名前の箱を作って、0を入れる
let score = 0;

// 「playerName」という名前の箱を作って、"Kento"を入れる
let playerName = "Kento";
```

---

## 2. 計算（演算）

箱の中身は、計算して変えることができます。

```javascript
let apple = 100;

// 足し算（+）
apple = apple + 50; // 150になる

// 引き算（-）
apple = apple - 10; // 140になる
```

---

### 便利な書き方

「今の値に足す」という処理はよく使うので、短く書く方法があります。

```javascript
let money = 0;

// money = money + 1; と同じ意味
money += 1; 

// money = money + 100; と同じ意味
money += 100;
```

---

## 3. 確認してみよう（console.log）

プログラムが正しく動いているか確認するために、`console.log`（コンソール・ログ）を使います。
これを使うと、ブラウザの「検証ツール（コンソール）」に文字を表示できます。

```javascript
let count = 0;
count += 1;
console.log(count); // 1 と表示される
```

---

## やってみよう！

次の条件を満たすプログラムを書いてみましょう（HTMLの `<script>` タグの中に書きます）。

1. `score` という名前の変数を作って、`0` を入れる。
2. `score` に `10` を足す（再代入）。
3. `console.log` で `score` の中身を表示する。

---

### 解答例

```javascript
let score = 0;
score += 10;
console.log(score);
```

---

## クリア条件

- [ ] 変数を定義できた。
- [ ] 変数に数値を足して、結果を保存できた。
- [ ] コンソールに結果が表示された。
- [ ] **「`let a = 0` の `a` はただの名前（箱）であり、中身は変動する」** ことを理解した。
