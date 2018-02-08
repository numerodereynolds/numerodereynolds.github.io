console.log(cor);

Chart.defaults.global.legend.display = false;

var ctx = document.getElementById("ranking");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: jogos,
        datasets: [{
            label: '',
            data: valor_y,
            backgroundColor: cor,
            borderColor: [
                'rgba(255, 162, 153, 1)'
            ],
            borderWidth: 0,
        }],
        pointRadius: 0,
    },
    options: {
        scales: {
            xAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
                display: false,
                categoryPercentage: 1.0,
                barPercentage: 1.0
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                display: false,
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }]
        },
        tooltips: {
            enabled: true,
            callbacks: {
                // use label callback to return the desired label
                label: function (tooltipItem, data) {
                    return tooltipItem.xLabel;
                },
                title: function (tooltipItem, data) {
                    return;
                },
            },
            displayColors: false,

        },
    },
});