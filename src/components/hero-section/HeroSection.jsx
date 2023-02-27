import HeroButton from "./HeoButton";
import Title from "./Title";

export default function HeroSection({ startScroll }) {
  return (
    <div className="slide-1 flex justify-center items-center h-full w-full pt-8 pb-16">
      <div className="effec w-full h-full flex justify-center items-center">
        <div className="text-center max-w-7xl p-4">
          <Title>A caring cleaning team</Title>
          <HeroButton></HeroButton>
        </div>
      </div>
    </div>
  );
}
