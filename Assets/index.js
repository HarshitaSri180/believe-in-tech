

  // card slider
 
  // Carousel data
  const carouselData = [
      { 
          image: './Assets/images/women-nurse.png', 
          title: 'Aged Care', 
          subtitle: 'Novis has been providing Aged Care equipment for the best clinical outcomes since 2003.'
      },
      { 
          image: 'https://via.placeholder.com/300x200/ff7f7f', 
          title: 'Healthcare Solutions', 
          subtitle: 'Providing healthcare equipment and consulting for better patient outcomes.'
      },
     
  ];

  let currentIndex = 0;

  function nextCard() {
      // Update index to the next item, looping back to start if needed
      currentIndex = (currentIndex + 1) % carouselData.length;

      // Update card content with the new data
      document.getElementById('carousel-image').src = carouselData[currentIndex].image;
      document.getElementById('carousel-title').textContent = carouselData[currentIndex].title;
      document.getElementById('carousel-subtitle').textContent = carouselData[currentIndex].subtitle;
  }
  
  
//  second card slider
 
  // Carousel data
  const carouselDataSecond = [
    { 
        image: './Assets/images/women-nurse.png', 
        title: 'Aged Care', 
        subtitle: 'Novis has been providing Aged Care equipment for the best clinical outcomes since 2003.'
    },
    { 
        image: 'https://via.placeholder.com/300x200/ff7f7f', 
        title: 'Healthcare Solutions', 
        subtitle: 'Providing healthcare equipment and consulting for better patient outcomes.'
    },
   
];

let currentIndexSecond = 0;

function nextCardSecond() {
    // Update index to the next item, looping back to start if needed
    currentIndexSecond = (currentIndexSecond + 1) % carouselDataSecond.length;

    // Update card content with the new data
    document.getElementById('carousel-image-second').src = carouselDataSecond[currentIndexSecond].image;
    document.getElementById('carousel-title-second').textContent = carouselDataSecond[currentIndexSecond].title;
    document.getElementById('carousel-subtitle-second').textContent = carouselDataSecond[currentIndexSecond].subtitle;
}

//  third card slider
 
  // Carousel data
  const carouselDataThird = [
    { 
        image: './Assets/images/women-nurse.png', 
        title: 'Aged Care', 
        subtitle: 'Novis has been providing Aged Care equipment for the best clinical outcomes since 2003.'
    },
    { 
        image: 'https://via.placeholder.com/300x200/ff7f7f', 
        title: 'Healthcare Solutions', 
        subtitle: 'Providing healthcare equipment and consulting for better patient outcomes.'
    },
   
];

let currentIndexThird = 0;

function nextCardThird() {
    // Update index to the next item, looping back to start if needed
    currentIndexThird = (currentIndexThird + 1) % currentIndexThird.length;

    // Update card content with the new data
    document.getElementById('carousel-image-third').src = carouselDataThird[currentIndexThird].image;
    document.getElementById('carousel-title-third').textContent = carouselDataThird[currentIndexThird].title;
    document.getElementById('carousel-subtitle-third').textContent = carouselDataThird[currentIndexThird].subtitle;
}


