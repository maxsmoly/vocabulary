let root = document.querySelector('.root')

function renderDiv(classname, parent) {
	let div = document.createElement('div')
	div.className = classname
	div.classList.add('scale-up-top')
	parent.append(div)
}
renderDiv('left', root)
renderDiv('right', root)

function createNode(parent, tagName, classname, animation = false) {
	let parentElem = document.querySelector(`.${parent}`)
	let tagElem = document.createElement(`${tagName}`)
	tagElem.className = classname
	tagElem.classList.add(`${animation}`)
	parentElem.append(tagElem)
}

createNode('left', 'input', 'leftElem', 'scale-up-top')
createNode('right', 'input', 'rightElem', 'scale-up-top')

function createBtn(classname) {
	let addBtn = document.createElement('button')
	addBtn.className = classname
	addBtn.classList.add('scale-up-top')
	root.after(addBtn)
}

createBtn('addBtn')

let inputLeft = document.querySelector('.leftElem')
inputLeft.setAttribute('placeholder', 'add new word')

let inputRight = document.querySelector('.rightElem')
inputRight.setAttribute('placeholder', 'add new word')

let addBtn = document.querySelector('.addBtn')
addBtn.innerHTML = 'Add'

function createListDIV() {
	let div = document.createElement('div')
	div.className = 'mainList'
	addBtn.after(div)
}
createListDIV()

let mainList = document.querySelector('.mainList')

renderDiv('leftList', mainList)
renderDiv('rightList', mainList)

createNode('leftList', 'ul', 'word', 'scale-up-top')
createNode('rightList', 'ul', 'trnsWord', 'scale-up-top')

let word = document.querySelector('.word')
let trnsWord = document.querySelector('.trnsWord')

function AddNewWord() {
	if (inputLeft.value && inputRight.value !== '') {
		let itemObj = {}
		itemObj.word = inputLeft.value.toLowerCase()
		itemObj.trns = inputRight.value.toLowerCase()
		let ser = JSON.stringify(itemObj)
		localStorage.setItem(inputLeft.value, ser)

		let parseObj = localStorage.getItem(`${inputLeft.value}`)
		// JSON.parse(parseObj)
		console.log(parseObj)
		let liWord = document.createElement('li')
		liWord.innerHTML = `${itemObj.word}`
		word.append(liWord)
		let liTrns = document.createElement('li')
		liTrns.innerHTML = `${itemObj.trns}`
		trnsWord.append(liTrns)
		inputLeft.value = ''
		inputRight.value = ''
	} else {
		alert('нет ввода')
	}

	// trnsWord.innerHTML = `<li>${itemObj.trns}</li>`

	// location.reload()
}

addBtn.addEventListener('click', AddNewWord)
