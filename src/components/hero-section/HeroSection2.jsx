import HeroButton from "./HeoButton";
import Title from "./Title";

export default function HeroSection2({ startScroll }) {
  return (
    <div className="slide-3 flex justify-center items-center h-full w-full">
      <div className="effec w-full h-full flex justify-center items-center">
        <div className="max-w-7xl p-4">
          <Title>Eco-Friendly cleaning service</Title>
          <HeroButton></HeroButton>
        </div>
      </div>
    </div>
  );
}
