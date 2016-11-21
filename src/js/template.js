import $ from "jquery";
import {internalData} from "./internaldata.js"


function internalForm (data) {

		data.results.map(function (data) {
			console.log(data);
		var user = data.picture.large;
		var nameF = data.name.first;
		var nameL = data.name.last;
		var email = data.email;
		var locateSt = data.location.street;
		var locateCity = data.location.city;
		var locateState = data.location.state;
		var locatePostcode = data.location.postcode;
		var cellNums = data.phone;
		var SSN = data.id.value;


		var HTML = `<div id="userBox">
						<img class="getUser" src="${user}"/>
						<div class="name"> ${nameF} ${nameL} </div>
						<div class="email"> ${email} </div>
						<div class="contact"> ${locateSt} </div>
						<div class="contact"> ${locateCity}, ${locateState}, ${locatePostcode} </div>
						<div class="contact"> ${cellNums} </div>
						<div class="socialNums"> ${SSN} </div>
					</div>



					`;
		$('.internalPic').append(HTML);
	})	
};

export {internalForm};



