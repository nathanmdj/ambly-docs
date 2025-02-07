import { useState } from "react";

const Tabs = ({
  labels,
  children,
}: {
  labels: string[];
  children: React.ReactNode[];
}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        {labels.map((label, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            style={{
              padding: "8px 12px",
              borderBottom: activeTab === index ? "2px solid blue" : "none",
            }}
          >
            {label}
          </button>
        ))}
      </div>
      <div>{children[activeTab]}</div>
    </div>
  );
};

export default Tabs;
