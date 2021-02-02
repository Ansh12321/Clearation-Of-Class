class Form{
constructor(){
this.input = createInput("Name");
this.button = createButton('Play!');
this.greeting = createElement('h2');
}

display(){
 var title = createElement('h2');
 title.html("Car Racing Game");
 title.position(550,80);

 this.input.position(550,140);

 this.button.position(550,180); 
 this.button.mousePressed(()=>{
  this.input.hide();
  this.button.hide(); 
  playerCount += 1;
  player.name = this.input.value()
  player.index = playerCount;
  player.update();
  player.updateCount(playerCount);
  this.greeting.html("Welcome "+player.name);
  this.greeting.position(550,150);
 })


}
}