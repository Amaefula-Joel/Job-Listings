const jobContainer = document.querySelector("#job-container");

window.addEventListener("DOMContentLoaded", function () {
    jobData();
});

async function jobData() {
    const requestUrl = 'data.json';

    const request = new Request(requestUrl);

    const response = await fetch(request);

    const data = await response.json();

    populateJob(data);
}

function populateJob(jobs) {

    const jobTemplate = document.getElementById("jobTemplate").innerHTML;
    const templateFunc = Handlebars.compile(jobTemplate);

    const templateFromJson = jobs.map(templateFunc).join("");

    jobContainer.innerHTML = templateFromJson;
    
}
