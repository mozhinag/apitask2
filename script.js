document.addEventListener("DOMContentLoaded", function () {
    var res = fetch("https://data.covid19india.org/v4/min/data.min.json");
    res.then((data) => data.json()).then((data1) => {
        console.log(data1);

        var tableBody = document.querySelector("#covidTable tbody");

        for (let state in data1) {
            var row = tableBody.insertRow();

            var cellState = row.insertCell(0);
            cellState.innerHTML = state;

            var cellTested = row.insertCell(1);
            cellTested.innerHTML = data1[state]?.total?.tested || "N/A";

            var cellVaccinated1 = row.insertCell(2);
            cellVaccinated1.innerHTML = data1[state]?.total?.vaccinated1 || "N/A";

            var cellVaccinated2 = row.insertCell(3);
            cellVaccinated2.innerHTML = data1[state]?.total?.vaccinated2 || "N/A";
        }
    });
});
