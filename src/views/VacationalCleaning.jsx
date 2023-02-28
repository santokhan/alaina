import Header from '../components/header/Header';
import MassageRatesIndivudual from '../components/products/massage-rates/MassageRatesIndivudual';
import Footer from '../components/footer/Footer';
import React, { useRef } from 'react';
import SercviceArea from '../components/service-area/ServiceArea';
import PageLoader from '../components/page-loader/PageLoader';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import SVVacation from '../components/service-viewer/SVVacation';
import ServiceDescription from '../components/ServiceDescription/ServiceDescription';
const theme = createTheme({
  palette: {
    primary: {
      main: blue[600]
    }
  }
});

export default function VacationalCleaning() {
  const myRef = useRef(null);
  // function startScroll() {
  //   myRef.current.scrollIntoView();
  // }

  const title = 'How does our vacational cleaning program work?';
  const description =
    'We begin by performing a comprehensive and meticulous cleaning of your entire home during the first two cleaning sessions. During the initial cleaning, our cleaning staff will thoroughly clean your apartment, with a particular focus on your kitchen and bathrooms. During the second cleaning, we will clean your entire apartment while also providing detailed cleaning services to your sleeping and living areas. We will maintain this high level of detailed cleaning during subsequent visits by performing deep cleaning services on a rotating basis throughout your home.';
  const services = [
    {
      name: 'Bedroom cleaning',
      description:
        'Changing linens, dusting, vacuuming, and wiping down surfaces in bedrooms'
    },
    {
      name: 'Bathroom cleaning',
      description:
        'Cleaning and sanitizing toilets, sinks, showers, and other surfaces in the bathroom'
    },
    {
      name: 'Kitchen cleaning',
      description:
        'Cleaning and sanitizing sinks, countertops, appliances, and other surfaces in the kitchen'
    },
    {
      name: 'Living area cleaning',
      description:
        'Dusting, vacuuming, and tidying up the living and dining areas'
    },
    {
      name: 'Laundry service',
      description: 'Washing and folding linens and towels'
    },
    {
      name: 'Trash removal',
      description: 'Collecting and disposing of trash and recyclables'
    },
    {
      name: 'Restocking',
      description:
        'Checking and restocking supplies such as toilet paper, paper towels, and soap'
    },
    {
      name: 'Deep cleaning',
      description:
        'Providing a thorough and comprehensive cleaning of the entire rental property, including hard-to-reach areas and spaces that are not typically cleaned on a regular basis'
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <div className="text-light-sky relative bg-gray-50">
        <PageLoader></PageLoader>
        <Header></Header>
        <SVVacation />
        {/* <MassageRatesIndivudual
          myRef={myRef}
          index={['sports', 'shiatsu', 'chair']}
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
