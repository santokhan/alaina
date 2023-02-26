import React from 'react';
import SectionHeader from '../layouts/SectionHeader';
import SLayout from '../section-layout/SectionLayout';
import { BiBookmarkAltPlus } from "react-icons/bi";

const CompanyHistory = () => {
    return (
        <div>
            <SectionHeader title={'History of Cleaning Company'} description={'Providing house and offices cleaning services for more than 10 years'} />
            <SLayout>
                <div>
                    <div className='text-center'>
                        <p className='text-gray-500 lg:px-36'>The Cleaning Company is widely recognized for our commitment to serving our customers while staying friendly to the environment. We have a history of excellence and dedication to our clients, providing professional and high-quality house cleaning services across America.</p>
                    </div>
                    <div className='py-5 my-8 flex justify-center items-center border-t border-b border-green-500'>
                        <span><BiBookmarkAltPlus className='w-8 h-8 text-green-500 pr-2' /></span>
                        <p className='text-xl font-bold text-gray-500'>Franchising began in 1996 and has grown to include more than 215 locations across North America.</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                        <div>
                            <p className='text-xl text-gray-500'>The Cleaning Company is widely recognized for our commitment to serving our customers while staying friendly to the environment. We have a history of excellence and dedication to our clients, providing professional and quality house cleaning services across America.</p>
                        </div>
                        <div>
                            <p className='text-xl text-gray-500'>This quality commitment and reputation for excellent service attracted outside investors. In 2014, the company announced a majority acquisition by PNC Riverarch Capital. This exciting change didn’t mean a complete overhaul.</p>
                        </div>
                        <div>
                            <p className='text-xl text-gray-500'>The management team did not change and Steve continued on in his leadership position with the Board of Directors. We are excited to announce a new era of growth for both new and existing units under the guidance of PNC.</p>
                        </div>
                    </div>
                </div>
            </SLayout>
        </div>
    );
};

export default CompanyHistory;