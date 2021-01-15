import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import Label from './Label';

const mockProps = {};

describe('renders UI correctly:', () => {
  test('with the numberLarge prop', () => {
    const {container} = render(<Label numberLarge {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-family: 'Poppins';
        font-size: 1.7857rem;
        font-weight: 300;
        color: inherit;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          font-size: 2.1429rem;
        }
      }

      <div>
        <label
          class="c0"
        />
      </div>
    `);
  });

  test('without the numberLarge prop', () => {
    const {container} = render(<Label {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-family: 'Poppins';
        font-size: 0.8929rem;
        font-weight: 300;
        line-height: 1;
        color: inherit;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          font-size: 1.0714rem;
        }
      }

      <div>
        <label
          class="c0"
        />
      </div>
    `);
  });
});
