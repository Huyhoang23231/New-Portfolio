import { Title } from "../../components/title";

export const Koi = () => {
  Title("Koi thé");
  return (
    // Main Container
    <div>
      {/* Content */}
      {/* Background Video */}
      <div className="mx-3 md:mx-3 sm:mx-3 xs:mx-3">
        <img
          alt="Background Project | Koi"
          src="/img/koi/1.png"
          className="w-[1500px] h-[700px] sm:h-[350px] md:h-[400px] lg:h-[400px] xl:h-[360px] m-auto rounded-3xl object-cover"
        ></img>
      </div>
      {/** Name */}
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-[25px] text-center md:text-[30px] lg:text-[30px] font-bold">
          KOI Thé Mobile Application
        </h1>
        <span className="mx-1 text-center text-black/60 font-bold mt-2">
          Mobile App Design - User Experience - Interaction Design - Mobile App
          Development - Delivery - UI Design
        </span>

        <div className="my-8">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.behance.net/gallery/173341277/Koi-th-Mobile-App-Design"
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-lg"></span>
            <span className="absolute inset-0 w-full h-full bg-[#ebb25e]  border-2 border-black group-hover:bg-black rounded-lg"></span>
            <span className="relative text-white group-hover:text-white">
              Chi tiết dự án
            </span>
          </a>
        </div>
      </div>
      {/** Separate */}
      <div className="w-full h-[50px] bg-[#ebb25e] content-none"></div>
      {/** Project Title */}
      {/** Background */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-10">
        <div className="pl-3">
          <p className="text-black font-bold text-2xl">Background</p>
          <span className="font-[Roboto] block text-black text-md font-normal leading-10 mt-4">
            Koi thé là một ứng dụng đặt trà sữa cho những tín đồ yêu thích thức
            uống này, với giao diện thân thiện, dễ gần. Người dùng có thể cảm
            thấy sự gần gũi khi trải nghiệm ứng dụng và cũng như có nhiều sự lựa
            chọn thức uống đa dạng cho người dùng.
          </span>
        </div>
        <div className="flex justify-center items-center my-10 md:my-0 lg:my-0">
          <img
            alt="Muvi Background"
            src="/img/koi/1.png"
            className="w-[300px] h-[200px] md:w-[500px] md:h-[300px] lg:w-[500px] lg:h-[300px] rounded-xl"
          ></img>
        </div>
      </div>
      {/** Roles - Methods - Tools - Links */}
      <div className="grid grid-cols-1">
        <div className="pl-3 py-10">
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row">
            <div className="flex">
              <div className="flex flex-col">
                <div className="">
                  <p className="font-bold text-2xl">Roles</p>
                </div>
                <div className="flex flex-col">
                  <span>UI Designer</span>
                  <span>UX Designer</span>
                </div>
              </div>
              <div className="flex flex-col pl-20">
                <div className="">
                  <p className="font-bold text-2xl">Methods</p>
                </div>
                <div className="flex flex-col">
                  <span>Wireframing</span>
                  <span>Prototyping</span>
                </div>
              </div>
            </div>
            <div className="flex mt-10 md:mt-10 lg:mt-0">
              <div className="flex flex-col pl-0 md:pl-0 lg:pl-20">
                <div className="">
                  <p className="font-bold text-2xl">Tools</p>
                </div>
                <div className="flex flex-col">
                  <span>Figma</span>
                  <span>Canva</span>
                </div>
              </div>
              <div className="flex flex-col pl-27 md:pl-27">
                <div className="">
                  <p className="font-bold text-2xl">Links</p>
                </div>
                <div className="flex flex-col">
                  <span>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.figma.com/design/b4gqieaqYKFwRHupopNJ9Z/Koi-th%C3%A9-(-D%E1%BB%B1-%C3%A1n-c%C3%A1-nh%C3%A2n-)?node-id=0-1&t=3yQz6EnGg7mdJgsc-1"
                      className="cursor-pointer hover:text-[#ebb25e] transition-all "
                    >
                      Figma Prototype
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="pl-3 py-10">
          <div className="flex">
            <div className="flex flex-col">
              <div className="">
                <p className="font-bold text-2xl">Tools</p>
              </div>
              <div className="flex flex-col">
                <span>Figma</span>
                <span>Canva</span>
              </div>
            </div>
            <div className="flex flex-col pl-10">
              <div className="">
                <p className="font-bold text-2xl">Links</p>
              </div>
              <div className="flex flex-col">
                <span>Figma Prototype</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/** Advertisement */}
      <div className="">
        <div className="pl-3 py-5 md:py-0 lg:py-10">
          <p className="text-black font-bold text-2xl">Advertisement</p>
        </div>
        <video
          alt="Advertisement"
          src="/video/VideoKoi.mp4"
          loop
          muted
          autoPlay
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></video>
      </div>
      {/** Grid Layout */}
      <div className="">
        <div className="pl-3 py-5 md:py-0 lg:py-10">
          <p className="text-black font-bold text-2xl">Grid Layout </p>
        </div>
        <img
          alt="Grid Layout "
          src="/img/koi/2.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
      </div>
      {/** Wireframe */}
      <div className="">
        <div className="pl-3 py-5 md:py-0 lg:py-10">
          <p className="text-black font-bold text-2xl">Wireframe</p>
        </div>
        <img
          alt="Wireframe"
          src="/img/koi/3.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
        <img
          alt="Wireframe 2"
          src="/img/koi/4.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
        <img
          alt="Wireframe 3"
          src="/img/koi/5.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
      </div>
      {/** Components */}
      <div className="">
        <div className="pl-3 py-5 md:py-0 lg:py-10">
          <p className="text-black font-bold text-2xl">Components</p>
        </div>
        <img
          alt="Components"
          src="/img/koi/6.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
      </div>
      {/** Prototype */}
      <div className="">
        <div className="pl-3 py-5 md:py-0 lg:py-10">
          <p className="text-black font-bold text-2xl">Prototype</p>
        </div>
        <img
          alt="Prototype"
          src="/img/koi/7.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
        <img
          alt="Prototype 2"
          src="/img/koi/8.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
        <img
          alt="Prototype 3"
          src="/img/koi/9.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
        <img
          alt="Prototype 4"
          src="/img/koi/10.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
        <img
          alt="Prototype 5"
          src="/img/koi/11.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
        <img
          alt="Prototype 6"
          src="/img/koi/12.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
        <img
          alt="Prototype 7"
          src="/img/koi/13.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
        <img
          alt="Prototype 8"
          src="/img/koi/14.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
        <img
          alt="Prototype 9"
          src="/img/koi/15.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
        <img
          alt="Prototype 10"
          src="/img/koi/16.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
        <img
          alt="Prototype 11"
          src="/img/koi/17.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
        <img
          alt="Prototype 12"
          src="/img/koi/18.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
        <img
          alt="Prototype 13"
          src="/img/koi/19.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
        <img
          alt="Prototype 14"
          src="/img/koi/20.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
        <img
          alt="Prototype 15"
          src="/img/koi/21.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
      </div>
      {/** Reflection */}
      <div className="">
        <div className="pl-3 py-5 md:py-0 lg:py-10">
          <p className="text-black font-bold text-2xl">Reflection</p>
        </div>
        <div className="flex flex-col mt-2 mx-4 md:mt-2 lg:mt-0 font-[Roboto]">
          <span className="leading-8 ">
            Dự án này là dự án thứ hai của tôi sau Project Muvi. Với mục đích
            chính là thiết kế lại giao diện cho app đặt trà sữa Koi thé với yêu
            cầu là thiết kế đơn giản, giao diện hiện đại và gần gũi bắt kịp với
            xu hướng hiện nay. Mặc dù ban đầu tôi còn đang chưa hiểu yêu cầu,
            nhưng sau khi tham khảo nhiều dự án thiết kế của các nhà thiết kế
            khác thì tôi đã thiết kế ra những bản phác thảo đầu tiên về ứng
            dụng.
          </span>
          <span className="my-4 leading-8 ">
            Dự án thiết kế lại ứng dụng này giúp tôi học được nhiều hơn về quy
            trình xử lý đon hàng khi đặt hàng của người dùng và cũng như các
            luồng xử lý của người dùng trên ứng dụng để giúp nhà thiết kế như
            tôi có thể tối ưu ứng dụng và giao diện cho người dùng.
          </span>
          <span className="leading-8 mb-10">
            Mặc dù dự án thiết kế lại này không quá lớn nhưng cũng giúp tôi hiểu
            được và cũng như nâng cao trình độ về kỹ năng xử lý bố cục và hình
            ảnh trong thiết kế giao diện và trải nghiệm người dùng.
          </span>
        </div>
      </div>
    </div>
  );
};
