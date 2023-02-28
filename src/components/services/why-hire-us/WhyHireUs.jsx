import React, { useState } from 'react';
import PLayout from '../../products/layout/PLayout';
import PHeader, { PTitle } from '../../products/layout/PHeader';
import PMain from '../../products/layout/PMain';
import PCard, {
  CImg,
  CTitle,
  CDes,
  Price
} from '../../products/layout/PCardCicle';
import { AgriculturalContext } from '../../../context/tabs/AgriculturalContext';
import BookNow from '../../products/layout/BookNow';
import PDetails from '../../products/layout/PDetails';
import { RoundedButton, STitle } from '../../section-layout/SectionLayout';
import img1 from '../../..//assets/images/services/residential.jpg';
import img2 from '../../..//assets/images/services/vacational.jpg';
import img3 from '../../..//assets/images/services/commercial.jpg';
import img4 from '../../..//assets/images/services/office.jpg';
import Container from '../../layouts/Container';

export default function WhyHireUs({ myRef }) {
  const [tab, settab] = useState(1);
  function handleTab(id) {
    settab(id);
  }

  return (
    <AgriculturalContext.Provider value={{ tab, handleTab }}>
      <div>
        <PLayout myRef={myRef}>
          <PHeader>
            <STitle>Our Services</STitle>
          </PHeader>
          <PMain>
            <PCard category={4} id="residential">
              <PDetails to="/services/residential">
                <CImg src={img1} />
                <CTitle>Residential Cleaning</CTitle>{' '}
                <CDes>
                  Refresh your space, renew your life with our expert
                  residential cleaning services which is great.
                </CDes>
              </PDetails>
              <Price price={65} time={60}>
                <BookNow to="/appointments"></BookNow>
              </Price>
            </PCard>
            <PCard category={4} id="vacational">
              <PDetails to="/services/vacational">
                <CImg src={img2} />
                <CTitle>Vacational Cleaning</CTitle>
                <CDes>
                  Leave the cleaning to us, so you can focus on making vacation
                  memories that last a lifetime.
                </CDes>
              </PDetails>
              <Price price={65} time={60}>
                <BookNow to="/appointments"></BookNow>
              </Price>
            </PCard>
            <PCard category={2}>
              <PDetails to="/services/commercial">
                <CImg src={img3} />
                <CTitle>Commercial Cleaning</CTitle>
                <CDes>
                  Cleanliness that means business - trust us to keep your
                  commercial space sparkling and take a great service.
                </CDes>
              </PDetails>
              <Price price={65} time={60}>
                <BookNow to="/appointments"></BookNow>
              </Price>
            </PCard>
            <PCard category={4} id="sports">
              <PDetails to="/services/office">
                <CImg src={img4} />
                <CTitle>Office Cleaning</CTitle>
                <CDes>
                  A clean office, a productive team - let us take care of the
                  cleaning, so you can focus on your business.
                </CDes>
              </PDetails>
              <Price price={65} time={60}>
                <BookNow to="/appointments"></BookNow>
              </Price>
            </PCard>
            {/*  */}
            <PCard category={4} id="sports">
              <PDetails to="/services/vacational">
                <CImg src={img1} />
                <CTitle>Apartment Cleaning</CTitle>{' '}
                <CDes>
                  Cleaning Company offers a program designed to service
                  residents of apartments and condominiums.
                </CDes>
              </PDetails>
              <Price price={65} time={60}>
                <BookNow to="/appointments"></BookNow>
              </Price>
            </PCard>
            <PCard category={4} id="shiatsu">
              <PDetails to="/services/residentail">
                <CImg src={img2} />
                <CTitle>Apartment Cleaning</CTitle>
                <CDes>
                  “I am still learning about my home. If you can’t do it
                  yourself, find good service people and trea.
                </CDes>
              </PDetails>
              <Price price={65} time={60}>
                <BookNow to="/appointments"></BookNow>
              </Price>
            </PCard>
          </PMain>
          <div className="py-5"></div>
        </PLayout>
      </div>
      <div className="gradient-green-to-sky text-white py-6 lg:py-10">
        <Container>
          <div className="flex items-center justify-center flex-wrap gap-6 lg:gap-16">
            <div className="text-2xl lg:text-3xl text-center">
              Schedule a Free Cleaning Estimate Today
              <span className="font-semibold">800-123-4567</span>
            </div>
            <RoundedButton></RoundedButton>
          </div>
        </Container>
      </div>
    </AgriculturalContext.Provider>
  );
}
