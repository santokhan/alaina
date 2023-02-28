import Container from '../../layouts/Container';
import { SDes, STitle } from '../../section-layout/SectionLayout';

export default function Discount() {
  return (
    <Container>
      <STitle>Discounts for Recurring Clientele</STitle>
      <SDes>
        Looking to set up a regular cleaning? We offer huge savings to loyal
        customers (applies to second cleaning onward).
      </SDes>

      <div className="flex flex-wrap justify-between py-12">
        <div className="w-96 bg-teal-400 text-center font-semibold rounded-2xl h-40 flex flex-col justify-center items-center text-white shadow">
          <div className="text-xl lg:text-3xl">30% OFF</div>
          <div className="text-lg lg:text-2xl">Weekly clients</div>
        </div>
        <div className="w-96 bg-sky-400 text-center font-semibold rounded-2xl h-40 flex flex-col justify-center items-center text-white shadow">
          <div className="text-xl lg:text-3xl">25% OFF</div>
          <div className="text-lg lg:text-2xl">Bi-weekly clients</div>
        </div>
        <div className="w-96 bg-blue-400 text-center font-semibold rounded-2xl h-40 flex flex-col justify-center items-center text-white shadow">
          <div className="text-xl lg:text-3xl">15% OFF</div>
          <div className="text-lg lg:text-2xl">Monthly clients</div>
        </div>
      </div>
    </Container>
  );
}
