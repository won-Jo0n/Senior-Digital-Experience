import { useRef } from "react";
import stampImg from "../../assets/myPage/stampImg.png";
import "./Stamp.css";

function Stamp() {
  const stampRef = useRef(null);

  const handleMouseMove = (e) => {
    const stamp = stampRef.current;
    const rect = stamp.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateMax = 20; // 회전 최대 각도

    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;

    const rotateY = percentX * rotateMax;
    const rotateX = -percentY * rotateMax;

    stamp.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const stamp = stampRef.current;
    stamp.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div
      className="stampDiv"
      ref={stampRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img className="stamp" src={stampImg} alt="스탬프 이미지" />
    </div>
  );
}

export default Stamp;
