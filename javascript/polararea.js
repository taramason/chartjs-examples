const barCHART = document.getElementById("barChart");

Chart.defaults.scale.ticks.beginAtZero = true;

Chart.defaults.global.animation.onComplete = () => {
 console.log('finished');
}

console.log(Chart.defaults);
// Chart.defauls.global.scales.yAxis.ticks.beginAtZero = true;

//bare minimum:
let barChart = new Chart(barCHART, {
	type: 'polarArea',
	data: {
		labels: ['Strength', 'Skill', 'Health', 'Speed', 'Luck'], //have to have equal # labels per # data
		// borderColor: ,
		datasets: [
			{
				label: "Points",
				backgroundColor: "rgba(00, 255, 00, 0.1)",
				borderColor: '#00ff00',
				data: [10, 20, 55, 30, 10],
			}, {
				label: "Numbers Per Month",
				backgroundColor: "rgba(00, 255, 255, 0.1)",
				borderColor: '#00ffff',
				data: [5, 100, 20, 70, 80],
			}
		]
	}
});

