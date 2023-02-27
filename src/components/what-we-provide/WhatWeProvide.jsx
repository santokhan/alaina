import React from "react";
import SLayout, {
  SHeader,
  SMain,
  STitle,
} from "../section-layout/SectionLayout";

export default function WhatWePovide() {
  return (
    <div id="whyChooseUs" className="bg-green-50 relative">
      <SLayout>
        <SHeader>
          <STitle>Wat bieden wij?</STitle>
        </SHeader>
        <SMain></SMain>
        <Row>
          <Col>
            <Image src="/images/other/1.webp" />
            <Title>Massage</Title>
          </Col>
          <Col>
            <Image src="/images/other/2.webp" />
            <Title>Ontspanning</Title>
          </Col>
          <Col>
            <Image src="/images/other/4.webp" />
            <Title>Hypothyreoïdie</Title>
          </Col>
          <Col>
            <Image src="/images/other/5.webp" />
            <Title>Revalidatie</Title>
          </Col>
        </Row>
      </SLayout>
    </div>
  );
}
export function Row({ children, className = "" }) {
  return (
    <div
      className={
        "flex flex-wrap lg:flex-nowrap items-start justify-center rounded-[2rem] p-3 " +
        className
      }
    >
      {children}
    </div>
  );
}
export function Col({ children, className = "" }) {
  return (
    <div
      className={
        "w-1/1 md:w-6/12 lg:w-4/12 flex flex-col items-center px-4 " + className
      }
    >
      {children}
    </div>
  );
}
export function Image({ className = "", src }) {
  return (
    <img
      className={"text-xl font-bold w-24 h-24 object-contain " + className}
      src={src}
      alt="services"
    />
  );
}

export function Title({ children, className = "" }) {
  return (
    <div className={"text-2xl font-semibold py-2 text-center " + className}>
      {children}
    </div>
  );
}
