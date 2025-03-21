import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// CSS cho hiệu ứng nhấp nháy con trỏ
const cursorStyle = {
  marginLeft: "2px",
  animation: "blink 1s step-start infinite",
  display: "inline-block",
};

function TypingEffect({ text, speed = 100, pause = 2000 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true); // State cho con trỏ

  useEffect(() => {
    let timeout;
    const type = (i) => {
      if (i <= text.length) {
        timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, i));
          type(i + 1);
        }, speed);
      } else {
        timeout = setTimeout(() => {
          setDisplayedText("");
          type(1);
        }, pause);
      }
    };

    type(1);
    return () => clearTimeout(timeout);
  }, [text, speed, pause]);

  // Hiệu ứng nhấp nháy con trỏ
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span style={{ fontFamily: "GothicDemo" }}>
      {displayedText}
      <span style={cursorStyle}>{showCursor ? "|" : " "}</span>
    </span>
  );
}

// Kiểm tra kiểu dữ liệu của props
TypingEffect.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number,
  pause: PropTypes.number,
};

// Xuất mặc định component
export default TypingEffect;
