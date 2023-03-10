import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import React, { useRef } from 'react';
import SercviceArea from '../components/service-area/ServiceArea';
import PageLoader from '../components/page-loader/PageLoader';
import MassageVertical from '../components/mui/tabs/MassageVertical';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import WhyHireUs from '../components/services/why-hire-us/WhyHireUs';
import BreadCrumb from '../components/BreadCrumb';
import AdditionalServices from '../components/services/additional/AdditionalServices';
import Discount from '../components/services/discount/Discount';
const theme = createTheme({
  palette: {
    primary: {
      main: blue[600]
    }
  }
});

export default function Massages() {
  const myRef = useRef(null);
  function startScroll() {
    myRef.current.scrollIntoView();
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="text-light-sky relative bg-gray-50">
        <PageLoader></PageLoader>
        <Header></Header>
        <BreadCrumb></BreadCrumb>
        <WhyHireUs></WhyHireUs>
        <AdditionalServices></AdditionalServices>
        <Discount></Discount>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}
