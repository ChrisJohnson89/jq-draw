//Probllem:No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately
var color = $(".selected").css("background-color");

//When clicking on control list items
$(".controls li").click(function(){
	//Deselect sibling elements
	$(this).siblings().removeClass("selected");
	//selct clicked element
	$(this).addClass("selected");
	//cache current color
	color = $("this").css("background-color");
});

//When new color is pressed
$("#revealColorSelect").click(function(){
	//show color select or hide the color select
	$("#colorSelect").toggle();
});
	//show color select or hide the color select

//When color sliders change
	//update new color span

//when add color is pressed
	//append the color to the controls ul
	//select the new color

//on mouse events on the canvas
	//draw lines 

