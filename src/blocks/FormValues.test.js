import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import FormValues from './FormValues';

const mockProps = {};

// DELETE THIS LINE
test('renders UI correctly', () => {
  const {container} = render(
    <FormValues {...mockProps}>
      <FormValues.Wrapper>
        <FormValues.Label>R</FormValues.Label>
        <FormValues.InputNumber value={255} />
      </FormValues.Wrapper>
    </FormValues>,
  );
  expect(container).toMatchInlineSnapshot(`
    .c4 {
      font-family: 'Poppins';
      font-size: 1.3393rem;
      font-weight: 300;
      background-color: inherit;
      border-color: currentColor;
      border-style: solid;
      border-width: 1px;
      border-radius: 100%;
      color: inherit;
      height: 50px;
      padding-top: 8px;
      text-align: center;
      width: 50px;
    }

    .c4:active,
    .c4:hover,
    .c4:focus {
      border-width: 2px;
      outline: none;
    }

    .c2 {
      font-family: 'Poppins';
      font-size: 0.8929rem;
      font-weight: 300;
      line-height: 1;
      -webkit-transform: translateX(-0.08em) translateY(-0.1375em);
      -ms-transform: translateX(-0.08em) translateY(-0.1375em);
      transform: translateX(-0.08em) translateY(-0.1375em);
      color: inherit;
    }

    .c0 {
      background-color: inherit;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      width: 160px;
    }

    .c1 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      height: 50px;
      position: relative;
      width: 50px;
    }

    .c3 {
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      align-self: center;
      position: absolute;
      top: 6px;
      -webkit-transform: translateX(0) translateY(-0.1375em);
      -ms-transform: translateX(0) translateY(-0.1375em);
      transform: translateX(0) translateY(-0.1375em);
    }

    <div>
      <form
        class="c0"
      >
        <div
          class="c1"
        >
          <label
            class="c2 c3"
          >
            R
          </label>
          <input
            autocomplete="off"
            class="c4"
            type="text"
            value="255"
          />
        </div>
      </form>
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(<FormValues {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
