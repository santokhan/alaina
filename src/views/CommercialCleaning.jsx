import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import React, { useRef } from 'react';
import PageLoader from '../components/page-loader/PageLoader';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import SVCommercial from '../components/service-viewer/SVCommercial';
import ServiceDescription from '../components/ServiceDescription/ServiceDescription';
const theme = createTheme({
  palette: {
    primary: {
      main: blue[600]
    }
  }
});

export default function CommercialCleaning() {
  const myRef = useRef(null);
  // function startScroll() {
  //   myRef.current.scrollIntoView();
  // }
  const title = 'How does our residential cleaning program work?';
  const description =
    'During the initial two cleaning sessions, we begin with an extensive, detailed cleaning of your entire house. During the first clean, our skilled maid service will meticulously clean your apartment, with particular emphasis on your kitchen and bathrooms. On the second session, we will clean your entire apartment again, but this time, we will focus on providing detailed cleaning services in your sleeping and living areas. We maintain this high level of detail-clean throughout your residence during our future visits by providing rotating deep cleaning services.';
  const services = [
    {
      name: 'Office cleaning',
      description:
        'Cleaning and sanitizing workstations, desks, chairs, and other office equipment'
    },
    {
      name: 'Restroom cleaning',
      description:
        'Cleaning and sanitizing toilets, sinks, mirrors, and other surfaces in the restroom'
    },
    {
      name: 'Floor care',
      description:
        'Sweeping, mopping, vacuuming, and buffing floors to keep them clean and shiny'
    },
    {
      name: 'Trash removal',
      description: 'Collecting and disposing of trash and recyclables'
    },
    {
      name: 'Window cleaning',
      description:
        'Cleaning windows, glass doors, and other glass surfaces to keep them sparkling clean'
    },
    {
      name: 'Kitchen cleaning',
      description:
        'Cleaning and sanitizing sinks, countertops, appliances, and other surfaces in the kitchen or break room'
    },
    {
      name: 'Dusting',
      description:
        'Dusting surfaces and fixtures throughout the building, including high and hard-to-reach areas'
    },
    {
      name: 'Deep cleaning',
      description:
        'Providing a thorough and comprehensive cleaning of the entire commercial property, including hard-to-reach areas and spaces that are not typically cleaned on a regular basis'
    }
  ];
  return (
    <ThemeProvider theme={theme}>
      <div className="text-light-sky relative bg-gray-50">
        <PageLoader></PageLoader>
        <Header></Header>
        <SVCommercial />
        {/* <MassageRatesIndivudual
          myRef={myRef}
          index={['sports', 'chair', 'relaxation']}
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
