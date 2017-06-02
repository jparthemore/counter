/* jshint esversion: 6*/ //this is module -design pattern object literal implementation of a moduel
const Counter = {
  rootElement: '#app',
  count: 0,
  start: function(){  //init
    this.cacheDOM();  //faster - don't want to search dom each time, need something to bind events to
    this.bindEvents();
    this.render();
  }, //kick ff appcac
  cacheDOM: function(){
    this.root= document.querySelector('#app');
    this.button = document.querySelector('#increment');
    this.output = document.querySelector('#output');

  },//cache what you know won't change, pefrom related
  bindEvents: function(){
    //only click events and only on the button
    this.button.addEventListener('click',()=>{
    //console.log('click!!!!');
    this.count += 1;
    this.render();
    });
  },

  //take data pass it thru dom, comesout in html
  render: function(){
    this.output.textContent = this.count;
  }
};
Counter.start(); //don't want to forget
