const sliderControlsButtons = document.querySelectorAll('.slider-controls-button');
const sliders = document.querySelectorAll('.slide');


for(let i=0;i<sliders.length;i++){
  sliderControlsButtons[i].addEventListener('click', function(){
    for(let j=0; j<sliders.length; j++){
      sliders[j].classList.remove('slide-current');
      sliderControlsButtons[j].classList.remove('current');
    }
      sliders[i].classList.add('slide-current');
      sliderControlsButtons[i].classList.add('current');
  })
}

