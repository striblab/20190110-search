import * as d3 from 'd3';
import * as c3 from 'c3';

class Chart { 

    constructor(target, candidate) {
      this.target = target;
      this.candidate = candidate;
      this.chartCounts = null;
    }
  
    render() {
      var self = this;
  
      var  padding = {
            top: 20,
            right: 20,
            bottom: 20,
            left: 30,
        };

    // var dataCandidates = [
    //     ['Amy Klobuchar',33,91,100,100,60,100,100,64,92,50,46,60,31,9,29,21,22,25,47,34,30,43,29,27,35,44,32,53,77,65,45,27,32,21,32,41,34,44,21,18,27,60,43,40,27,34,58,28,32,35,81,61,61],
    //     ['Andrew Yang',4,4,11,7,8,2,3,6,26,25,53,57,29,7,22,21,9,19,29,26,9,31,21,22,16,57,41,44,33,44,61,46,97,28,42,61,68,96,41,30,36,47,24,44,31,66,48,27,40,48,79,55,89],
    //     ['Bernie Sanders',27,50,39,91,53,20,3,100,100,100,99,98,39,22,61,50,42,38,34,51,38,72,79,47,39,73,56,72,100,100,57,59,100,62,100,83,69,75,32,100,89,61,72,100,100,84,52,51,41,61,74,100,100],
    //     ['Cory Booker',4,7,14,11,100,16,4,7,14,12,22,32,10,1,15,4,4,6,11,7,5,13,8,6,12,32,17,9,9,26,23,10,12,3,2,14,18,18,5,7,4,12,7,15,5,7,16,6,7,12,13,2,6],
    //     ['Deval Patrick',0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,1,2,0,66,9,5,2,2,2,2,0],
    //     ['Elizabeth Warren',100,91,54,66,55,28,9,10,13,22,21,28,17,6,10,9,28,16,24,31,32,33,63,41,45,58,37,63,67,62,42,28,89,100,62,57,68,91,49,53,100,86,51,56,45,88,36,25,21,42,61,40,33],
    //     ['Joe Biden',20,39,29,66,32,8,4,19,41,49,100,88,49,100,73,20,100,100,100,100,69,100,100,100,100,87,100,100,79,91,76,100,97,29,60,100,100,100,100,54,98,68,49,85,51,100,92,39,100,100,100,83,92],
    //     ['John Delaney',0,4,5,5,5,1,1,1,0,2,4,3,2,1,0,0,1,3,0,3,0,3,8,3,2,15,3,5,7,12,23,5,4,5,6,9,3,2,3,1,0,2,3,3,1,3,3,1,2,0,2,0,6],
    //     ['Marianne Williamson',2,4,7,5,13,1,1,3,6,5,4,3,2,0,3,2,2,3,8,8,10,7,10,10,11,100,59,30,21,29,79,15,11,5,9,13,6,11,3,4,5,6,4,4,3,4,3,3,3,6,2,2,11],
    //     ['Michael Bennet',2,13,7,45,8,0,0,2,4,16,5,3,3,1,4,0,2,5,6,3,3,7,4,2,5,12,8,12,23,12,9,4,9,3,6,3,4,4,3,1,2,6,12,4,7,7,1,3,2,3,4,3,0],
    //     ['Michael Bloomberg',2,4,11,9,6,1,1,0,2,4,3,6,2,1,4,0,0,0,0,0,5,3,0,0,2,1,0,9,5,0,1,2,3,1,0,0,0,2,2,2,0,6,8,4,67,61,9,100,44,51,42,29,8],
    //     ['Pete Buttigieg',2,0,0,25,13,3,1,4,8,10,55,100,100,44,100,100,48,53,43,73,100,74,69,38,42,88,69,65,70,44,43,30,30,14,23,36,38,26,15,13,19,51,45,35,35,69,100,44,37,67,60,63,36],
    //     ['Tom Steyer',0,13,0,0,0,0,0,1,0,6,3,0,2,1,2,0,1,0,0,0,5,3,4,2,2,1,0,67,28,18,3,13,18,2,10,3,3,4,3,4,7,28,10,8,5,15,16,24,13,6,31,16,17],
    //     ['Tulsi Gabbard',2,100,66,45,21,7,3,7,18,7,18,17,7,1,13,3,5,1,9,55,20,7,15,16,8,71,29,30,16,68,100,45,31,9,34,14,18,25,17,5,11,100,100,47,33,30,52,36,28,14,70,28,39]
    // ];

    // var dataTrends = [
    //     ['trend',33,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,61],
    //     ['trend',4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,89],
    //     ['trend',27,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,100],
    //     ['trend',4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,6],
    //     ['trend',0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0],
    //     ['trend',100,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,33],
    //     ['trend',20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,92],
    //     ['trend',0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,6],
    //     ['trend',2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11],
    //     ['trend',2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0],
    //     ['trend',2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,8],
    //     ['trend',2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,36],
    //     ['trend',0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,17],
    //     ['trend',2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,39]
    // ];

    var dataCandidates = [
        ['Amy Klobuchar',33,60,92,9,25,43,32,45,32,18,40,28,61],
        ['Andrew Yang',4,8,26,7,19,31,41,61,42,30,44,27,89],
        ['Bernie Sanders',27,53,100,22,38,72,56,57,100,100,100,51,100],
        ['Cory Booker',4,100,14,1,6,13,17,23,2,7,15,6,6],
        ['Deval Patrick',0,0,2,0,0,0,0,0,0,0,2,5,0],
        ['Elizabeth Warren',100,55,13,6,16,33,37,42,62,53,56,25,33],
        ['Joe Biden',20,32,41,100,100,100,100,76,60,54,85,39,92],
        ['John Delaney',0,5,0,1,3,3,3,23,6,1,3,1,6],
        ['Marianne Williamson',2,13,6,0,3,7,59,79,9,4,4,3,11],
        ['Michael Bennet',2,8,4,1,5,7,8,9,6,1,4,3,0],
        ['Michael Bloomberg',2,6,2,1,0,3,0,1,0,2,4,100,8],
        ['Pete Buttigieg',2,13,8,44,53,74,69,43,23,13,35,44,36],
        ['Tom Steyer',0,0,0,1,0,3,0,3,10,4,8,24,17],
        ['Tulsi Gabbard',2,21,18,1,1,7,29,100,34,5,47,36,39]
    ];

    var dataTrends = [
        ['trend',33,null,null,null,null,null,null,null,null,null,null,null,61],
        ['trend',4,null,null,null,null,null,null,null,null,null,null,null,89],
        ['trend',27,null,null,null,null,null,null,null,null,null,null,null,100],
        ['trend',4,null,null,null,null,null,null,null,null,null,null,null,6],
        ['trend',0,null,null,null,null,null,null,null,null,null,null,null,0],
        ['trend',100,null,null,null,null,null,null,null,null,null,null,null,33],
        ['trend',20,null,null,null,null,null,null,null,null,null,null,null,92],
        ['trend',0,null,null,null,null,null,null,null,null,null,null,null,6],
        ['trend',2,null,null,null,null,null,null,null,null,null,null,null,11],
        ['trend',2,null,null,null,null,null,null,null,null,null,null,null,0],
        ['trend',2,null,null,null,null,null,null,null,null,null,null,null,8],
        ['trend',2,null,null,null,null,null,null,null,null,null,null,null,36],
        ['trend',0,null,null,null,null,null,null,null,null,null,null,null,17],
        ['trend',2,null,null,null,null,null,null,null,null,null,null,null,39]
    ];

    console.log(dataCandidates)

    var colors = ['#80ADAD', '#636363', '#8CBF82', '#7F98AA', '#aaaaaa', '#7D739C', '#b37862', '#aaaaaa', '#aaaaaa', '#aaaaaa', '#aaaaaa', '#DEA381', '#aaaaaa', '#9E403C'];
      
      self.chartCounts = c3.generate({
          bindto: self.target,
          padding: padding,
          data: {
                columns: [
                    dataCandidates[self.candidate],
                    dataTrends[self.candidate]
                ],
            type: 'spline',
            colors: {
                'Amy Klobuchar': colors[self.candidate],
                'Andrew Yang': colors[self.candidate],
                'Bernie Sanders': colors[self.candidate],
                'Cory Booker': colors[self.candidate],
                'Deval Patrick': colors[self.candidate],
                'Elizabeth Warren': colors[self.candidate],
                'Joe Biden': colors[self.candidate],
                'John Delaney': colors[self.candidate],
                'Marianne Williamson': colors[self.candidate],
                'Michael Bennet': colors[self.candidate],
                'Michael Bloomberg': colors[self.candidate],
                'Pete Buttigieg': colors[self.candidate],
                'Tom Steyer': colors[self.candidate],
                'Tulsi Gabbard': colors[self.candidate],
                'trend': '#333333'
            },
          },
            legend: {
              show: false
            },
            line: {
              connectNull: true
            },
            point: {
                show: true, 
                r: function(d) { if (d.x == 12 || d.x == 0) { return 4; } else { return 0; } }
            },
            axis: {
                  // rotated: true,
                  y: {
                        max: 100,
                        min: 0,
                        padding: {bottom: 0, top: 20},
                        tick: {
                         count: 4,
                         values: [0,25,50,75,100],
                         format: d3.format(',.0f')
                        }
                    },
                x: {
                    show:false,
                  type: 'category',
                //   categories: ['Dec. 30, 2018','Jan. 06, 2019','Jan. 13, 2019','Jan. 20, 2019','Jan. 27, 2019','Feb. 03, 2019','Feb. 10, 2019','Feb. 17, 2019','Feb. 24, 2019','Mar. 03, 2019','Mar. 10, 2019','Mar. 17, 2019','Mar. 24, 2019','Mar. 31, 2019','Apr. 07, 2019','Apr. 14, 2019','Apr. 21, 2019','Apr. 28, 2019','May 05, 2019','May 12, 2019','May 19, 2019','May 26, 2019','Jun. 02, 2019','Jun. 09, 2019','Jun. 16, 2019','Jun. 23, 2019','Jun. 30, 2019','Jul. 07, 2019','Jul. 14, 2019','Jul. 21, 2019','Jul. 28, 2019','Aug. 04, 2019','Aug. 11, 2019','Aug. 18, 2019','Aug. 25, 2019','Sep. 01, 2019','Sep. 08, 2019','Sep. 15, 2019','Sep. 22, 2019','Sep. 29, 2019','Oct. 06, 2019','Oct. 13, 2019','Oct. 20, 2019','Oct. 27, 2019','Nov. 03, 2019','Nov. 10, 2019','Nov. 17, 2019','Nov. 24, 2019','Dec. 01, 2019','Dec. 08, 2019','Dec. 15, 2019','Dec. 22, 2019','Dec. 29, 2019'],
                    categories: ['30-Dec-18','27-Jan-19','24-Feb-19','31-Mar-19','28-Apr-19','26-May-19','30-Jun-19','28-Jul-19','25-Aug-19','29-Sep-19','27-Oct-19','24-Nov-19','29-Dec-19'],
                  padding: {right: 0, left: 0},
                        tick: {
                            count: 2,
                            // culling: {
                            //     max: 10
                            // },
                         rotate: -75,
                         multiline: false
                        },
                        height: 60
                }
            },
          grid: {
             focus:{
                  show:false
                },
            }
    });
  
    }
  }
  
  export { Chart as default }