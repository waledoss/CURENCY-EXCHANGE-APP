   // UPDATING THE CHART
   const ctx = document.getElementById('myChart').getContext('2d');
    function addData(myChart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
    });
    chart.update();
}
function removeData(myChart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
    dataset.data.pop();
    });
    chart.update();
}
  // THE CHART
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['','Bitcoin', 'Ethereum (ETH)', 'Tether (USDT)', 'U.S. Dollar Coin (USDC)', 'Binance Coin (BNB)', 'Binance USD (BUSD)'],
        datasets: [{
            label: '#Crypto Currencies for a Market Cap',
            data: [
            900,375, 128, 66, 55, 35, 17
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            tension: 0.7,
            borderWidth: 1,
            borderColor:'#777',
            hoverBoderWidth:3,
            hoverBorderColor:'#000'
        }],
    },
    options: {
      legend:{
        display:true,
        position:'right',
        labels:{
          fontColor:'#000'
        }
      },
      layout:{
        padding:{
          left:50,
          right:0,
          bottom:0,
          top:0
        }
      },
      scales: {
            y: {
              beginAtZero: true,
              title:'billions',
            },
            x:{
              beginAtZero: true,
              min:0
            }
        }  
    }
});
updatemyChart()
printmyChart()