import * as d3 from 'd3';
import * as c3 from 'c3';

class Chart1 {

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
            left: 65,
        };

        self.chartCounts = c3.generate({
            bindto: self.target,
            padding: padding,
            data: {
                columns: [
                    ['Index',100,92,89,61,39,36,33,17,11,8,6,6,0,0]
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
                    categories: ['Sanders','Biden','Yang','Klobuchar','Gabbard','Buttigieg','Warren','Steyer','Williamson','Bloomberg','Booker','Delaney','Patrick','Bennet'],
                    tick: {
                        multiline: false
                    }
                }
            }
        });

    }
}

export {
    Chart1 as
    default
}