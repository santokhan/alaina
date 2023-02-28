import React from 'react';
import { PDes } from '../products/layout/PHeader';
import SLayout from '../section-layout/SectionLayout';
import { BsCheckLg } from 'react-icons/bs';

const ServiceDescription = ({ title, description, services }) => {
  return (
    <SLayout>
      <div className="my-8">
        <h1 className="text-2xl lg:text-3xl pb-3">{title}</h1>
        <PDes>
          {description}
          <br /> <br />
          Every time we clean, we’ll provide services that include the
          following:
        </PDes>
        <div className="lg:px-8 mt-5">
          <ul className="py-2 space-y-3">
            {services.map((service) => {
              return (
                <li className="flex items-start gap-1 pb-2">
                  <div className="h-full pt-1">
                    <BsCheckLg className="w-12 text-green-500" />
                  </div>
                  <p className="text-sm lg:text-base">
                    <strong className="text-gray-600 mr-2">
                      {service.name}:
                    </strong>{' '}
                    {service.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </SLayout>
  );
};

export default ServiceDescription;
