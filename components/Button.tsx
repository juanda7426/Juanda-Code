import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-4 text-sm font-mono tracking-wider font-bold transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed uppercase";
  
  const variants = {
    primary: "bg-white text-black hover:bg-tech-accent hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] border border-transparent focus:ring-tech-accent transform hover:-translate-y-1",
    secondary: "bg-tech-800 text-white hover:bg-tech-700 border border-tech-800 focus:ring-gray-500",
    outline: "bg-transparent text-tech-accent border border-tech-accent/30 hover:bg-tech-accent/10 hover:border-tech-accent shadow-[0_0_10px_rgba(0,242,255,0.1)] focus:ring-tech-accent",
    ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};