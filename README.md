# WindReader

## Install dependencies

cd ~/Desktop/Sites/WindReaderServerless

npm install

## To Install new dependencies

npm install dependency name

## To run the server locally

hit command-shift-p in vscode

Debug: start debugging 

## To hit local server

copy and paste these urls in chrome

For wind direction:
http://localhost:7071/api/HttpTrigger1?request_type=wind_direction&lat=35.101240&lon=-120.630414

For wind speed:
http://localhost:7071/api/HttpTrigger1?request_type=wind_speed&lat=35.101240&lon=-120.630414


## To publish to Azure serverless

go to Azure tab on left

Hit blue publish arrow

Click yes

## To hit published function

append specific request after question mark

https://windreader.azurewebsites.net/api/httptrigger1?code=kzfwziTiIZMz3T8qRl3agGzI4MDYebUt3GHifNP6j59QWi3C3a22Ww%3D%3D&request_type=wind_direction&lat=35.101240&lon=-120.630414
