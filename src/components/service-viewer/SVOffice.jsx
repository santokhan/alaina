import ProductViewer, {
  Desc,
  Image,
  ContactBtn,
  Title,
  TitleDescBox
} from './ServiceViewer';
import sImg from '../../assets/images/services/office.jpg';

export default function SVOffice() {
  return (
    <ProductViewer>
      <TitleDescBox>
        <Title>Office Cleaning</Title>
        <Desc>
          Our office cleaning service is a professional service that provides
          cleaning and maintenance for commercial office spaces. These services
          can range from daily cleaning tasks such as vacuuming, mopping, and
          dusting, to more specialized services such as carpet cleaning, window
          washing, and floor waxing. <br /> A typical office cleaning service
          will work with the client to create a customized cleaning plan that
          meets the specific needs of their office space. This plan will outline
          the cleaning tasks to be performed, the frequency of cleaning, and any
          special instructions or requirements.
        </Desc>
        <ContactBtn />
      </TitleDescBox>
      <Image src={sImg} />
    </ProductViewer>
  );
}
