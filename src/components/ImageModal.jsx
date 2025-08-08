import PropTypes from "prop-types";

const ImageModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 bg-opacity-70 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-lg shadow-lg
                   transform scale-95 opacity-0 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image}
          alt="Zoomed"
          className="w-[360px] h-[500px] object-cover"
        />
        {/* Nút đóng */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-white text-black rounded-full px-3 py-1 font-bold hover:bg-gray-200"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

ImageModal.propTypes = {
  image: PropTypes.string, // đường dẫn ảnh
  onClose: PropTypes.func, // hàm đóng modal
};

export default ImageModal;
