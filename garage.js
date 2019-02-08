// /warning this may trigger multiple times for one press
//...usually triggers twice based on testing for each press
var dash_button = require('node-dash-button'yyygtygyrry
var dash = dash_button("a0:02:dc:76:c8:71", null, 20000, 'udp'); //address from step above
var toggle = "off"
dash.on("detected", function (){
  console.log("omg found");
  if (toggle == "off") {
		axios.post('https://maker.ifttt.com/trigger/button_pressed_on/with/key/3doIG3PwHgFIE2oN8OUb59JLq2gLIN9uEzQYUc2DhE').then(function (response) {
			toggle = "on"
		});
	} else {
		axios.post('https://maker.ifttt.com/trigger/button_pressed/with/key/3doIG3PwHgFIE2oN8OUb59JLq2gLIN9uEzQYUc2DhE').then(function (response) {
			toggle = "off"
		});
	}
});
