function skillsMember(){
    // Get the value of the input field with id="skills-member"
    var member = document.getElementById("skills-member").value;

    // If the member is valid, set the cookie and redirect to the dashboard
    if (member == "true" || member == "false") {
        document.cookie = "skills-member=" + member;
        window.location = "dashboard.html";
    } else {
        // Display an error message
        document.getElementById("skills-error").innerHTML = "Invalid value. Please enter 'true' or 'false'.";
    }
}