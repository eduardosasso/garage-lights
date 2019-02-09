// /warning this may trigger multiple times for one press
//...usually triggers twice based on testing for each press
const dash_button = require('node-dash-button')
const dash = dash_button("a0:02:dc:76:c8:71", null, 20000, 'udp') //address from step above

const request = require('axios')

const ifttt_turn_on = 'https://maker.ifttt.com/trigger/button_pressed_on/with/key/3doIG3PwHgFIE2oN8OUb59JLq2gLIN9uEzQYUc2DhE'
const ifttt_turn_off = 'https://maker.ifttt.com/trigger/button_pressed/with/key/3doIG3PwHgFIE2oN8OUb59JLq2gLIN9uEzQYUc2DhE'

const ON = true
const OFF = false

let light_switch = OFF

dash.on("detected", function (){
  if (light_switch == OFF) {
    request.post(ifttt_turn_on).then(function (response) { 
      light_switch = ON
		});
	} else {
		request.post(ifttt_turn_off).then(function (response) {
      light_switch = OFF
		});
	}
});
