import React from "react";

interface Token {
  name: string;
  symbol: string;
  date: string;
  id: number;
}

interface RecentTokenProps {
  token: Token;
}

const RecentToken: React.FC<RecentTokenProps> = ({ token }) => {
  console.log(token);
  return (
    <div className="bg-white w-full h-72 shadow-custom rounded">
      <div></div>
    </div>
  );
};

export default RecentToken;
