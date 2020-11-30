const search = document.getElementById('d1')
const submit = document.getElementById('d2')

search.addEventListener('keyup', (event) => {
	event.preventDefault()
	if (search.value && event.keyCode === 13) {
		submit.focus()
		submit.click()
	}
})

setTimeout(() => {
	submit.disabled = !search.value
}, 0)

search.oninput = () => {
	submit.disabled = !search.value
}

submit.onclick = () => {
	if (search.value)
		window.location.href = '../results/?search=' + search.value
}
