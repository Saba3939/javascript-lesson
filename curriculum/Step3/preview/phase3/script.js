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
	scoreEl.innerText = money; // 直接画面に表示
};
