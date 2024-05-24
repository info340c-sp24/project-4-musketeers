export default function Masterclass() {
    return (
      <div>
        <div className="bg-black h-96 flex justify-center items-center">
          <div className="text-center md:space-x-4 lg:space-x-8">
            <div className="text-transparent bg-clip-text bg-gradient-to-t from-black to-gray-100 text-8xl lg:text-9xl font-bold md:inline-block" data-aos="fade-up" data-aos-duration="2000">
              MASTER
            </div>
            <div className="text-transparent bg-clip-text bg-gradient-to-t from-black to-gray-100 text-8xl lg:text-9xl font-bold md:inline-block md:mt-0.5 md:pl-0" data-aos="fade-up" data-aos-duration="2000">
              CLASS
            </div>
          </div>
        </div>
        {/* Carousel Start */}
        <div className="overflow-x-auto h-5/6 scroll-smooth">
          <div className="flex">
            <div className="relative bg-piano-blue w-96 flex-shrink-0 h-5/6 flex items-center justify-center">
              <img src="/images/piano.png" alt="piano" className="h-auto" />
              <div className="absolute top-0 left-1 text-light-pink text-7xl font-extrabold text-left">VIEW ALL</div>
            </div>
            <div className="relative bg-vocals-creme w-96 flex-shrink-0 h-5/6 flex items-center justify-center">
              <img src="/images/vocals.png" alt="vocals" className="h-auto" />
              <div className="absolute top-0 left-1 text-black text-7xl font-extrabold text-left">VOCALS</div>
            </div>
            <div className="relative bg-light-blue w-96 flex-shrink-0 h-5/6 flex items-center justify-center">
              <img src="/images/guitar.png" alt="guitar" className="h-auto" />
              <div className="absolute top-0 left-1 text-white text-7xl font-extrabold text-left">E-GUITAR</div>
            </div>
            <div className="relative bg-white w-96 flex-shrink-0 h-5/6 flex items-center justify-center">
              <img src="/images/drums.png" alt="drums" className="h-auto" />
              <div className="absolute top-0 left-1 text-black text-7xl font-extrabold text-left">DRUMS</div>
            </div>
            <div className="relative bg-pale-gray w-96 flex-shrink-0 h-5/6 flex items-center justify-center">
              <img src="/images/edm.png" alt="edm" className="h-auto" />
              <div className="absolute top-0 left-1 text-piano-blue text-7xl font-extrabold text-left">EDM</div>
            </div>
            <div className="relative bg-piano-blue w-96 flex-shrink-0 h-5/6 flex items-center justify-center">
              <img src="/images/harp.png" alt="harp" className="h-auto" />
              <div className="absolute top-0 left-1 text-white text-7xl font-extrabold text-left">HARP</div>
            </div>
            <div className="relative bg-light-pink w-96 flex-shrink-0 h-5/6 flex items-center justify-center">
              <img src="/images/rap.png" alt="rap" className="h-auto" />
              <div className="absolute top-0 left-1 text-black text-7xl font-extrabold text-left">RAP</div>
            </div>
          </div>
        </div>
      </div>
    );
  };