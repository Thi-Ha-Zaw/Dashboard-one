import './style.scss';
import * as bootstrap from 'bootstrap';
import * as echarts from 'echarts';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import 'echarts-gl';




let DateInput = document.getElementById("date-input");

DateInput.addEventListener("focus", function () {
		DateInput.type = "date";
})


let accordionItems = document.querySelectorAll(".accordion-item")
let helLLO = document.getElementById("HII");
let SideBar = document.getElementById("sideBar");
SideBar.addEventListener("click", function (e) {
	if (e.target.closest(".accordion-group")) {
		let CurrentParentElement = e.target.closest(".accordion-group");
		if (CurrentParentElement.lastElementChild.classList.contains("bi-chevron-right")) {
			CurrentParentElement.lastElementChild.classList.toggle("rotate");
		}
	}
})





//chartLibaries
let myChart = echarts.init(document.getElementById('main'));
let Chart = echarts.init(document.getElementById('chart'));
let ChartTwo = echarts.init(document.getElementById('ChartDiv'),"light");


		
		const  optionOne = {
				legend: {
					top: 'bottom'
				},
				toolbox: {
					show: false,
					feature: {
						mark: { show: false },
						dataView: { show: true, readOnly: false },
						restore: { show: true },
						saveAsImage: { show: true }
					}
				},
				series: [
					{
						name: 'Nightingale Chart',
						type: 'pie',
						radius: [2, 120],
						center: ['50%', '50%'],
						roseType: 'area',
						itemStyle: {
							borderRadius: 8
								},
						label: {
								show: true
								},
						emphasis: {
						label: {
								show: true
						}
						},
						data: [
							{ value: 40, name: 'rose 1' },
							{ value: 38, name: 'rose 2' },
							{ value: 32, name: 'rose 3' },
							{ value: 30, name: 'rose 4' },
							{ value: 28, name: 'rose 5' },
							{ value: 26, name: 'rose 6' },
							{ value: 22, name: 'rose 7' },
							{ value: 18, name: 'rose 8' }
						]
					}
				]
			};

			// Display the chart using the configuration items and data just specified.
myChart.setOption(optionOne);

const data = [
	[
		[28604, 77, 17096869, 'Australia', 1990],
		[31163, 77.4, 27662440, 'Canada', 1990],
		[1516, 68, 1154605773, 'China', 1990],
		[13670, 74.7, 10582082, 'Cuba', 1990],
		[28599, 75, 4986705, 'Finland', 1990],
		[29476, 77.1, 56943299, 'France', 1990],
		[31476, 75.4, 78958237, 'Germany', 1990],
		[28666, 78.1, 254830, 'Iceland', 1990],
		[1777, 57.7, 870601776, 'India', 1990],
		[29550, 79.1, 122249285, 'Japan', 1990],
		[2076, 67.9, 20194354, 'North Korea', 1990],
		[12087, 72, 42972254, 'South Korea', 1990],
		[24021, 75.4, 3397534, 'New Zealand', 1990],
		[10088, 70.8, 38195258, 'Poland', 1990],
		[19349, 69.6, 147568552, 'Russia', 1990],
		[10670, 67.3, 53994605, 'Turkey', 1990],
		[26424, 75.7, 57110117, 'United Kingdom', 1990],
		[37062, 75.4, 252847810, 'United States', 1990]
	],
	[
		[44056, 81.8, 23968973, 'Australia', 2015],
		[43294, 81.7, 35939927, 'Canada', 2015],
		[13334, 76.9, 1376048943, 'China', 2015],
		[21291, 78.5, 11389562, 'Cuba', 2015],
		[38923, 80.8, 5503457, 'Finland', 2015],
		[37599, 81.9, 64395345, 'France', 2015],
		[44053, 81.1, 80688545, 'Germany', 2015],
		[42182, 82.8, 329425, 'Iceland', 2015],
		[5903, 66.8, 1311050527, 'India', 2015],
		[23038, 73.13, 143456918, 'Russia', 2015],
		[19360, 76.5, 78665830, 'Turkey', 2015],
		[38225, 81.4, 64715810, 'United Kingdom', 2015],
		[53354, 79.1, 321773631, 'United States', 2015]
	]
  ];
const   optionTwo = {
	backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [
	  {
		offset: 0,
		color: '#f7f8fa'
	  },
	  {
		offset: 1,
		color: '#fff'
	  }
	]),
	title: {
	 
	},
	legend: {
	  right: '10%',
	  top: '3%',
	  data: ['1990', '2015']
	},
	grid: {
	  left: '8%',
	  top: '10%'
	},
	xAxis: {
	  splitLine: {
		lineStyle: {
		  type: 'dashed'
		}
	  }
	},
	yAxis: {
	  splitLine: {
		lineStyle: {
		  type: 'dashed'
		}
	  },
	  scale: true
	},
	series: [
	  {
		name: '1990',
		data: data[0],
		type: 'scatter',
		symbolSize: function (data) {
		  return Math.sqrt(data[2]) / 5e2;
		},
		emphasis: {
		  focus: 'series',
		  label: {
			show: true,
			formatter: function (param) {
			  return param.data[3];
			},
			position: 'top'
		  }
		},
		itemStyle: {
		  shadowBlur: 10,
		  shadowColor: 'rgba(120, 36, 50, 0.5)',
		  shadowOffsetY: 5,
		  color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
			{
			  offset: 0,
			  color: 'rgb(251, 118, 123)'
			},
			{
			  offset: 1,
			  color: 'rgb(204, 46, 72)'
			}
		  ])
		}
	  },
	  {
		name: '2015',
		data: data[1],
		type: 'scatter',
		symbolSize: function (data) {
		  return Math.sqrt(data[2]) / 5e2;
		},
		emphasis: {
		  focus: 'series',
		  label: {
			show: true,
			formatter: function (param) {
			  return param.data[3];
			},
			position: 'top'
		  }
		},
		itemStyle: {
		  shadowBlur: 10,
		  shadowColor: 'rgba(25, 100, 150, 0.5)',
		  shadowOffsetY: 5,
		  color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
			{
			  offset: 0,
			  color: 'rgb(129, 227, 238)'
			},
			{
			  offset: 1,
			  color: 'rgb(25, 183, 207)'
			}
		  ])
		}
	  }
	]
};

Chart.setOption(optionTwo);



function createNodes(widthCount, heightCount) {
	let nodes = [];
	for (let i = 0; i < widthCount; i++) {
	  for (let j = 0; j < heightCount; j++) {
		nodes.push({
		  x: Math.random() * window.innerWidth,
		  y: Math.random() * window.innerHeight,
		  value: 1
		});
	  }
	}
	return nodes;
  }
  function createEdges(widthCount, heightCount) {
	let edges = [];
	for (let i = 0; i < widthCount; i++) {
	  for (let j = 0; j < heightCount; j++) {
		if (i < widthCount - 1) {
		  edges.push({
			source: i + j * widthCount,
			target: i + 1 + j * widthCount,
			value: 1
		  });
		}
		if (j < heightCount - 1) {
		  edges.push({
			source: i + j * widthCount,
			target: i + (j + 1) * widthCount,
			value: 1
		  });
		}
	  }
	}
	return edges;
  }
  let nodes = createNodes(65, 65);
  let edges = createEdges(65, 65);
 let option = {
	series: [
	  {
		type: 'graphGL',
		nodes: nodes,
		edges: edges,
		itemStyle: {
		  color: '#1f4287'
		},
		lineStyle: {
		  color: '#78d5e4',
		  width: 3
		},
		forceAtlas2: {
		  steps: 5,
		  jitterTolerence: 10,
		  edgeWeightInfluence: 4
		}
	  }
	]
  };
ChartTwo.setOption(option);
 




			
