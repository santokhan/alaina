import Container from "../layouts/Container";
import { SDes, STitle } from "../section-layout/SectionLayout";
import { Col, Image, Row, Title } from "../what-we-provide/WhatWeProvide";
import fact1 from '../../assets/images/facts/facts-img-1.jpg'
import fact2 from '../../assets/images/facts/facts-img-2.jpg'
import fact3 from '../../assets/images/facts/facts-img-3.jpg'
import fact4 from '../../assets/images/facts/facts-img-4.jpg'

export default function SomeFacts() {
  return (
    <Container className="pt-10 pb-20">
      <div className="flex flex-col items-center mt-10 mb-6 text-center">
        <STitle>Some Facts About Us</STitle>
      </div>
      <div className={"flex flex-wrap lg:flex-nowrap items-start justify-center rounded-[2rem] px-3 py-16 "}>
        <div className={"w-1/1 md:w-6/12 lg:w-4/12 flex flex-col items-center px-4 text-center"}>
          <div className="w-40 h-40 rounded-full overflow-hidden relative">
            <img src={fact1} alt="best image" className="absolute w-full h-full object-cover left-0 top-0"/>
            <div>Order <br /> 250</div>
          </div>
        </div>
        <div className={"w-1/1 md:w-6/12 lg:w-4/12 flex flex-col items-center px-4 text-center"}>
          <div className="w-40 h-40 rounded-full overflow-hidden relative">
            <img src={fact1} alt="best image" className="absolute w-full h-full object-cover left-0 top-0"/>
            <div>Order <br /> 250</div>
          </div>
        </div>
        <div className={"w-1/1 md:w-6/12 lg:w-4/12 flex flex-col items-center px-4 text-center"}>
          <div className="w-40 h-40 rounded-full overflow-hidden relative">
            <img src={fact1} alt="best image" className="absolute w-full h-full object-cover left-0 top-0"/>
            <div>Order <br /> 250</div>
          </div>
        </div>
        <div className={"w-1/1 md:w-6/12 lg:w-4/12 flex flex-col items-center px-4 text-center"}>
          <div className="w-40 h-40 rounded-full overflow-hidden relative">
            <img src={fact1} alt="best image" className="absolute w-full h-full object-cover left-0 top-0"/>
            <div>Order <br /> 250</div>
          </div>
        </div>
      </div>
    </Container>
  );
}
