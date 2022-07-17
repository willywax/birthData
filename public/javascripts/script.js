var dataArray; // global variable
let ctx;
const labels = []
for (let i = 1990; i < 2021; i++) {
    labels.push(i)
}

let barData = {};
let barOptions = {};
let countryName;
let myChart;
function showChart(valueId, value2, minAge) {
    dataArray = valueId.split(',');
    countryName = value2;
    
    console.log('Data === ', dataArray);
    myChart.destroy();

    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: ' Life Expectancy of ' + countryName,
                data: dataArray,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1
            }],
            scales: {
                yAxes: [{
                    ticks: {
                        stepSize: 10,
                    }
                }]
            }
        },
        options: {
            responsive: true,
        }
    });

   
}

async function uploadFile() {

    if (document.getElementById('myFile').value !== '') {
        let formData = new FormData();
        formData.append("myFile", myFile.files[0]);
        console.log('Files=== ', myFile.files[0])
        alert('File attached');
        var element = document.getElementById('load');
        element.classList.add('loader');
        // document.getElementById('sendEmailBtn').disabled = false;
        await fetch('/api/validate', {
            method: "POST",
            body: formData
        }).then(response => {
            alert('document uploaded successfully')
            element.classList.remove('loader');
            console.log(response.json)
            // fetch('/')
            window.location.href = "/";
        });
    } else {
        alert('ATTACH FILE!!! ');
    }
}

$(document).ready(function () {
    $('#dataTable').DataTable();

    ctx = document.getElementById('myChart').getContext('2d');

    myChart = new Chart(ctx, { type: 'line', data: barData, options: barOptions });   

});

