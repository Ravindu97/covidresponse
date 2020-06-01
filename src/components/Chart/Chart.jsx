import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = ({ data: { global_deaths, global_recovered, global_total_cases } }) => {



    const barChart = (
        global_deaths
            ? (<Bar

                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                        data: [global_total_cases, global_recovered, global_deaths]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: 'Local sate of COVID 19' }
                }}


            />

            ) : null
    )





    return (
        <div>
            {barChart}
        </div>

    )



}

export default Chart;










