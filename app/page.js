"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Results from "@/components/Results";
import Footer from "@/components/Footer";
import axios from "axios";

export default function Home() {
  const [hotel_data, sethotel_data] = useState([]);
  const [hotel_food, sethotel_food] = useState([]);
  const [hotel_active_foods, sethotel_active_foods] = useState([]);
  const [hotel_active_price, sethotel_active_price] = useState([]);
  const [hotel_sort, sethotel_sort] = useState(null);

  async function data() {
    let res = await axios.get(`/api?filters=${hotel_active_foods.join(",")}&prices=${hotel_active_price}&sort=${hotel_sort}`);

    sethotel_data(res.data);
    sethotel_food((s) => {
      let temp = res.data.map((hotel) => hotel.meal_plan);
      temp = [...new Set(temp)];
      return temp;
    });
  }

  useEffect(() => {
    data();
  }, []);

  useEffect(() => {
    data();
    console.log(hotel_active_foods);
  }, [hotel_active_foods, hotel_active_price, hotel_sort]);

  function updateFilters(e, f) {
    let s = hotel_active_foods.slice();
    if (e.target.checked) {
      s.push(f);
    } else {
      s = s.filter((t) => t != f);
    }
    sethotel_active_foods((_) => s);
  }

  return (
    <main className="relative md:pb-16">
      <img
        src="/Pictures/mask-group-h.png"
        alt="Background Picture"
        className="absolute opacity-80 z-[-1] hidden md:flex"
      />
      <div className="max-w-[1320px] mx-auto">
        <Header />
        <Results
          hotel_data={hotel_data}
          hotel_food={hotel_food}
          hotel_active_foods={hotel_active_foods}
          updateFilters={updateFilters}
          sethotel_active_price={sethotel_active_price}
          sethotel_sort={sethotel_sort}
          hotel_sort={hotel_sort}
        />
        <Footer />
      </div>
      <img
        src="/Pictures/mask-group.png"
        alt="Background Picture"
        className="absolute bottom-0 z-[-1] hidden md:flex"
      />
    </main>
  );
}
