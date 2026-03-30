// ゲームの状態管理変数
let money = 0;
let clickPower = 1;
let autoMoneyPerSec = 0;

// アイテムデータ
const items = [
	{ id: "cursor",  name: "強化カーソル",     price: 15,   power: 1,   isAuto: false, count: 0 },
	{ id: "grandma", name: "優しいおばあちゃん", price: 100,  power: 5,   isAuto: true,  count: 0 },
	{ id: "farm",    name: "おにぎり工場",      price: 500,  power: 20,  isAuto: true,  count: 0 },
	{ id: "mine",    name: "具材鉱山",          price: 2000, power: 100, isAuto: true,  count: 0 },
];

// HTMLの要素を取得
const scoreEl = document.getElementById("score");
const spsEl = document.getElementById("sps");
const clickBtn = document.getElementById("clickBtn");
const shopContainer = document.getElementById("shopContainer");

// クリック処理
clickBtn.onclick = function () {
	money += clickPower;
	updateDisplay();
};

// ショップのアイテムリストを画面に生成する
function initShop() {
	items.forEach((item, index) => {
		const btn = document.createElement("div");
		btn.className = "shop-item";
		btn.id = "item-" + index;

		btn.innerHTML = `
			<div class="item-info">
				<span class="item-name">${item.name}</span>
				<span class="item-cost">${item.price}円</span>
			</div>
			<div class="item-count" id="count-${index}">0</div>
		`;

		btn.onclick = function () {
			buyItem(index);
		};

		shopContainer.appendChild(btn);
	});
}

// 購入処理
function buyItem(index) {
	const item = items[index];

	if (money >= item.price) {
		money -= item.price;
		item.count++;
		item.price = Math.floor(item.price * 1.2); // 次の値段を1.2倍に

		if (item.isAuto) {
			autoMoneyPerSec += item.power;
		} else {
			clickPower += item.power;
		}

		updateDisplay();
		updateShopUI();
	}
}

// 画面更新関数
function updateDisplay() {
	scoreEl.innerText = money.toLocaleString();
	spsEl.innerText = "秒間: " + autoMoneyPerSec + " 円";
	updateShopUI();
}

// ショップボタンの見た目を更新（買えるか/買えないかの反映）
function updateShopUI() {
	items.forEach((item, index) => {
		const btn = document.getElementById("item-" + index);
		const countEl = document.getElementById("count-" + index);

		btn.querySelector(".item-cost").innerText = item.price.toLocaleString() + "円";
		countEl.innerText = item.count;

		if (money >= item.price) {
			btn.classList.remove("disabled");
		} else {
			btn.classList.add("disabled");
		}
	});
}

// ゲーム開始
initShop();
updateDisplay();
