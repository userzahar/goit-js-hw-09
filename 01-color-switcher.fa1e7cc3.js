!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),r=document.querySelector("button[data-stop]"),n=null;function o(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}r.setAttribute("disabled","true"),e.addEventListener("click",(function(u){r.removeAttribute("disabled"),n=setInterval((function(){o(),t.style.backgroundColor=o()}),1e3),e.setAttribute("disabled","true")})),r.addEventListener("click",(function(t){clearInterval(n),r.setAttribute("disabled","true"),e.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.fa1e7cc3.js.map