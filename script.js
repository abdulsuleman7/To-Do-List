
console.log("WelCome to  javaScript.!")

// tags of html storing in the variable using the DOM()
let input = document.querySelector("#input")
let task_list = document.querySelector("#task_list")
let btn = document.querySelector("#btn")
let btn2 = document.querySelector("#btn2")

// click event on the button adding the task..
btn.addEventListener("click", () => {
    let val = input.value;
    if (val === "") {
        alert("Enter The Task")
    }


    
    // list is created and the task is stored in this list
    let a = document.createElement("li")
    a.classList.add("list")

// the new button 3  is created for the removing the specific task from the list and some styles to the button 3
    let b = document.createElement("button")
    b.classList.add("btn3")
    b.style.backgroundColor = "white"
    b.innerHTML = "❌"
    b.style.backgroundColor = "  rgba(240, 6, 6, 0.84)"
    b.style.marginLeft = "20px"
    b.style.fontSize = "20px"

    // the button 3 will functions on clicking , remove the task 
    b.addEventListener("click",()=>{
        alert("Task Will Delete Permanently.....")
        a.remove();
        b.remove();
    })
//  the task will added in the list..
    a.innerHTML = val ;

    
    task_list.append(a)
    a.appendChild(b)
    // task_list.append(b)
    input.value = "";
})


// the button 2 works for removing the all task from the from the list..
btn2.addEventListener("click", () => {
    task_list.innerHTML = "";
})

