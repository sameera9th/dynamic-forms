
import axios from "axios";
import FormFieldService from './form-fields';

jest.mock('axios');
describe('getFormFields', () => {
    it('getFormFields successfully data from an API', async () => {

        const data = [
            { "label": "Email address", "type": "email", "isOptional": false, "isHidden": false },
            { "label": "Gender", "type": "radio", "value": ["M (Male)", "F (Female)", "X (Indeterminate/Intersex/Unspecified)"], "isOptional": true },
            { "label": "State", "type": "select", "value": ["NSW", "QLD", "SA", "TAS", "VIC", "WA", "NT", "ACT"], "default": "ACT" },
            { "label": "Contact number", "type": "telephone" },
            { "type": "hidden", "value": 1651067294652, "isHidden": true }
        ];

        const mock = jest.spyOn(axios, 'get');
        mock.mockReturnValueOnce(Promise.resolve({ data }));

        const result = await FormFieldService.getFormFields();

        expect(mock).toHaveBeenCalled();
        expect(result.data).toBe(data);

        mock.mockRestore();
    });
});