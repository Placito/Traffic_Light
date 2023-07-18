import React from "react";
import PropTypes from 'prop-types';

//create your TrafficLight component
const Buttons = (props) => {
	
	return (
	<div> 
		<button className="btn btn-secondary mt-5 ms-2" onClick={() => { props.handleClick() }} >Cycle traffic lights</button>
        <button className="btn btn-secondary mt-5 ms-2" onClick={() => { props.addColor() }} >Add color</button>
	</div>
	)	
};

Buttons.propTypes = {
	handleClick: PropTypes.func,
	addColor: PropTypes.func	
}

export default Buttons;