import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import ChromaLuminanceForm from 'src/components/ChromaLuminanceForm';

const mockProps = {
  type: 'chroma',
  value: 1,
};

afterEach(() => {
  window.localStorage.clear();
});

test('displays the value specified as the value prop', () => {
  const {rerender} = render(<ChromaLuminanceForm {...mockProps} />);
  expect(screen.getByLabelText(/chroma/i)).toHaveAttribute(
    'value',
    mockProps.value.toString(),
  );

  const newValue = 21;
  rerender(<ChromaLuminanceForm {...mockProps} value={newValue} />);
  expect(screen.getByLabelText(/chroma/i)).toHaveAttribute(
    'value',
    newValue.toString(),
  );
});

describe('renders UI correctly by type prop:', () => {
  test('chroma', () => {
    const {container} = render(<ChromaLuminanceForm {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c6 {
        background-color: inherit;
        border-color: currentColor;
        border-style: solid;
        border-width: 1px;
        color: inherit;
        font-family: 'Poppins';
        font-size: 5.3571rem;
        font-weight: 100;
        line-height: 1;
        border: none;
        height: 100px;
        padding-right: 20px;
        text-align: right;
        width: 100%;
      }

      .c6:active,
      .c6:hover,
      .c6:focus {
        border-width: 2px;
        outline: none;
      }

      .c1 {
        font-family: 'Poppins';
        font-size: 1.7857rem;
        font-weight: 300;
        margin-bottom: -0.771em;
        -webkit-transform: translateX(-0.065em) translateY(-0.37em);
        -ms-transform: translateX(-0.065em) translateY(-0.37em);
        transform: translateX(-0.065em) translateY(-0.37em);
        color: inherit;
      }

      .c4 {
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

      .c9 {
        font-family: 'Poppins';
        font-size: 0.8929rem;
        font-weight: 300;
        line-height: 1;
        margin-bottom: -0.28em;
        -webkit-transform: translateX(-0.08em) translateY(-0.1375em);
        -ms-transform: translateX(-0.08em) translateY(-0.1375em);
        transform: translateX(-0.08em) translateY(-0.1375em);
        text-align: right;
      }

      .c7 {
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

      .c5 {
        position: relative;
      }

      .c8 {
        position: absolute;
        right: 0;
        top: 60px;
      }

      .c3 {
        height: 10px;
        width: 100%;
      }

      .c10 {
        position: relative;
        top: 0.05em;
      }

      <div>
        <form
          class="c0"
        >
          <label
            class="c1 c2"
            for="chroma"
          >
            Chroma
          </label>
          <div
            class="c3"
            height="10px"
            width="100%"
          />
          <p
            class="c4"
            id="chroma-sublabel"
          >
            Pure hue share in the mix with gray
          </p>
          <div
            class="c5"
          >
            <input
              aria-describedby="chroma-sublabel chroma-helper"
              autocomplete="off"
              class="c6"
              id="chroma"
              type="text"
              value="1"
            />
            <span
              class="c7 c8"
            >
              %
            </span>
          </div>
          <p
            class="c9"
            id="chroma-helper"
          >
            0% for gray 
            <span
              class="c10"
            >
              –
            </span>
             100% for pure hue
          </p>
        </form>
      </div>
    `);
  });
  test('luminance', () => {
    const {container} = render(
      <ChromaLuminanceForm {...mockProps} type="luminance" />,
    );
    expect(container).toMatchInlineSnapshot(`
      .c6 {
        background-color: inherit;
        border-color: currentColor;
        border-style: solid;
        border-width: 1px;
        color: inherit;
        font-family: 'Poppins';
        font-size: 5.3571rem;
        font-weight: 100;
        line-height: 1;
        border: none;
        height: 100px;
        padding-right: 20px;
        text-align: right;
        width: 100%;
      }

      .c6:active,
      .c6:hover,
      .c6:focus {
        border-width: 2px;
        outline: none;
      }

      .c1 {
        font-family: 'Poppins';
        font-size: 1.7857rem;
        font-weight: 300;
        margin-bottom: -0.771em;
        -webkit-transform: translateX(-0.065em) translateY(-0.37em);
        -ms-transform: translateX(-0.065em) translateY(-0.37em);
        transform: translateX(-0.065em) translateY(-0.37em);
        color: inherit;
      }

      .c4 {
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

      .c10 {
        font-family: 'Poppins';
        font-size: 0.8929rem;
        font-weight: 300;
        line-height: 1;
        margin-bottom: -0.28em;
        -webkit-transform: translateX(-0.08em) translateY(-0.1375em);
        -ms-transform: translateX(-0.08em) translateY(-0.1375em);
        transform: translateX(-0.08em) translateY(-0.1375em);
        text-align: right;
      }

      .c7 {
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

      .c5 {
        position: relative;
      }

      .c8 {
        position: absolute;
        right: 0;
        top: 60px;
      }

      .c3 {
        height: 10px;
        width: 100%;
      }

      .c9 {
        position: relative;
        bottom: 0.1em;
        right: 0.2em;
      }

      .c11 {
        -webkit-letter-spacing: 0.1em;
        -moz-letter-spacing: 0.1em;
        -ms-letter-spacing: 0.1em;
        letter-spacing: 0.1em;
      }

      .c12 {
        position: relative;
        top: 0.05em;
      }

      <div>
        <form
          class="c0"
        >
          <label
            class="c1 c2"
            for="luminance"
          >
            Luminance
          </label>
          <div
            class="c3"
            height="10px"
            width="100%"
          />
          <p
            class="c4"
            id="luminance-sublabel"
          >
            Contrast ratio against pure black
          </p>
          <div
            class="c5"
          >
            <input
              aria-describedby="luminance-sublabel luminance-helper"
              autocomplete="off"
              class="c6"
              id="luminance"
              type="text"
              value="1"
            />
            <span
              class="c7 c8"
            >
              <span
                class="c9"
              >
                :
              </span>
              1
            </span>
          </div>
          <p
            class="c10"
            id="luminance-helper"
          >
            <span
              class="c11"
            >
              1:1
            </span>
             for black 
            <span
              class="c12"
            >
              –
            </span>
             
            <span
              class="c11"
            >
              21:1
            </span>
             for white
          </p>
        </form>
      </div>
    `);
  });
});

test('is accessible', async () => {
  const {container} = render(<ChromaLuminanceForm {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});