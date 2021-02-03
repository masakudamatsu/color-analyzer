import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import Footer from './Footer';
import {header} from 'src/utils/designSpecs';

const mockProps = {};

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<Footer {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: rgb(10,10,10);
        border-top: 1px solid rgb(100,100,100);
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 100%;
      }

      @media only screen and (min-width:923px) and (min-height:1025px) {
        .c0 {
          bottom: 0;
          position: fixed;
        }
      }

      @media only screen and (min-width:1326px) and (min-height:739px) {
        .c0 {
          bottom: 0;
          position: fixed;
        }
      }

      <div>
        <footer
          class="c0"
        />
      </div>
    `);
  });
  test('InnerWrapper', () => {
    const {container} = render(<Footer.InnerWrapper {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding-bottom: 17.549999999999997px;
        padding-top: 17.549999999999997px;
        width: 303px;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          padding-bottom: 21.059999999999995px;
          padding-top: 21.059999999999995px;
          width: 363.59999999999997px;
        }
      }

      @media only screen and (min-width:923px) {
        .c0 {
          -webkit-box-pack: end;
          -webkit-justify-content: flex-end;
          -ms-flex-pack: end;
          justify-content: flex-end;
          padding-left: 64px;
          padding-right: 40px;
          width: 922.5999999999999px;
        }
      }

      @media only screen and (min-width:1326px) {
        .c0 {
          -webkit-box-pack: end;
          -webkit-justify-content: flex-end;
          -ms-flex-pack: end;
          justify-content: flex-end;
          padding-left: 40px;
          width: 1326.1999999999998px;
        }
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
  test('Paragraph', () => {
    const {container} = render(<Footer.Paragraph {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-family: 'Poppins',Verdana,sans-serif;
        font-size: 0.8929rem;
        font-weight: 300;
        line-height: 1;
        margin-bottom: -0.28em;
        -webkit-transform: translateX(-0.08em) translateY(-0.1375em);
        -ms-transform: translateX(-0.08em) translateY(-0.1375em);
        transform: translateX(-0.08em) translateY(-0.1375em);
        text-align: left;
      }

      .c1 {
        color: rgb(173,173,173);
        font-family: 'Poppins',Verdana,sans-serif;
        font-size: 0.8929rem;
        font-weight: 300;
        line-height: 1.365;
        margin-bottom: -0.28em;
        -webkit-transform: translateY(-0.1375em);
        -ms-transform: translateY(-0.1375em);
        transform: translateY(-0.1375em);
      }

      @media only screen and (min-width:728px) {
        .c0 {
          font-size: 1.0714rem;
        }
      }

      @media only screen and (min-width:728px) {
        .c1 {
          font-size: 1.0714rem;
        }
      }

      <div>
        <p
          class="c0 c1"
        />
      </div>
    `);
  });
});
