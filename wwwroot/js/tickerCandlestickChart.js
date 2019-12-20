function candlestickChart() {

    console.log("Inside Script");

    var dataPoints = [];

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        title: {
            text: "Netflix Stock Price in 2016"
        },
        subtitles: [{
            text: "Weekly Averages"
        }],
        axisX: {
            interval: 1,
            valueFormatString: "MMM"
        },
        axisY: {
            includeZero: false,
            prefix: "$",
            title: "Price"
        },
        toolTip: {
            content: "Date: {x}<br /><strong>Price:</strong><br />Open: {y[0]}, Close: {y[3]}<br />High: {y[1]}, Low: {y[2]}"
        },
        data: [{
            type: "candlestick",
            yValueFormatString: "$##0.00",
            dataPoints: dataPoints
        }]
    });

}