import React from 'react';
import SectionHeader from '../layouts/SectionHeader';
import SLayout, { SDes, STitle } from '../section-layout/SectionLayout';
import { CgFacebook } from 'react-icons/cg';
import { TiSocialTwitter } from 'react-icons/ti';
import { GrInstagram } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import Container from '../layouts/Container';

const OurTeam = () => {
  return (
    <Container className="py-10 lg:py-16">
      <STitle>Our Team</STitle>
      <SDes className="text-center">
        Cleaning Company is a minority owned business with a large group of
        specially trained, dedicated employees to provide professional service
        with a personal touch.
      </SDes>
      <SLayout>
        <div className="py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="team my-6 lg:my-0">
              <div className="w-72 h-72 mx-auto team-main overflow-hidden bg-cover bg-[url('https://smartdata.tonytemplates.com/cleaning-service-v3/ele-demo1/wp-content/uploads/sites/7/2021/08/person-img-1.jpeg')]">
                <div className="team-card flex justify-center items-center bg-black opacity-75 pb-5 pt-2">
                  <Link>
                    <CgFacebook className="w-5 h-5 text-white" />
                  </Link>
                  <Link className="px-4">
                    <TiSocialTwitter className="w-6 h-6 text-white" />
                  </Link>
                  <Link>
                    <GrInstagram className="w-4 h-4 text-white" />
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <h2 className="text-2xl lg:text-3xl text-gray-600 py-5">
                  Alan Yarbrough
                </h2>
                <h3 className="text-xl  pb-5">Managing Director</h3>
                <div className="w-8 h-0.5 bg-green-500 mb-5 mx-auto"></div>
                <p className="px-12 ">
                  Alan started in 1985 and provides the leadership needed to
                  maintain our reputation and goodwill in the community.
                </p>
              </div>
            </div>
            <div className="team my-6 lg:my-0">
              <div className="w-72 h-72 mx-auto team-main overflow-hidden bg-cover bg-[url('https://smartdata.tonytemplates.com/cleaning-service-v3/ele-demo1/wp-content/uploads/sites/7/2021/08/person-img-2.jpg')]">
                <div className="team-card flex justify-center items-center bg-black opacity-75 pb-5 pt-2">
                  <Link>
                    <CgFacebook className="w-5 h-5 text-white" />
                  </Link>
                  <Link className="px-4">
                    <TiSocialTwitter className="w-6 h-6 text-white" />
                  </Link>
                  <Link>
                    <GrInstagram className="w-4 h-4 text-white" />
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <h2 className="text-2xl lg:text-3xl text-gray-600 py-5">
                  Wilford Wood
                </h2>
                <h3 className="text-xl  pb-5">Customer Service Manager</h3>
                <div className="w-8 h-0.5 bg-green-500 mb-5 mx-auto"></div>
                <p className="px-12 ">
                  He is the direct “pipeline” to our customers to ensure they
                  are being heard and their special needs are being met.
                </p>
              </div>
            </div>
            <div className="team my-6 lg:my-0">
              <div className="w-72 h-72 mx-auto team-main overflow-hidden bg-cover bg-[url('https://smartdata.tonytemplates.com/cleaning-service-v3/ele-demo1/wp-content/uploads/sites/7/2021/08/person-img-3.jpg')]">
                <div className="team-card flex justify-center items-center bg-black opacity-75 pb-5 pt-2">
                  <Link>
                    <CgFacebook className="w-5 h-5 text-white" />
                  </Link>
                  <Link className="px-4">
                    <TiSocialTwitter className="w-6 h-6 text-white" />
                  </Link>
                  <Link>
                    <GrInstagram className="w-4 h-4 text-white" />
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <h2 className="text-2xl lg:text-3xl text-gray-600 py-5">
                  Teresa Phillips
                </h2>
                <h3 className="text-xl  pb-5">Office Administrator</h3>
                <div className="w-8 h-0.5 bg-green-500 mb-5 mx-auto"></div>
                <p className="px-12 ">
                  Teresa joined our team in 2009. She brings a wealth of
                  knowledge and experience in the accounting field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SLayout>
    </Container>
  );
};

export default OurTeam;
