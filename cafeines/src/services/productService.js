import { API, API_KEY } from "../utils/constantes";

export const getAllProducts = async () => {
    const url =  `${API}/products?select=*`

    return fetch(url, {
        method: 'GET',
        headers: {
            'apikey': API_KEY,
        }
    }).then((res) => res.json())
    .then((res) => console.log(res))
    .catch(error => console.log(error))
}