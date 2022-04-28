import rootReducer, { ReduxStateTypes } from './index';

describe('root reducer', () => {
    it('should return the rootReducer', () => {
        expect(rootReducer({} as ReduxStateTypes, { type: undefined })).toMatchSnapshot();
    });
});
