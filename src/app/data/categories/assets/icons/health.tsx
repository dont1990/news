import React from "react";

const HealthIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="512"
      height="512"
      className={className}
    >
      <path
        d="M32,41L18,29l4-4l10,9l21.56-20.697C51.026,11.24,47.795,10,44.273,10C36.806,10,32,15.4,32,15.4S27.194,10,19.727,10C11.594,10,5,16.594,5,24.727C5,39.454,32,56,32,56s27-16.546,27-31.273c0-2.143-0.468-4.172-1.29-6.009L32,41z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HealthIcon;
