// ==UserScript==
// @name         AutoFire (spam pistol like crazy)
// @description  Shell Shockers Aimbot & ESP of the highest level. Best shellshock.io menu in 2025 with NO ADS! Many cheats such as Aimbot, PlayerESP, AmmoESP, Chams, Nametags, Join/Leave alerts, Chat Filter Bypass, AntiAFK, FOV Slider, Zooming, Player Stats, Auto Reload, Auto Unban and many more whilst having unsurpassed customisation options such as binding to any key, easily editable color scheme and themes - all on the fly!
// @author       Hydroflame521, enbyte, notfood, 1ust, OakSwingZZZ, Seq and de_Neuublue
// @namespace    https://github.com/Hydroflame522/StateFarmClient/
// @supportURL   https://github.com/Hydroflame522/StateFarmClient/-/issues/
// @license      GPL-3.0
// @run-at       document-start

// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_info
// @grant        GM_setClipboard
// @grant        GM_openInTab

// @grant        GM.setValue
// @grant        GM.getValue
// @grant        GM.deleteValue
// @grant        GM.listValues
// @grant        GM.info
// @grant        GM.setClipboard
// @grant        GM.openInTab

// @icon         https://sfc.best/raw/icons/StateFarmClientLogo384px.png

// @require      https://cdn.jsdelivr.net/npm/tweakpane@3.1.10/dist/tweakpane.min.js

// version naming:
    //3.#.#-pre[number] for development versions, increment for every commit (not full release) note: please increment it
    //3.#.#-release for release (in the unlikely event that happens)
// this ensures that each version of the script is counted as different

// @version      3.5.8

// @match        *://*.shellshock.io/*
// @match        *://*.algebra.best/*
// @match        *://*.algebra.monster/*
// @match        *://*.algebra.vip/*
// @match        *://*.biologyclass.club/*
// @match        *://*.combateggs.com/*
// @match        *://*.deadlyegg.com/*
// @match        *://*.deathegg.life/*
// @match        *://*.deathegg.world/*
// @match        *://*.eggbattle.com/*
// @match        *://*.eggboy.club/*
// @match        *://*.eggboy.me/*
// @match        *://*.eggboy.xyz/*
// @match        *://*.eggcombat.com/*
// @match        *://*.egg.dance/*
// @match        *://*.eggfacts.fun/*
// @match        *://*.egggames.best/*
// @match        *://*.egghead.institute/*
// @match        *://*.eggisthenewblack.com/*
// @match        *://*.eggsarecool.com/*
// @match        *://*.eggshock.com/*
// @match        *://*.eggshock.me/*
// @match        *://*.eggshock.net/*
// @match        *://*.eggshooter.best/*
// @match        *://*.eggshooter.com/*
// @match        *://*.eggwarfare.com/*
// @match        *://*.eggwars.io/*
// @match        *://*.geometry.best/*
// @match        *://*.geometry.monster/*
// @match        *://*.geometry.pw/*
// @match        *://*.geometry.report/*
// @match        *://*.hardboiled.life/*
// @match        *://*.hardshell.life/*
// @match        *://*.humanorganising.org/*
// @match        *://*.mathactivity.club/*
// @match        *://*.mathactivity.xyz/*
// @match        *://*.mathdrills.info/*
// @match        *://*.mathdrills.life/*
// @match        *://*.mathfun.rocks/*
// @match        *://*.mathgames.world/*
// @match        *://*.math.international/*
// @match        *://*.mathlete.fun/*
// @match        *://*.mathlete.pro/*
// @match        *://*.overeasy.club/*
// @match        *://*.risenegg.com/*
// @match        *://*.scrambled.tech/*
// @match        *://*.scrambled.today/*
// @match        *://*.scrambled.us/*
// @match        *://*.scrambled.world/*
// @match        *://*.shellgame.me/*
// @match        *://*.shellplay.live/*
// @match        *://*.shellshockers.best/*
// @match        *://*.shellshockers.ca/*
// @match        *://*.shellshockers.club/*
// @match        *://*.shellshockers.life/*
// @match        *://*.shellshockers.site/*
// @match	     *://*.shellshockers.today/*
// @match        *://*.shellshockers.us/*
// @match        *://*.shellshockers.website/*
// @match        *://*.shellshockers.wiki/*
// @match        *://*.shellshockers.world/*
// @match        *://*.shellshockers.xyz/*
// @match        *://*.shellshock.guru/*
// @match        *://*.shellsocks.com/*
// @match        *://*.softboiled.club/*
// @match        *://*.urbanegger.com/*
// @match        *://*.violentegg.club/*
// @match        *://*.violentegg.fun/*
// @match        *://*.yolk.best/*
// @match        *://*.yolk.life/*
// @match        *://*.yolk.monster/*
// @match        *://*.yolk.rocks/*
// @match        *://*.yolk.tech/*
// @match        *://*.yolk.quest/*
// @match        *://*.yolk.today/*
// @match        *://*.zygote.cafe/*
// @antifeature  membership
// @downloadURL  https://sfc.best/js/sf.user.js
// @updateURL    https://sfc.best/js/sf.meta.js
// ==/UserScript==
function reRunAutoFire() {
console.log("AutoFire: Script loaded");
let fireKey = JSON.parse(unsafeWindow.localStorage.controls).keyboard.game.fire.label.toLowerCase();
let dispatchInterval = null;
let patchInterval = setInterval(() => {
    if (unsafeWindow.canvas && unsafeWindow.extern.inGame) clearInterval(patchInterval);
    else return;
    if (fireKey === "mouse 0") {
        canvas.addEventListener('pointerdown', (e) => {
            if (!e.isTrusted) return; // Only respond to trusted events, aka not this one below
            dispatchInterval = setInterval(() => {
                console.log("AutoFire: Dispatching pointerdown event");
                unsafeWindow.canvas.dispatchEvent(new PointerEvent('pointerdown', {
                    bubbles: true,
                    cancelable: true,
                    composed: true,
                    pointerId: e.pointerId,
                    width: e.width,
                    height: e.height,
                    pressure: e.pressure,
                    tangentialPressure: e.tangentialPressure,
                    tiltX: e.tiltX,
                    tiltY: e.tiltY,
                    twist: e.twist,
                    pointerType: e.pointerType,
                    isPrimary: e.isPrimary
                }));
            }, 30);
        });
        canvas.addEventListener('pointerup', (e) => {
            clearInterval(dispatchInterval);
        });
    } else {
        document.addEventListener('keydown', (e) => {
            if (!e.isTrusted || e.repeat) return; // Only respond to trusted events, aka not this one below
            if (e.key.toLowerCase() === fireKey) {
                dispatchInterval = setInterval(() => {
                    console.log('dispatching keydown events');
                    let code = JSON.parse(unsafeWindow.localStorage.controls).keyboard.game.fire.code;
                    unsafeWindow.canvas.dispatchEvent(new Event('keydown', {
                        key: fireKey,
                        code
                    }));
                }, 30);
            }
        });
        document.addEventListener('keyup', (e) => {
            if (e.key.toLowerCase() === fireKey) {
                clearInterval(dispatchInterval);
            }
        });
    }
}, 1000);
}
reRunAutoFire();