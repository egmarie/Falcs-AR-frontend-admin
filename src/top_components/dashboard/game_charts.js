/*export default function drawChart4() {
    var margin = {top: 30, right: 30, bottom: 30, left: 60}
  
   
    const width = 420
  
  
    d3.json("http://localhost:4000/XYZ.json")
        .then( function(data) {
          console.log("CHART 3")
          console.log(data)
          const max = data.reduce((prev, current) => (prev.value > current.value) ? prev : current)
          console.log("MAX")
          console.log(max)
  
          const colors = ["#FCA067"]
          //colors.reduceRight((_, item) => console.log(item), null);
          // SORTING SO THAT EVERYONE CAN SEE IT BY HIGHEST SCORES
          //let highestToLowest = numbers.sort((a, b) => b-a);
          const color = d3.scaleOrdinal(colors)
          const x = d3.scaleLinear()
            .domain([ 0, max.value + 20])
            .range([0, width])
            
      
          const y = d3.scaleBand()
            .domain(d3.range(data.length))
            .range([0, 30 * data.length])
            .paddingInner(.3)
            .paddingOuter(.2)
            
           
  
          
            var svg = d3.select("#chart4")
                .append("svg")
                    .attr("width", width - margin.left)
                    .attr("height", y.range()[1])
                    .attr("font-family", "sans-serif")
                    .attr("font-size", "10")
                    .attr("text-anchor", "end");
  
  
  
        
  
            
          
    
      const bar = svg.selectAll("g")
        .data(data)
        .join("g")
          .attr("transform", (data, i) => `translate(0,${y(i)})`)
    
      bar.append("rect")
          .attr("width", (d) => d.value * 3)
          .attr("height", y.bandwidth() - 1)
          .style("fill", function(d, i) {
            return color(d);
          })
    
      bar.append("text")
          .data(data)
          .attr("fill", "black")
          .attr("x", (d) => ((d.value * 3) + 15))
          .attr("y", (y.bandwidth() - 1) / 2)
          .attr("dy", ".35em")
          .text((d) => d.value);
      bar.append("text")
          .data(data)
          .attr("fill", "white")
          .attr("x",10)
          .attr("y", (y.bandwidth() - 1) / 2)
          .attr("dy", ".35em")
          .text((d) => d.user)
          .attr("text-anchor", "start");
  
          console.log(svg)
    
      return svg.node();
  })
    } */

var Highcharts = require('highcharts');  
// Load module after Highcharts is loaded
 
// Create the chart
export const chart1 = {
    chart: {
        type: 'bar',
        renderTo: 'chart4',
    },
    title: {
        text: 'Leaderboard'
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


