// components/Highlight.jsx
import "./highlight.css";

const Highlight = ({ children, tooltip, color }) => {
  return (
    <div className="highlight-outer">
      {tooltip && <div className="tooltip">{tooltip}</div>}
      <div className="highlight" style={{ color }}>
        {children}
      </div>
    </div>
  );
};

export default Highlight;
