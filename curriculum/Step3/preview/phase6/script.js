// ==========================================
//  Step 1 改造エリア: ここを変えるとチートできるよ！
// ==========================================

// ゲームの状態管理変数 (Step 2 Lv.2: 変数)
let money = 0; // 所持金
let clickPower = 1; // クリック1回で増える量 (ここを10000にすると...？)
let autoMoneyPerSec = 0; // 1秒間に自動で増える量

// アイテムデータ (Step 2 Lv.6: オブジェクトと配列)
// Step 1 改造: nameを変えたり、priceを0円にしたりしてみよう
const items = [
	{
		id: "cursor",
		name: "強化カーソル",
		price: 15,
		power: 1,
		isAuto: false,
		count: 0,
	},
	{
		id: "grandma",
		name: "優しいおばあちゃん",
		price: 100,
		power: 5,
		isAuto: true,
		count: 0,
	},
	{
		id: "farm",
		name: "おにぎり工場",
		price: 500,
		power: 20,
		isAuto: true,
		count: 0,
	},
	{
		id: "mine",
		name: "具材鉱山",
		price: 2000,
		power: 100,
		isAuto: true,
		count: 0,
	},
];

// ==========================================
//  ここから下は Step 3 で自分で作るロジック部分
// ==========================================

// HTMLの要素を取得 (Step 2 Lv.4: DOM操作)
const scoreEl = document.getElementById("score");
const spsEl = document.getElementById("sps");
const clickBtn = document.getElementById("clickBtn");
const shopContainer = document.getElementById("shopContainer");

// ------------------------------------------
//  メイン機能: クリック処理 (Step 2 Lv.3: 関数)
// ------------------------------------------
clickBtn.onclick = function (e) {
	// お金を増やす
	money += clickPower;

	// 画面を更新する
	updateDisplay();

	// (Step 3 応用) クリックした場所に数字を出す演出
	showParticle(e.clientX, e.clientY, "+" + clickPower);

	// (Step 3 応用) ボタンをボヨンとさせるアニメーション
	// JSでアニメーションクラスをつけ外しするテクニック
	clickBtn.style.transform = "scale(0.9)";
	setTimeout(() => {
		clickBtn.style.transform = "scale(1)";
	}, 100);
};

// ------------------------------------------
//  アイテム購入機能
// ------------------------------------------
// アイテムリストを画面に生成する (初期化処理)
function initShop() {
	// items配列をループしてボタンを作る (Step 2 Lv.6: 配列ループ)
	items.forEach((item, index) => {
		// ボタンのHTMLを作る
		const btn = document.createElement("div");
		btn.className = "shop-item";
		btn.id = "item-" + index; // 後で操作するためにIDをつける

		// ボタンの中身 (HTML文字列)
		btn.innerHTML = `
                    <div class="item-info">
                        <span class="item-name">${item.name}</span>
                        <span class="item-cost">${item.price}円</span>
                    </div>
                    <div class="item-count" id="count-${index}">0</div>
                `;

		// ボタンを押した時の処理
		btn.onclick = function () {
			buyItem(index);
		};

		// ショップエリアに追加
		shopContainer.appendChild(btn);
	});
}

// 購入処理
function buyItem(index) {
	const item = items[index];

	// お金が足りるかチェック (Step 2 Lv.5: 条件分岐)
	if (money >= item.price) {
		money -= item.price; // お金を払う
		item.count++; // 個数を増やす

		// 次の値段を高くする (1.2倍にする)
		item.price = Math.floor(item.price * 1.2);

		// 能力を反映させる
		if (item.isAuto) {
			// 自動生産アイテムの場合
			autoMoneyPerSec += item.power;
		} else {
			// クリック強化アイテムの場合
			clickPower += item.power;
		}

		updateDisplay(); // 画面更新
		updateShopUI(); // ショップの表示更新
	} else {
		console.log("お金が足りません！");
	}
}

// ------------------------------------------
//  自動化機能 (Step 3 Phase 3: タイマー)
// ------------------------------------------
// 1秒ごとに実行されるタイマー
setInterval(function () {
	if (autoMoneyPerSec > 0) {
		money += autoMoneyPerSec;
		updateDisplay();

		// (Step 3 応用) 自動でおにぎりが震えるなどの演出を入れても良い
	}
}, 1000);

// ------------------------------------------
//  画面更新機能 (Step 2 Lv.7: 演出)
// ------------------------------------------
function updateDisplay() {
	scoreEl.innerText = money.toLocaleString(); // 3桁区切りにする
	spsEl.innerText = "秒間: " + autoMoneyPerSec + " 円";
	updateShopUI(); // お金が変わったのでショップのボタンの状態も確認
}

// ショップボタンの見た目更新 (買えるやつは明るく、買えないやつは暗く)
function updateShopUI() {
	items.forEach((item, index) => {
		const btn = document.getElementById("item-" + index);
		const countEl = document.getElementById("count-" + index);

		// 個数と値段の表示更新
		btn.querySelector(".item-cost").innerText =
			item.price.toLocaleString() + "円";
		countEl.innerText = item.count;

		// 買えるかどうかの判定 (CSSクラスの付け替え)
		if (money >= item.price) {
			btn.classList.remove("disabled"); // 買える
		} else {
			btn.classList.add("disabled"); // 買えない
		}
	});
}

// (おまけ) クリック時の数字演出
function showParticle(x, y, text) {
	const el = document.createElement("div");
	el.className = "particle";
	el.innerText = text;
	el.style.left = x + "px";
	el.style.top = y + "px";
	el.style.color = "#333";
	document.body.appendChild(el);

	// 1秒後に消す
	setTimeout(() => {
		el.remove();
	}, 1000);
}

// ゲーム開始！
initShop();
updateDisplay();
