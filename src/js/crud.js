function saveMeeting(){
    var nameMeeting = document.getElementById("name_meeting");
    var emailMeeting = document.getElementById("email_meeting");
    var linkMeeting = document.getElementById("link_meeting");

    objMeeting.name = nameMeeting.value;
    objMeeting.email = emailMeeting.value;
    objMeeting.link = linkMeeting.value;
    saveObject('meeting', objMeeting);

    nameMeeting.value = '';
    emailMeeting.value = '';
    linkMeeting.value = '';

    listMeeting();
}


function listMeeting(){
    var lstMeeting = JSON.parse(localStorage.getItem('object'));

    var nameMeeting = document.getElementById("nameMeeting");
    var emailMeeting = document.getElementById("EmailMeeting");
    var linkMeeting = document.getElementById("LinkMeeting");

    nameMeeting.innerHTML = lstMeeting.name;
    emailMeeting.innerHTML = lstMeeting.email;
    linkMeeting.innerHTML = lstMeeting.link;
}