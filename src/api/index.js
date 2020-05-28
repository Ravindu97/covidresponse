import axios from 'axios';

const URL = "https://www.hpb.health.gov.lk/api/get-current-statistical";

export const fetchData = async () => {

    try {

        const response = await axios.get(URL);

        return response;

    } catch (error) {

    }


}


// daily_pcr_testing_data, global_deaths, global_new_cases, global_new_deaths, global_recovered, global_total_cases, hospital_data, local_active_cases, local_deaths, local_new_cases, local_new_deaths, local_recovered, local_total_cases, local_total_number_of_individuals_in_hospitals, total_pcr_testing_count, update_date_time

// const modifiedData = {
//     daily_pcr_testing_data,
//     global_deaths,
//     global_new_cases,
//     global_new_deaths,
//     global_recovered,
//     global_total_cases,
//     hospital_data,
//     local_active_cases,
//     local_deaths,
//     local_new_cases,
//     local_new_deaths,
//     local_recovered,
//     local_total_cases,
//     local_total_number_of_individuals_in_hospitals,
//     total_pcr_testing_count,
//     update_date_time
// }

// return modifiedData;