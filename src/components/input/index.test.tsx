import React from 'react';
import { render } from '@testing-library/react';
import { Input } from './index';


describe('<Input />', () => {
  
    beforeEach(() => {
      jest.resetAllMocks();
    });
  
    describe('renders', () => {
      it('should render successfully with basic props', () => {
        render(<Input variant="outlined" value="sameera@grr.la" error={false}/>)
      });

    });

});