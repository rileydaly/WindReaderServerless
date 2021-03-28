
const got = require('got')

module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');
  let toReturn 
  const request_type = req.query.request_type
  
  if(request_type === "wind_speed"){
    const res = await getJSON(req.query)
    toReturn = res.wind.speed
  }
  else if(request_type === "wind_direction"){
    const res = await getJSON(req.query)
    toReturn = res.wind.deg
  }
  else if(request_type === "wind_gust"){
    const res = await getJSON(req.query)
    toReturn = res.wind.gust

  }


  context.res = {
    // status: 200, /* Defaults to 200 */
    body: toReturn || 'no request_type specified.. pass it in as a query param like ?request_type=wind_speed'
  };
}


async function getJSON({lat='35.10163218697745',lon='-120.63045185072025'}={}) {
  //gets OpenWeather API
  //api key = 4616988bca1dbae3e1ae3d0088beed35

  const apiKey = '4616988bca1dbae3e1ae3d0088beed35'
  try {
    const response = await got(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    console.log('res body here:', response.body);
    const parsed = JSON.parse(response.body)
    return parsed
    //=> '<!doctype html> ...'
  } catch (error) {
    console.log('err 1212421414 aaa:', error)
    //=> 'Internal server error ...'
  }


  return 'Yikes it didnt work asdfasdfasdf'

}