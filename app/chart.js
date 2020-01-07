import * as d3 from 'd3';
import * as c3 from 'c3';

class Chart {

    constructor(target) {
        this.target = target;
        this.chartCounts = null;
    }

    render() {
        var self = this;

        var padding = {
            top: 20,
            right: 40,
            bottom: 20,
            left: 120,
        };

        self.chartCounts = c3.generate({
            bindto: self.target,
            padding: padding,
            data: {
                columns: [
                    ['Index',100,91,77,62,61,49,39,17,14,14,9,6,4,2]
                ],
                type: 'bar',
                labels: {
                    format: {
                        'Index': d3.format(',')
                    }
                },
                line: {
                    connectNull: true
                }
            },
            legend: {
                show: false
            },
            line: {
                connectNull: true
            },
            point: {
                show: true,
                r: function(d) {
                    if (d.x == 2018) {
                        return 6;
                    } else {
                        return 2;
                    }
                }
            },
            color: {
                pattern: ['#3580A3']
            },
            axis: {
                rotated: true,
                y: {
                    max: 100,
                    min: 0, 
                    padding: {
                        bottom: 0,
                        top: 0
                    },
                    tick: {
                        count: 4,
                        values: [0, 25, 50, 75, 100],
                        format: d3.format(',')
                    }
                },
                x: {
                    padding: {
                        right: 0,
                        left: 0
                    },
                    type: 'category',
                    categories: ["Biden","Sanders","Klobuchar","Warren ","Buttigieg","Yang","Gabbard","Booker","Williamson","Bloomberg","Steyer","Bennet","Delaney","Patrick"],
                    tick: {
                        multiline: false
                    }
                }
            }
        });

    }
}

export {
    Chart as
    default
}