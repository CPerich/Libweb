import React from 'react';

interface LinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ to, className, children }) => {
  // In a real app, this would use React Router's Link component
  // But for this demo, we'll just use a simple anchor tag
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // For demo purposes, we'll just scroll to top
    window.scrollTo(0, 0);
  };

  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

export const NavLink: React.FC<LinkProps> = ({ to, className, children }) => {
  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-md transition-colors duration-200 ${className}`}
    >
      {children}
    </Link>
  );
};