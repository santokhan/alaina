import BreadCrumb from '../BreadCrumb';
import CompanyHistory from '../CompanyHistory/CompanyHistory';
import HireUs from '../HireUs/HireUs';
import OurCompany from '../OurCompany/OurCompany';
import OurTeam from '../OurTeam/OurTeam';
import OurValues from '../OurValues/OurValues';
import Satisfaction from '../Satisfaction/Satisfaction';
import SLayout, { SDes, SMain, STitle } from '../section-layout/SectionLayout';

export default function AboutCompany() {
  return (
    <div>
      <BreadCrumb></BreadCrumb>
      <OurCompany />
      <OurTeam />
      <OurValues />
      <CompanyHistory />
      <Satisfaction />
      <HireUs />
    </div>
  );
}
