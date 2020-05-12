//show the settings menu
function showSettings(){
    var ElementSettings;
    
    ElementSettings = document.getElementById("content-settings-wrapper");
    
    ElementSettings.style.display = "block";
}

//save the settings and close the form
function saveSettings(){
    var ElementSettings;
    
    ElementSettings = document.getElementById("content-settings-wrapper");
    
    ElementSettings.style.display = "none";
}

//add a new activity
function activityPost(){}

//https://www.boredapi.com/documentation
var activity, accessibility, type, participants, price, link, key;

//get an activity
function getAdvice() {
    var api = 'https://www.boredapi.com/api/activity/';
    
    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            //console.log(data);    //Debug test
            
            activity = data.activity;
            accessibility = data.accessibility;
            type = data.type;
            participants = data.participants;
            price = data.price;
            link = data.link;
            key = data.key;
        
            writeActivity();
    });
}

//write the activity
function writeActivity() {
    var ElementTxtActivity;
    var ElementBtnBored, ElementBtnInterested;
    
    ElementTxtActivity = document.getElementById("txt-activity");
    ElementBtnBored = document.getElementById("btn-bored");
    ElementBtnInterested = document.getElementById("btn-interested");
    
    ElementTxtActivity.textContent = activity;
    
    ElementBtnInterested.textContent = "Tell me more";
    ElementBtnInterested.style.display = "inline-flex";
    
    ElementBtnBored.textContent = "BORING!";
    ElementBtnBored.style.opacity = 0.8;
}

//Create and write the activity description
function writeActivityDesc() {
    var ElementTxtActivity;
    var ElementBtnBored, ElementBtnInterested;
    
    ElementTxtActivity = document.getElementById("txt-activity");
    ElementBtnBored = document.getElementById("btn-bored");
    ElementBtnInterested = document.getElementById("btn-interested");
    
    if(document.getElementById("txt-desc") == null){
        var textDesc = document.createElement("p");
        textDesc.setAttribute("id", "txt-desc");

        textDesc.innerHTML = "It's " + type + " with " + participants;
        if(participants < 2){
            textDesc.innerHTML += " participant.";
        }else{
            textDesc.innerHTML += " participants.";
        }
        textDesc.innerHTML += "<br>";

        textDesc.innerHTML += "It's ";
        if(accessibility <= 0.3){
            textDesc.innerHTML += "easy";
        }else if(accessibility <= 0.6){
            textDesc.innerHTML += "not too hard";
        }else{
            textDesc.innerHTML += "difficult";
        }
        textDesc.innerHTML += " and costs you ";
        if(price == 0){
            textDesc.innerHTML += "nothing."
        }else if(price <= 0.3){
            textDesc.innerHTML += "not much.";
        }else if(price <= 0.7){
            textDesc.innerHTML += "a bit."
        }else{
            textDesc.innerHTML += "quite a bit";
        }
        textDesc.innerHTML += "<br>";

        if(link != ""){
            textDesc.innerHTML += "Check out this ";
            textDesc.innerHTML += "<a href='" + link + "'>link</a>";
            textDesc.innerHTML += " to learn more.";   
        }    

        document.getElementById("txt-activity").appendChild(textDesc);
    }else if(ElementBtnInterested.textContent == "Great let's go"){
        document.getElementById("txt-desc").remove();
        activityFound();
    }

    ElementBtnInterested.textContent = "Great let's go";
    
}

function activityFound(){
    var ElementTxtActivity;
    var ElementBtnBored, ElementBtnInterested;
    
    ElementTxtActivity = document.getElementById("txt-activity");
    ElementBtnBored = document.getElementById("btn-bored");
    ElementBtnInterested = document.getElementById("btn-interested");
    
    ElementTxtActivity.textContent = "Great have fun and don't get bored!";
    
    ElementBtnInterested.style.display = "none";
    
    ElementBtnBored.textContent = "I'm bored again";
    ElementBtnBored.style.opacity = 1;
}

//reset to start state
function activityReset(){
    var ElementTxtActivity;
    var ElementBtnBored, ElementBtnInterested;
    
    ElementTxtActivity = document.getElementById("txt-activity");
    ElementBtnBored = document.getElementById("btn-bored");
    ElementBtnInterested = document.getElementById("btn-interested");
    
    ElementTxtActivity.textContent = "Are you really bored?";
    
    ElementBtnBored.textContent = "I'm bored";
    
    ElementBtnInterested.style.display = "none";
    ElementBtnInterested.textContent = "Tell me more";
}