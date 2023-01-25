export const getToken = () => {
    return window.localStorage.getItem("sb-haevpaqyrynzzelegwxr-auth-token")
}

export const setAlergias = (alergias) => {
    window.localStorage.setItem("alergias", JSON.stringify(alergias));
}

export const getAlergias = () => {
    return JSON.parse(window.localStorage.getItem("alergias") || []);
}