import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import SectionHeader from '../components/layouts/SectionHeader';
import '../assets/css/faq.css';
import SLayout from '../components/section-layout/SectionLayout';
import GeneralQ from '../components/GeneralQ/GeneralQ';
import SchedulingQ from '../components/SchedulingQ/SchedulingQ';
import CleaningQ from '../components/CleaningQ/CleaningQ';
import BreadCrumb from '../components/BreadCrumb';

const FAQ = () => {
  return (
    <div>
      <Header />
      <BreadCrumb></BreadCrumb>
      <SectionHeader
        title={'Frequently Asked Questions'}
        description={
          'Many of our customers have specific questions about our professional maid services. Here are just a few of the frequently asked questions we hear at Cleaning Company.'
        }
      />
      <div className="my-12">
        <SLayout>
          <GeneralQ />
          <SchedulingQ />
          <CleaningQ />
        </SLayout>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
