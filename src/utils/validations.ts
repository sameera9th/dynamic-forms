/* eslint-disable no-useless-escape */
export const validateEmail = (mail: string) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
    }
    return false;
}

export const validatePhoneNumber = (phone: string) => {
    const phoneno = /^\d{10}$/;
    if (phone.match(phoneno)) {
        return true
    }
    return false;
}
