document.addEventListener("DOMContentLoaded", () => {
const target = document.querySelector('.profileCardImgWrapper');
      const sound = document.getElementById('larry'); 

      target.addEventListener('mouseenter', (e) => {
        e.preventDefault();
        sound.play();
      });

      target.addEventListener('mouseleave', () => {
        sound.pause();
        sound.currentTime = 0;
      });
    });