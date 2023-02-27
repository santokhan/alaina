import React, { useState } from 'react';
import PLayout from '../layout/PLayout';
import PHeader, { PTitle } from '../layout/PHeader';
import PMain from '../layout/PMain';
import PCard, { CImg, CTitle, CDes, Price } from '../layout/PCard';
import { AgriculturalContext } from '../../../context/tabs/AgriculturalContext';
import BookNow from '../layout/BookNow';
import PDetails from '../layout/PDetails';
import { STitle } from '../../section-layout/SectionLayout';
import img1 from '../../..//assets/images/whats-new/blog-post-img-1.jpg';
import img2 from '../../..//assets/images/whats-new/blog-post-img-2.jpg';

export default function WhatsNew({ myRef }) {
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
                <CTitle>New Cleaning With Hydrogen Peroxide Tips</CTitle>
                <CDes>
                  Hiring just the right housekeeper can be life-altering for the
                  busy family. Now this may seem to be a little o.
                </CDes>
              </PDetails>
              <Price price={65} time={60}>
                <BookNow to="/appointments"></BookNow>
              </Price>
            </PCard>
            <PCard category={4} id="shiatsu">
              <PDetails to="/massages/shiatsu">
                <CImg src={img2} />
                <CTitle>Apartment Therapy Mom Wisdom on… Taking Care</CTitle>
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
                <CTitle>New Cleaning With Hydrogen Peroxide Tips</CTitle>
                <CDes>
                  Hiring just the right housekeeper can be life-altering for the
                  busy family. Now this may seem to be a little o.
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
    </AgriculturalContext.Provider>
  );
}
