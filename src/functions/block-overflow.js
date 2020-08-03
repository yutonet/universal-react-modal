const blockOverflow = (block = true) => {
	if (block) {
		let scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
		document.documentElement.style.marginRight = scrollBarWidth + 'px'
		document.body.classList.add('urm-block-overflow');
	}
	else {
		document.documentElement.style.marginRight = ''
		document.body.classList.remove('urm-block-overflow');
	}
}

export default blockOverflow