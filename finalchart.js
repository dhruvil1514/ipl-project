fetch('JsonFiles/matchesOwnPerAllYear.json').then((response) => response.json()).then(data => {
    var jsondata = data;
    plotChart1(jsondata["1"]);
})
fetch('JsonFiles/economicalbowlers1.json').then((response) => response.json()).then(data => {
    var jsondata = data;
    plotChart2(jsondata["2"]);
})
fetch('JsonFiles/extraruns.json').then((response) => response.json()).then(data => {
    var jsondata = data;
    plotChart3(jsondata);
})
/*fetch('JsonFiles/economicalbowlers1.json').then((response) => response.json()).then(data => {
    var jsondata = data;
    plotChart4(jsondata);
})*/
function plotChart1(jsonobject) {
    Highcharts.chart('container', {

        chart: {
            type: 'column'
        },
        title: {
            text: 'chart for totalmatches in ipl'
        },
        subtitle: {
            text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'no. of matches seasonwise'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.0f}'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },

        "series": [{
            "name": "Browsers",
            "colorByPoint": true,
            "data": jsonobject
        }]
    });
}
function plotChart2(jsonobject) {
    Highcharts.chart('container1', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Stacked bar chart'
        },
        xAxis: {
            categories: ['2008', '2009', '2010','2011','2012', '2013','2014','2015','2016','2017']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'chart for the number of wins per team in ipl'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: jsonobject
    });
}
function plotChart3(jsonobject){
    Highcharts.chart('container2', {
        
        chart: {
            type: 'column'
        },
        title: {
            text: 'extra runs per team in 2016'
        },
        subtitle: {
            text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'extra runs'
            }
    
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.0f}'
                }
            }
        },
    
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },
    
        "series": [
            {
                "name": "Browsers",
                "colorByPoint": true,
                "data": jsonobject
            }
        ]
    });
    }
    function plotChart4(jsonobject) {
        Highcharts.chart('container3', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'top 10 economical bowlers for 2015'
            },
            subtitle: {
                text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'economical bowlers'
                }
    
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.2f}'
                    }
                }
            },
    
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
            },
    
            "series": [{
                "name": "Browsers",
                "colorByPoint": true,
                "data": jsonobject
            }]
        });
    } 