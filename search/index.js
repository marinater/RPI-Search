const search = document.getElementById('d1')
const submit = document.getElementById('d2')

search.addEventListener('keyup', (event) => {
	event.preventDefault()
	if (event.keyCode === 13) {
		submit.focus()
		submit.click()
	}
})

submit.onclick = () => {
	window.location.href = '../results/?search=' + 'asdf'
}
