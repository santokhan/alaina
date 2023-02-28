import React from 'react';
import SectionHeader from '../layouts/SectionHeader';
import { FiTarget } from 'react-icons/fi';
import { RiBrush2Line } from 'react-icons/ri';
import { BiPhoneCall } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import SLayout, {
  RoundedButton,
  SDes,
  STitle
} from '../section-layout/SectionLayout';
import '../../assets/css/button.css';
import { Button } from '@mui/material';
import Container from '../layouts/Container';
import ourCompanyImg from '../../assets/images/about/about-page-img-1.jpg';

const OurCompany = () => {
  return (
    <div>
      <Container className="py-8 lg:py-16">
        <STitle>About Our Company</STitle>
        <SDes className="text-center">
          Cleaning can be a chore and we know you have many choices when you
          consider hiring a comprehensive, high quality, reliable cleaning
          service.
        </SDes>
        <div className="py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-gray-100 rounded-2xl overflow-hidden">
            <img
              src={ourCompanyImg}
              alt="our company"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="py-8 px-8 ">
              <h1 className="text-2xl text-gray-600">
                More than 10 years of cleaning experience
              </h1>
              <p className="text-sm lg:text-base py-2 pt-5">
                Cleaning Company service is a fully integrated janitorial
                cleaning services company that provides comprehensive, high
                quality, reliable cleaning solutions to commercial, corporate,
                industrial and residential clients.
              </p>
              <p className="text-sm lg:text-base py-2">
                Our diligent management and work ethic are central to Cleaning
                Company service business philosophy and critical to delivering
                consistent, quality cleaning services. We pride ourselves on
                making our management accountable to the client through direct
                access and interaction with our managing director.
              </p>
            </div>
          </div>
        </div>
        <SLayout>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:my-8 lg:gap-0">
            <div className="flex items-start">
              <div className="mr-3 lg:mr-0">
                <FiTarget className="w-12 lg:w-16 h-12 lg:h-16 text-green-500" />
              </div>
              <div className="lg:px-8">
                <h2 className="text-2xl lg:text-3xl text-gray-600">
                  Our Mission
                </h2>
                <p className="text-sm lg:text-base pt-3 lg:py-4 pr-10">
                  Aims to be a national market leader in the provision of
                  cleaning services delivering reliable, quality, cost effective
                  cleaning solutions to our customers
                </p>
                <Link className="text-sm lg:text-base uppercase text-green-500 font-semibold hover:text-gray-700 duration-300 block my-4">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-3 lg:mr-0">
                <RiBrush2Line className="w-12 lg:w-16 h-12 lg:h-16 text-green-500" />
              </div>
              <div className="lg:px-8">
                <h2 className="text-2xl lg:text-3xl text-gray-600">
                  Our Vision
                </h2>
                <p className="text-sm lg:text-base pt-3 lg:py-4 pr-10">
                  Aims to be a national market leader in the provision of
                  cleaning services delivering reliable, quality, cost effective
                  cleaning solutions to our customers
                </p>
                <Link className="text-sm lg:text-base uppercase text-green-500 font-semibold hover:text-gray-700 duration-300 block my-4">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </SLayout>
      </Container>
      <div className="gradient-green-to-sky text-white py-6 lg:py-10">
        <Container>
          <div className="flex items-center justify-center flex-wrap gap-6 lg:gap-16">
            <div className="text-2xl lg:text-3xl text-center">
              <div>If you’re not happy, just let us know and</div>
              <div className="font-semibold"> we’ll work to make it right</div>
            </div>
            <RoundedButton>Just Contact Us</RoundedButton>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default OurCompany;
