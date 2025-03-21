import { Link } from "react-router-dom";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import TypingEffect from "../components/typing";

export const HomePage = () => {
  return (
    <div>
      {/* Content */}
      <div className="bg-[#E8E8E8] lg:min-h-[80vh] md:min-h-[80vh] xs:min-h[70vh] w-full">
        {/** Image */}
        <div className="relative w-[250px] h-[250px] m-auto translate-x-0 sm:translate-x-30 md:translate-x-30 lg:translate-x-30 translate-y-[50px] md:translate-y-[50px] lg:translate-y-5">
          <img
            alt="Avatar"
            src="/img/Avatar1.jpg"
            className="w-full h-full bg-blue-50 rounded-2xl object-cover"
          />
          <Link to="/AboutMe">
            <button className="absolute bottom-2 right-2 flex justify-center items-center w-[50px] h-[50px] bg-black rounded-full hover:opacity-70 hover:rotate-45 transition-all cursor-pointer">
              <NorthEastIcon style={{ color: "white" }} />
            </button>
          </Link>
        </div>
        {/** Name */}
        <div className="absolute bottom-0 left-0 flex justify-center pl-3">
          <h1 className="text-[100px] md:text-[220px] lg:text-[200px] xl:text-[200px] font-bold">
            Huy{" "}
            <span
              className="relative inline-block"
              // Giá trị minWidth cần được điều chỉnh sao cho phù hợp với kích thước chữ "Hoang"
              style={{ minWidth: "250px" }}
            >
              {/* Phần tử ẩn để giữ không gian */}
              <span style={{ visibility: "hidden" }}>Hoang</span>
              {/* Hiệu ứng typing được overlay lên trên */}
              <span className="absolute top-0 left-0">
                <TypingEffect text="Hoang" speed={200} pause={2000} />
              </span>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};
