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
    const jobsData = jobs.map(function (job) {
        return `<div class="job-item ${job.featured ? "featured" : ""}">
    <img src="${job.logo}" alt="${job.company}" class="company-image">

    <!-- job list content -->
    <div class="job-content">
        <!-- job details -->
        <div class="job-title">
            <div class="heading">
                <h3 class="company-name">${job.company}</h3>
                ${job.new ? '<span class="new">new!</span>' : ''}
                ${job.featured ? '<span class="featured">featured</span>' : ''}
            </div>

            <h4 class="role">${job.position}</h4>

            <div class="job-spec">
                <span>${job.postedAt}</span>
                <span>${job.contract}</span>
                <span>${job.location}</span>
            </div>
        </div>

        <!-- job categories -->
        <div class="job-catergories">
            <button class="btn" type="button" data-role="${job.role}">${job.role}</button>
            <button class="btn" type="button" data-level="${job.level}">${job.level}</button>
            ${job.languages.map(function (language) {
                return `<button class="btn" type="button" data-languages="${language}">${language}</button>`
            }).join("")}
            ${job.tools.map(function (tool) {
                return `<button class="btn" type="button" data-tools="${tool}">${tool}</button>`
            }).join("")}
        </div>
    </div>
    </div>`
    }).join("");

    jobContainer.innerHTML = jobsData;
}