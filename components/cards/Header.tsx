import React from "react";

interface IContent {
  content: string;
}
const Header = ({ content }: IContent) => {
  return (
    <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-900">
      {content}
    </h1>
  );
};

export default Header;
