var dataArray; // global variable
let ctx;
const labels = []
for (let i = 1990; i < 2021; i++) {
    labels.push(i)
}

let barData = {};
let barOptions = {};
let countryName;
function showChart(valueId, value2, minAge) {
    dataArray = valueId.split(',');
    countryName = value2;
}

$(document).ready(function () {
    $('#dataTable').DataTable();

    ctx = document.getElementById('myChart').getContext('2d');

    var myChart = new Chart(ctx, { type: 'line', data: barData, options: barOptions });

    $('button').click(() => {
        // alert('Button clicked' + id)
        console.log('Data === ', dataArray);

        myChart.destroy();

        myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: ' Life Expectancy of ' + countryName,
                    // data: [50.331, 50.999, 51.641, 52.256, 52.842, 53.398, 53.924, 54.424, 54.906, 55.376, 55.841, 56.308, 56.784, 57.271, 57.772, 58.29, 58.826, 59.375, 59.93, 60.484, 61.028, 61.553, 62.054, 62.525, 62.966, 63.377, 63.763, 64.13, 64.486, 64.833, 65.173],
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

    });
});

