// this is the script for the down arrow in the header
document.addEventListener('DOMContentLoaded', function() {
    const downArrow = document.querySelector('.down-arrow');
    downArrow.addEventListener('click', function() {
      // Scroll to the about-me section
      document.getElementById('about-me').scrollIntoView({ behavior: 'smooth' });
    });
  });

// N A V B A R

const navbar = document.querySelector('nav');
const navbar_ul = document.querySelector('nav ul');
const navbar_links = document.querySelectorAll('nav ul li a');
let sticky = navbar.offsetTop;
const hamburger = document.querySelector('.hamburger');
const dismiss_btn = document.querySelector('.dismiss');


hamburger.addEventListener('click', function() {
  navbar_ul.classList.add('active');
});
dismiss_btn.addEventListener('click', function() {
  navbar_ul.classList.remove('active');
});
// deactivate the navbar when a link is clicked
navbar_links.forEach(function(link) {
  link.addEventListener('click', function() {
    navbar_ul.classList.remove('active');
  });
});

// A B O U T - M E
const paragraph_to_toggle = document.querySelector('.js-toggle-about-me-text');
// const texts_to_toggle = ;

let typed = new Typed(paragraph_to_toggle, {
  strings : [
    'craft digital dreams into reality.',
    'shape tomorrow\'s innovations.',
    'build the bridges between imagination and technology.',
    'empower dreams with technology.',
    'code the future.',
    'turn ideas into action.',
    'engineer solutions that redefine possibility.',
    'architect the pathways to progress.'
  ],
  typeSpeed : 60,
  backSpeed : 30,
  loop : true
})

// P R O J E C T S
const project_tiles = document.querySelectorAll('.project-tile');
let threshold;
if (window.innerWidth > 768) {
  threshold = 0.8;
} else {
  threshold = 0.3;
}

const tiles_observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // entry.target.classList.remove('hidden');
      entry.target.classList.add('animated-project-tile');
    }
  });
}, {
  
  threshold: threshold
});

project_tiles.forEach(tile => {
  tiles_observer.observe(tile);
});

// G L O W   E F F E C T
// const handle_glow_effect = (event) => {
//   const target = event.target;
  
//   const rect = target.getBoundingClientRect(),
//         x = event.clientX - rect.left,
//         y = event.clientY - rect.top;

//   target.style.setProperty('--x', `${ x }px`);
//   target.style.setProperty('--y', `${ y }px`);
// }

// project_tiles.forEach(tile => {
//   tile.addEventListener('mousemove', handle_glow_effect);
// });

// S K I L L S
document.addEventListener('scroll', () => {
  const skill_cards = document.querySelectorAll('.skill-tile');
  skill_cards.forEach(card => {
    const card_rect = card.getBoundingClientRect();
    const card_bottom = card_rect.bottom - (card_rect.height / 3);

    if (card_bottom < 500) {
      card.style.opacity = '1';
      card.style.filter = 'blur(0px)';
    }
    if (card_bottom < 400) {
      card.style.opacity = '0.8';
      card.style.filter = 'blur(1px)';
    }
    if (card_bottom < 300) {
      card.style.opacity = '0.6';
      card.style.filter = 'blur(2px)';
    }
    if (card_bottom < 200) {
      card.style.opacity = '0.4';
      card.style.filter = 'blur(3px)';
    }
    if (card_bottom < 100) {
      card.style.opacity = '0.2';
      card.style.filter = 'blur(4px)';
    }
  });
  // card_1_rect = skill_cards[0].getBoundingClientRect();
  // card_1_top = card_1_rect.top;
  // card_1_bottom = card_1_rect.bottom;
  // console.clear();
  // console.log(card_1_top);
});

// W H O   A M  I
const who_am_i_section = document.querySelector('#who-am-i');
const who_am_i_header = document.querySelectorAll('#who-am-i > div > h3 > span');
const who_am_i_text = document.querySelector('#who-am-i > div > div');
const who_am_i_observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Who am I section is intersecting');
      who_am_i_text.style.animationName = 'animate_text';
      who_am_i_header.forEach(span => {
        span.style.animationName = 'fade_out_header_slices';
      });
    }
  });
}, {
  threshold: 0.5
});

who_am_i_observer.observe(who_am_i_section);