import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import InputHex from './InputHex';

const mockProps = {
  value: '#654321',
};

test('renders UI correctly', () => {
  const {container} = render(<InputHex {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      font-family: 'Poppins';
      font-size: 1.3393rem;
      font-weight: 300;
      background-color: #654321;
      border-color: currentColor;
      border-style: solid;
      border-width: 1px;
      border-radius: 100%;
      color: inherit;
      height: 110px;
      text-align: center;
      width: 110px;
    }

    .c0:active,
    .c0:hover,
    .c0:focus {
      border-width: 2px;
      outline: none;
    }

    <div>
      <input
        autocomplete="off"
        class="c0"
        type="text"
        value="#654321"
      />
    </div>
  `);
});

test('changes the background-color property by the value prop', () => {
  const newHexValue = '#123456';
  render(<InputHex data-testid="input" {...mockProps} value={newHexValue} />);
  expect(screen.getByTestId('input')).toHaveStyle(
    `background-color: ${newHexValue}`,
  );
});
// Accessibility test is skipped as rendering the input element only returns the error message "Form elements must have labels (label)"
