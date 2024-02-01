import React, { useState } from "react";

export default function Header() {
  const [offerType, setOfferType] = useState("trips");

  return (
    <div className="justify-center max-w-[1320px] mx-auto">
      <div>
        <div className="flex flex-col justify-center items-center pt-[24px]">
          <div className="flex items-center">
            <a href="/" className="mx-[8px] text-[12px] text-[#555563]">
              Αρχική
            </a>
            <img src="/Icons/chevron-right.png" alt="Chevron Right" />
            <a href="/" className="mx-[8px] text-[12px] text-[#555563]">
              Ελλάδα
            </a>
            <img src="/Icons/chevron-right.png" alt="Chevron Right" />
            <a href="/" className="mx-[8px] text-[12px] text-[#555563]">
              Πακέτα
            </a>
          </div>
          <h1 className="mt-[64px] text-[76px] font-bold tracking-[3.8px] h0 text-[#555563]">
            ΕΛΛΑΔΑ
          </h1>
          <p className="text-[14px] text-[#838393] md:mt-[108px]">
            Πακέτα - Προσφορές
          </p>
          <div className="search flex flex-col mt-[8px] ">
            <div className="tabs flex md:flex hidden items-center p-[4px] border-[1px] border-[#838393]/20 rounded-[96px] mt-[64px] bg-white/80">
              <button
                onClick={(e) => setOfferType("trips")}
                className={`flex justify-center rounded-[96px] font-[14px] py-[12px] px-[24px] font-medium ease-in duration-300 ${
                  offerType == "trips"
                    ? "bg-white shadow-lg text-[#009649] "
                    : "text-[#838393]"
                }`}
              >
                Εκδρομές
              </button>
              <button
                onClick={(e) => setOfferType("hotels")}
                className={`flex justify-center rounded-[96px] font-[14px] py-[12px] px-[24px] font-medium ease-in duration-300 ${
                  offerType == "hotels"
                    ? "bg-white shadow-lg text-[#009649] "
                    : "text-[#838393]"
                }`}
              >
                Ξενοδοχεία
              </button>
            </div>
          </div>
          <div className="search_tab flex md:flex hidden bg-white/80 mt-[8px] flex items-center border-[1px] border-[#838393]/10 rounded-[12px] w-full max-w-[1096px]">
            <div className="location flex flex-col flex-1 grow-[2] mx-[32px] my-[8px] border-r-[1px] border-[#BEBEBE]">
              <span
                className={`text-[12px] font-medium text-[#555563] ease-in duration-200 ${
                  offerType == "hotels" ? "text-[13px]" : ""
                }`}
              >
                Προορισμός
              </span>
              <span
                className={`text-[14px] font-[350] text-[#555563] ${
                  offerType == "hotels" ? "hidden" : ""
                }`}
              >
                Ελλάδα
              </span>
            </div>
            <div className="check-in flex-1 text-[14px] text-[#555563]">
              Check In
            </div>
            <div className="check-out flex-1 text-[14px] text-[#555563]">
              Check Out
            </div>
            <div className="people flex-1 text-[14px] border-l-[1px] border-[#BEBEBE]  my-[8px] h-[48px] flex items-center px-[32px] text-[#555563]">
              Αριθμός ατόμων
            </div>
            <button className="hover:bg-[#00B9F2] transition-all flex-1 px-[16px] text-[14px] bg-[#009649] text-white m-[8px] rounded-[8px] h-[48px]">
              Αναζήτηση
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
