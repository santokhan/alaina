import Container from "../layouts/Container";
import { SDes, STitle } from "../section-layout/SectionLayout";
import { Col, Image, Row, Title } from "../what-we-provide/WhatWeProvide";
import bestImg from "../../assets/images/the-best-img-1.png";

export default function WhyChooseUs() {
  return (
    <div className="why-choose-us">
      <Container className="pt-12 lg:pt-20 pb-12">
        <div className="flex flex-col items-center mb-6 text-center">
          <STitle>Why Our Customers Choose Us?</STitle>
        </div>
        <div
          className={
            "flex flex-wrap lg:flex-nowrap items-start justify-center rounded-[2rem] px-3 py-4 lg:py-16 "
          }
        >
          <div
            className={
              "w-1/1 md:w-6/12 lg:w-4/12 flex flex-col items-end px-4 text-end"
            }
          >
            <Title>We Are Experts</Title>
            <SDes className="mb-4">
              and dominate the industry in scale and scope with an adaptable,
              extensive network that consistently delivers exceptional results.
            </SDes>
            <Title>We Are Committed</Title>
            <SDes className="mb-4">
              to our customers and are guided in all we do by their needs.
            </SDes>
          </div>
          <div
            className={
              "w-1/1 md:w-6/12 lg:w-4/12 flex flex-col items-center px-4 text-center my-8 lg:my-0"
            }
          >
            <img src={bestImg} alt="best image" />
          </div>
          <div
            className={
              "w-1/1 md:w-6/12 lg:w-4/12 flex flex-col items-start px-4 text-start"
            }
          >
            <Title>We Are Complete</Title>
            <SDes className="mb-4">
              and seek to provide exceptional service and engage in proactive
              behavior.
            </SDes>
            <Title>We Are Driven</Title>
            <SDes className="mb-4">
              to pursue the highest standards and continuously improve in all
              aspects of our business.
            </SDes>
          </div>
        </div>
      </Container>
    </div>
  );
}
