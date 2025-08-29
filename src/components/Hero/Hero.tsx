import VideoPlayer from '../VideoPlayer/VideoPlayer';

const Hero = () => {
  return (
    <section className="w-full relative lg:-mt-23 pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70">
      <div className="flex justify-between gap-5.5 flex-col items-start 1xl:items-center 1xl:justify-center-safe max-h-full h-full">
        <VideoPlayer />
      </div>
    </section>
  );
};

export default Hero;
