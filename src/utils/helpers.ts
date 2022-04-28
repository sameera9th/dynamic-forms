import config from '../services/configs';

export const getRoute = (route: string): string => {
    return `${config.baseURL}/${route}`
}