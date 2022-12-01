import Link from "next/link";
import React, { useState, useRef } from "react";
import ReactPaginate from "react-paginate";

const OrderHeader = (props) => {
  const data = props.data;

  const [users, setUsers] = useState(data.slice(0, data.length));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;

  const displayTools = data
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((ele, key) => {
      return (
        <tr
          key={key}
          className="text-[14px] text-[#565D5C] font-normal border-b-2"
        >
          <td className="text-center py-[22px] mb-[42px]">
            <Link href={`/offline-chat/${encodeURIComponent(ele.id)}`}>
              {ele.id}
            </Link>
          </td>
          <td className="text-center py-[22px] mb-[42px]">{ele.subject}</td>
          <td className="text-center py-[22px] mb-[42px]">
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-start">
                <span>{ele.date}</span>
                <span className="text-[14px] -mt-[16px]">{ele.time}</span>
              </div>
            </div>
          </td>
          <td className="text-center py-[22px] mb-[42px]">
            <div className="flex items-center justify-center">
              <div className="flex flex-col">
                <span>{ele.currPrice}</span>
                <span className="text-[14px] line-through -mt-[20px]">
                  {ele.prevPrice}
                </span>
              </div>
              <span className="ml-[20px] bg-[#2D9CDB] rounded-[4px] py-[3px] px-[8px] text-[#ffffff]">
                {ele.off}
              </span>
            </div>
          </td>
          <td className={`text-center py-[22px] mb-[42px] `}>
            <Link href={`/offline-chat/${encodeURIComponent(ele.id)}`}>
              <span
                className={` py-[4px] px-[16px] ${
                  ele.status === "Success"
                    ? "bg-[#DEF1DE] text-[#46AA2B]"
                    : "bg-[#FFEADC] text-[#FFA001]"
                }`}
              >
                {ele.status}
              </span>
            </Link>
          </td>
        </tr>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <table className="w-[96%]">
        <thead>
          <tr className="bg-[#2D9CDB] h-[36px] text-[14px] font-semibold text-[#ffffff]">
            <th className="text-center w-[10%]">Order ID</th>
            <th className="text-center w-[10%]">Subject</th>
            <th className="text-center w-[10%]">Delivery Date</th>
            <th className="text-center w-[10%]">Price</th>
            <th className="text-center w-[10%]">Payment Status</th>
          </tr>
        </thead>
        <tbody>
        {displayTools}
          <tr>
            <td className="" colSpan={8}>
              <ReactPaginate
                previousLabel={
                  <div className="mt-[-2px]">
 
                  </div>
                }
                nextLabel={
                  <div className="mt-[-2px]">

                  </div>
                }
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={
                  "paginationBttns flex flex-row align-middle text-bluee justify-around text-xs pt-1"
                }
                previousLinkClassName={"previousBttn"}
                nextLinkLinkClassName={"nextBttn"}
                disabledLinkClassName={"w-[24px]"}
                activeClassName={
                  "gradientBackground w-[24px] h-[24px] rounded-full text-white text-center pt-1 mt-[-4px]"
                }
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default OrderHeader;
