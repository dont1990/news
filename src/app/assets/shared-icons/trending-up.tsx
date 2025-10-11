import React from "react";

const TrendingUpIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className={className}
    >
      <path
        d="M35 14 A 2.0002 2.0002 0 1 0 35 18L39.171875 18L29.5 27.671875L18.914062 17.085938 A 2.0002 2.0002 0 0 0 16.085938 17.085938L2.5859375 30.585938 A 2.0002 2.0002 0 1 0 5.4140625 33.414062L17.5 21.328125L28.085938 31.914062 A 2.0002 2.0002 0 0 0 30.914062 31.914062L42 20.828125L42 25 A 2.0002 2.0002 0 1 0 46 25L46 16 A 2.0002 2.0002 0 0 0 44 14L35 14 z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TrendingUpIcon;
