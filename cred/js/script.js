/* Add your code here. */
var slideIndex=0;
showFunction();

function showFunction()
{
    var slides=document.getElementsByClassName("mySlides");
    var i;
    for(i=0;i<slides.length;i++)
    {
        slides[i].style.display="none";
    }
    slideIndex++;
    if(slideIndex>slides.length)
    {
        slideIndex=1;
    }
    slides[slideIndex-1].style.display="block";
    setTimeout(showFunction,2500);
}
 