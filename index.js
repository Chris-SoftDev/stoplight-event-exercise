(function() {
  'use strict';
  // STOP BUTTON Event Listeners
  var stopBtn = document.querySelector('#stopButton'); 
  stopBtn.addEventListener('click', () => {
    var stopLight = document.querySelector('#stopLight');
    stopLight.classList.toggle('stop');
  });
  stopBtn.addEventListener('mouseenter', () => {
    var stopButton = document.querySelector('#stopButton');
    console.log(`Entered ${stopButton.textContent} button`) 
  });
  stopBtn.addEventListener('mouseleave', () => {
    var stopButton = document.querySelector('#stopButton');
    console.log(`Left ${stopButton.textContent} button`)
  });
  
  // SLOW BUTTON Event Listeners
  var slowBtn = document.querySelector('#slowButton')
  slowBtn.addEventListener('click', () => {
    var slowLight = document.querySelector('#slowLight');
    slowLight.classList.toggle('slow');
  }); 
  slowBtn.addEventListener('mouseenter', () => {
    var slowButton = document.querySelector('#slowButton');
    console.log(`Entered ${slowButton.textContent} button`)
  }); 
  slowBtn.addEventListener('mouseleave', () => {
    var slowButton = document.querySelector('#slowButton');
    console.log(`Left ${slowButton.textContent} button`)
  }); 

  // GO BUTTON Event Listeners
  var goBtn = document.querySelector('#goButton') 
  goBtn.addEventListener('click', () => {
    var goLight = document.querySelector('#goLight');
    goLight.classList.toggle('go');
  });
  goBtn.addEventListener('mouseenter', () => {
    var goButton = document.querySelector('#goButton');
    console.log(`Entered ${goButton.textContent} button`);
  });
  goBtn.addEventListener('mouseleave', () => {
    var goButton = document.querySelector('#goButton');
    console.log(`Left ${goButton.textContent} button`) 
  });

  var btnClass = document.querySelector('#controls');
  btnClass.addEventListener('click', function(e) {
    if (e.target.classList.toggle('true')) {
      console.log(`${e.target.textContent} bulb on`);
    } else console.log(`${e.target.textContent} bulb off`);
  })
})();