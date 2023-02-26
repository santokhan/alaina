import React, { useState } from "react";
import PLayout from "./layout/PLayout";
import PHeader, { PTitle, PIcon, PDes } from "./layout/PHeader";
import PTabs, { Tab } from "./layout/PTab";
import PMain from "./layout/PMain";
import PCard, { CImg, CTitle, CDes } from "./layout/PCard";
import { GalleryContext } from "../../context/tabs/GalleryContext";
import { STitle } from "../section-layout/SectionLayout";

import GImage1 from "../../assets/images/gallery/gallery-img-01-big.jpg";
import GImage2 from "../../assets/images/gallery/gallery-img-02-big.jpg";
import GImage3 from "../../assets/images/gallery/gallery-img-03-big.jpg";
import GImage4 from "../../assets/images/gallery/gallery-img-04-big.jpg";
import GImage5 from "../../assets/images/gallery/gallery-img-05-big.jpg";
import GImage6 from "../../assets/images/gallery/gallery-img-06-big.jpg";
import GImage7 from "../../assets/images/gallery/gallery-img-07-big.jpg";
import GImage8 from "../../assets/images/gallery/gallery-img-08-big.jpg";
import GImage9 from "../../assets/images/gallery/gallery-img-09-big.jpg";
import GImage10 from "../../assets/images/gallery/gallery-img-10-big.jpg";

export default function Construction() {
  const [tab, settab] = useState(1);
  function handleTab(id) {
    settab(id);
  }

  return (
    <GalleryContext.Provider value={{ tab, handleTab }}>
      <div id="construction">
        <PLayout>
          <PHeader>
            <PIcon></PIcon>
            <STitle>Our Projects</STitle>
          </PHeader>
          <PTabs>
            <Tab id={1}>All</Tab>
            <Tab id={2}>Residential</Tab>
            <Tab id={3}>Commercial</Tab>
            <Tab id={4}>Appartment</Tab>
          </PTabs>
          <PMain>
            <PCard category={3}>
              <CImg src={GImage1}></CImg>
              <CTitle></CTitle>
            </PCard>
            <PCard category={3}>
              <CImg src={GImage2}></CImg>
              <CTitle></CTitle>
            </PCard>
            <PCard category={3}>
              <CImg src={GImage3}></CImg>
              <CTitle></CTitle>
            </PCard>
            <PCard category={5}>
              <CImg src={GImage4}></CImg>
              <CTitle></CTitle>
            </PCard>
            <PCard category={2}>
              <CImg src={GImage5}></CImg>
              <CTitle></CTitle>
            </PCard>
            <PCard category={2}>
              <CImg src={GImage6}></CImg>
              <CTitle></CTitle>
            </PCard>
            <PCard category={2}>
              <CImg src={GImage7}></CImg>
              <CTitle></CTitle>
            </PCard>
            <PCard category={2}>
              <CImg src={GImage8}></CImg>
              <CTitle></CTitle>
            </PCard>
            <PCard category={4}>
              <CImg src={GImage9}></CImg> <CTitle>Rotary Dril</CTitle>
            </PCard>
            <PCard category={4}>
              <CImg src={GImage10}></CImg> <CTitle>Water well drill</CTitle>
            </PCard>
          </PMain>
        </PLayout>
      </div>
    </GalleryContext.Provider>
  );
}
