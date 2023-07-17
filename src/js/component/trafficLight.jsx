import React, { useState } from "react";

//create your TrafficLight component
const TrafficLight = () => {
	//declaring the hook
	const [light1, setLight1] = useState(false);
	const [light2, setLight2] = useState(false);
	const [light3, setLight3] = useState(false);

	function addLight1(){
		setLight1(light1 => !light1);
	}
	function addLight2(){
		setLight2(light2 => !light2);
	}
	function addLight3(){
		setLight3(light3 => !light3);
	}
	/*declaring the class selected, that has the property for given the glow effect in the light when you click*/
	let toggleClass1 = light1 ? 'selected' : '';
	let toggleClass2 = light2 ? 'selected' : '';
	let toggleClass3 = light3 ? 'selected' : '';

	return (
	<div>
		<div className="trafficTop"></div>
		<div className="container">
			<div className={`light1 ${toggleClass1}`} onClick={addLight1}></div>
			<div className={`light2 ${toggleClass2}`} onClick={addLight2}></div>
			<div className={`light3 ${toggleClass3}`} onClick={addLight3}></div>
		</div>
	</div>
	)	
};

export default TrafficLight;

