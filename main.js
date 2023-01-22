let head = document.querySelector(".head");
let lang = document.querySelectorAll(".lang");
let title = document.querySelectorAll(".ts .title")
let title1 = document.querySelector(".t1")
let title2 = document.querySelector(".t2")
let title3 = document.querySelector(".t3")

let myreq = new XMLHttpRequest()
head.onclick = function() {
    lang.forEach((e)=>{
        e.classList.toggle("active")
    })
}
myreq.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        let languages = JSON.parse(this.responseText)
        toggle(languages);
    }
};
myreq.open("GET", "langs.json", true)
myreq.send();

function toggle(langs) {
    lang.forEach((e)=> {
        e.addEventListener("click", ()=> {
            title1.innerText = langs[e.dataset.count]["verb1"]
            title2.innerText = langs[e.dataset.count]["verb2"]
            title3.innerText = langs[e.dataset.count]["verb3"]
        })
    })
}