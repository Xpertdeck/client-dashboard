import React from "react";

const OrderHeader = (props) => {
  const data = props.data;
  return (
    <>
      <table className="w-[100%]">
        <tbody>
          <tr className="bg-[#2D9CDB] h-[50px] text-[20px] font-medium text-[#ffffff]">
            <th className="text-center">Order ID</th>
            <th className="text-center">Subject</th>
            <th className="text-center">Delivery Date</th>
            <th className="text-center">Price</th>
            <th className="text-center">Payment Status</th>
          </tr>

          {data.map((ele, key) => {
            return (
              <tr
                key={key}
                className="text-[18px] text-[#565D5C] font-normal border-b"
              >
                <td className="text-center py-[22px] mb-[42px]">{ele.id}</td>
                <td className="text-center py-[22px] mb-[42px]">
                  {ele.subject}
                </td>
                <td className="text-center py-[22px] mb-[42px]">
                  <div className="flex items-center justify-center">
                    <div className="flex flex-col items-start">
                      <span>{ele.date}</span>
                      <span className="text-[16px] -mt-[16px]">{ele.time}</span>
                    </div>
                  </div>
                </td>
                <td className="text-center py-[22px] mb-[42px]">
                  <div className="flex items-center justify-center">
                    <div className="flex flex-col">
                      <span>{ele.currPrice}</span>
                      <span className="text-[16px] line-through -mt-[20px]">
                        {ele.prevPrice}
                      </span>
                    </div>
                    <span className="ml-[20px] bg-[#2D9CDB] rounded-[4px] py-[3px] px-[8px] text-[#ffffff]">
                      {ele.off}
                    </span>
                  </div>
                </td>
                <td className="text-center py-[22px] mb-[42px]">
                  {ele.status}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default OrderHeader;
