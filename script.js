var cookies =300;
var upgrades= 1;
var cookiesMultiplied = 1;
var areUpgradesUpgrading= false;
var money=5;
var price_of_upgrades= 10;

document.getElementById("foods").addEventListener("click",makeCookies);
document.getElementById("fruit").addEventListener("click",buyUpgrades);
document.getElementById("crumble").addEventListener("click", changeToMoney);

function makeCookies() {
    cookies= cookies + 1;
    
    document.getElementById("no_of_cookies").innerHTML = cookies;
}

function upgradesBuyCookies(){
cookies = cookies + (upgrades * cookiesMultiplied);
document.getElementById("no_of_cookies").innerHTML= cookies;
}

function buyUpgrades(){
    if(money>= price_of_upgrades) {
money = money - price_of_upgrades;
     
 upgrades= upgrades +1;
 cost_of_upgrades = cost_of_upgrades * 2.0
 if (areUpgradesUpgrading==false){
    areUpgradesUpgrading=true;
    setInterval(function() {
        upgradesBuyCookies()
    }, 10000)
 }
 document.getElementById("no_of_upgrades").innerHTML =upgrades;
 document.getElementById("no_of_money").innerHTML = money;
 document.getElementById("pow").innerHTML = price_of_upgrade;
}
}

function changeToMoney() {
    if(parseInt(cookies/10,10)*10>=10) {
        var cookiesToRemove= parseInt(cookies /10, 10) * 10;
        cookies= cookies- cookiesToRemove;
        money = money + (cookiesToRemove/ 10);

        document.getElementById("no_of_cookies").innerHTML = cookies;
        document.getElementById("no_of_money").innerHTML = money;

    }
}