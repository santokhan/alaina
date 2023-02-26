import SLayout, { SDes, SMain, STitle } from "../section-layout/SectionLayout";
import { Link } from "react-router-dom";

export default function About() {
  return (
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
  );
}
