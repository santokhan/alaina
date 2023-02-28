import Header from '../components/header/Header';
import MassageRatesIndivudual from '../components/products/massage-rates/MassageRatesIndivudual';
import Footer from '../components/footer/Footer';
import React, { useRef } from 'react';
import SercviceArea from '../components/service-area/ServiceArea';
import PageLoader from '../components/page-loader/PageLoader';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import ServiceDescription from '../components/ServiceDescription/ServiceDescription';
import SVOffice from '../components/service-viewer/SVOffice';
const theme = createTheme({
  palette: {
    primary: {
      main: blue[600]
    }
  }
});

export default function OfficeCleaning() {
  const myRef = useRef(null);
  // function startScroll() {
  //   myRef.current.scrollIntoView();
  // }
  const title = 'How does our office cleaning program work?';
  const description =
    'Our office cleaning service provides professional and reliable cleaning and maintenance for commercial office spaces. We offer customized cleaning plans that meet the specific needs of your office, including daily cleaning tasks such as vacuuming, mopping, and dusting, as well as specialized services such as carpet cleaning, window washing, and floor waxing. Our team of skilled professionals use high-quality equipment and cleaning supplies to ensure a thorough and efficient cleaning experience. With our service, you can enjoy a clean and welcoming office environment that promotes workplace health, safety, and productivity.';
  const services = [
    {
      name: 'General cleaning',
      description:
        'Dusting, vacuuming, mopping, and cleaning surfaces such as desks, tables, and counters'
    },
    {
      name: 'Restroom cleaning',
      description:
        'Cleaning and sanitizing toilets, sinks, and other surfaces in the restroom area'
    },
    {
      name: 'Kitchen/break room cleaning',
      description:
        'Cleaning and sanitizing sinks, countertops, appliances, and other surfaces in the kitchen or break room area'
    },
    {
      name: 'Trash and recycling removal',
      description:
        'Emptying and disposing of trash and recycling bins throughout the office'
    },
    {
      name: 'Floor cleaning',
      description:
        'Sweeping, mopping, and/or waxing floors, depending on the type of flooring in the office'
    },
    {
      name: 'Window cleaning',
      description:
        'Cleaning interior and/or exterior windows to keep them free of streaks and smudges'
    },
    {
      name: 'Carpet cleaning',
      description:
        'Vacuuming and/or deep cleaning carpets to remove dirt, dust, and stains'
    },
    {
      name: 'Upholstery cleaning',
      description:
        'Cleaning and sanitizing chairs, couches, and other upholstered furniture'
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <div className="text-light-sky relative bg-gray-50">
        <PageLoader></PageLoader>
        <Header></Header>
        <SVOffice />
        {/* <MassageRatesIndivudual
          myRef={myRef}
          index={['sports', 'shiatsu', 'relaxation']}
        ></MassageRatesIndivudual> */}
        {/* <SercviceArea></SercviceArea> */}
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
