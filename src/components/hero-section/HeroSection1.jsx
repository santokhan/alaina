import HeroButton from "./HeoButton";
import Title from "./Title";

export default function HeroSection1({ startScroll }) {
  return (
    <div className="slide-2 flex justify-center items-center h-full w-full">
      <div className="effec w-full h-full flex justify-center items-center">
        <div className="text-center max-w-7xl p-4">
          <Title>A caring more time to spend on what really matter</Title>
          <HeroButton></HeroButton>
        </div>
      </div>
    </div>
  );
}
