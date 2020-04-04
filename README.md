## Initial

Name: Weather Journal
Goal: demonstration nodejs skills. 

I was given a starter HTML and CSS from udacity for the weather journal app.

### Process

-To start I setup the server routes in the server.js file. That includes the get route and the post route. 

-node js was installed in the folder, as well as expressjs, cors, body-parser for facilitating data transaction between the client side and the server side. 

-Server port was set to 3000, and was spined up from the terminal, accessed through localhost3000. 

-On the client side I used asynchronous JavaScript to perform the different taks needed to set up the app. 

	1. Async function getWeatherInfo's purpose is get information from the openweathermap api with the use of the fetch api. 

	2. an event listener was added to the generate id from the HTML to generate the data from the fetch() api on 'click'. 

	3.  A post request was made to add both the data from the openweathermap api and user data to the postData function. 

	4. An updateUI async function was written to updateUI the user interface with all the data stored from the post request and the get request. 

#### Conclusion

The purpose of this project was to demonstrate my nodeJs skills and the ability the express js framework and other dependencies to construct a web app. 