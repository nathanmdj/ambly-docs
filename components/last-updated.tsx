import React from "react";

const LastUpdated = ({ date }: { date: string }) => {
  const lastUpdated = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="text-xs text-gray-500 pt-20 text-right">
      Last updated: {lastUpdated}
    </div>
  );
};

export default LastUpdated;
