//  Script.js 
const rangevalue =  
    document.querySelector(".slider-container .price-slider"); 
const rangeInputvalue =  
    document.querySelectorAll(".range-input input"); 
  
// Set the price gap 
let priceGap = 500; 
  
// Adding event listners to price input elements 
const priceInputvalue =  
    document.querySelectorAll(".price-input input"); 
for (let i = 0; i < priceInputvalue.length; i++) { 
    priceInputvalue[i].addEventListener("input", e => { 
  
        // Parse min and max values of the range input 
        let minp = parseInt(priceInputvalue[0].value); 
        let maxp = parseInt(priceInputvalue[1].value); 
        let diff = maxp - minp 
  
        if (minp < 0) { 
            alert("minimum price cannot be less than 0"); 
            priceInputvalue[0].value = 0; 
            minp = 0; 
        } 
  
        // Validate the input values 
        if (maxp > 10000) { 
            alert("maximum price cannot be greater than 10000"); 
            priceInputvalue[1].value = 10000; 
            maxp = 10000; 
        } 
  
        if (minp > maxp - priceGap) { 
            priceInputvalue[0].value = maxp - priceGap; 
            minp = maxp - priceGap; 
  
            if (minp < 0) { 
                priceInputvalue[0].value = 0; 
                minp = 0; 
            } 
        } 
  
        // Check if the price gap is met  
        // and max price is within the range 
        if (diff >= priceGap && maxp <= rangeInputvalue[1].max) { 
            if (e.target.className === "min-input") { 
                rangeInputvalue[0].value = minp; 
                let value1 = rangeInputvalue[0].max; 
                rangevalue.style.left = `${(minp / value1) * 100}%`; 
            } 
            else { 
                rangeInputvalue[1].value = maxp; 
                let value2 = rangeInputvalue[1].max; 
                rangevalue.style.right =  
                    `${100 - (maxp / value2) * 100}%`; 
            } 
        } 
    }); 
  
    // Add event listeners to range input elements 
    for (let i = 0; i < rangeInputvalue.length; i++) { 
        rangeInputvalue[i].addEventListener("input", e => { 
            let minVal =  
                parseInt(rangeInputvalue[0].value); 
            let maxVal =  
                parseInt(rangeInputvalue[1].value); 
  
            let diff = maxVal - minVal 
              
            // Check if the price gap is exceeded 
            if (diff < priceGap) { 
              
                // Check if the input is the min range input 
                if (e.target.className === "min-range") { 
                    rangeInputvalue[0].value = maxVal - priceGap; 
                } 
                else { 
                    rangeInputvalue[1].value = minVal + priceGap; 
                } 
            } 
            else { 
              
                // Update price inputs and range progress 
                priceInputvalue[0].value = minVal; 
                priceInputvalue[1].value = maxVal; 
                rangevalue.style.left = 
                    `${(minVal / rangeInputvalue[0].max) * 100}%`; 
                rangevalue.style.right = 
                    `${100 - (maxVal / rangeInputvalue[1].max) * 100}%`; 
            } 
        }); 
    } 
}

// range 2

var slider = document.getElementById("range2");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}



const sliderEl = document.querySelector("#range2")
const sliderValue = document.querySelector(".value2")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = `linear-gradient(to right, #FF6E4B ${progress}%, #EFEFEF ${progress}%)`;
})

// range 3

var slider = document.getElementById("range3");
var output = document.getElementById("demo2");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}



const sliderE2 = document.querySelector("#range3")
const sliderValue2 = document.querySelector(".value3")

sliderE2.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  sliderValue2.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderE2.max) * 100;
 
  sliderE2.style.background = `linear-gradient(to right, #FF6E4B ${progress}%, #EFEFEF ${progress}%)`;
})

// range 4

var slider = document.getElementById("range4");
var output = document.getElementById("demo3");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}



const sliderE3 = document.querySelector("#range4")
const sliderValue3 = document.querySelector(".value3")

sliderE3.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  sliderValue3.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderE3.max) * 100;
 
  sliderE3.style.background = `linear-gradient(to right, #FF6E4B ${progress}%, #EFEFEF ${progress}%)`;
})

function checkIfCalOpen() {
    if($('.t-arrow-top').length > 0) {
        return true
    } else {
        return false
    }
}

$(() => {
    $('#result-section-part').hide()
})
$('#apply-filter-btn').click(() => {
    $('#search-section-part').fadeOut()
    $('#result-section-part').fadeIn()
})
$('#result-back-button').click(() => {
    $('#result-section-part').fadeOut()
    $('#search-section-part').fadeIn()
})

$('#apply-filter-btn2').click(() => {
    $('.phone-modal-carousel').fadeIn();
    $('.toggle-onclick-visible-data').hide()
    $('#filter-part-visible').removeClass('open')
})


$('#filter-part-visible').click(() => {

    if($('#filter-part-visible').hasClass('open')) {
        $('.toggle-onclick-visible-data').hide()
        $('#filter-part-visible').removeClass('open')
    } else {
        $('.phone-modal-carousel').hide();
        $('.toggle-onclick-visible-data').fadeIn()
        $('#filter-part-visible').addClass('open')
    }

})


// slider script

const nextIcon = '<img class="nextIcon" src="./assets/images/header-imgs/header-right-arrow.svg">'
    const prewIcon = '<img class="prewIcon" src="./assets/images/header-imgs/header-right-arrow.svg">'
    $('#header-slider').owlCarousel({
        loop: true,
        margin: 16,
        nav: true,
        autoWidth:true,
        navText: [
            nextIcon, prewIcon
        ],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1.5,
            },
            767:{
                items: 1, 
                nav: false,
            },
            1000: {
                items: 6,
                
            }
        }
    })


    $('#modal-slider').owlCarousel({
        loop: true,
        item: 1,
        margin:20,
        autoWidth:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    })


    $(document).ready(function() {
        $("img").click(function() {
            // Change src attribute of image
            $(".open").attr("src", "https://www.w3docs.com/uploads/media/default/0001/05/9eb9e9cba721ba3bb5e653751449173197f2924a.png");
          });
      });
  



    $(document).ready(function(){
        // Call global the function
        $('.t-datepicker').tDatePicker({
          // options here
        }).on('onChangeCO',function(e, changeDateCI) {
            console.log(changeDateCI, 'On Change occured, ')
            // console.log'onChangeCI do something');
            // console.log(new Date(changeDateCI))
            setTimeout(() => {
                $('html').removeClass('t-datepicker-open')
            }, 500)
          })        
      });



      $(document).ready(function(){  
        $(".sidebar-btn").click(function(){  
            $(".sidebar-part").toggleClass("close-sidebar");  
        });  
    });  
    $(document).ready(function(){  
        $(".sidebar-btn").click(function(){  
            $(".virtual-map-part").toggleClass("close-sidebar-data");  
        });  
    });  