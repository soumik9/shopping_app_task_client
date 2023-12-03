import axios from 'axios';

// main url
const mainUrl = import.meta.env.VITE_BACKEND_URL;

// get method
export const axiosGET = async (url, token) => {

    const response = await axios.get(`${mainUrl}${url}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    return response.data.data;
}

// post method
export const axiosPOST = async (url, data, setLoad, token) => {
    setLoad(true);
    let response;
    if (token) {
        response = await axios.post(`${mainUrl}${url}`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } else {
        response = await axios.post(`${mainUrl}${url}`, data);
    }

    setLoad(false);
    return response.data;
}

// post method withoutLoad
export const axiosPOSTWithoutLoad = async (url, data, token) => {

    const response = await axios.post(`${mainUrl}${url}`, data, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    return response.data;
}

// add method
// export const axiosPatch = async (url, data, setLoad, token) => {
//     setLoad(true);
//     let response;
//     if (token) {
//         response = await axios.post(`${mainUrl}${url}`, data, {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         });
//     } else {
//         response = await axios.post(`${mainUrl}${url}`, data);
//     }

//     setLoad(false);
//     return response.data;
// }