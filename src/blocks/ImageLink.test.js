import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import ImageLink from './ImageLink';

const mockProps = {};

describe('renders UI correctly', () => {
  test('when no prop is provided', () => {
    const {container} = render(<ImageLink {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
          .c0 {
            height: 30px;
            width: 30px;
            display: none;
          }

          @media only screen and (min-width:923px) {
            .c0 {
              display: inline-block;
            }
          }

          @media only screen and (min-width:1326px) {
            .c0 {
              display: inline-block;
            }
          }

          <div>
            <a
              class="c0"
            />
          </div>
      `);
  });
  test('when footer prop is provided', () => {
    const {container} = render(<ImageLink {...mockProps} footer />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: 30px;
        width: 30px;
        display: inline-block;
      }

      @media only screen and (min-width:923px) {
        .c0 {
          display: none;
        }
      }

      @media only screen and (min-width:1326px) {
        .c0 {
          display: none;
        }
      }

      <div>
        <a
          class="c0"
        />
      </div>
    `);
  });
});