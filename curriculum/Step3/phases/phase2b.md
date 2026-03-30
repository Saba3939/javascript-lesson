# Phase 2b: ショップ・ボタンのスタイル

**ファイル**: `style.css`（Phase 2a の続きに追記）

---

## 書くコード

```css
/* 右側：ショップエリア */
.shop-area {
	width: 350px;
	background-color: #f8f9fa;
	padding: 20px;
	overflow-y: auto;
}

.shop-title {
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 15px;
	border-bottom: 2px solid #ddd;
	padding-bottom: 10px;
}

/* アイテムボタン */
.shop-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: white;
	border: 1px solid #ccc;
	border-radius: 8px;
	padding: 10px;
	margin-bottom: 10px;
	cursor: pointer;
	transition: background-color 0.2s;
}

.shop-item:hover {
	background-color: #e9ecef;
}

.shop-item.disabled {
	opacity: 0.6;
	cursor: not-allowed;
	background-color: #eee;
}

.item-info {
	display: flex;
	flex-direction: column;
}
.item-name {
	font-weight: bold;
	font-size: 16px;
}
.item-cost {
	font-size: 14px;
	color: #e67e22;
}
.item-count {
	font-size: 24px;
	font-weight: bold;
	color: #bdc3c7;
}

/* クリック時のエフェクト用 */
.particle {
	position: absolute;
	font-weight: bold;
	pointer-events: none;
	animation: floatUp 1s ease-out forwards;
}
@keyframes floatUp {
	0% {
		transform: translateY(0);
		opacity: 1;
	}
	100% {
		transform: translateY(-50px);
		opacity: 0;
	}
}
```

---

## ポイント

- `.shop-item.disabled` はJSから `classList.add("disabled")` で付けるクラス（お金が足りないとき）
- `.particle` と `@keyframes floatUp` はPhase 6のエフェクト演出で使う（今は使わない）
- `overflow-y: auto` でアイテムが増えてもスクロールできるようにする
