var chart = AmCharts.makeChart( "chartdiv", {
  "type": "serial",
  "theme": "light",
  "dataProvider": [ {
    "hours": "05",
    "Rs": 2025
  }, {
    "hours": "06",
    "Rs": 1882
  }, {
    "hours": "07",
    "Rs": 1809
  }, {
    "hours": "08",
    "Rs": 1322
  }, {
    "hours": "09",
    "Rs": 1122
  }, {
    "hours": "10",
    "Rs": 1114
  }, {
    "hours": "11",
    "Rs": 984
  }, {
    "hours": "12",
    "Rs": 711
  }, {
    "hours": "13",
    "Rs": 665
  }, {
    "hours": "14",
    "Rs": 580
  }, {
    "hours": "15",
    "Rs": 443
  }, {
    "hours": "16",
    "Rs": 441
  }, {
    "hours": "17",
    "Rs": 395
  } , {
    "hours": "18",
    "Rs": 450
  } , {
    "hours": "19",
    "Rs": 120
  } , {
    "hours": "20",
    "Rs": 400
  } , {
    "hours": "21",
    "Rs": 150
  } 
  , {
    "hours": "22",
    "Rs": 1200
  }, {
    "hours": "23",
    "Rs": 150
  }, {
    "hours": "24",
    "Rs": 150
  }],
  "valueAxes": [ {
    "gridColor": "#FFFFFF",
    "gridAlpha": 0.2,
    "dashLength": 0
  } ],
  "gridAboveGraphs": true,
  "startDuration": 1,
  "graphs": [ {
    "balloonText": "[[category]]: <b>[[value]]</b>",
    "fillAlphas": 0.8,
    "lineAlpha": 0.2,
    "type": "column",
    "valueField": "Rs"
  } ],
  "chartCursor": {
    "categoryBalloonEnabled": false,
    "cursorAlpha": 0,
    "zoomable": false
  },
  "categoryField": "hours",
  "categoryAxis": {
    "gridPosition": "start",
    "gridAlpha": 0,
    "tickPosition": "start",
    "tickLength": 20
  },
  "allLabels": [{
    "text": "Time",
    "x": "50%",
    "y": "97%",
    "bold": true,
    "align": "middle"
  }],
  "export": {
    "enabled": true
  }
} );
