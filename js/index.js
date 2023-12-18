// http://localhost:3000/monsters/?_limit=50&_page=1

let pageCount = 1
let button = document.getElementById('forward')
button.addEventListener('click',function (){
  pageCount++;
  console.log(pageCount)
} )



fetch(`http://localhost:3000/monsters/?_limit=50&_page=${pageCount}`)
.then(response => response.json())
.then(data => {
  console.log(data)
  // renderMonster(data[0])
  for (let monster of data) {
    console.log(monster);
    renderMonster(monster)
    
  }
})
const renderMonster = (monsterObject) => {
  let monsterContainer = document.getElementById('monster-container');
  let h = document.createElement('h3')
  h.textContent = monsterObject.name

  let pAge = document.createElement('p')
  pAge.textContent = monsterObject.age

  let pDes = document.createElement('p')
  pDes.textContent = monsterObject.description

  monsterContainer.append(h, pAge, pDes)
  
}

  let formContainer = document.getElementById("create-monster")
  let form = document.createElement('form')
  
  let inputName = document.createElement('input')
  inputName.type = "text"
  inputName.placeholder = 'Name'
  
  let inputAge = document.createElement('input')
  inputAge.type = "text"
  inputAge.placeholder = 'Age'
  
  let inputDes = document.createElement('input')
  inputDes.type = "text"
  inputDes.placeholder = 'Description'
  
  
  let submitButton = document.createElement('input')
  submitButton.type = "submit"

  form.append(inputName, inputAge, inputDes, submitButton)
  formContainer.append(form)
  inputName.style.backgroundColor = "Grey"

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let newMonster = {
      name: inputName.value,
      age: inputAge.value,
      description: inputDes.value
      
    }
    console.log(newMonster)
    renderMonster(newMonster,alert)
    alert("It has been submitted to the end of your list")
    form.reset()
  
  })
  





// let sully = {
//   name: 'Sully',
//   age: '12',
//   describtion: 'stupid'

// }
// renderMonster(sully)