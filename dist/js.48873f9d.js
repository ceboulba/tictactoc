parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"mahc":[function(require,module,exports) {
var n=document.querySelectorAll("td"),e=1,i="😍",r="😁",t=!1;function T(e){e.target.id,e.target.innerHTML;n[0].innerHTML===n[1].innerHTML&&n[0].innerHTML===n[2].innerHTML&&""!==n[0].innerHTML&&""!==n[1]&&""!==n[2]?setTimeout(function(){alert("".concat(n[0].innerHTML," WIN !")),L()},100):n[3].innerHTML===n[4].innerHTML&&n[3].innerHTML===n[5].innerHTML&&""!==n[3].innerHTML&&""!==n[4].innerHTML&&""!==n[5].innerHTML?setTimeout(function(){alert("".concat(n[3].innerHTML," WIN !")),L()},100):n[6].innerHTML===n[7].innerHTML&&n[6].innerHTML===n[8].innerHTML&&""!==n[6].innerHTML&&""!==n[7].innerHTML&&""!==n[8].innerHTML?setTimeout(function(){alert("".concat(n[6].innerHTML," WIN !")),L()},100):n[0].innerHTML===n[3].innerHTML&&n[0].innerHTML===n[6].innerHTML&&""!==n[0].innerHTML&&""!==n[3].innerHTML&&""!==n[6].innerHTML?setTimeout(function(){alert("".concat(n[0].innerHTML," WIN !")),L()},100):n[1].innerHTML===n[4].innerHTML&&n[1].innerHTML===n[7].innerHTML&&""!==n[1].innerHTML&&""!==n[4].innerHTML&&""!==n[7].innerHTML?setTimeout(function(){alert("".concat(n[1].innerHTML," WIN !")),L()},100):n[2].innerHTML===n[5].innerHTML&&n[2].innerHTML===n[8].innerHTML&&""!==n[2].innerHTML&&""!==n[5].innerHTML&&""!==n[8].innerHTML?setTimeout(function(){alert("".concat(n[2].innerHTML," WIN !")),L()},100):n[0].innerHTML===n[4].innerHTML&&n[0].innerHTML===n[8].innerHTML&&""!==n[0].innerHTM&&""!==n[4].innerHTML&&""!==n[8].innerHTML?setTimeout(function(){alert("".concat(n[0].innerHTML," WIN !")),L()},150):n[2].innerHTML===n[4].innerHTML&&n[2].innerHTML===n[6].innerHTML&&""!==n[2].innerHTM&&""!==n[4].innerHTML&&""!==n[6].innerHTML?setTimeout(function(){alert("".concat(n[0].innerHTML," WIN !")),L()},150):console.log("tryAgain")}function L(){n.forEach(function(n){return n.innerHTML=""})}document.getElementById("reset").addEventListener("click",L),n.forEach(function(n){return n.addEventListener("click",function(n){n.target.classList.add("is-selected"),e%2==0&&0===n.target.innerHTML.length?(n.target.innerHTML=i,e++):e%2!=0&&0===n.target.innerHTML.length?(n.target.innerHTML=r,e++):alert("Impossible"),T(n)})});
},{}]},{},["mahc"], null)
//# sourceMappingURL=/js.48873f9d.map