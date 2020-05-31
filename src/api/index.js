import axios from 'axios';

const URL = "https://www.hpb.health.gov.lk/api/get-current-statistical";

export const fetchData = async () => {

    try {

        const response = await axios.get(URL);
        return response;

    } catch (error) {

    }

}


