import React from "react";

interface LogoProps {
  variant?: "default" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Logo = ({
  variant = "default",
  size = "md",
  className = "",
}: LogoProps) => {
  // Size mapping based on design system guidelines
  const sizeMap = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10",
  };

  return (
    <div className={`logo-container flex items-center ${className}`}>
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          {/* Marianne logo - French government symbol */}
          <svg
            className={`${sizeMap[size]} mr-1`}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H32V32H0V0Z"
              fill={variant === "white" ? "#FFFFFF" : "#000091"}
            />
            <path
              d="M9.73 10.86C11.19 10.86 12.37 12.05 12.37 13.5C12.37 14.96 11.19 16.14 9.73 16.14C8.27 16.14 7.09 14.96 7.09 13.5C7.09 12.05 8.27 10.86 9.73 10.86Z"
              fill={variant === "white" ? "#000091" : "#FFFFFF"}
            />
            <path
              d="M22.27 10.86C23.73 10.86 24.91 12.05 24.91 13.5C24.91 14.96 23.73 16.14 22.27 16.14C20.81 16.14 19.63 14.96 19.63 13.5C19.63 12.05 20.81 10.86 22.27 10.86Z"
              fill={variant === "white" ? "#000091" : "#FFFFFF"}
            />
            <path
              d="M16 7.96C17.46 7.96 18.64 9.14 18.64 10.59C18.64 12.05 17.46 13.23 16 13.23C14.54 13.23 13.36 12.05 13.36 10.59C13.36 9.14 14.54 7.96 16 7.96Z"
              fill={variant === "white" ? "#000091" : "#FFFFFF"}
            />
            <path
              d="M16 18.77C17.46 18.77 18.64 19.95 18.64 21.41C18.64 22.86 17.46 24.05 16 24.05C14.54 24.05 13.36 22.86 13.36 21.41C13.36 19.95 14.54 18.77 16 18.77Z"
              fill={variant === "white" ? "#000091" : "#FFFFFF"}
            />
          </svg>

          {/* Parcoursup text */}
          <span
            className={`font-bold ${variant === "white" ? "text-white" : "text-fr-blue"} ${size === "sm" ? "text-lg" : size === "md" ? "text-xl" : "text-2xl"}`}
          >
            Parcoursup
          </span>
        </div>
        <span
          className={`${variant === "white" ? "text-white" : "text-fr-blue"} ${size === "sm" ? "text-xs" : size === "md" ? "text-sm" : "text-base"} font-light`}
        >
          2.0
        </span>
      </div>
    </div>
  );
};

export default Logo;
