import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Title } from "../components/title";

export const Contact = () => {
  Title("Contact");
  return (
    // Main Container
    <div>
      {/* Content */}
      {/* Background Video */}
      <div className="mx-3 md:mx-3 sm:mx-3 xs:mx-3">
        <video
          alt="Background Video"
          src="/video/1.mp4"
          className="w-full h-[500px] md:h-[400px] lg:h-[400px] xl:h-[360px]  m-auto rounded-3xl object-cover"
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>
      {/** Name */}
      <div className="grid grid-cols-[2fr_1fr]">
        <div className="ml-3">
          <div className="">
            <h1 className="text-[80px] md:text-[150px] lg:text-[200px] xl:text-[200px] font-bold">
              ContacT
            </h1>
          </div>
          <div className="">
            <p className="text-2xl font-bold">
              Get in touch: tahuyhoang860@gmail.com
            </p>
            <ul className="flex flex-col justify-start items-start gap-y-4 md:gap-y-0 lg:gap-y-0 md:flex-row lg:flex-row py-10 md:py-4 lg:py-4">
              <li className="group text-xl font-bold flex justify-center items-center hover:text-gray-400 transition duration-300 cursor-pointer">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/hoang.uiux?igsh=aXY3ZHMxeHZmNjRu&utm_source=qr"
                  className=""
                >
                  Instargram
                </a>

                <ArrowForwardIcon
                  fontSize="medium"
                  className="rotate-[-45deg] transform transition duration-300 group-hover:rotate-0 "
                />
              </li>
              <li className="group text-xl font-bold flex justify-center items-center hover:text-gray-400 transition duration-300 cursor-pointer ml-0 mt-4 md:mt-0 lg:mt-0 sm:ml-0 md:ml-8 lg:ml-8">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.behance.net/huyhoangt"
                  className=""
                >
                  Behance
                </a>
                <ArrowForwardIcon
                  fontSize="medium"
                  className="rotate-[-45deg] transform transition duration-300 group-hover:rotate-0 "
                />
              </li>
              <li className="group text-xl font-bold flex justify-center items-center hover:text-gray-400 transition duration-300 cursor-pointer ml-0 mt-4 md:mt-0 lg:mt-0 sm:ml-0 md:ml-8 lg:ml-8">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:tahuyhoang860@gmail.com"
                  className=""
                >
                  Email
                </a>
                <ArrowForwardIcon
                  fontSize="medium"
                  className="rotate-[-45deg] transform transition duration-300 group-hover:rotate-0 "
                />
              </li>
            </ul>
          </div>
        </div>
        {/** Triangle */}
        <div className="hidden sm:hidden md:hidden lg:flex justify-center items-end pl-[100px]">
          <svg
            className="hidden sm:hidden md:hidden lg:block"
            width="380"
            height="350"
            viewBox="0 0 380 350"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M181.678 181.678L380 0V310C380 332.091 362.091 350 340 350H0L181.678 181.678Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
