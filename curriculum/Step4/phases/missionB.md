# Mission B: アイテムを追加する

**難しさ**: ★★☆
**変更ファイル**: `script.js`

---

## 仕組みのおさらい

`script.js` の先頭にある `items` 配列がショップに表示されるアイテムの一覧。

```js
const items = [
    { id: "cursor", name: "強化カーソル", price: 15,   power: 1,   isAuto: false, count: 0 },
    { id: "grandma", name: "優しいおばあちゃん", price: 100,  power: 5,   isAuto: true,  count: 0 },
    { id: "farm",   name: "おにぎり工場",    price: 500,  power: 20,  isAuto: true,  count: 0 },
    { id: "mine",   name: "具材鉱山",       price: 2000, power: 100, isAuto: true,  count: 0 },
];
```

各アイテムのプロパティ:

| プロパティ | 意味 |
|---|---|
| `id` | アイテムの識別子（他と被らない名前にする） |
| `name` | ショップに表示される名前 |
| `price` | 最初の値段（買うたびに 1.2 倍になる） |
| `power` | 能力値（クリック強化 or 秒間自動生産） |
| `isAuto` | `true` = 自動生産、`false` = クリック強化 |
| `count` | 所持数（最初は必ず `0`） |

---

## アイテムを追加してみよう

配列の末尾（最後の `}` の後）に追加する。

```js
const items = [
    { id: "cursor",  name: "強化カーソル",       price: 15,    power: 1,    isAuto: false, count: 0 },
    { id: "grandma", name: "優しいおばあちゃん", price: 100,   power: 5,    isAuto: true,  count: 0 },
    { id: "farm",    name: "おにぎり工場",        price: 500,   power: 20,   isAuto: true,  count: 0 },
    { id: "mine",    name: "具材鉱山",            price: 2000,  power: 100,  isAuto: true,  count: 0 },
    // ↓ ここに追加！
    { id: "rocket",  name: "おにぎりロケット",    price: 10000, power: 500,  isAuto: true,  count: 0 },
];
```

追加したら画面をリロードして、ショップに新しいアイテムが出てくることを確認しよう。

---

## バランスの目安

アイテムを設計するときの参考に。

| 直前のアイテム | 新アイテムの price | 新アイテムの power |
|---|---|---|
| mine（2000円 / 100/s） | 8000〜20000 円 | 300〜1000 /s |

**基本的な比率**: 値段を 4〜10 倍にしたら、パワーも 4〜10 倍にするとバランスが取れる。

---

## クリック強化アイテムを追加したい場合

`isAuto: false` にすると、購入するたびにクリック1回で増える量（`clickPower`）が上がる。

```js
{ id: "glove", name: "鋼鉄の手袋", price: 8000, power: 50, isAuto: false, count: 0 },
```

この例では購入するたびに `clickPower += 50` される。

---

## チェックリスト

- [ ] `items` 配列に新しいアイテムを追加した
- [ ] `id` が他と被っていないことを確認した
- [ ] リロードして新しいアイテムがショップに表示された
- [ ] アイテムを購入して動作を確認した（能力が反映されているか）

---

## さらにアレンジしたい人へ

**複数追加する**: 2〜3個まとめて追加してみよう。アイテムが増えるほどゲームの深みが出る。

**Mission A と組み合わせる**: テーマを変えたなら、そのテーマに合ったアイテム名にしよう。

**ゲームバランスを調整する**: 既存のアイテムの `price` や `power` も変えて遊んでみよう。例えば全アイテムの値段を 10 分の 1 にするとサクサク進むゲームになる。
