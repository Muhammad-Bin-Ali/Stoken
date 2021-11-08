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
  return (
    <div className="recentToken relative z-10 bg-gradient-to-br from-white to-white w-full h-80 bg-opacity-0 shadow-custom rounded group transition transform duration-100 hover:scale-105">
      <div className="h-60 grid grid-rows-custom my-10 mx-10">
        <div className="date flex items-center">
          <svg className="inline-block duration-150 fill-current text-projectCyan-light group-hover:text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8V8ZM8 3.5C8 3.36739 7.94732 3.24021 7.85355 3.14645C7.75979 3.05268 7.63261 3 7.5 3C7.36739 3 7.24021 3.05268 7.14645 3.14645C7.05268 3.24021 7 3.36739 7 3.5V9C7.00003 9.08813 7.02335 9.17469 7.06761 9.25091C7.11186 9.32712 7.17547 9.39029 7.252 9.434L10.752 11.434C10.8669 11.4961 11.0014 11.5108 11.127 11.4749C11.2525 11.4391 11.3591 11.3556 11.4238 11.2422C11.4886 11.1288 11.5065 10.9946 11.4736 10.8683C11.4408 10.7419 11.3598 10.6334 11.248 10.566L8 8.71V3.5Z" />
          </svg>
          <h4 className="font-Nunito font-bold text-projectCyan-light ml-3.5 inline-block group-hover:text-white duration-150 2xl:text-base xl:text-sm sm:text-xs">{token.date}</h4>
        </div>
        <h2 className=" font-Gotham font-bold text-projectCyan ml-top 2xl:text-3xl xl:text-3xl lg:text-2xl sm:text-xl mt-5 group-hover:text-white duration-150">{token.name}</h2>

        <h3 className="font-Nunito font-bold text-projectCyan-light text-lg mt-auto group-hover:text-white duration-150 2xl:text-lg xl:text-md lg:text-base sm:text-sm">{token.symbol}</h3>
      </div>
    </div>
  );
};

export default RecentToken;
