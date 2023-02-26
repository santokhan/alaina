import CompanyHistory from "../CompanyHistory/CompanyHistory";
import HireUs from "../HireUs/HireUs";
import OurCompany from "../OurCompany/OurCompany";
import OurTeam from "../OurTeam/OurTeam";
import OurValues from "../OurValues/OurValues";
import Satisfaction from "../Satisfaction/Satisfaction";
import SLayout, { SDes, SMain, STitle } from "../section-layout/SectionLayout";

export default function AboutCompany() {
  return (
<<<<<<< HEAD
      <div>
        <OurCompany />
        <OurTeam />
        <OurValues />
        <CompanyHistory />
        <Satisfaction />
        <HireUs />
      </div>
=======
    <div id="about">
      <SLayout className="">
        <SMain>
          <div className="relative w-full overflow-hidden">
            <div className="mb-4 relative border-green-700 lg:border-none flex justify-center text-center">
              <STitle>Cleaning Services That Shine</STitle>
            </div>
          </div>
        </SMain>
      </SLayout>
    </div>
>>>>>>> 729774b77c43d7d1dd280c89048b7a6cf943b852
  );
}
