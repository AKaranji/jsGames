//Original list of images to display
let pictures = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];

//Shuffle the pics
function shuffle(pics) {
    var currentIndex = pics.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = pics[currentIndex];
      pics[currentIndex] = pics[randomIndex];
      pics[randomIndex] = temporaryValue;
    }
  
    return pics;
  }

let readyArray =  shuffle(pictures);
let openCards=0;
let comparePics = new Array(2);
let openPics = new Array(2);
let noOfClicks = 0;
let picsRemaining=16;
function showImg(elmnt) 
{   
  noOfClicks++;
  console.log("noOfClicks "+noOfClicks);
  console.log("picsRemaining "+picsRemaining);
  if(picsRemaining==0){
    confirm("You are done!!! The no of clicks is: "+noOfClicks);
  }
    
else
{
  if(openCards<2)
    {
      openPics[openCards]=elmnt.id;
      let loadImg=readyArray[elmnt.id]+".jpg";
      elmnt.src="memory_images/"+loadImg;
      comparePics[openCards]=readyArray[elmnt.id];
      openCards++;
      if(openPics[1]!=null)
      {
        setTimeout(() => { 
          checkArrayElements();
        }, 500);
      }
    }
    else{
      document.getElementById(openPics[0]).src="memory_images/red.jpg";
      document.getElementById(openPics[1]).src="memory_images/red.jpg";
      openCards=0;
      comparePics.splice(0, comparePics.length);
      openPics.splice(0, openPics.length);
    }
  }
}

function checkArrayElements(){
  if(comparePics[0]==comparePics[1])
      {        
        confirm("Same pics!")
        document.getElementById(openPics[0]).style.visibility = 'hidden';
        document.getElementById(openPics[1]).style.visibility = 'hidden';
        openCards=0;
        comparePics.splice(0, comparePics.length);
        openPics.splice(0, openPics.length);
        picsRemaining=picsRemaining-2;
        console.log("picsRemaining "+picsRemaining);
      }
}