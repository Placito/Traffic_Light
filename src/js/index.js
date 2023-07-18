//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import TrafficLight from "./component/trafficLight.jsx";
import Buttons from "./component/buttons.jsx";
import AddFunction from "./component/addFunction.jsx";

/*define the variable
let newInterval;

//function that make the cycles of traffic lights selected color between red, green and yellow.
function handleClick() {
	//clear the previous function, to prevent that many
	clearInterval(newInterval);
	// function that going to render to every 1 second
	newInterval = setInterval(function(){
		//render your react application
        let current = 0;
        //an array with the sequence of lights
        let lights = [1,3,4,2];
        //an array with the sequence of the delay, the time that I want the litghts take to change
        let delay = [10,2,8,2];
        let color = [["#990000", "selected"], ["#cc6600", "selected"], ["#009933", "selected"]];
        
        for (let i = 0; n > 3; i++) {
            color[lights[current] & Math.power(2,i) / Math.power(2,i)];
        }

	ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
	}, 3 * 1000);
}*/

function addColor() {
    setTimeout(() => {
        ReactDOM.render(<AddFunction />, document.querySelector("#app"));
      }, 1000)
}

//created another .render so that the buttons weren't affected by the function setInterval()
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
ReactDOM.render(<Buttons handleClick = {handleClick} addColor = {addColor}/>, document.querySelector("#buttons"));
