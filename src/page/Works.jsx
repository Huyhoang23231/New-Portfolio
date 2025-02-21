import { Outlet, Link } from "react-router-dom";
import { Title } from "../components/title";

export const Works = () => {
  Title("Works");
  return (
    // Main Container
    <div>
      {/* Content */}
      {/* Background Video */}
      <div className="mx-3 md:mx-3 sm:mx-3 xs:mx-3">
        <video
          alt="Background Video"
          src="/video/3.mp4"
          className="w-full h-[500px] md:h-[400px] lg:h-[400px] xl:h-[360px]  m-auto rounded-3xl object-cover"
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>
      {/** Name */}
      <div className="flex justify-start ml-3">
        <h1 className="text-[80px] md:text-[150px] lg:text-[200px] xl:text-[200px] font-bold">
          WorkS
        </h1>
      </div>
      {/** Project Title */}
      <div className="flex justify-start ml-3">
        <h1 className="text-[30px] md:text-[30px] lg:text-[30px] italic font-light">
          My recent projects
        </h1>
      </div>
      {/** Project Gallery */}
      {/** Project Gallery Desktop - Chỉ hiển thị trên md trở lên */}
      <div className="hidden md:block relative w-full h-[750px] mx-auto mt-10 bg-gray-100">
        {/* Ô 1: cao 400px, nửa trái */}
        <div className="absolute top-0 left-0 w-1/2 h-[400px] bg-red-200 cursor-pointer group">
          <Link to="/Works/Muvi">
            <img
              alt="Muvi"
              src="/img/Muvi.png"
              className="w-full h-full object-cover"
            />
            {/* Lớp overlay */}
            <div className="absolute inset-0 bg-black/70 flex items-end justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
              <div className="flex flex-col transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-2xl">Muvi</p>
                <span className="text-white italic text-lg pt-2">
                  Mobile Application
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Ô 2: cao 350px, nửa phải */}
        <div className="absolute top-0 right-0 w-1/2 h-[350px] bg-blue-200 cursor-pointer group">
          <Link to="/Works/Koi">
            <img
              alt="Koi thé"
              src="/img/Koi.png"
              className="w-full h-full object-cover"
            />
            {/* Lớp overlay */}
            <div className="absolute inset-0 bg-black/70 flex items-end justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
              <div className="flex flex-col transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-2xl">Koi thé</p>
                <span className="text-white italic text-lg pt-2">
                  Mobile Application
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Ô 3: cao 350px, nửa trái, nằm ngay dưới Ô 1 */}
        <div className="absolute left-0 top-[400px] w-1/2 h-[350px] bg-green-200 cursor-pointer group">
          <Link to="/Works/HavenOfFairy">
            <img
              alt="Haven of Fairy"
              src="/img/HavenOfFairy.png"
              className="w-full h-full object-cover"
            />
            {/* Lớp overlay */}
            <div className="absolute inset-0 bg-black/70 flex items-end justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
              <div className="flex flex-col transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-2xl">Haven of Fairy</p>
                <span className="text-white italic text-lg pt-2">
                  Mobile | Web Application
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Ô 4: cao 400px, nửa phải, nằm ngay dưới Ô 2 */}
        <div className="absolute right-0 top-[350px] w-1/2 h-[400px] bg-yellow-200 cursor-pointer group">
          <Link to="/Works/LSante">
            <img
              alt="L'Sante"
              src="/img/LSante.png"
              className="w-full h-full object-cover"
            />
            {/* Lớp overlay */}
            <div className="absolute inset-0 bg-black/70 flex items-end justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
              <div className="flex flex-col transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-2xl">LSante</p>
                <span className="text-white italic text-lg pt-2">
                  Web Landing Page
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/** Project Gallery Mobile - Chỉ hiển thị dưới md */}
      <div className="block md:hidden w-full mx-auto mt-10 bg-gray-100">
        <div className="grid grid-cols-1 gap-0">
          {/* Ô 1: cao 400px */}
          <div className="relative h-[400px] bg-red-200 cursor-pointer group">
            <Link to="/Works/Muvi">
              <img
                alt="Muvi"
                src="/img/Muvi.png"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/70 flex items-end justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
                <div className="flex flex-col transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-2xl">Muvi</p>
                  <span className="text-white italic text-lg pt-2">
                    Mobile Application
                  </span>
                </div>
              </div>
            </Link>
          </div>
          {/* Ô 2: cao 350px */}
          <div className="relative h-[350px] bg-blue-200 cursor-pointer group">
            <Link to="/Works/Koi">
              <img
                alt="Koi thé"
                src="/img/Koi.png"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/70 flex items-end justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
                <div className="flex flex-col transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-2xl">Koi thé</p>
                  <span className="text-white italic text-lg pt-2">
                    Mobile Application
                  </span>
                </div>
              </div>
            </Link>
          </div>
          {/* Ô 3: cao 350px */}
          <div className="relative h-[350px] bg-green-200 cursor-pointer group">
            <Link to="/Works/HavenOfFairy">
              <img
                alt="Haven of Fairy"
                src="/img/HavenOfFairy.png"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/70 flex items-end justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
                <div className="flex flex-col transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-2xl">Haven of Fairy</p>
                  <span className="text-white italic text-lg pt-2">
                    Mobile | Web Application
                  </span>
                </div>
              </div>
            </Link>
          </div>
          {/* Ô 4: cao 400px */}
          <div className="relative h-[400px] bg-yellow-200 cursor-pointer group">
            <Link to="/Works/LSante">
              <img
                alt="L'Sante"
                src="/img/LSante.png"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/70 flex items-end justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
                <div className="flex flex-col transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-2xl">LSante</p>
                  <span className="text-white italic text-lg pt-2">
                    Web Landing Page
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};
