import React, { useState} from 'react';

//include images into your bundle
import car from '../../img/car.png';

//create your first component
const Home = () => {
		const [ color, setColor ] = useState("red");
		const [carPosition, setCarPosition] = useState(0);
    	const [carSpeed, setCarSpeed] = useState(1);

		const moveCar = () => {
			if (color === "green") {
				setCarPosition(carPosition + carSpeed);
			}
		};
	
		const changeSpeed = (speed) => {
			setCarSpeed(100);
		};
	
		const stopCar = () => {
			setCarPosition(0);
			setCarSpeed(0);
		};
	return (
	<div className="background">
		<div className="traffic-light">
			<div className={`light red ${color === "red" ? "redglow" : ""}`} onClick={() => {setColor("red"); stopCar(); }}></div>
			<div className={`light yellow ${color === "yellow" ? "yellowglow" : ""}`} onClick={() => {setColor("yellow"); changeSpeed(0.5); }}></div>
			<div className={`light green ${color === "green" ? "greenglow" : ""}`} onClick={() => {setColor("green"); changeSpeed(); moveCar(); }}></div>
		</div>
		<div className={`car ${carSpeed === "" ? "1" : ""}`} style={{ marginLeft: carPosition + 'px' }}><img src={car}/></div>
	</div>
	);

};


export default Home;
