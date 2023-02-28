import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import React, { useRef } from 'react';
import PageLoader from '../components/page-loader/PageLoader';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import ServiceDescription from '../components/ServiceDescription/ServiceDescription';
import SVResidential from '../components/service-viewer/SVResidential';
const theme = createTheme({
  palette: {
    primary: {
      main: blue[600]
    }
  }
});

export default function ResidentialCleaning() {
  const myRef = useRef(null);
  // function startScroll() {
  //   myRef.current.scrollIntoView();
  // }
  const title = 'How does our residential cleaning program work?';
  const description =
    'We begin by performing a comprehensive and meticulous cleaning of your entire home during the first two cleaning sessions. During the initial cleaning, our cleaning staff will thoroughly clean your apartment, with a particular focus on your kitchen and bathrooms. During the second cleaning, we will clean your entire apartment while also providing detailed cleaning services to your sleeping and living areas. We will maintain this high level of detailed cleaning during subsequent visits by performing deep cleaning services on a rotating basis throughout your home.';
  const services = [
    {
      name: 'General cleaning',
      description:
        'Dusting, vacuuming, mopping, and cleaning surfaces such as tables, countertops, and furniture'
    },
    {
      name: 'Kitchen cleaning',
      description:
        'Cleaning and sanitizing sinks, countertops, appliances, and other surfaces in the kitchen'
    },
    {
      name: 'Bathroom cleaning',
      description:
        'Cleaning and sanitizing toilets, sinks, showers, and other surfaces in the bathroom'
    },
    {
      name: 'Bedroom cleaning',
      description: 'Dusting, vacuuming, and tidying up the sleeping area'
    },
    {
      name: 'Living room cleaning',
      description: 'Dusting, vacuuming, and tidying up the living area'
    },
    {
      name: 'Deep cleaning',
      description:
        'Providing a thorough and comprehensive cleaning of the entire home, including hard-to-reach areas and spaces that are not typically cleaned on a regular basis'
    },
    {
      name: 'Move-in/move-out cleaning',
      description:
        'Providing a deep cleaning service for empty homes or apartments that are being prepared for move-in or move-out'
    },
    {
      name: 'Special cleaning',
      description:
        'Providing customized cleaning services based on specific client needs or requests, such as cleaning of carpets, upholstery, or windows'
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <div className="text-light-sky relative bg-gray-50">
        <PageLoader></PageLoader>
        <Header></Header>
        <SVResidential />
        {/* <MassageRatesIndivudual
          myRef={myRef}
          index={['chair', 'shiatsu', 'relaxation']}
        ></MassageRatesIndivudual>
        <SercviceArea></SercviceArea> */}
        <ServiceDescription
          title={title}
          description={description}
          services={services}
        />
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}
