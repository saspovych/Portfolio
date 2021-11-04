const plus = document.querySelectorAll('.block_plus')
function changePlusOnMinus(index) {
	plus[index].classList.toggle('minus')
}

function showSpoiler(index, height) {
	let parent = plus[index].closest('.block_item')
	let rightBlock = parent.querySelector('.block_right_side')
	rightBlock.classList.toggle('active')
	if (rightBlock.classList.contains('active')) {
		rightBlock.style.height = `${height}px`
	} else {
		rightBlock.style.height = '60px'
	}
	changePlusOnMinus(index)
}


function rotateTriangle(index) {
	const triangle = document.querySelectorAll('.overflow')
	if (triangle[index].classList.contains('unactive')) {
		triangle[index].classList.remove('unactive')
		triangle[index].classList.add('active')
	} else {
		triangle[index].classList.remove('active')
		triangle[index].classList.add('unactive')
	}
}
function showHiddenBlock(index, height) {
	const hiddenBlock = document.querySelectorAll('.hidden_block')
	if (hiddenBlock[index].classList.contains('hide')) {
		hiddenBlock[index].classList.remove('hide')
		hiddenBlock[index].classList.add('show')
		hiddenBlock[index].style.height = `${height}px`
		hiddenBlock[index].style.transition = 'height 1.5s ease'
	} else {
		hiddenBlock[index].classList.remove('show')
		hiddenBlock[index].classList.add('hide')
		hiddenBlock[index].style.height = '0px'
		hiddenBlock[index].style.transition = 'height 1.5s ease'
	}
	rotateTriangle(index)
}