import React, { useState } from 'react';
import PLayout from '../../products/layout/PLayout';
import PHeader, { PTitle } from '../../products/layout/PHeader';
import PMain from '../../products/layout/PMain';
import PCard, { CImg, CTitle, CDes, Price } from '../../products/layout/PCard';
import { AgriculturalContext } from '../../../context/tabs/AgriculturalContext';
import BookNow from '../../products/layout/BookNow';
import PDetails from '../../products/layout/PDetails';
import { SDes, STitle } from '../../section-layout/SectionLayout';

import img1 from '../../../assets/images/whats-new/blog-post-img-1.jpg';
import img2 from '../../../assets/images/whats-new/blog-post-img-2.jpg';
import img3 from '../../../assets/images/whats-new/blog-post-img-1.jpg';

const data = [
  {
    src: img1,
    title: 'House Cleaning',
    desc: 'Cleaning Company offers a program designed to service residents of apartments and condominiums.',
    url: '/massages/sports'
  },
  {
    src: img2,
    title: 'Apartment Cleaning',
    desc: ' For over 10 years we’ve performed housekeeping services according to the wishes of our clients.',
    url: '/massages/shiatsu'
  },
  {
    src: img3,
    title: 'House Cleaning',
    desc: 'In fact, many people say that moving is one of the most stressful and exhausting life experiences.',
    url: '/massages/relaxation'
  }
];

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
            <STitle>Why Hire Us?</STitle>
            <SDes>
              Choose us because of our reputation for excellence. For more than
              10 years, we’ve earned a name for quality and customer service.
              The homeowners we serve rely on us for detail-oriented, consistent
              cleaning services, every single time we clean their homes.
            </SDes>
          </PHeader>
          <PMain>
            {data.map((e, i) => (
              <PCard category={4} id="sports">
                <PDetails to="/massages/sports">
                  <CImg src={e.src} />
                  <CTitle>{e.title}</CTitle>
                  <CDes>{e.desc}</CDes>
                </PDetails>
                <BookNow to={e.url}></BookNow>
              </PCard>
            ))}
          </PMain>
          <div className="py-5"></div>
        </PLayout>
      </div>
    </AgriculturalContext.Provider>
  );
}
