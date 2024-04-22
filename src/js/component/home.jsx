import React, { useState} from 'react';

//include images into your bundle
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
		<div className={`car ${carSpeed === "" ? "1" : ""}`} style={{ marginLeft: carPosition + 'px' }}><img src="https://attachment.outlook.live.net/owa/MSA%3Azelayaeileen%40outlook.com/service.svc/s/GetAttachmentThumbnail?id=AQMkADAwATM0MDAAMS01ZWIxLTliYzQtMDACLTAwCgBGAAADE3Y0v9egDk6NO70%2Fu9srdgcABpmKbZBI8EyYymjeDcxfWwAAAgEMAAAABpmKbZBI8EyYymjeDcxfWwAAAKhByrMAAAABEgAQAGHAgfuX61VEhOKtR54L%2B9s%3D&thumbnailType=2&isc=1&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IkU1RDJGMEY4REE5M0I2NzA5QzQzQTlFOEE2MTQzQzAzRDYyRjlBODAiLCJ0eXAiOiJKV1QiLCJ4NXQiOiI1ZEx3LU5xVHRuQ2NRNm5vcGhROEE5WXZtb0EifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2subGl2ZS5jb20iLCJ1YyI6ImQwMzI4YjkwNmEyNDQ2Yzk5NDMxN2Y3Y2NiNTc1NTg3IiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInB1aWRcIjpcIjkxNDc5OTU1Nzk3NDk4MFwiLFwic2NvcGVcIjpcIk93YURvd25sb2FkXCIsXCJvaWRcIjpcIjAwMDM0MDAxLTVlYjEtOWJjNC0wMDAwLTAwMDAwMDAwMDAwMFwiLFwicHJpbWFyeXNpZFwiOlwiUy0xLTI4MjctMjEyOTkzLTE1ODg2OTgwNTJcIn0iLCJuYmYiOjE3MTM3NTA5NjEsImV4cCI6MTcxMzc1MTU2MSwiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50Lm91dGxvb2subGl2ZS5uZXRAODRkZjllN2YtZTlmNi00MGFmLWI0MzUtYWFhYWFhYWFhYWFhIiwiaGFwcCI6Im93YSJ9.eIDoDwhtbPRO483od8ZMk809yEXZ66ORFSnFhmY5pEwrQkG_eSuzGOPuQ9WAjMqDgusZyGIRQZZ018QN-bc83fwj29xw1FC2LEX_05KWAYiCow1flol9IEktqA4KFJyewoakIsIZtlk97GrZ8SCClo38H_SaX_YvvVU3CF6Q70wWk0XQ3QjsiqNE-rOy0JS82kITfphQEgCdWQpeRmmhiOJz7as6KtjaS2vVsO3Frv3cEjkkubGBCzjn2TMBJQ9LaChXXpN9v25zUHh59EbOGA5gGeGsjVtjIdq37aX47fT0SeYkwy4MptmpnLBJ58aOGbqeHXd73YUzH092UT7v1g&X-OWA-CANARY=bdvoV8u1d84AAAAAAAAAALC8EmRvYtwYG6SQPgvZlLZplWB6LeuO9LNnsZjG9M4mgdsce-VW72w.&owa=outlook.live.com&scriptVer=20240405002.10&clientId=F99BD7AA929240E5A62D3FA40AE970EB&animation=true"/></div>
	</div>
	);

};


export default Home;
