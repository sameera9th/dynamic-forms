import axios from 'axios';
import config from '../configs';
import { Fields } from '../../interfaces/fields';
import { getRoute } from '../../utils/helpers';

class FormFieldService {
    getFormFields() {
        return axios.get<Fields[]>(getRoute(config.getFormFields));
    }
}

export default new FormFieldService();
