
let input = document.querySelector("#input")
let task_list = document.querySelector("#task_list")
let btn = document.querySelector("#btn")
let btn2 = document.querySelector("#btn2")

btn.addEventListener("click", () => {
    let val = input.value;
    if (val === "") {
        alert("Enter The Task")
    }

    let a = document.createElement("li")
    a.classList.add("list")


    let b = document.createElement("button")
    b.classList.add("btn3")
    b.style.backgroundColor = "white"
    b.innerHTML = "❌"
    b.style.backgroundColor = "  rgba(240, 6, 6, 0.84)"
    b.style.marginLeft = "20px"
    b.style.fontSize = "20px"

    b.addEventListener("click",()=>{
        alert("Task Will Delete Permanently.....")
        a.remove();
        b.remove();
    })

    a.innerHTML = val ;

    task_list.append(a)
    a.appendChild(b)
    // task_list.append(b)
    input.value = "";
})

btn2.addEventListener("click", () => {
    task_list.innerHTML = "";
})

