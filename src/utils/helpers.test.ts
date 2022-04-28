
import { 
  getRoute
} from './helpers'

describe('helpers', () => {
    it('get complete URL if passes end route', async () => {
        const route = getRoute('forms');
        expect(route).toMatch('https://ansible-template-engine.herokuapp.com/forms');
    });
});