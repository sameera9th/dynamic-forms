
import axios from "axios";
import FormFieldService from './form-fields';
import { fields } from "../../__mock__/fieldResponse";

jest.mock('axios');
describe('getFormFields', () => {
    it('getFormFields successfully data from an API', async () => {

        const mock = jest.spyOn(axios, 'get');
        mock.mockReturnValueOnce(Promise.resolve({ data: fields }));

        const result = await FormFieldService.getFormFields();

        expect(mock).toHaveBeenCalled();
        expect(result.data).toBe(fields);

        mock.mockRestore();
    });
});