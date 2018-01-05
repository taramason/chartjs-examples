const barCHART = document.getElementById("barChart");

Chart.defaults.scale.ticks.beginAtZero = true;

Chart.defaults.global.animation.onComplete = () => {
 console.log('finished');
}

console.log(Chart.defaults);
// Chart.defauls.global.scales.yAxis.ticks.beginAtZero = true;

//bare minimum:
let barChart = new Chart(barCHART, {
	type: 'bar',
	data: {
		labels: ['Jan', 'Feb', 'March', 'Apr'], //have to have equal # labels per # data
		// borderColor: ,
		datasets: [
			{
				label: "Numbers Per Month",
				backgroundColor: "#00ff00",
				data: [10, 20, 55, 30],
			}
		]
	}
});

