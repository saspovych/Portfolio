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