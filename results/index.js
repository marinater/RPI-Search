const query = window.location.href

const searchBarElement = document.getElementById('d1')
const totalResultsCountElement = document.getElementById('total-result-count')
const resultsPerPageElement = document.getElementById('results-per-page')
const resultsContainerElement = document.getElementById(
	'search-results-container'
)
const pageNumberElement = document.getElementById('total-pages-count')
const searchQueryDisplayElement = document.getElementById(
	'search-query-display'
)

searchBarElement.value = ''
totalResultsCountElement.innerText = '10'
resultsPerPageElement.value = '10'
pageNumberElement.innerText = '10'
searchQueryDisplayElement.innerText = '10asda'

const clearResults = () => {
	resultsContainerElement.innerHTML = ''
}

const addResult = (url, title) => {
	// const resultDiv = document.createElement('div')
	// resultDiv.innerHTML
}
