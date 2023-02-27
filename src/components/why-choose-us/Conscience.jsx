import { Button } from '@mui/material';
import React from 'react';
import Container from '../layouts/Container';
import SLayout, {
  RoundedButton,
  STitle
} from '../section-layout/SectionLayout';

export default function Conscience({ children }) {
  return (
    <div className="">
      <div className="relative pt-10 lg:pt-[100px] pb-10 text-base conscience">
        <SLayout>
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-1/3"></div>
            <div className="w-full lg:w-2/3 px-4 rounded-xl">
              <div className="flex flex-col gap-4 relative mb-4 text-center">
                <STitle>Cleaning With a Conscience</STitle>
                <div className="text-xl font-semibold">
                  Professional Cleaning Services for Home and Office
                </div>
                <div className="text-start leading-relaxed">
                  Cleaning can be a chore and we know you have many choices when
                  you consider hiring a maid service. Because of that, we are
                  constantly thriving to improve our already high standards to
                  have you see us as the absolute best in the industry. It’s not
                  enough to have trust in the cleaning crew that you let into
                  your home… you also have to trust that they will perform a
                  first-class cleaning job for you. Putting our employees
                  through a rigorous training program ensures each member of our
                  cleaning team understands their role and how it relates to the
                  overall performance of the team.
                </div>
                <ul className="grid grid-cols-1 lg:grid-cols-2 justify-evenly text-start space-y-2 text-gray-700 pt-5">
                  <li className="flex items-center gap-2">
                    <i className="fa fa-check text-sky-600"></i>
                    <span>One-off, weekly or fortnightly visits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa fa-check text-sky-600"></i>
                    <span>Vetted & background-checked cleaners</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa fa-check text-sky-600"></i>
                    <span>Keep the same cleaner for every visit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa fa-check text-sky-600"></i>
                    <span>Book, manage & pay online</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SLayout>
      </div>
      <div className="gradient-green-to-sky text-white py-6 lg:py-10">
        <Container>
          <div className="flex items-center justify-center flex-wrap gap-6 lg:gap-16">
            <div className="text-2xl lg:text-3xl text-center">
              Why Our Customers Choose Us?
              <span className="font-semibold"> free estimate</span>
            </div>
            <RoundedButton></RoundedButton>
          </div>
        </Container>
      </div>
    </div>
  );
}
export function Row({ children, className }) {
  return (
    <div
      className={
        'flex flex-wrap lg:flex-nowrap items-start rounded-[2rem] p-3 gap-4 ' +
        className
      }
    >
      {children}
    </div>
  );
}
export function Col({ children, order, className }) {
  return (
    <div
      className={
        'w-full lg:w-1/3 max-w-sm mx-auto flex flex-col justify-center ' +
        className
      }
    >
      {children}
    </div>
  );
}
export function Box({ children, className }) {
  return (
    <div className={'p-5 flex flex-col gap-3 ' + className}>{children}</div>
  );
}
export function Title({ children, className }) {
  return (
    <div className={'font-bold py-2 text-center ' + className}>{children}</div>
  );
}
export function Image({ children, className, src }) {
  return (
    <img
      className={'text-xl font-bold ' + className}
      src={'images/after-sales-services/' + src}
      alt="services"
    />
  );
}
