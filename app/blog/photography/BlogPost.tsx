// Child.tsx
import React from "react";

type ChildProps = {
  children: JSX.Element;
  className?: string;
  style?: React.CSSProperties;
};

const BlogPost: React.FC<ChildProps> = ({ children, className, style }) => {
  return (
    <div
      className={` ${className} prose-strong:text-white text-justify`}
      style={style}
    >
      {children}
    </div>
  );
};

export default BlogPost;
