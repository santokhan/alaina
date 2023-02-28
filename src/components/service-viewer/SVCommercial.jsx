import ProductViewer, {
  Desc,
  Image,
  ContactBtn,
  Title,
  TitleDescBox
} from './ServiceViewer';
import sImg from '../../assets/images/services/commercial.jpg';

export default function SVCommercial() {
  return (
    <ProductViewer>
      <TitleDescBox>
        {/* <Title>Relaxation Massage</Title> */}
        <Title>Commercial Cleaning</Title>
        <Desc>
          Our unique cleaning system differentiates us from our competitors. Our
          clients continue to choose our services because we deliver effective
          cleaning solutions that meticulously clean their residences, taking
          care of even the smallest details. Our comprehensive cleaning
          approach, referred to as the Detail-Clean Rotation System, has been
          tested and proven successful in over five million cleaning sessions!
        </Desc>
        <ContactBtn />
      </TitleDescBox>
      <Image src={sImg} />
    </ProductViewer>
  );
}
