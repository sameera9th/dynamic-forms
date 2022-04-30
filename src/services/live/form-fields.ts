import axios from 'axios';
import config from '../configs';
import { Fields } from '../../interfaces/fields';
import { getRoute } from '../../utils/helpers';

class FormFieldService {
    getFormFields() {
        // This was added to handle CORS issue. (Proxy)
        return axios.get<Fields[]>(`https://cors-anywhere.herokuapp.com/${getRoute(config.getFormFields)}`);
    }
}

export default new FormFieldService();
