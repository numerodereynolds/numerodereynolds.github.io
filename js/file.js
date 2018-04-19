Chart.defaults.global.legend.display = false;

/*var ctx = document.getElementById("ranking");
var myChart = new Chart(ctx, {
    type: 'bubble',
    data: {
        labels: ['jogos resultado'],
        datasets: [{
            label: ["China", "Estoril"],
            backgroundColor: ["rgba(255,221,50,0.2)", "rgba(255,221,50,0.2)"],
            borderColor: "rgba(255,221,50,1)",
            data: [{
                x: [0, 15],
                y: [15, 15],
                r: [15, 15]
            }]
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
            displayColors: false,

        },
    },
});

document.getElementById("golos_marcados").innerHTML = golos_marcados;
document.getElementById("golos_sofridos").innerHTML = golos_sofridos;

var ctx = document.getElementById("ranking_Liga_NOS");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: jogos_resultado_Liga_NOS,
        datasets: [{
            label: '',
            data: valor_y_Liga_NOS,
            backgroundColor: cor_Liga_NOS,
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

document.getElementById("pontos").innerHTML = pontos;
document.getElementById("golos_marcados_Liga_NOS").innerHTML = golos_marcados_Liga_NOS;
document.getElementById("golos_sofridos_Liga_NOS").innerHTML = golos_sofridos_Liga_NOS;

var ctx = document.getElementById("ranking_Liga_NOS_casa");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: jogos_resultado_Liga_NOS_casa,
        datasets: [{
            label: '',
            data: valor_y_Liga_NOS_casa,
            backgroundColor: cor_Liga_NOS_casa,
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

document.getElementById("pontos_casa").innerHTML = pontos_casa;
document.getElementById("golos_marcados_Liga_NOS_casa").innerHTML = golos_marcados_Liga_NOS_casa;
document.getElementById("golos_sofridos_Liga_NOS_casa").innerHTML = golos_sofridos_Liga_NOS_casa;

var ctx = document.getElementById("ranking_Liga_NOS_fora");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: jogos_resultado_Liga_NOS_fora,
        datasets: [{
            label: '',
            data: valor_y_Liga_NOS_fora,
            backgroundColor: cor_Liga_NOS_fora,
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

document.getElementById("pontos_fora").innerHTML = pontos_fora;
document.getElementById("golos_marcados_Liga_NOS_fora").innerHTML = golos_marcados_Liga_NOS_fora;
document.getElementById("golos_sofridos_Liga_NOS_fora").innerHTML = golos_sofridos_Liga_NOS_fora;*/