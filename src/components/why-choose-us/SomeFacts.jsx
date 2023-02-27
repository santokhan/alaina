import Container from '../layouts/Container';
import { SDes, STitle } from '../section-layout/SectionLayout';
import { Col, Image, Row, Title } from '../what-we-provide/WhatWeProvide';
import fact1 from '../../assets/images/facts/facts-img-1.jpg';
import fact2 from '../../assets/images/facts/facts-img-2.jpg';
import fact3 from '../../assets/images/facts/facts-img-3.jpg';
import fact4 from '../../assets/images/facts/facts-img-4.jpg';

export default function SomeFacts() {
  return (
    <Container className="py-10">
      <div className="flex flex-col items-center mt-10 mb-6 text-center">
        <STitle>Some Facts About Us</STitle>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center rounded-[2rem] px-4">
        <FactCircle>
          <ImageBox src={fact1} />
          <div className="z-10 relative text-2xl lg:text-3xl font-semibold w-full h-full flex justify-center items-center text-white">
            1255 <br /> Orders
          </div>
        </FactCircle>
        <FactCircle>
          <ImageBox src={fact2} />
          <div className="z-10 relative text-2xl lg:text-3xl font-semibold w-full h-full flex justify-center items-center text-white">
            843 <br /> Clients
          </div>
        </FactCircle>
        <FactCircle>
          <ImageBox src={fact3} />
          <div className="z-10 relative text-2xl lg:text-3xl font-semibold w-full h-full flex justify-center items-center text-white">
            315 <br /> Houses
          </div>
        </FactCircle>
        <FactCircle>
          <ImageBox src={fact4} />
          <div className="z-10 relative text-2xl lg:text-3xl font-semibold w-full h-full flex justify-center items-center text-white">
            273 <br /> Followers
          </div>
        </FactCircle>
      </div>
    </Container>
  );
}

export function FactCircle({ children }) {
  return (
    <div className="grid justify-center">
      <div className="w-40 lg:w-56 h-40 lg:h-56 rounded-full overflow-hidden relative mx-4 my-3 text-center">
        {children}
      </div>
    </div>
  );
}
export function ImageBox({ src }) {
  return (
    <img
      src={src}
      alt="best image"
      className="absolute w-full h-full object-cover left-0 top-0"
    />
  );
}
export function TextContent({ children }) {
  <div className="z-10 relative text-2xl lg:text-3xl font-semibold w-full h-full flex justify-center items-center text-white">
    {children}
  </div>;
}
