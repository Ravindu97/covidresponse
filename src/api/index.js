import axios from 'axios';

const URL = "https://www.hpb.health.gov.lk/api/get-current-statistical";

export const fetchData = async () => {

    try {

        const { data: { data } } = await axios.get(URL);

        return data;


    } catch (error) {

    }

}


