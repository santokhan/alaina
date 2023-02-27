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
import img1 from '../../..//assets/images/whats-new/blog-post-img-1.jpg';
import img2 from '../../..//assets/images/whats-new/blog-post-img-2.jpg';
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
            <STitle>What's New?</STitle>
          </PHeader>
          <PMain>
            <PCard category={4} id="sports">
              <PDetails to="/massages/sports">
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
              <PDetails to="/massages/shiatsu">
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
            <PCard category={2}>
              <PDetails to="/massages/relaxation">
                <CImg src={img1} />
                <CTitle>House Cleaning</CTitle>
                <CDes>
                  Hiring just the right housekeeper can be life-altering for the
                  busy family. Now this may seem to be a little o.
                </CDes>
              </PDetails>
              <Price price={65} time={60}>
                <BookNow to="/appointments"></BookNow>
              </Price>
            </PCard>
            <PCard category={4} id="sports">
              <PDetails to="/massages/sports">
                <CImg src={img1} />
                <CTitle>Move In / Move Out</CTitle>
                <CDes>
                  Hiring just the right housekeeper can be life-altering for the
                  busy family. Now this may seem to be a little o.
                </CDes>
              </PDetails>
              <Price price={65} time={60}>
                <BookNow to="/appointments"></BookNow>
              </Price>
            </PCard>
            {/*  */}
            <PCard category={4} id="sports">
              <PDetails to="/massages/sports">
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
              <PDetails to="/massages/shiatsu">
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
