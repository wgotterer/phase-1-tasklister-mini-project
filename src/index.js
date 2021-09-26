document.addEventListener("DOMContentLoaded", () => {
  
  let form = document.querySelector("form")

  ////Makes the drop down menu
  let menu = document.createElement("SELECT")
  let priority = ["Priority Level", "High", "Medium", "Low"];
  for(let importance of priority){
  let option = document.createElement("option")
  option.value = importance
  option.textContent = `${importance}`
  menu.appendChild(option)
  }
  
  form.appendChild(menu)


 



 /////listens for the submission of new task
  form.addEventListener("submit", function(e) {
    e.preventDefault() /// prevents url change when submit is clicked
    let importance = form.querySelector("select").value
    buildToDo(e.target.children[1].value, importance) ///grabs ahold of the second child in form
    form.reset() ///resets form after funcion runs
    
  })
 
  

});

 

////makes to do list.
function buildToDo(todo, importance){

    let li = document.createElement("li")
    let btn = document.createElement("button")
    btn.addEventListener("click", handleDelete)
    btn.textContent = "x"
    li.textContent = `${todo} `
    li.appendChild(btn)
    document.querySelector("#tasks").appendChild(li)

    if(importance === "High"){ /// turn priorities different colrs
      li.style.color = "red";
    }if(importance === "Medium"){
      li.style.color = "pink";
    }if(importance === "Low"){
      li.style.color = "blue";
    }

    

}

function handleDelete(e){
  
  e.target.parentNode.remove()
}

