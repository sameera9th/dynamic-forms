import React from 'react';
import { render } from '@testing-library/react';
import { RadioButton } from './index';


describe('<RadioButton />', () => {

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('renders', () => {
    it('should render successfully with basic props', () => {
      render(<RadioButton items={["Male", "Female"]} />)
    });

  });

});