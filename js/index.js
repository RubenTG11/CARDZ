var textWrapper = document.querySelector('.line');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapper = document.querySelector('.line2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapper = document.querySelector('.line3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapper = document.querySelector('.line4');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapper = document.querySelector('.line5');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
.add({
    targets: '.line .letter',
    opacity: [0, 1],
    duration: 500,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.desktop .button',
    opacity: [0, 1],
    duration: 1300,
    delay: 0,
  });

  function smoothScroll(){
    document.querySelector('.whatWrapper').scrollIntoView({
        behavior: 'smooth'
    });
}