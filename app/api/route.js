import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request) {
  const url = "https://aio.server9.nelios.com/";
  const token = "QcKjgrWuKr0mYaavwwtpSvk7MyWhyWh3k0Secv";

  const searchParams = request.nextUrl.searchParams;
  let filters = searchParams.get("filters").split(",");
  filters = filters.filter((x) => x);
  let prices = searchParams.get("prices").split("-");
  prices = prices.filter((x) => x);
  let sort = searchParams.get("sort");

  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  let res = await axios.get(url, config);
  let data = res.data.data;

  if (filters.length) {
    data = data.filter((d) => {
      if (filters.includes(d.meal_plan)) {
        return true;
      } else {
        return false;
      }
    });
  }

  if (prices.length) {
    data = data.filter((d) => {
      if (d.price >= prices[0] && d.price <= prices[1]) {
        return true;
      } else {
        return false;
      }
    });
  }

  if (sort) {
    if (sort == "priceAsc") {
      data = data.sort((a, b) => a.price - b.price);
    } else if (sort == "priceDesc") {
      data = data.sort((a, b) => b.price - a.price);
    } else {
      data = data.sort((a, b) => a.name.localeCompare(b.name));
      
    }
  }

  return NextResponse.json(data);
}
