import http from 'axios'
import {logger} from '../util/logger'



export const getHospitals = async () => {
    try {

        const response = await http.get(
            `http://localhost:4000/api/billingo/hospitals/f53c7090-c0aa-11ec-9c9f-0adb4fd9a356`
        );
        return response

    } catch(err) {
        logger.error(new Error("hospital error"), JSON.stringify(err.response));
        return err.response
    }
};

export const getStockValue = async () => {
    try {
        const response = await http.get("http://localhost:4000/api/stock");
        return response

    } catch(err) {
        logger.error(new Error("stock error"), JSON.stringify(err.response));
        return err.response
    }
};



