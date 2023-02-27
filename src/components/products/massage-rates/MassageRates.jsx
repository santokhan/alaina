import React, { useState } from "react";
import PLayout from "../layout/PLayout";
import PHeader, { PTitle } from "../layout/PHeader";
import PMain from "../layout/PMain";
import PCard, { CImg, CTitle, CDes, Price } from "../layout/PCard";
import { AgriculturalContext } from "../../../context/tabs/AgriculturalContext";
import BookNow from "../layout/BookNow";
import PDetails from "../layout/PDetails";
import { STitle } from "../../section-layout/SectionLayout";

export default function MassageRates({ myRef }) {
  const [tab, settab] = useState(1);
  function handleTab(id) {
    settab(id);
  }

  return (
    <AgriculturalContext.Provider value={{ tab, handleTab }}>
      <div>
        <PLayout myRef={myRef}>
          <PHeader>
            <STitle>What’s News</STitle>
          </PHeader>
          <PMain>
            <PCard category={4} id="sports">
              <PDetails to="/massages/sports">
                <CImg src="/images/massages/card/sport.jpg" />
                <CTitle>sportmassage</CTitle>
                <CDes>Regio: Brummen +15km</CDes>
              </PDetails>
              <Price price={65} time={60}>
                <BookNow to="/appointments"></BookNow>
              </Price>
            </PCard>
            <PCard category={4} id="shiatsu">
              <PDetails to="/massages/shiatsu">
                <CImg src="/images/massages/card/shiatsu.jpg" />
                <CTitle>Shiatsumassage</CTitle>
                <CDes>Regio: Brummen +15km</CDes>
              </PDetails>
              <Price price={65} time={60}>
                <BookNow to="/appointments"></BookNow>
              </Price>
            </PCard>
            <PCard category={2}>
              <PDetails to="/massages/relaxation">
                <CImg src="/images/massages/card/relax.jpg" />
                <CTitle>Ontspanningsmassage</CTitle>
                <CDes>Regio: Brummen +15km</CDes>
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
