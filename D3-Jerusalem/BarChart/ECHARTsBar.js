    <script type="text/javascript">
        // based on prepared DOM, initialize echarts instance
        var myChart = echarts.init(document.getElementById('main'));

        // specify chart configuration item and data
        var option = {
            title: {
                text: 'Jews in Jerusalem in thousands:'
            },
            tooltip: {},
            legend: {
                data:['Jews in Jerusalem in thousands']
            },
            xAxis: {
                data: [
                '1525',
                '1538',
                '1553',
                '1838',
                '1846',
                '1851',
                '1862',
                '1876',
                '1882',
                '1885',
                '1905',
                '1922',
                '1931',
                '1944',
                '1948',
                '1953',
                '1967',
                '1980',
                '1985',
                '1987',
                '1990',
                '1995',
                '2000',
                '2004',
                '2007',
                '2011',
                '2014',
                '2016']
            },
            yAxis: {},
            series: [{
                name: 'Sales',
                type: 'bar',
                data: [
                    // jews in jerusalem in hundreds:
                    1.194,
                    1.363,
                    1.958,
                    3.000,
                    7.515,
                    5.580,
                    8.000,
                    4.000,
                    9.000,
                    15.000,
                    13.300,
                    34.000,
                    51.200,
                    97.000,
                    100.000,
                    139.000,
                    195.700,
                    292.300,
                    327.700,
                    340.000,
                    378.200,
                    382.000,
                    448.800,
                    458.000,
                    489.480,
                    497.000,
                    534.000,
                    550.100,
                ]
            }]
        };

        // use configuration item and data specified to show chart
        myChart.setOption(option);
    </script>


