import React from 'react';
import SLayout from '../section-layout/SectionLayout';

const Satisfaction = () => {
  return (
    <div className="my-12">
      <SLayout>
        <div className="lg:flex relative justify-between items-center bg-sky-400 py-8">
          <img
            className="absolute satisfaction w-80 h-80 hidden lg:block"
            src="https://smartdata.tonytemplates.com/cleaning-service-v3/ele-demo1/wp-content/uploads/sites/7/2017/06/banner-guaranteed-img.png"
            alt=""
          />
          <div className="text-center lg:w-3/4 lg:ml-72 px-5 lg:px-0">
            <h1 className="text-4xl text-white pb-5">
              Satisfaction Guaranteed!
            </h1>
            <p className="text-sm lg:text-xl text-white lg:pl-12">
              Your satisfaction is 100% guaranteed at Cleaning Company. If you
              are not happy with any area we’ve cleaned, simply call within 24
              hours and we will come back out and reclean it free of charge.
              This makes hiring Cleaning Company virtually risk free. Our maids
              are thoroughly screened through our rigorous recruitment process,
              and every one of them goes through our Maid University training
              process.
            </p>
          </div>
        </div>
      </SLayout>
    </div>
  );
};

export default Satisfaction;
