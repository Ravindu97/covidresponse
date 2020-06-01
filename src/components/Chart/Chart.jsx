import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';

const Chart = ({ data: { global_deaths, global_new_cases, global_recovered, global_total_cases, global_new_deaths, local_total_cases, local_recovered, local_deaths, local_new_cases, local_new_deaths, local_total_number_of_individuals_in_hospitals } }) => {


    // barchart showing the details of the local covid 19 situation

    const doughChartGlobal = (
        global_deaths
            ? (<Doughnut

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
                    title: { display: true, text: 'Global Cumulative Data to date' }
                }}


            />

            ) : null
    )



    // chartShowing the situation globally

    const doughChartLocal = (
        global_deaths
            ? (<Doughnut

                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                        borderWidth: 2,
                        data: [local_total_cases, local_recovered, local_deaths]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: 'Local Cumulative data to date' }
                }}


            />

            ) : null
    )


    // bar Chart to display the whole situation in Globally


    const barChartGlobal = (
        global_deaths
            ? (<Bar

                data={{
                    labels: ['Infected-Total', 'infected-New', 'Global Recovered', 'Total Deaths', 'New Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgba(255, 159, 64, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
                        borderWidth: 2,
                        data: [global_total_cases, global_new_cases, global_recovered, local_deaths, local_new_deaths,]
                    }]
                }}
                options={{
                    legend: { display: true },
                    title: { display: true, text: 'Global Cumulative vs present data' }
                }}


            />

            ) : null
    )


    const barChartlocal = (
        global_deaths
            ? (<Bar

                data={{
                    labels: ['Infected-Total', 'infected-New', 'Recovered', 'Total Deaths', 'New Deaths', 'Hospitalized'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgba(255, 159, 64, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(164, 29, 194, 0.6)'],
                        borderWidth: 2,
                        data: [local_total_cases, local_new_cases, local_recovered, global_deaths, global_new_deaths, local_total_number_of_individuals_in_hospitals]
                    }]
                }}
                options={{
                    legend: { display: true },
                    title: { display: true, text: 'Global Cumulative vs present data' }
                }}


            />

            ) : null
    )





    return (
        <div>
            {doughChartGlobal}
            {doughChartLocal}
            {barChartGlobal}

        </div>

    )



}

export default Chart;










