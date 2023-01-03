import { API, API_KEY } from "../utils/constantes";

export const getAllProducts = async () => {
    const url =  `${API}/products?select=*`


    return fetch(url, {
        method: 'GET',
        headers: {
            'apikey': API_KEY,
            //Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhZXZwYXF5cnluenplbGVnd3hyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIzMzUzNDUsImV4cCI6MTk4NzkxMTM0NX0.MAj4dfAECVVM81_uC5EwY__dr2TPlOGlm2MFcZteMow"
        }
    }).then((res) => res.json())
    .then((res) => console.log(res))
    .catch(error => console.log(error))
}