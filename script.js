google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Source', 'users'],
        ['Socials', 2],
        ['Affiliate', 3],
        ['Referrals', 1],
        ['Direct', 4],
    ]);

    const options = { 'title': 'Revenue by Channel', 'width': 550, 'height': 400 };

    const chart = new google.visualization.PieChart(document.getElementById('pie-chart'));
    chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawChart2);
function drawChart2() {
    var data = google.visualization.arrayToDataTable([
      ['Months', 'Sales'],
      ['Jan',  10000     ],
      ['Feb',  1170      ],
      ['Mar',  660       ],
      ['April',  1030    ]
    ]);

    var options = {
      title: 'Company Performance',
      curveType: 'function',
      legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('myChart'));

    chart.draw(data, options);
  }
      
