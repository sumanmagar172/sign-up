function fun1() {
    let name = "sumanmagar";
    let first = document.getElementById("main");
    let next = document.getElementById("next");
    let input = document.getElementById("exampleInputEmail1").value;
    let miss = document.getElementById("err1");

    if(input == "") {
        alert("fill this field")
    // } else if (input.length <= "5") {
    //      err1.innerText = "fill above words"
    }
    else{
        if(name === input) {
            next.classList.remove("d-none");
            next.classList.add("d-block");
            main.classList.add("d-none");
        }else {
            err1.innerText = "incorrect"
            err1.style.color = "red"
        }
    }
}

function fun2() {
    let pass = "1230";
    let userpass = document.getElementById("password").value;
    let wron = document.getElementById(err2);

    if(userpass == "") {
        err2.innerText = "enter password";
        err2.style.color = "red";
    } else {
        if(pass === userpass){
            window.location.href = "https://sumanmagar172.github.io/Ecommerce-Website/";
        }else {
            err2.innerText = "incorrect";
        }
    }

}

function mode() {
    let first = document.getElementById("main");
    let next = document.getElementById("next");
    let body = document.querySelector("body");
    let toggel = document.getElementById("flexSwitchCheckDefault").checked;
    let but = document.getElementById("but");

    if(toggel){
        first.className = "container border border-1 border-dark text-light bg-primary rounded rounded-3 p-3 "
        next.className = "container border border-1 border-dark text-light bg-primary rounded rounded-3 p-3 d-none"
        body.className = "bg-dark"
        // but.className = "btn-warnign"
    } else {
        first.className = "container bg-light rounded rounded-3 p-3"
        // but.className = "btn-warning";
        body.className = "bg-light"
    }
}