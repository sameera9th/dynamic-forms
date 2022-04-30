import React from 'react';
import { render } from '@testing-library/react';
import { Dropdown } from './index';


describe('<Dropdown />', () => {
  
    beforeEach(() => {
      jest.resetAllMocks();
    });
  
    describe('renders', () => {
      it('should render successfully with basic props', () => {
        render(<Dropdown label="State" value="LA" items={["NSW", "QLA", "LA"]}/>)
      });

    });

});