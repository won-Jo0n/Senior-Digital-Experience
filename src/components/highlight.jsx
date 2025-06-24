// components/Highlight.jsx
import "./highlight.css";
import "./tooltip.css";

const Highlight = ({ children, tooltip }) => {
  return (
    <div className="highlight-container">
      {tooltip && <div className="tooltip">{tooltip}</div>}
      <div className="highlight">{children}</div>
    </div>
  );
};

export default Highlight;
