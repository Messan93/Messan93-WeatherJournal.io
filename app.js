/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=c9cd4089e616edf4b83523418f6347ec';


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


//post request..
const postData = async ( url = '', data = {})=>{
	
      console.log(data);

      const response = await fetch(url, {
          method: 'POST', 
          credentials: 'same-origin',
          headers: {
              'Content-Type': 'application/json',
      },
             
          body: JSON.stringify(data), 
      });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }


}


//Event listener for the action to be performed.
document.getElementById('generate').addEventListener('click', performAction);
//call back function for eventListener.

function performAction(e){
    e.preventDefault();

    const newZip =  document.getElementById('zip').value;
    const userInput = document.getElementById('feelings').value;

        if (newZip.length == 0){
          alert("enter zipcode first");
          return false;
        }
        if (userInput.length == 0){
          alert("enter feeling first");
          return false;
        }

    getWeatherInfo(baseURL,newZip, apiKey)

    .then(function (data){
    	console.log(data);
    	postData('/add', {temp: data.main.temp, date: newDate, content: userInput});
    })

    .then(function (newData){
    	updateUI();
    })
    
}


//get request.
const getWeatherInfo = async (baseURL, zip, Key)=>{

  const res = await fetch(baseURL+zip+Key)
  try {

    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
};


//update the UI.
const updateUI = async () => {

  const request = await fetch('/all');
  try{
    const allData = await request.json();
    document.getElementById('temp').innerHTML = allData.temp;
    document.getElementById('date').innerHTML = allData.date;
    document.getElementById('content').innerHTML = allData.content;

  }catch(error){
    console.log("error", error);
  }
}

