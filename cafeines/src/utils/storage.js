export const getToken = () => {
    return window.localStorage.getItem("sb-haevpaqyrynzzelegwxr-auth-token")
}

export const setAlergiasStorage = (alergias) => {
    window.localStorage.setItem("alergias", JSON.stringify(alergias));
}

export const getAlergiasFromStorage = () => {
    if(window.localStorage.getItem("alergias")){
        return JSON.parse(window.localStorage.getItem("alergias"));
    }else{
        return "";
    }
}