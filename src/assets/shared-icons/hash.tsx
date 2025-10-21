import React from "react";

const HashTagIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className={className}
    >
      <path
        d="M43.778,26.317l-2.407,11.097h7.688v6.953h-8.891L37.627,56h-5.616l2.273-11.632H22.971L20.564,56h-5.683l2.273-11.632 h-7.22v-6.953h8.624l2.206-11.097H13.01v-7.019h9.226L24.374,8h5.883l-2.139,11.298h11.181L41.772,8h5.683l-2.34,11.298H52v7.019 H43.778z M24.374,37.549h11.247l2.473-11.364H26.581L24.374,37.549z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HashTagIcon;
