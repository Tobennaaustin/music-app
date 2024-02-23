//displaying time on the screen
function getTimeOfDay() {
  const now = new Date();
  const hours = now.getHours();

  if (hours >= 5 && hours < 12) {
    return "Good morning";
  } else if (hours >= 12 && hours < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}

// Display the greeting
const greetingElement = document.getElementById('greeting');
const greeting = getTimeOfDay();
greetingElement.textContent = `${greeting} Jewel`;


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const search = document.getElementsByClassName("search");
search.addEventListener('click', () => {
  windows.location.href = "search.html"
});