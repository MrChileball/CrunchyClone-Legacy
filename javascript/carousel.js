//Source code of the original project:
//https://codepen.io/samwong/pen/xxJMaMP


window.addEventListener('load', () => {
	const COMPONENT_SELECTOR = '.carousel__wrapper';
	const CONTROLS_SELECTOR = '.carousel__controls';
	const CONTENT_SELECTOR = '.carousel__content';
  
	const components = document.querySelectorAll(COMPONENT_SELECTOR);
  
	for (let i = 0; i < components.length; i++) {
	  const component = components[i];
	  const content = component.querySelector(CONTENT_SELECTOR);
  
	  const maxScrollWidth = content.scrollWidth - content.clientWidth / 2 - content.clientWidth / 2;
	  const nextButton = component.querySelector('.arrow-next');
	  const prevButton = component.querySelector('.arrow-prev');
  
	  if (maxScrollWidth !== 0) {
		component.classList.add('has-arrows');
	  }
  
	  if (nextButton) {
		nextButton.addEventListener('click', function (event) {
		  event.preventDefault();
		  const x = content.clientWidth / 2 + content.scrollLeft + 0;
		  content.scroll({
			left: x,
			behavior: 'smooth',
		  });
		});
	  }
  
	  if (prevButton) {
		prevButton.addEventListener('click', function (event) {
		  event.preventDefault();
		  const x = content.clientWidth / 2 - content.scrollLeft + 0;
		  content.scroll({
			left: -x,
			behavior: 'smooth',
		  });
		});
	  }
  
	  /**
	   * Scroll handler.
	   */
	  const scrollHandler = () => {
		toggleArrows();
	  };
  
	  /**
	   * Toggle arrow handler.
	   */
	  const toggleArrows = () => {
		if (content.scrollLeft > maxScrollWidth - 10) {
		  nextButton.classList.add('disabled');
		} else if (content.scrollLeft < 10) {
		  prevButton.classList.add('disabled');
		} else {
		  nextButton.classList.remove('disabled');
		  prevButton.classList.remove('disabled');
		}
	  };
  
	  if (component.querySelector(CONTROLS_SELECTOR) !== undefined) {
		content.addEventListener('scroll', scrollHandler);
	  }
	}
  });
  