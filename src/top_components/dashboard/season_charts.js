import Highcharts from 'highcharts';


export const season_players_per_game_event = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Players Per Event'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Players (thousands)'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: ' <b>{point.y:.1f} players</b>'
    },
    series: [{
        name: 'Population',
        data: [
            ['Shanghai', 24.2],
            ['Beijing', 20.8],
            ['Karachi', 14.9],
            ['Shenzhen', 13.7],
            ['Guangzhou', 13.1],
            ['Istanbul', 12.7],
            ['Mumbai', 12.4],
            ['Moscow', 12.2],
            ['São Paulo', 12.0],
            ['Delhi', 11.7],
            ['Kinshasa', 11.5],
            ['Tianjin', 11.2],
            ['Lahore', 11.1],
            ['Jakarta', 10.6],
            ['Dongguan', 10.6],
            ['Lagos', 10.6],
            ['Bengaluru', 10.3],
            ['Seoul', 9.8],
            ['Foshan', 9.3],
            ['Tokyo', 9.3]
        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
}

export const season_top_games_for_engagement = {
    chart: {
        type: 'bar',
        renderTo: 'chart4',
    },
    title: {
        text: 'Highest Engagement'
    },
    subtitle: {
        text: 'TOP 3 GAMES'
    },
    xAxis: {
        type: 'category',
        labels: {
          rotation: 0,
          style: {
              fontSize: '10px',
          }
      }
    },
    yAxis: {
        title: {
            text: 'Points'
        }
      },
    legend: {
      enabled: false
      },
  tooltip: {
      pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
  },
    series: [{
      dataSorting: {
         enabled: true,
         },
         
         data: [
          ['Anne', 24.2],
          ['sam83', 20.8],
          ['Karachi', 14.9],
          ['Shenzhen', 13.7],
          ['Guangzhou', 13.1],
          ['Istanbul', 12.7],
          ['Mumbai', 12.4],
          ['Moscow', 12.2],
          ['São Paulo', 12.0],
          ['Delhi', 11.7],
          ['Kinshasa', 11.5],
          ['Tianjin', 11.2],
          ['Lahore', 11.1],
          ['Jakarta', 10.6],
          ['Dongguan', 10.6],
          ['Lagos', 10.6],
          ['Bengaluru', 10.3],
          ['Seoul', 9.8],
          ['Foshan', 9.3],
          ['Tokyo', 9.3]
      ],
      dataLabels: {
        enabled: true,
        rotation: 0,
        color: '#FFFFFF',
        align: 'right',
        format: '{point.y:.1f}', // one decimal
        y: 5, // 10 pixels down from the top
        style: {
            fontSize: '10px',
        }
    }
  

}]
}

export const season_engagement_trends = {
    chart: { // 16:9 ratio
        type: 'line'
    },
    title: {
        text: 'Engagement Trends'
    },

    subtitle: {
        text: 'Source: thesolarfoundation.com'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2017'
        }
    },

    legend: {
        enabled: false,
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: 'This Season\'s Engagement Trends',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    },
],
}

//     responsive: {
//         rules: [{
//             condition: {
//                 maxWidth: 500
//             },
//             chartOptions: {
//                 legend: {
//                     layout: 'horizontal',
//                     align: 'center',
//                     verticalAlign: 'bottom'
//                 }
//             }
//         }]
//     }