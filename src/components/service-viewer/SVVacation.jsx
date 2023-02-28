import ProductViewer, {
  Desc,
  Image,
  ContactBtn,
  Title,
  TitleDescBox
} from './ServiceViewer';
import sImg from '../../assets/images/services/vacational.jpg';

export default function SVVacation() {
  return (
    <ProductViewer>
      <TitleDescBox>
        <Title>Vacational Cleaning</Title>
        <Desc>
          Our vacation rental cleaning service ensures that your rental property
          is sparkling clean and ready for new guests. We understand that
          vacation rentals require a higher level of attention to detail and
          quick turnaround times. That's why we offer a comprehensive cleaning
          service that covers all aspects of your vacation rental, from bedrooms
          and bathrooms to kitchens and living areas. Our team of experienced
          and professional cleaners will work quickly and efficiently to ensure
          that your rental is cleaned to the highest standards, so that your
          guests can enjoy a comfortable and pleasant stay. With our vacation
          rental cleaning service, you can rest assured that your property will
          always be ready for your next guests.
        </Desc>
        <ContactBtn />
      </TitleDescBox>
      <Image src={sImg} />
    </ProductViewer>
  );
}
