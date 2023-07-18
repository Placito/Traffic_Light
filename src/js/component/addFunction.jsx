import React, { useState } from "react";


//create your TrafficLight component
const AddFunction = () => {
	//declaring the hook
	const [light1, setLight1] = useState(false);
	const [light2, setLight2] = useState(false);
	const [light3, setLight3] = useState(false);
	const [light4, setLight4] = useState(false);

	//function to make the class selected apeears when clicked in the circle
	function addLight(changeLight) {
		changeLight(before => !before)
	};

	return (
	<div> 
        <div className="trafficTop"></div>
			<div className="container1">
				<div className={`light1 ${light1 ? 'selected' : ''}`} onClick={() => {addLight(setLight1)}}></div>
				<div className={`light2 ${light2 ? 'selected' : ''}`} onClick={() => {addLight(setLight2)}}></div>
				<div className={`light3 ${light3 ? 'selected' : ''}`} onClick={() => {addLight(setLight3)}}></div>
				<div className={`light4 ${light4 ? 'selected' : ''}`} onClick={() => {addLight(setLight4)}}></div>
			</div>	
	</div>
	)	
};


export default AddFunction;
