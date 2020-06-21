function randomInteger(low, high)
{
    return low + Math.floor(Math.random() * (high - low));
}
function randomFloat(low, high)
{
    return low + Math.random() * (high - low);
}

function pixelValue(value)
{
    return value + 'px';
}


function durationValue(value)
{
    return value + 's';
}

function createHeart()
{  var scale=randomFloat(0.5,1.8);
    
    var htDiv = document.createElement('div');
    htDiv.setAttribute("class","ht");
    htDiv.style.top =pixelValue(randomInteger(-150, 0));
     let wd=document.body.clientWidth;
    htDiv.style.left = pixelValue(randomInteger(0, wd-100));
    var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip';
     htDiv.style.webkitAnimationName = 'fade, drop,'+spinAnimationName;
     var fadeAndDropDuration = durationValue(randomFloat(4, 10));
     var spinDuration = durationValue(randomFloat(3, 6));
     htDiv.style.webkitAnimationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration+','+spinDuration;
     htDiv.style.webkitAnimationDelay = '0s,0s,0s';
    htDiv.style.transform='scale(3,3)';

    return htDiv;
}

window.addEventListener('load', init, false);

function init()
{ 
    htTimer(9);
    
    setTimeout("location.reload",10000)
  

}


function htTimer(nums){
    if(nums>0){
        let body=document.getElementsByTagName("body")[0];
        body.appendChild(createHeart());
        setTimeout(htTimer,randomInteger(500,1500),nums-1);

 }
   
}


