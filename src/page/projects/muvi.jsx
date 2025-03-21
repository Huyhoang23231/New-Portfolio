import { Title } from "../../components/title";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const Muvi = () => {
  Title("Muvi");
  return (
    // Main Container
    <div>
      {/* Content */}
      {/* Background Video */}
      <div className="mx-3 md:mx-3 sm:mx-3 xs:mx-3">
        <img
          alt="Background Project | Muvi"
          src="/img/Muvi.png"
          className="w-[1500px] h-[700px] sm:h-[350px] md:h-[400px] lg:h-[400px] xl:h-[360px] m-auto rounded-3xl object-cover"
        ></img>
      </div>
      {/** Name */}
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-[25px] text-center md:text-[30px] lg:text-[30px] font-bold">
          MUVI Movie Ticket Booking Mobile Application
        </h1>
        <span className="mx-1 text-center text-black/60 font-bold mt-2">
          Mobile App Design - User Experience - Interaction Design - Mobile App
          Development
        </span>

        <div className="my-8">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.behance.net/gallery/169925619/Muvi-Mobile-App-Design"
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-lg"></span>
            <span className="absolute inset-0 w-full h-full bg-[#F32A31]  border-2 border-black group-hover:bg-black rounded-lg"></span>
            <span className="relative text-white group-hover:text-white">
              Chi tiết dự án
            </span>
          </a>
        </div>
      </div>
      {/** Separate */}
      <div className="w-full h-[50px] bg-[#F32A31] content-none"></div>
      {/** Project Title */}
      {/** Background */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-10">
        <div className="pl-3">
          <p className="text-black font-bold text-2xl">Background</p>
          <span className="font-[Roboto] block text-black text-md font-normal leading-10 mt-4">
            MUVI là một ứng dụng giúp người dùng có thể dễ dàng đặt vé xem phim
            mà không cần phải tốn quá nhiều thời gian đến rạp phim để mua vé,
            giúp tiết kiệm thời gian, cùng với nhiều phương thức thanh toán khác
            nhau giúp người dùng có thể dễ dàng chọn lựa và người dùng có thể dễ
            dàng hủy vé nếu có trường hợp không mong muốn xảy ra.
          </span>
        </div>
        <div className="flex justify-center items-center my-10 md:my-0 lg:my-0">
          <img
            alt="Muvi Background"
            src="/img/Muvi.png"
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
                      href="https://www.figma.com/design/liyOzlfXyQDeD8M8o8aT52/D%E1%BB%B1-%C3%A1n-c%C3%A1-nh%C3%A2n-(-App-%C4%91%E1%BA%B7t-v%C3%A9-xem-phim-)?node-id=4-4&t=Ex1maySjwki897Ir-1"
                      className="cursor-pointer hover:text-[#f32a31] transition-all underline "
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
      {/** Ideation + Discovery */}
      <div className="grid grid-cols-1">
        <div className="pl-3 py-10">
          <p className="text-black font-bold text-2xl">Ideation + Discovery</p>
          <span className="w-full md:w-[700px] lg:w-[700px] font-[Roboto] block text-black text-md font-normal leading-10 mt-4">
            Với nhu cầu xem phim giải trí ngày càng cao, thì người dùng muốn
            hướng đển trải nghiệm nhanh, gọn và tiện lợi khi đặt vé xem phim mà
            không cần phải ra tận rap mua vé trước. Từ những ý tưởng như thế,
            tôi quyết định thiết kế và xây dựng ứng dụng đặt vé phim trực tiếp
            giúp giải quyết được những khó khăn trên và đáp ứng được nhu cầu của
            người dùng ngày càng cao hiện nay.
          </span>
        </div>
      </div>
      {/** The Problem + Our Solution */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_0.5fr_1fr] lg:grid-cols-[1fr_0.5fr_1fr] py-10">
        {/** The Problem */}
        <div className="flex items-center mx-1 md:mx-0 lg:mx-0">
          <div className="flex flex-col pl-3">
            <div className="mb-2">
              <p className="font-bold text-2xl">The Problem</p>
            </div>
            <div className="flex flex-col">
              <span>Phải mua vé ở rạp phim (xa, không có thời gian,...)</span>
              <span className="my-4">
                Giờ cao điểm số lượng khách quá nhiều
              </span>
              <span>
                Không thể đổi suất chiếu và vé một khi khách đã mua vé
              </span>
            </div>
          </div>
        </div>
        {/** Arrow */}
        <div className="flex justify-center items-center">
          <div className="flex flex-col">
            <ArrowForwardIcon
              sx={{ fontSize: 100, color: "black" }}
              className="flex justify-center items-center rotate-90 md:rotate-0 lg:rotate-0"
            />
          </div>
        </div>
        {/** Our Solution */}
        <div className="flex items-center mx-3 md:mx-0 lg:mx-0">
          <div className="flex flex-col">
            <div className="mb-2">
              <p className="font-bold text-2xl">Our Solution</p>
            </div>
            <div className="flex flex-col">
              <span>
                Giao diện thân thiện có nhiều sự lựa chọn cho người dùng như
                (cụm rạp, thời gian, thanh toán,...)
              </span>
              <span className="my-4">Có thể đặt lịch ở bất cứ đâu</span>
              <span>
                Có thể đổi suất chiếu và vé trong thời gian quy định của ứng
                dụng
              </span>
            </div>
          </div>
        </div>
      </div>
      {/** Project Timline */}
      <div className="">
        <div className="pl-3 py-5 md:py-0 lg:py-10">
          <p className="text-black font-bold text-2xl">Project Timeline</p>
        </div>
        <img
          alt="Project Timeline"
          src="/img/Timeline.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
      </div>
      {/** Stackholder Interview */}
      <div className="">
        <div className="pl-3 py-5 md:py-0 lg:py-10">
          <p className="text-black font-bold text-2xl">Stackholder Interview</p>
        </div>
        <img
          alt="Stackholder Interview"
          src="/img/Stackholder.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
      </div>
      {/** Project Goal */}
      <div className="">
        <div className="pl-3 py-5 md:py-0 lg:py-10">
          <p className="text-black font-bold text-2xl">Project Goal</p>
        </div>
        <img
          alt="Project Goal"
          src="/img/Goal.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
      </div>
      {/** Market Research */}
      <div className="">
        <div className="pl-3 py-5 md:py-0 lg:py-10">
          <p className="text-black font-bold text-2xl">Market Research</p>
        </div>
        <img
          alt="Market Research"
          src="/img/Research.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
      </div>
      {/** Collect User Insights */}
      <div className="">
        <div className="pl-3 py-5 md:py-0 lg:py-10">
          <p className="text-black font-bold text-2xl">Collect User Insights</p>
        </div>
        <img
          alt="Collect User Insights"
          src="/img/Insights.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
      </div>
      {/** Persona */}
      <div className="">
        <div className="pl-3 py-5 md:py-0 lg:py-10">
          <p className="text-black font-bold text-2xl">Persona</p>
          <span className="font-[Roboto] font-light text-md">
            Dựa trên các câu trả lời nhận được từ phỏng vấn và khảo sát, tôi đã
            xây dựng nên một hình mẫu giả định, đại diện cho chân dung nhóm
            người dùng của ứng dụng.
          </span>
        </div>
        {/** Persona 1 */}
        <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[0.5fr_2fr] my-10">
          <div className="flex justify-center items-center md:pl-3 lg:justify-center lg:pl-0">
            <img
              alt="Persona 1"
              src="/img/Persona1.png"
              className="w-[200px] h-[200px] my-5 rounded-full object-cover"
            ></img>
          </div>
          <div className="flex flex-col justify-center mx-3 md:mx-3 lg:mx-0">
            <p className="font-[Roboto] font-bold">Nguyễn Minh Trung</p>
            <span className="font-[Roboto] font-normal leading-8 pt-2">
              Anh Trung là một nhân viên văn phòng sống tại thành phố Hồ Chí
              Minh, anh rất thích xem phim và thường xuyên đi xem phim sau giờ
              tan làm và vì không có thời gian nhiều nên anh mong muốn có một
              ứng dụng đặt vé xem phim giúp anh có thể tiết kiệm thời gian và
              cho anh nhiều sự lựa chọn hơn khi không cần phải xếp hàng mua vé
              xem phim.{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1cbva_1a0esIa6miAa2Anqkgg7F4df1VT/view?usp=drive_link"
                className="underline"
              >
                (Full Persona)
              </a>{" "}
            </span>
          </div>

          <div className=""></div>
        </div>
        {/** Persona 2 */}
        <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[0.5fr_2fr] my-10">
          <div className="flex justify-center items-center md:pl-3 lg:justify-center lg:ml-3">
            <img
              alt="Persona 2"
              src="/img/Persona2.png"
              className="w-[200px] h-[200px] my-5 rounded-full object-cover"
            ></img>
          </div>
          <div className="flex flex-col justify-center mx-3 md:mx-3 lg:mx-0">
            <p className="font-[Roboto] font-bold">Hà Thị Cúc</p>
            <span className="font-[Roboto] font-normal leading-8 pt-2">
              Chị Cúc là một nhân viên ngân hàng hiện đang sống cùng chồng tại
              thành phố Hồ Chí Minh, chị rất thích xem phim cùng chồng và thường
              xuyên đi xem phm vào cuối tuần và vì không có thời gian nhiều nên
              chị mong muốn có một ứng dụng đặt vé xem phim giúp chị và chồng có
              thể tiết kiệm thời gian và cho chị nhiều sự lựa chọn hơn khi không
              cần phải xếp hàng mua vé xem phim.{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1FYSo2A0hdA_Zmr0ItJ0gpymwvUGnSDAC/view?usp=drive_link"
                className="underline"
              >
                (Full Persona)
              </a>{" "}
            </span>
          </div>
        </div>
      </div>
      {/** Empathy Map */}
      <div className="">
        <div className="pl-3 py-5 md:py-0 lg:py-10">
          <p className="text-black font-bold text-2xl">Empathy Map</p>
        </div>
        <img
          alt="Empathy Map"
          src="/img/EmpathyMap.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
      </div>
      {/** Site Map */}
      <div className="">
        <div className="pl-3 py-5 md:py-0 lg:py-10">
          <p className="text-black font-bold text-2xl">Site Map</p>
        </div>
        <img
          alt="Site Map"
          src="/img/Sitemap.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
      </div>
      {/** Userflow */}
      <div className="">
        <div className="pl-3 py-5 md:py-0 lg:py-10">
          <p className="text-black font-bold text-2xl">Userflow</p>
        </div>
        <img
          alt="Userflow"
          src="/img/Userflow.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
      </div>
      {/** Sketch */}
      <div className="">
        <div className="pl-3 py-5 md:py-0 lg:py-10">
          <p className="text-black font-bold text-2xl">Sketch</p>
        </div>
        <img
          alt="Sketch"
          src="/img/Sketch.png"
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
          src="/img/Wireframe.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
      </div>
      {/** Typography */}
      <div className="">
        <div className="pl-3 py-5 md:py-0 lg:py-10">
          <p className="text-black font-bold text-2xl">Typography</p>
        </div>
        <img
          alt="Typography"
          src="/img/Typography.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
      </div>
      {/** Grid */}
      <div className="">
        <div className="pl-3 py-5 md:py-0 lg:py-10">
          <p className="text-black font-bold text-2xl">Grid</p>
        </div>
        <img
          alt="Grid"
          src="/img/Grid.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
      </div>
      {/** Component */}
      <div className="">
        <div className="pl-3 py-5 md:py-0 lg:py-10">
          <p className="text-black font-bold text-2xl">Component</p>
        </div>
        <img
          alt="Component"
          src="/img/Component.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
      </div>
      {/** High-Fidelity Wireframes */}
      <div className="">
        <div className="pl-3 py-5 md:py-0 lg:py-10">
          <p className="text-black font-bold text-2xl">
            High-Fidelity Wireframes
          </p>
        </div>
        <img
          alt="High-Fidelity Wireframes"
          src="/img/UIDesign1.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
        <img
          alt="Homepage"
          src="/img/Homepage.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
        <img
          alt="Profile"
          src="/img/Profile.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
        <img
          alt="Movie Information"
          src="/img/MovieInfo.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
        <img
          alt="Search"
          src="/img/Search.png"
          className="w-full h-[300px] md:w-full md:h-[600px] lg:w-full lg:h-[600px] rounded-2xl object-contain"
        ></img>
        <img
          alt="Booking Ticket"
          src="/img/BookingTicket.png"
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
            Mặc dù dự án này không phải là bước đột phá đầu tiên của tôi vào
            lĩnh vực thiếu kế mobile, nhưng tôi mình cảm thấy mình đã học được
            rất nhiều điều không chỉ về các phương pháp nghiên cứu về trải
            nghiệm người dùng mà còn là về lĩnh vực truyền thông và phim ảnh.
          </span>
          <span className="my-4 leading-8 ">
            Gần như ngay khi tôi bắt đầu nghiên cứu sơ cấp và thứ cấp, tôi đã
            cảm thấy choáng ngợp trước vô số vấn đề đang cản trở lĩnh vực giải
            trí. Khi tôi phát triển các kịch bản và tốc độ cập nhật bảng phân
            cảnh của mình, tôi càng cảm thấy có xu hướng thử giải quyết nhiều
            vấn đề nhất có thể với một thiết kế đơn lẻ. Nhìn lại, đây thường là
            một cái bẫy mà tôi rơi vào, tôi bị rơi vào vòng lặp của các khái
            niệm và không nhận ra bất kỳ điểm yếu cụ thể nào. Tôi nghĩ đây là
            một bài học đáng được và đã và đang nắm bắt được ý nghĩa của thiết
            kế.
          </span>
          <span className="leading-8 mb-10">
            Mặc dù dự án này có nhiều trở ngại, đặc biệt là về mặt thời gian.
            Tôi ước thêm rằng mình có thêm nhiều thời gian hơn để phát triển
            thêm về dự án cũng như tìm hiểu sâu về lĩnh vực truyền thông và giải
            trí.
          </span>
        </div>
      </div>
    </div>
  );
};
