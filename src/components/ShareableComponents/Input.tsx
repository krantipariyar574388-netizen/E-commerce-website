import React from "react";

interface AppInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ className = "", ...props }: AppInputProps) => {
  return (
    <input
      {...props}
      className={`
        w-full
        bg-bg
        text-text
        placeholder:text-muted
        border border-border
        px-4 py-2
        rounded-md
        focus:outline-none
        focus:ring-1 focus:ring-primary
        transition-colors
        ${className}
      `}
    />
  );
};

export default Input;