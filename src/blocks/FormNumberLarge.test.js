import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import FormNumberLarge from './FormNumberLarge';

const mockProps = {};

// DELETE THIS LINE
test('renders UI correctly', () => {
  const {container} = render(
    <FormNumberLarge {...mockProps}>
      <FormNumberLarge.Label>Chroma</FormNumberLarge.Label>
      <FormNumberLarge.Paragraph>
        Chroma is different from saturation
      </FormNumberLarge.Paragraph>
      <FormNumberLarge.InnerWrapper>
        <FormNumberLarge.Input value={50} />
        <FormNumberLarge.Unit>%</FormNumberLarge.Unit>
      </FormNumberLarge.InnerWrapper>
    </FormNumberLarge>,
  );
  expect(container).toMatchInlineSnapshot(`
    .c5 {
      background-color: inherit;
      border-color: currentColor;
      border-style: solid;
      border-width: 1px;
      color: inherit;
      font-family: 'Poppins';
      font-size: 1.3393rem;
      font-weight: 300;
    }

    .c5:active,
    .c5:hover,
    .c5:focus {
      border-width: 2px;
      outline: none;
    }

    .c1 {
      font-family: 'Poppins';
      font-size: 0.8929rem;
      font-weight: 300;
      line-height: 1;
      margin-bottom: -0.28em;
      -webkit-transform: translateX(-0.08em) translateY(-0.1375em);
      -ms-transform: translateX(-0.08em) translateY(-0.1375em);
      transform: translateX(-0.08em) translateY(-0.1375em);
      color: inherit;
    }

    .c3 {
      font-family: 'Poppins';
      font-size: 0.8929rem;
      font-weight: 300;
      line-height: 1;
      margin-bottom: -0.28em;
      -webkit-transform: translateX(-0.08em) translateY(-0.1375em);
      -ms-transform: translateX(-0.08em) translateY(-0.1375em);
      transform: translateX(-0.08em) translateY(-0.1375em);
      text-align: left;
    }

    .c6 {
      font-family: 'Poppins';
      font-size: 1.7857rem;
      font-weight: 100;
      margin-bottom: -0.771em;
      -webkit-transform: translateX(-0.065em) translateY(-0.37em);
      -ms-transform: translateX(-0.065em) translateY(-0.37em);
      transform: translateX(-0.065em) translateY(-0.37em);
    }

    .c0 {
      background-color: inherit;
      width: auto;
    }

    .c2 {
      display: block;
    }

    .c4 {
      position: relative;
    }

    .c7 {
      position: absolute;
      right: 0;
      top: 60px;
    }

    <div>
      <form
        class="c0"
      >
        <label
          class="c1 c2"
        >
          Chroma
        </label>
        <p
          class="c3"
        >
          Chroma is different from saturation
        </p>
        <div
          class="c4"
        >
          <input
            autocomplete="off"
            class="c5"
            type="text"
            value="50"
          />
          <span
            class="c6 c7"
          >
            %
          </span>
        </div>
      </form>
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(<FormNumberLarge {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});