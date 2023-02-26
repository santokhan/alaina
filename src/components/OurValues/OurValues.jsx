import React from 'react';
import SectionHeader from '../layouts/SectionHeader';
import SLayout from '../section-layout/SectionLayout';
import { BsCheckLg } from "react-icons/bs";

const OurValues = () => {
    return (
        <div>
            <SectionHeader title={'Our Values'} description={'Our goal is Your satisfaction (of course after our cleaning work). Office Phone works around the clock (24/7).'} />
            <SLayout>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className="bg-cover bg-center bg-[url('https://smartdata.tonytemplates.com/cleaning-service-v3/ele-demo1/wp-content/uploads/sites/7/2017/06/about-page-img-2.jpg')]">
                    
                </div>
                <div className='px-8'>
                    <ul className='py-2'>
                        <li className='flex justify-start items-baseline pb-2'>
                            <BsCheckLg className='w-12 text-green-500 pr-2' />
                            <p className='text-xl text-gray-500'><strong className='text-gray-600'>Client oriented:</strong> We serve our clients as if we were serving ourselves. We value their feedback and we use it to improve our work.</p>
                        </li>
                        <li className='flex justify-start items-baseline pb-2'>
                            <BsCheckLg className='w-12 text-green-500 pr-2' />
                            <p className='text-xl text-gray-500'><strong className='text-gray-600'>Eco-Friendly Oriented:</strong> We carefully choose the best and most natural cleaning products that give amazing results.</p>
                        </li>
                        <li className='flex justify-start items-baseline pb-2'>
                           <BsCheckLg className='w-20 text-green-500 pr-2' />
                            <p className='text-xl text-gray-500'><strong className='text-gray-600'>Excellence and Innovation:</strong> We provide training to our personnel in order to ensure the high standard of service. We stay up-to-date on the latest innovations in eco-friendly products and technologies, allowing us to bring the best in to our clients’ homes.</p>
                        </li>
                        <li className='flex justify-start items-baseline'>
                            <BsCheckLg className='w-20 text-green-500 pr-2' />
                            <p className='text-xl text-gray-500'><strong className='text-gray-600'>Expansion / Growth:</strong> We make ourselves known in the community; we create long term relations, while constantly expanding. Therefore, we are always bringing in more people to work for us.</p>
                        </li>
                    </ul>
                </div>
            </div>
            </SLayout>
        </div>
    );
};

export default OurValues;