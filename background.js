var w=window.innerWidth;
var h=800;


$('body').css('height','800px');
$('body').css('width',w);
var pics=['basketball.svg','bell.svg','blackboard.svg','calendar.svg','clock.svg','idea.svg','laptop.svg','magnifier.svg','ruler.svg','school-bag.svg','bulb.svg','globe-grid.svg','document.svg','book-1.svg','book.svg','trophy.svg','graduation-cap.svg','science.svg','pencil.svg','award.svg','alarm-clock.svg','tube.svg','pencil-1.svg','brush.svg','bus.svg','calculator.svg','science-1.svg','palette.svg','alarm.svg','pen-1.svg','lamp.svg','bag.svg','files.svg','planet.svg','whiteboard.svg','people.svg'];
console.log(pics);
var elements=pics.length;
function loadpics()
{
  var i;
  
  for(i=0;i<pics.length;i++)
  {
    var left=(i%8)*w/8+((Math.random()*w/20));
    var top=Math.floor(i/8)*h/4+((Math.random()*h/10));
    var s='<img src="'+select()+'" style="position: absolute;left:'+left+'px;top:'+top+'px ;transform: rotate('+Math.floor(Math.random()*90)+'deg);">';
    $('#particles').append(s);

  }
}
var done=0;
function select()
{
    var n=Math.floor(Math.random()*elements);
    var temp=pics[n];
    var send=pics[n];
    pics[n]=pics[pics.length-done-1];
    pics[pics.length-done-1]=temp;
    console.log(pics);
    console.log(send);
    elements--;
    done++;
    return send;
}
loadpics();

