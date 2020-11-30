let params = new URL(document.location).searchParams
let searchQueryString = params.get('search')
let pageNumber = params.get('page') || '1'
let displayPerPage = params.get('display') || '1'

const searchBarElement = document.getElementById('d1')
const totalResultsCountElement = document.getElementById('total-result-count')
const resultsPerPageElement = document.getElementById('results-per-page')
const resultsContainerElement = document.getElementById(
	'search-results-container'
)
const totalPageNumberElement = document.getElementById('total-pages-count')
const searchQueryDisplayElement = document.getElementById(
	'search-query-display'
)
const pageNumberElement = document.getElementById('page-number')
const previousButton = document.getElementById('previous')
const nextButton = document.getElementById('next')
const search = document.getElementById('d1')
const submit = document.getElementById('d2')

searchBarElement.value = ''

if (displayPerPage > -1 && displayPerPage < 4) {
	resultsPerPageElement.selectedIndex = parseInt(displayPerPage)
} else {
	resultsPerPageElement.selectedIndex = 1
}

resultsPerPageElement.onchange = () => {
	window.location.href = `../results/?search=${searchQueryString}&page=${pageNumber}&display=${resultsPerPageElement.selectedIndex}`
}

totalResultsCountElement.innerText = '10'
pageNumberElement.innerText = '10'
totalPageNumberElement.innerText = '10'
searchQueryDisplayElement.innerText = searchQueryString
pageNumberElement.value = pageNumber

pageNumberElement.onchange = () => {
	const newPage = pageNumberElement.value
	window.location.href = `../results/?search=${searchQueryString}&page=${newPage}&display=${displayPerPage}`
}

const clearResults = () => {
	resultsContainerElement.innerHTML = ''
}

const addResult = (url, title) => {
	// const resultDiv = document.createElement('div')
	// resultDiv.innerHTML
}

search.addEventListener('keyup', (event) => {
	event.preventDefault()
	if (search.value && event.keyCode === 13) {
		submit.focus()
		submit.click()
	}
})

search.oninput = () => {
	submit.disabled = !search.value
}

submit.onclick = () => {
	if (search.value)
		window.location.href = '../results/?search=' + search.value
}

setTimeout(() => {
	submit.disabled = !search.value
}, 0)

previousButton.onclick = () => {
	if (pageNumber > 1)
		window.location.href = `../results/?search=${searchQueryString}&page=${
			pageNumber - 1
		}&display=${displayPerPage}`
}

previousButton.disabled = pageNumber < 2
