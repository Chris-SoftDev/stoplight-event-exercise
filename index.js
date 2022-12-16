(function() {
  'use strict';
  // STOP BUTTON Event Listeners
  var stopBtn = document.querySelector('#stopButton'); 
  stopBtn.addEventListener('click', () => {
    var stopLight = document.querySelector('#stopLight');
    stopLight.classList.toggle('stop');
  });
  stopBtn.addEventListener('mouseenter', () => {
    console.log(`Entered ${stopBtn.textContent} button`) 
  });
  stopBtn.addEventListener('mouseleave', () => {
    console.log(`Left ${stopBtn.textContent} button`)
  });
  
  // SLOW BUTTON Event Listeners
  var slowBtn = document.querySelector('#slowButton')
  slowBtn.addEventListener('click', () => {
    var slowLight = document.querySelector('#slowLight');
    slowLight.classList.toggle('slow');
  }); 
  slowBtn.addEventListener('mouseenter', () => {
    console.log(`Entered ${slowBtn.textContent} button`)
  }); 
  slowBtn.addEventListener('mouseleave', () => {
    console.log(`Left ${slowBtn.textContent} button`)
  }); 

  // GO BUTTON Event Listeners
  var goBtn = document.querySelector('#goButton') 
  goBtn.addEventListener('click', () => {
    var goLight = document.querySelector('#goLight');
    goLight.classList.toggle('go');
  });
  goBtn.addEventListener('mouseenter', () => {
    console.log(`Entered ${goBtn.textContent} button`);
  });
  goBtn.addEventListener('mouseleave', () => {
    console.log(`Left ${goBtn.textContent} button`) 
  });

  var btnClass = document.querySelector('#controls');
  btnClass.addEventListener('click', function(e) {
    if (e.target.classList.toggle('true')) {
      console.log(`${e.target.textContent} bulb on`);
    } else console.log(`${e.target.textContent} bulb off`);
  })
})();