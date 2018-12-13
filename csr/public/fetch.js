const getData = (url) => {
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
}

window.onload = () => {
  getData('/books')
    .then(addBooksToDOM)
}

const addBooksToDOM = booksArray => {
  const listNode = document.getElementById("list")
  booksArray.forEach(book => {
    const itemNode = document.createElement('li')
    itemNode.innerText = book.name
    itemNode.classList.add("ph3", "pv2", "bb", "b--light-silver")
    listNode.appendChild(itemNode)
  })
}
