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

const data = [
  [
    'TV/Accessories',
    'Shelves',
    'Picture Frames',
    'Tables',
    'Chairs',
    'Lamps Lighting'
  ],
  [
    'Turn off Lights',
    'Vents',
    'Fans',
    'Shower Caddys',
    'Trash Cans',
    'Shower Doors'
  ],
  [
    'Stove Tops',
    'Toilets Behind',
    'Bathtubs/Showers',
    'Microwave',
    'Return Mats',
    'Behind Wall Units'
  ],
  [
    'Dishwasher',
    'Make Beds',
    'Vacuum Carpets',
    'Straighten Up',
    'Trashcan Liners',
    'Swiffer'
  ]
];

export default function AdditionalServices({ myRef }) {
  const [tab, settab] = useState(1);
  function handleTab(id) {
    settab(id);
  }

  return (
    <AgriculturalContext.Provider value={{ tab, handleTab }}>
      <div className="lg:py-10">
        <PLayout myRef={myRef}>
          <PHeader>
            <STitle>Additional Services</STitle>
          </PHeader>
          <div className="flex flex-wrap justify-between">
            {data.map((arr, arrI) => (
              <div className="w-1/2 lg:w-1/4 ">
                <ul className="space-y-2" key={arrI}>
                  {arr.map((e, i) => (
                    <li key={i}>
                      <i className="fa fa-check text-green-400 drop-shadow"></i>
                      <span className="px-2">{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="py-5"></div>
        </PLayout>
      </div>
    </AgriculturalContext.Provider>
  );
}
