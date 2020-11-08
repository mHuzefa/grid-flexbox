/* var banner = document.querySelector('#book-list')
console.log(banner.nodeName)
console.log(banner.hasChildNodes())
console.log(banner.cloneNode(true))
console.log(banner.cloneNode(false))
console.log(banner.children)
console.log(banner.children[0])
 */

/* var btns = document.querySelectorAll('#book-list .delete')
btns.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    const li = e.target.parentElement
    li.parentNode.removeChild(li)
  })
})
 */

document.addEventListener('DOMContentLoaded', () => {
  // Event Bubbling
  const list = document.querySelector('#book-list ul')
  list.addEventListener('click', (e) => {
    if (e.target.className == 'delete') {
      const li = e.target.parentElement
      list.removeChild(li)
    }
  })
  const addForm = document.forms['add-book'] //return the form with id of add-book
  addForm.addEventListener('submit', (e) => {
    e.preventDefault() // Prevent default behavior of form Button
    var value = addForm.querySelector('input[type = "text"]').value
    const liTag = document.createElement('li')
    const bookName = document.createElement('span')
    const deleteBtn = document.createElement('span')
    //add Books

    if (value != '') {
      //if the input box will be empty,books will not be added.
      //Function created to add books in the list
      bookName.textContent = value
      deleteBtn.textContent = 'Delete'
      //Add Class Names
      bookName.classList.add('name')
      deleteBtn.classList.add('delete')
      //Append and nest tags into each other
      liTag.appendChild(bookName)
      liTag.appendChild(deleteBtn)
      list.appendChild(liTag)
    }
  })

  // 'change' event Listner which will hide or show the books on basis of checkbox condition
  const hideBox = document.querySelector('#add-book #hide')
  hideBox.addEventListener('change', (e) => {
    if (hideBox.checked) {
      list.style.display = 'none'
    } else {
      list.style.display = 'inline'
    }
  })

  // Search Filter
  const searchBar = document.forms['search-books'].querySelector(
    'input[type = "text"]'
  )
  // Key up event listner
  searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase()
    const books = list.getElementsByTagName('li')
    Array.from(books).forEach((book) => {
      const title = book.firstElementChild.textContent
      if (title.toLocaleLowerCase().indexOf(term) != -1) {
        book.style.display = 'block'
      } else {
        book.style.display = 'none'
      }
    })
  })
  // tabed contents
  const tabs = document.querySelector('.tabs')
  const panels = document.querySelectorAll('.panel')
  tabs.addEventListener('click', (e) => {
    console.log(e.target.tagName)
    if (e.target.tagName == 'LI') {
      const targetPanel = document.querySelector(e.target.dataset.target)
      Array.from(panels).forEach((panel) => {
        if (panel == targetPanel) {
          panel.classList.add('active')
        } else {
          panel.classList.remove('active')
        }
      })
    }
  })
})
