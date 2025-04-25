window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

  
    const rect1 = document.getElementById('rect1');
    const rect2 = document.getElementById('rect2');
    const circle = document.getElementById('circle');
  
    // Modify the multiplier to control how fast they move apart
    const offset = Math.min(scrollY * 0.5, 500); // Limit max offset

  
    rect1.style.transform = `translateX(-${offset}px)`;
    rect2.style.transform = `translateX(${offset}px)`;
    circle.style.transform = `translateY(-${offset}py)`;


  });