import { Title } from "../components/title";

export const About = () => {
  Title("About");
  return (
    <div>
      {/* Content */}
      {/* Background Video */}
      <div className="mx-3 md:mx-3 sm:mx-3 xs:mx-3">
        <video
          alt="Background Video"
          src="/video/2.mp4"
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
          About mE
        </h1>
      </div>
      {/** Personal Info */}
      <div className="grid xl:grid-cols-[0.5fr_2.5fr] md:grid-cols-[1fr_2fr] mx-3 my-40">
        <div className="flex justify-center">
          <img
            alt="Avatar About Me"
            src="/img/Avatar3.jpg"
            className="w-[500px] h-[550px] md:w-[300px] md:h-[340px] lg:w-[300px] lg:h-[340px] xl:w-[280px] xl:h-[320px]  rounded-2xl object-cover"
          ></img>
        </div>
        <div className="flex justify-center items-center mx-2 my-10 sm:mx-10 md:mx-10 lg:mx-10">
          <p className="leading-10 text-xl">
            As an{" "}
            <span className="text-[#666666]">
              interface and user experience designer
            </span>{" "}
            , along with skills such as wireframe rendering, mockups, and
            prototypes, I can{" "}
            <span className="text-[#666666]"> contribute</span> and
            <span className="text-[#666666]"> create </span> intuitive,
            easy-to-use, and bring{" "}
            <span className="text-[#666666]"> value </span> to users, while
            meeting the business goals of the{" "}
            <span className="text-[#666666]"> business. </span>
          </p>
        </div>
      </div>
      {/** Skills */}
      <div className="grid grid-cols-1 mx-3 my-8">
        <div className="">
          <h1 className="text-5xl italic font-light">Skills</h1>
        </div>
        {/** methods */}
        <div className="mt-8">
          <p className="font-bold text-2xl mb-4">methods</p>
          <span className="font-light text-lg">
            Wireframing - Mockup - Prototypes - User Story - Storyboarding -
            User + Stackholder Story Mapping - UML Diagramming - User Flow
          </span>
        </div>
        {/** tools */}
        <div className="mt-8">
          <p className="font-bold text-2xl mb-4">tools</p>
          <span className="font-light text-lg">
            Figma - Adobe Illustrator - Adobe Photoshop - Canva - Spline - Wix
            Studio - Github - Lottiefiles - Fimora - Capcut - Clipchamp
          </span>
        </div>
        {/** technical */}
        <div className="mt-8 mb-8">
          <p className="font-bold text-2xl mb-4">technical </p>
          <span className="font-light text-lg">HTML/CSS - JavaScript</span>
        </div>
      </div>
      {/** Education */}
      <div className="grid grid-cols-1 mx-3 my-8">
        <div className="">
          <h1 className="text-5xl italic font-light">Education</h1>
        </div>
        {/** schools */}
        <div className="my-8">
          <p className="font-bold text-2xl mb-4">
            Van Lang University - Software Engineering
          </p>
          <span className="font-light text-lg">09/2020 - 08/2024</span>
        </div>
      </div>
      {/** Clients */}
      <div className="grid grid-cols-1 mx-3 my-8">
        <div className="">
          <h1 className="text-5xl italic font-light">Clients</h1>
        </div>
        {/** agency */}
        <div className="my-8">
          <p className="font-bold text-2xl mb-4">
            GRWG Creative Hub - UI UX Intern
          </p>
          <span className="font-light text-lg">07/2023 - 05/2024</span>
        </div>
      </div>
    </div>
  );
};
