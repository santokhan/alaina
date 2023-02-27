import React from 'react';
import SectionHeader from '../layouts/SectionHeader';
import { FiTarget } from 'react-icons/fi';
import { RiBrush2Line } from 'react-icons/ri';
import { BiPhoneCall } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import SLayout from '../section-layout/SectionLayout';
import '../../assets/css/button.css';
import { Button } from '@mui/material';

const OurCompany = () => {
  return (
    <div>
      <SectionHeader
        title={'About Our Company'}
        description={
          'Cleaning can be a chore and we know you have many choices when you consider hiring a comprehensive, high quality, reliable cleaning service.'
        }
      />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-cover bg-[url('https://smartdata.tonytemplates.com/cleaning-service-v3/ele-demo1/wp-content/uploads/sites/7/2021/08/about-page-img-1.jpg')]"></div>
        <div className="py-8 lg:py-20 px-8 bg-gray-100">
          <h1 className="text-2xl text-gray-600">
            More than 10 years of cleaning experience
          </h1>
          <p className="text-sm lg:text-xl py-2 pt-5">
            Cleaning Company service is a fully integrated janitorial cleaning
            services company that provides comprehensive, high quality, reliable
            cleaning solutions to commercial, corporate, industrial and
            residential clients.
          </p>
          <p className="text-sm lg:text-xl py-2">
            Our diligent management and work ethic are central to Cleaning
            Company service business philosophy and critical to delivering
            consistent, quality cleaning services. We pride ourselves on making
            our management accountable to the client through direct access and
            interaction with our managing director.
          </p>
        </div>
      </div>
      <SLayout>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8 lg:my-20 lg:gap-0">
          <div className="flex items-start">
            <div className="mr-3 lg:mr-0">
              <FiTarget className="w-16 h-16 text-green-500" />
            </div>
            <div className="lg:px-8">
              <h2 className="text-2xl lg:text-3xl text-gray-600">
                Our Mission
              </h2>
              <p className="text-sm lg:text-xl pt-3 lg:pt-8 pb-3 pr-10">
                Aims to be a national market leader in the provision of cleaning
                services delivering reliable, quality, cost effective cleaning
                solutions to our customers
              </p>
              <Link className="text-sm lg:text-xl uppercase text-green-500 font-bold hover:text-gray-700 duration-300">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-3 lg:mr-0">
              <RiBrush2Line className="w-16 h-16 text-green-500" />
            </div>
            <div className="lg:px-8">
              <h2 className="text-2xl lg:text-3xl text-gray-600">Our Vision</h2>
              <p className="text-sm lg:text-xl pt-3 lg:pt-8 pb-3 pr-10">
                Aims to be a national market leader in the provision of cleaning
                services delivering reliable, quality, cost effective cleaning
                solutions to our customers
              </p>
              <Link className="text-sm lg:text-xl uppercase text-green-500 font-bold hover:text-gray-700 duration-300">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </SLayout>
      <div className="flex flex-col lg:flex-row justify-center items-center bg-gradient-to-r from-sky-400 to-emerald-500 py-10 gap-8 lg:gap-16">
        <div>
          <h2 className="text-center text-white px-4 lg:px-0">
            <span className="text-4xl lg:text-3xl">
              If you’re not happy, just let us know and
            </span>
            <br />
            <span className="text-4xl lg:text-3xl font-bold">
              we’ll work to make it right
            </span>
          </h2>
        </div>
        <div>
          <div className="my-3 lg:my-8 flex items-center btn-main relative overflow-hidden bg-white px-6 lg:px-12 py-4 text-center">
            <BiPhoneCall className="w-8 h-8 text-black" />
            <Link to="" className="button-primary pl-3 text-2xl text-black">
              Just Contact Us
            </Link>
            <div className="overFlow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCompany;
