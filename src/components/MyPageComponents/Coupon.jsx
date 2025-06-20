import { useRef } from "react";
import couponImg from "../../assets/myPage/couponImg.png";
import "./Coupon.css";

const Coupon = (isShow) => {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const overlay = overlayRef.current;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (-1 / 5) * x + 20;
    const rotateX = (4 / 30) * y - 20;

    overlay.style.backgroundPosition = `${(x + y) / 5}%`;
    overlay.style.filter = `opacity(${x / 200}) brightness(1.2)`;

    container.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseOut = () => {
    const container = containerRef.current;
    const overlay = overlayRef.current;

    overlay.style.filter = `opacity(0)`;
    container.style.transform = `perspective(350px) rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div
      className="couponContainer"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseOut}
    >
      <div className="couponOverlay" ref={overlayRef}></div>
      <div
        className="couponCard"
        style={{ backgroundImage: `url(${isShow.isShow ? couponImg : ""})` }}
      />
    </div>
  );
};

export default Coupon;
