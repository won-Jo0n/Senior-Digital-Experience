// components/Highlight.jsx
import "./highlight.css";

const Highlight = ({ children, tooltip, color }) => {
  return (
    <div className="highlight-outer">
      {tooltip && <div className={`tooltip tooltip-${color}`}>{tooltip}</div>}
      <div className={`highlight highlight-${color}`}>{children}</div>
    </div>
  );
};

export default Highlight;
