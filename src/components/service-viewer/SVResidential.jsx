import ProductViewer, {
  ContactBtn,
  Desc,
  Image,
  Title,
  TitleDescBox
} from './ServiceViewer';
import sImg from '../../assets/images/services/residential.jpg';

export default function SVResidential() {
  return (
    <ProductViewer>
      <TitleDescBox>
        <Title>Residential Cleaning</Title>
        <Desc>
          What makes us unique is our cleaning system, which has been proven to
          be effective and keeps our customers returning to us. Our services are
          thorough and pay attention to even the smallest details, ensuring that
          our customers' homes and apartments stay clean. Our Detail-Clean
          Rotation System is an extensive cleaning system that has been used in
          over five million cleans, and its effectiveness has been demonstrated
          time and time again.
        </Desc>
        <ContactBtn />
      </TitleDescBox>
      <Image src={sImg} />
    </ProductViewer>
  );
}
