import { Title } from "../../components/title";

export const LSante = () => {
  Title("L'Sante");
  return (
    // Main Container
    <div>
      {/* Content */}
      {/* Background Image */}
      <div className="mx-3 md:mx-3 sm:mx-3 xs:mx-3">
        <img
          alt="Background Project | Haven of Fairy"
          src="/img/LSante/Introduce.png"
          className="w-[1500px] h-[700px] sm:h-[350px] md:h-[400px] lg:h-[400px] xl:h-[360px] m-auto rounded-3xl object-cover"
        ></img>
      </div>
      {/** Name */}
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-[25px] text-center md:text-[30px] lg:text-[30px] font-bold">
          LSante Hotel Booking Website
        </h1>
        <span className="mx-1 text-center text-black/60 font-bold mt-2">
          Website App Design - User Experience - Web Development - UI Design
        </span>

        <div className="my-8">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.behance.net/gallery/193891967/LSante-Hotel-Booking-Website"
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-lg"></span>
            <span className="absolute inset-0 w-full h-full bg-[#e3c5a3]  border-2 border-black group-hover:bg-black rounded-lg"></span>
            <span className="relative text-white group-hover:text-white">
              Chi tiết dự án
            </span>
          </a>
        </div>
      </div>
      {/** Separate */}
      <div className="w-full h-[50px] bg-[#e3c5a3] content-none"></div>
      {/** Project Title */}
      {/** Background */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-10">
        <div className="pl-3">
          <p className="text-black font-bold text-2xl">Background</p>
          <span className="font-[Roboto] block text-black text-md font-normal leading-10 mt-4">
            LSANTE là một trang web đặt phòng khách sạn được thiết kế để mang
            đến trải nghiệm đặt vé xuyên suốt cho người dùng cũng như cho người
            dùng tổng quan thông tin cần thiết về khách sạn.
          </span>
        </div>
        <div className="flex justify-center items-center my-10 md:my-10 lg:my-0">
          <img
            alt="Muvi Background"
            src="/img/LSante/Homepage.png"
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
                  <span>Lo - Fi Prototyping</span>
                  <span>Front-End Development</span>
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
                  <span>Adobe Illustrator</span>
                </div>
              </div>
              <div className="flex flex-col pl-11 md:pl-11">
                <div className="">
                  <p className="font-bold text-2xl">Links</p>
                </div>
                <div className="flex flex-col">
                  <span>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.figma.com/design/Jn0RIwbJ5sX5n7sQOJmIdr/Business-Landing-Page?node-id=0-1&t=9dA62Wa3SfPcAkyS-1"
                      className="cursor-pointer hover:text-[#e3c5a3] transition-all underline"
                    >
                      Figma Prototype
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/** Logo */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-10">
        <div className="pl-3">
          <p className="text-black font-bold text-2xl">Background</p>
          <span className="font-[Roboto] block text-black text-md font-normal leading-10 mt-4">
            Tôi chọn font Elaris là một font San Serif kết hợp hài hòa giữa sự
            hiện đại nhưng cũng không kém phần sang trọng thể hiện tinh thần của
            khách sạn với phong cách sang trọng và hiện đại.
          </span>
        </div>
        <div className="flex justify-center items-center my-10 md:my-10 lg:my-0">
          <img
            alt="Muvi Background"
            src="/img/LSante/Logo.svg"
            className="w-[300px] h-[200px] md:w-[500px] md:h-[300px] lg:w-[500px] lg:h-[300px] rounded-xl"
          ></img>
        </div>
      </div>
      {/** Typography and Colors */}
      <div className="">
        <div className="pl-3 py-5 md:py-0 lg:py-10">
          <p className="text-black font-bold text-2xl">Typography and Colors</p>
        </div>
        <img
          alt="Typography and Colors"
          src="/img/LSante/Typography & Colors.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
      </div>
      {/** Visual Design */}
      <div className="">
        <div className="pl-3 py-5 md:py-0 lg:py-10">
          <p className="text-black font-bold text-2xl">Visual Design</p>
        </div>
        <img
          alt="Visual Design"
          src="/img/LSante/Introduce.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
      </div>
      {/** Mockup */}
      <div className="">
        <div className="pl-3 py-5 md:py-0 lg:py-10">
          <p className="text-black font-bold text-2xl">Mockup</p>
        </div>
        <img
          alt="Mockup"
          src="/img/LSante/Mockup.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
      </div>
      {/** Reflection */}
      {/* <div className="">
        <div className="pl-3 py-5 md:py-0 lg:py-10">
          <p className="text-black font-bold text-2xl">Reflection</p>
        </div>
        <div className="flex flex-col mt-2 mx-4 md:mt-2 lg:mt-0 font-[Roboto]">
          <span className="leading-8 ">
            Dự án Haven of Fairy là một dự án lớn của tôi. Bao gồm cả việc lập
            trình giao diện cho dự án. Việc lên ý tưởng cho dự án này bắt nguồn
            từ việc thị trường các khách sạn Luxury hiện nay ngày càng bão hòa
            và một dự án khách sạn bao gồm không gian ngoài trời kết hợp với
            quang cảnh thiên nhiên sẽ thổi một luồng gió mới vào lĩnh vực này.
          </span>
          <span className="my-4 leading-8 ">
            Việc lên ý tưởng thiết kế đầu tiên gặp nhiều khó khăn khi có rất
            nhiều ứng dụng trên thị trường hiện nay cũng phục vụ cho việc đặt
            phòng nên tôi muốn làm một ứng dụng với giao diện hiện đại, hài hòa
            nhưng cũng không kém phần thực dụng để có thể tạo nên sự khác biệt
            trong vô số ứng dụng đặt phòng hiện nay.
          </span>
          <span className="leading-8 mb-10">
            Dù dự án này tốn rất nhiều thời gian nhưng tôi đã học hỏi được rất
            nhiều khi làm dự án như các kiến thức về ngôn ngữ lập trình, luồng
            người dùng, giao diện thích ứng, ... Những kiến thức này rất quan
            trọng để tôi có thể áp dụng vào trong những dự án tiếp theo.
          </span>
        </div>
      </div> */}
    </div>
  );
};
