function switchLang(lang){

document.querySelectorAll(".zh").forEach(e=>{
e.style.display = (lang === "zh") ? "block" : "none";
});

document.querySelectorAll(".zh-tw").forEach(e=>{
e.style.display = (lang === "zh-tw") ? "block" : "none";
});

document.querySelectorAll(".en").forEach(e=>{
e.style.display = (lang === "en") ? "block" : "none";
});
}
