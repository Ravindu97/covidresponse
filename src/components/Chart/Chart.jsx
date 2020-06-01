import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Charts extends Component {


    state = {
        chartData: {}
    }

    componentWillMount() {
        this.getChartData();
    }




    getChartData() {
        this.setState({

            chartData: {
                labels: ['Active Cases', 'recovered', 'Deaths'],
                datasets: [
                    {
                        label: 'People',
                        data: [{ 25}, 35, 40],
                        backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)']
                    }
                ]
            }


        })
    }



    render() {


        const { data: { local_active_cases, local_recovered, local_deaths } } = this.props;








        return (

            <div>



                <Bar

                    data={this.state.chartData}
                    options={{}}


                />

            </div>



        )

    }


}

export default Charts;
















// const dataSet = {
//     chartData: {
//         labels: ['Active Cases', 'recovered', 'Deaths'],
//         datasets: [
//             {
//                 label: 'People',
//                 data: [25, 35, 40],
//                 backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)']
//             }
//         ]
//     }
// }



// const Chart = () => {


//     return (
//         <div>

//             <Bar

//                 data={dataSet}
//                 options={{}}


//             />

//         </div>
//     )


// }
// export default Chart;




