

function createAlarm() 
{
	chrome.alarms.create({when:Date.now(), periodInMinutes:1});
}

chrome.alarms.onAlarm.addListener(function(alarm) 
{
	window.open("https://acconline.austincc.edu/");
});

createAlarm();
chrome.notifications.create({type:"basic", iconUrl: "icon.png", title: ":(", message:":(((((("});
chrome.alarms.clearAll();



