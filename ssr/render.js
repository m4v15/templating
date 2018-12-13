const makeBookList = (booksArray) => {
  let list = ``
  booksArray.forEach(book => {
    list += `<li class="ph3 pv2 bb b--light-silver">${book.name}</li>`
  })
  return list
}

const makeHTML = (bookList) => `
<!DOCTYPE html>
<html>

<head>
	<title>SOME BOOKS</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<!-- Custom Theme files -->
	<link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css" />
	<!-- //Custom Theme files -->
	<!-- web font -->
	<link href="//fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,700,700i" rel="stylesheet">
	<!-- //web font -->
</head>

<body>
	<h1 class="f4 bold center mw5">Books</h1>
	<ul id="list" class="list pl0 ml0 center mw5 ba b--light-silver br3">
${bookList}
	</ul>
</body>

</script>

</html>`

module.exports {
  makeBookList,
    makeHTML
}