"use client";
import React, { useState } from "react";
import Card from "./Card";
import Filters from "./Filters";
import Select from "react-select";

export default function Results(props) {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: 200,
      height: 48,
      borderRadious: 0,
      border: "1px solid #D3D3D3",
      fontSize: 15,
      backgroundColor: "white",
      outline: "none",
    }),
    menu: (provided) => ({
      ...provided,
      width: 200,
    }),
  };

  const toggleFilters = () => {
    setFiltersVisible(!isFiltersVisible);
  };
  const [isFiltersVisible, setFiltersVisible] = useState(true);

  return (
    <div className="flex">
      <div className="results flex max-w-[1320px] mx-auto mt-[64px] items-start">
        <div
          className={`filters ${
            !isFiltersVisible ? "" : "hidden"
          } fixed left-0 top-0 overflow-y-auto h-[100vh] md:flex md:relative w-full bg-[#F5F5F5] md:bg-white/80 rounded-[12px] md:mt-[70px] md:max-w-[320px] md:min-w-[320px] content-center z-10`}
        >
          <button
            onClick={toggleFilters}
            className="md:hidden absolute flex justify-center items-center shadow-lg w-[45px] h-[45px] right-0 rounded-[30px] bg-[#FFFFFF]/80 m-4"
          >
            <img src="./Icons/close.png" alt="Close Icon" />
          </button>
          <Filters
            hotel_food={props.hotel_food}
            hotel_active_foods={props.hotel_active_foods}
            updateFilters={props.updateFilters}
            sethotel_active_price={props.sethotel_active_price}
          />
          <button
            onClick={toggleFilters}
            className="md:hidden w-[300px] bg-[#009649] text-white font-[550] h-[54px] flex justify-center items-center mx-auto m-8 rounded-[8px] hover:bg-[#00B9F2] transition-all relative z-50"
          >
            Εφαρμογή
          </button>
        </div>

        <div className="flex flex-col items-center justify-between md:mr-[40px] lg:min-h-[150vh] lg:min-w-[50vw]">
          <div className="flex flex-col md:flex-row w-full justify-between items-center mx-auto md:px-[28px]">
            <div className="flex">
              <p className="text-[#555563] font-[600] mr-2">
                {props.hotel_data.length}
              </p>
              <span className="text-[#555563]">διαθέσιμα πακέτα διακοπών</span>
            </div>
            <div className="flex-row flex gap-12 mt-6 md:mt-0">
              <button
                onClick={toggleFilters}
                className="hover:bg-[#009649] flex md:hidden items-center border-[1px] border-[#009649] rounded-[8px] px-[16px] py-[13px]"
              >
                <img
                  src="./Icons/settings.png"
                  alt="Settings Icon"
                  className="mr-2"
                />
                Φίλτρα
              </button>

              <Select
                options={[
                  { value: null, label: "Δημοφιλή" },
                  { value: "priceAsc", label: "Τιμή Αύξουσα" },
                  { value: "priceDesc", label: "Τιμή Φθίνουσα" },
                  { value: "alphabetical", label: "Αλφαβητικά" },
                ]}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 8,
                  colors: {
                    ...theme.colors,
                    primary25: "#00B9F2",
                    primary: "#D3D3D3",
                  },
                })}
                styles={customStyles}
                instanceId={"wsad123wqwe"}
                defaultValue={
                  props.hotel_sort || { label: "Δημοφιλή", value: null }
                }
                onChange={(e) => props.sethotel_sort(e.value)}
              />
            </div>
          </div>

          <div className="w-full result_cards  flex flex-wrap gap-8 justify-center mt-[24px] mb-[128px] p-4 md:p-0">
            {props.hotel_data.map(function (hotel, index) {
              return (
                <Card
                  key={index}
                  name={hotel.name}
                  photo={hotel.photo}
                  city={hotel.city}
                  rating={hotel.rating}
                  mealplan={hotel.meal_plan}
                  price={hotel.price}
                />
              );
            })}
            <div className="flex justify-center w-full">
              <button className="px-[24px] py-[16px] border-[1px] border-[#009649] rounded-[8px] font-[14px] text-[#009649] mt-[24px]">
                Δείτε περισσότερα
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
