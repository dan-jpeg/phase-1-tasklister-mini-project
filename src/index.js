document.addEventListener("DOMContentLoaded", () => {
  



const toDoForm = document.querySelector('form')
  toDoForm.addEventListener('submit', (e) => {
    e.preventDefault()
    handleInput(e.target[0].value)
    toDoForm.reset()
  })
});

function handleInput(todo) {
  let p = document.createElement('p')
  p.textContent = `${todo}`
  let btn = document.createElement('button')
    btn.addEventListener('click', deleteBtn)
    btn.textContent = 'X'
    p.appendChild(btn)
    document.querySelector('#list').appendChild(p)
}




function deleteBtn(e) {
  e.target.parentNode.remove()
}