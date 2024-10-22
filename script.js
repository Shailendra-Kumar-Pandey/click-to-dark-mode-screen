let newBtn = document.createElement("button");
newBtn.innerText =("--Click me !--");
let body = document.querySelector("body")
body.append(newBtn);
let mode = "light";
newBtn.addEventListener("click",()=>{
    console.log("click my property by number");
    if(mode === "light" ){
        mode = "dark"
        console.log(mode);
    body.style.backgroundColor = "black";
    newBtn.style.backgroundColor = "#333";
    newBtn.style.color ="white";
    }else if(mode === "dark" ){
        mode = "light"
        console.log("light");
        body.style.backgroundColor = "white";``
    }
})
