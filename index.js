
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

const circleTest = document.getElementById('circle');
const circle = document.getElementById('circle');

function updateReactiveCircle() {
  const triggerRect = circle.getBoundingClientRect();
  const reactiveRect = circleTest.getBoundingClientRect();

  const triggerCenter = triggerRect.left + triggerRect.width /2;
  const reactiveCenter = reactiveRect.left + reactiveRect.width /2;

  const distance = Math.abs(triggerCenter - reactiveCenter);

  const maxDistance = 500;
  const scale = Math.maxs(1, 2 - distance / maxDistance);
  
  
}