import React from 'react';
import SectionHeader from '../layouts/SectionHeader';
import { BiLike, BiUser, BiCertification } from 'react-icons/bi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { TbMap2 } from 'react-icons/tb';
import SLayout from '../section-layout/SectionLayout';

const HireUs = () => {
  return (
    <div className="mb-20">
      <SectionHeader
        title={'Why Hire Us?'}
        description={
          'Choose us because of our reputation for excellence. For more than 10 years, we’ve earned a name for quality and customer service. The homeowners we serve rely on us for detail-oriented, consistent cleaning services, every single time we clean their homes.'
        }
      />
      <SLayout>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="flex justify-center items-center shadow rounded-full w-28 h-28 mx-auto bg-gray-100">
              <BiLike className="w-24 h-24 p-5 text-green-500" />
            </div>
            <h1 className="text-2xl lg:text-3xl py-5 text-gray-600">
              With Us, Your Satisfaction IsGuaranteed
            </h1>
            <p className="text-sm lg:text-base">
              The experts at The Cleaning Company are committed to providing
              thorough house cleaning services for our valued customers
              nationwide. In order to accomplish this goal, we adhere to strict
              standards that remain consistent across the board.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center items-center shadow rounded-full w-28 h-28 mx-auto bg-gray-100">
              <BiUser className="w-24 h-24 p-5 text-green-500" />
            </div>
            <h1 className="text-2xl lg:text-3xl py-5 text-gray-600">
              Our Bonded & InsuredCleaning Team
            </h1>
            <p className="text-sm lg:text-base">
              Our company is fully bonded and insured, which means you can have
              peace of mind when you hire us as your residential cleaning
              company. Helping our customers feel confident in our services is
              very important to us.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center items-center shadow rounded-full w-28 h-28 mx-auto bg-gray-100">
              <HiOutlineUserGroup className="w-24 h-24 p-5 text-green-500" />
            </div>
            <h1 className="text-2xl lg:text-3xl py-5 text-gray-600">
              Our Teams Consist of Fully Trained Employees
            </h1>
            <p className="text-sm lg:text-base">
              It means every individual hired at a franchise location of
              Cleaning Company goes through a thorough screening process, and
              then is trained in every aspect of our home cleaning services.
              This ensures high-quality service every time.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center items-center shadow rounded-full w-28 h-28 mx-auto bg-gray-100">
              <TbMap2 className="w-24 h-24 p-5 text-green-500" />
            </div>
            <h1 className="text-2xl lg:text-3xl py-5 text-gray-600">
              Locally Owned HomeCleaning Services
            </h1>
            <p className="text-sm lg:text-base">
              Life is just too short to clean your own home. You should be able
              to enjoy peace of mind knowing that your home is in good hands,
              while focusing on things that matter more to you, such as your
              family and loved ones.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center items-center shadow rounded-full w-28 h-28 mx-auto bg-gray-100">
              <BiCertification className="w-24 h-24 p-5 text-green-500" />
            </div>
            <h1 className="text-2xl lg:text-3xl py-5 text-gray-600">
              Free Over the PhoneEstimates
            </h1>
            <p className="text-sm lg:text-base">
              Cleaning Company service is the key to keeping a beautiful home
              while making more time for yourself and the things you love most.
              Contact us for a FREE estimate.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center items-center shadow rounded-full w-28 h-28 mx-auto bg-gray-100">
              <BiLike className="w-24 h-24 p-5 text-green-500" />
            </div>
            <h1 className="text-2xl lg:text-3xl py-5 text-gray-600">
              We Guarantee Our Work
            </h1>
            <p className="text-sm lg:text-base">
              Cleaning Company strives to provide the highest level of quality,
              service and value to each and every customer. If you are not
              completely satisfied with our service, please inform us within 24
              hours of your clean so we may resolve the situation.
            </p>
          </div>
        </div>
      </SLayout>
    </div>
  );
};

export default HireUs;
