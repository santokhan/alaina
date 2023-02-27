import Container from "../layouts/Container";
import { SDes, STitle } from "../section-layout/SectionLayout";
import { Col, Image, Row, Title } from "../what-we-provide/WhatWeProvide";
import SLayout from "../section-layout/SectionLayout";

export default function HowItWorks() {
  return (
    <div className="bg-white lg:py-5">
      <Container className="pt-12 pb-20">
        <div className="flex flex-col items-center pt-10 text-center">
          <STitle>How It Works</STitle>
          <SDes className="max-w-5xl mx-auto mt-5">
            Taking the stress out of any aspect of cleaning is what we
            specialise in. We will come to your premises and offer a free quote,
            so you know exactly what you’ll be spending
          </SDes>
        </div>
        <Row>
          <Col>
            <Circle number={1} />
            <Title>
              Book online in <span className="text-green-400">60 seconds</span>
            </Title>
            <SDes className="text-center text-sm mt-3">
              Book & pay online. We’ll match you with a trusted, experienced
              house cleaner
            </SDes>
          </Col>
          <Col>
            <Circle number={2} />
            <Title>
              Get a 5 star <span className="text-green-400">cleaner</span>
            </Title>
            <SDes className="text-center text-sm mt-3">
              Every cleaner is friendly and reliable. They’ve been
              background-checked & rated 5-stars
            </SDes>
          </Col>
          <Col>
            <Circle number={3} />
            <Title>
              Manage everything <span className="text-green-400">online</span>
            </Title>
            <SDes className="text-center text-sm mt-3">
              Add visits, skip visits, leave notes, and book extra services
              laundry, fridge and oven cleaning
            </SDes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export function Circle({ number, className }) {
  switch (number) {
    case 1:
      return (
        <div
          className={
            "w-24 h-24 lg:w-28 lg:h-28 flex justify-center items-center text-2xl lg:text-3xl font-semibold rounded-full mt-10 mb-3 shadow-lg " +
            "bg-teal-50 border-4 border-teal-400 text-teal-400 shadow-teal-400/20"
          }
        >
          <span className="drop-shadow">{number}</span>
        </div>
      );
    case 2:
      return (
        <div
          className={
            "w-24 h-24 lg:w-28 lg:h-28 flex justify-center items-center text-2xl lg:text-3xl font-semibold rounded-full mt-10 mb-3 shadow-lg " +
            "bg-sky-50 border-4 border-sky-400 text-sky-400 shadow-sky-400/20"
          }
        >
          <span className="drop-shadow">{number}</span>
        </div>
      );
    case 3:
      return (
        <div
          className={
            "w-24 h-24 lg:w-28 lg:h-28 flex justify-center items-center text-2xl lg:text-3xl font-semibold rounded-full mt-10 mb-3 shadow-lg " +
            "bg-blue-50 border-4 border-blue-400 text-blue-400 shadow-blue-400/20"
          }
        >
          <span className="drop-shadow">{number}</span>
        </div>
      );

    default:
      return "";
  }
}
