import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";
import { Title } from "../components/title";
import { useState } from "react";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Navbar = () => {
  Title("Homepage");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      {/* Navbar Container */}
      <div className="xl:w-[1500px] md:mx-2 h-auto m-auto p-2  flex justify-between items-center ">
        {/* Navbar Information */}
        <div className="cursor-pointer">
          <Link to="/">
            <img
              alt="Logo"
              src="/img/NewLogo.svg"
              className="w-[62px] h-[62px]"
            ></img>
          </Link>
        </div>
        <div className="flex items-center">
          <button className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-[#D9D9D9] rounded hover:bg-white group py-1.5 px-2.5 mr-4 cursor-pointer">
            <span className="w-56 h-48 rounded bg-black absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              <a
                href="https://drive.google.com/file/d/1ZMkM6jBobMCXWebujih2R9JUuxN1gl-w/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </span>
          </button>
          <MenuOpenIcon
            fontSize="large"
            className="hover:bg-[#D9D9D9] hover:rounded-md transition-all ease-in-out duration-500 cursor-pointer"
            onClick={() => setIsOpen(true)}
          />

          {/* Overlay Menu */}
          {isOpen && (
            <motion.div
              initial={{ y: "-100%", opacity: 0 }} // Bắt đầu từ trên và ẩn đi
              animate={{ y: "0%", opacity: 1 }} // Hiệu ứng xổ xuống
              exit={{ y: "-100%", opacity: 0 }} // Khi đóng thì trượt lên lại
              transition={{ duration: 0.5, ease: "easeOut" }} // Tốc độ mượt hơn
              className="fixed inset-0 bg-black bg-opacity-90 min-h-screen flex flex-col justify-center items-center text-white z-50"
            >
              {/* Icon đóng menu */}
              <CloseIcon
                fontSize="large"
                className="absolute top-5 right-5 cursor-pointer hover:text-gray-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              />

              {/* Danh sách menu */}
              <ul className="flex flex-col justify-center items-center text-2xl space-y-6 text-center">
                {[
                  { name: "Home", path: "/" },
                  { name: "About", path: "/AboutMe" },
                  { name: "Works", path: "/Works" },
                  { name: "Contact", path: "/Contact" },
                ].map((item) => (
                  <li key={item.name} onClick={() => setIsOpen(false)}>
                    <Link
                      to={item.path}
                      className="my-5 flex cursor-pointer hover:text-gray-400 transition duration-300 text-5xl group"
                    >
                      {item.name}
                      <div className="ml-2 transform transition duration-300 group-hover:rotate-[45deg]">
                        <NorthEastIcon fontSize="large" />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
      {/* Content */}
      <div></div>
    </div>
  );
};
