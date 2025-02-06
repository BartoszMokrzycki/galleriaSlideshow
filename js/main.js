//modal variables
const fullsBtn = document.querySelectorAll('.full-s-btn');
const popup = document.querySelector('.popup');
const popupImg = document.querySelector('.popup--img-src');
const closePopupBtn = document.querySelector('.close-btn');
const modalImg = document.querySelector('.modalImg');

//slideshow variables
const allSlideshowItems = document.querySelectorAll('.slideshow__item');
const previousBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const paintingName = document.querySelector('.painting__data--name');
const paintingArtist = document.querySelector('.painting__data--artist');
const startSlideshowBtn = document.querySelector('.startSlideshow');
const progressBar = document.querySelector('.progress-bar');

//main page variables
const allPortraits = document.querySelectorAll('.portrait-box__item');
console.log(allPortraits);
if (window.location.pathname.includes('index.html')) {
	allPortraits.forEach((portrait, index) => {
		portrait.addEventListener('click', () => {
			window.location.href = `slideshow.html?slide=${index}`;
		});
	});
}

if (window.location.pathname.includes('slideshow.html')) {
	let currentIndex = 0;
	const totalItems = allSlideshowItems.length;

	const urlParams = new URLSearchParams(window.location.search);
	const slideIndex = urlParams.get('slide');

	const updateProgress = () => {
		const progress = ((currentIndex + 1) / totalItems) * 100;
		progressBar.style.width = `${progress}%`;
	};

	const showSlide = index => {
		allSlideshowItems.forEach(item => {
			const opacityItems = [item, paintingArtist, paintingName];
			opacityItems.forEach(opItem => {
				opItem.style.opacity = '0';
			});
			setTimeout(() => (item.style.display = 'none'), 300);
		});

		const currentItem = allSlideshowItems[index];

		setTimeout(() => {
			currentItem.style.display = 'flex';

			const artName =
				currentItem.firstChild.nextSibling.children[1].childNodes[1].firstChild
					.nextSibling.textContent;
			const artArtist =
				currentItem.firstChild.nextSibling.children[1].childNodes[3].alt;

			paintingName.textContent = artName;
			paintingArtist.textContent = artArtist;
			setTimeout(
				() => (
					(currentItem.style.opacity = '1'),
					(paintingArtist.style.opacity = '1'),
					(paintingName.style.opacity = '1')
				),
				300
			);
		}, 500);

		//setting diplay direction depends on screen width
		const screenWidth = window.innerWidth;
		const flexDirectionAdjustment = () => {
			if (screenWidth <= 965) {
				currentItem.style.flexDirection = 'column';
			} else if (screenWidth >= 966) {
				currentItem.style.flexDirection = 'row';
			}
		};
		flexDirectionAdjustment();

		window.addEventListener('resize', () => {
			const screenWidth = window.innerWidth;
			if (screenWidth <= 965) {
				currentItem.style.flexDirection = 'column';
			} else if (screenWidth >= 966) {
				currentItem.style.flexDirection = 'row';
			}
		});

		//setting btns colors and accessibility
		if (currentIndex === 0) {
			previousBtn.style.pointerEvents = 'none';
			previousBtn.childNodes[1].setAttribute('stroke', '#e5e5e5');
		} else if (currentIndex >= 1 && currentIndex <= 13) {
			previousBtn.style.pointerEvents = 'auto';
			previousBtn.childNodes[1].setAttribute('stroke', '#000');
			nextBtn.childNodes[1].setAttribute('stroke', '#000');
			nextBtn.style.pointerEvents = 'auto ';
		} else if (currentIndex === 14) {
			nextBtn.style.pointerEvents = 'none';
			nextBtn.childNodes[1].setAttribute('stroke', '#e5e5e5');
			previousBtn.childNodes[1].setAttribute('stroke', '#000');
		}

		updateProgress();
	};

	//setting autoplay for 15s per slide
	let autoplayInterval;

	const startAutoplay = () => {
		autoplayInterval = setInterval(() => {
			currentIndex = (currentIndex + 1) % totalItems;
			showSlide(currentIndex);
		}, 15000);
	};

	const stopAutoplay = () => {
		clearInterval(autoplayInterval);
	};

	startAutoplay();

	//setting slide in main page
	if (slideIndex !== null) {
		currentIndex = parseInt(slideIndex);
		showSlide(currentIndex);
	}

	//changing slide by btns or keys
	const previousSlide = () => {
		currentIndex = (currentIndex - 1 + totalItems) % totalItems;
		showSlide(currentIndex);
	};

	const nextSlide = () => {
		currentIndex = (currentIndex + 1) % totalItems;
		showSlide(currentIndex);
	};

	previousBtn.addEventListener('click', previousSlide);
	nextBtn.addEventListener('click', nextSlide);
	document.addEventListener('keydown', e => {
		if (e.key === 'ArrowLeft') {
			previousSlide();
		} else if (e.key === 'ArrowRight') {
			nextSlide();
		}
	});

	showSlide(currentIndex);

	//opening/closing modal and setting img src
	fullsBtn.forEach(btn => {
		btn.addEventListener('click', e => {
			const imgSrc = e.target.previousElementSibling.getAttribute('src');
			console.log(e.target);
			modalImg.setAttribute('src', `${imgSrc}`);
			popup.classList.remove('hidden');
			document.body.style.overflow = 'hidden';

			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});

			setTimeout(() => {
				popup.style.opacity = '1';
			}, 100);
		});
	});

	//closing popup by btn or keydown
	const closePopup = () => {
		popup.style.opacity = '0';
		setTimeout(() => {
			popup.classList.add('hidden');
		}, 100);
		document.body.style.overflow = 'auto';
	};
	closePopupBtn.addEventListener('click', closePopup);
	document.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			closePopup();
		}
	});
}
