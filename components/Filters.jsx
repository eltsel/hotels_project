import css from "styled-jsx/css";

export default function Filters(props) {
  return (
    <div className="flex flex-col px-[24px] pb-[24px]">
      <div className="price-range flex flex-col py-[24px] border-b-[1px] border-[#0000]/10">
        <h5 className="text-[#555563] font-[600] tracking-[1px] h0 text-[20px]">
          ΦΙΛΤΡΑ
        </h5>
        <h6 className="text-[#555563] font-[600] tracking-[1px] h0 text-[15px] mt-[24px] ">
          ΕΥΡΟΣ ΤΙΜΗΣ
        </h6>
        <div className="flex">
          <div className="flex flex-col mt-[18px] w-[50%] md:w-[128px]">
            <p className="text-[#555563] text-[12px]">Από</p>
            <input
              type="number"
              min="0"
              placeholder="€"
              className="px-[16px] py-[12px] border-[1px] b-[#838393] rounded-[8px] outline-0 mt-[8px]"
            />
          </div>
          <div className="flex flex-col mt-[18px] w-[50%] md:w-[130px] ml-[8px]">
            <p className="text-[#555563] text-[12px]">Έως</p>
            <input
              type="number"
              min="0"
              placeholder="€"
              className="px-[16px] py-[12px] border-[1px] b-[#838393] rounded-[8px] outline-0 mt-[8px]"
            />
          </div>
        </div>
        <div className="flex mt-[24px]">
          <form className="flex flex-col text-[#555563] font-[350] text-[14px]">
            <div className="flex items-center">
              <input
                onChange={(e) => props.sethotel_active_price(e.target.value)}
                type="radio"
                id="50"
                name="range"
                value="0-50"
                className="w-4 h-4 shrink-0 border"
              />
               <label className="w-full ml-[8px]">Έως 50 €</label>
            </div>
            <div className="mt-[16px] flex items-center">
              <input
                onChange={(e) => props.sethotel_active_price(e.target.value)}
                type="radio"
                id="150"
                name="range"
                value="50-150"
                className="w-4 h-4 shrink-0 border"
              />
               <label className="w-full ml-[8px]">50 - 150 €</label>
            </div>
            <div className="mt-[16px] flex items-center">
              <input
                onChange={(e) => props.sethotel_active_price(e.target.value)}
                type="radio"
                id="500"
                name="range"
                value="150-500"
                className="w-4 h-4 shrink-0 border"
              />
              <label className="ml-[8px]">150 - 500 €</label>
            </div>
          </form>
        </div>
      </div>
      <div className="filter2 py-[24px] border-b-[1px] border-[#0000]/10">
        <h5 className="text-[#555563] font-[600] tracking-[1px] h0 text-[20px]">
          Meal Plan
        </h5>
        <div className="flex flex-col">
          {props.hotel_food.map((f, index) => (
            <div key={index} className="flex items-center mt-[24px]">
              <input
                onChange={(e) => props.updateFilters(e, f)}
                checked={props.hotel_active_foods.includes(f)}
                type="checkbox"
                name="filter"
                className="w-4 h-4 shrink-0"
              />
              <label className="ml-[8px]">{f}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="filter1 py-[24px]">
        <h5 className="text-[#555563] font-[600] tracking-[1px] h0 text-[20px]">
          ΦΙΛΤΡΟ
        </h5>
        <div className="flex flex-col">
          <div className="flex items-center mt-[24px]">
            <input
              type="checkbox"
              name="filter"
              value="filter"
              className="w-4 h-4 shrink-0"
            />
            <label className="ml-[8px]">Φίλτρο</label>
          </div>
          <div className="flex items-center mt-[8px]">
            <input
              type="checkbox"
              name="filter"
              value="filter"
              className="w-4 h-4 shrink-0"
            />
            <label className="ml-[8px]">Φίλτρο</label>
          </div>
          <div className="flex items-center mt-[8px]">
            <input
              type="checkbox"
              name="filter"
              value="filter"
              className="w-4 h-4 shrink-0"
            />
            <label className="ml-[8px]">Φίλτρο</label>
          </div>
          <div className="flex items-center mt-[8px]">
            <input
              type="checkbox"
              name="filter"
              value="filter"
              className="w-4 h-4 shrink-0"
            />
            <label className="ml-[8px]">Φίλτρο</label>
          </div>
          <div className="flex items-center mt-[8px]">
            <input
              type="checkbox"
              name="filter"
              value="filter"
              className="w-4 h-4 shrink-0"
            />
            <label className="ml-[8px]">Φίλτρο</label>
          </div>
          <div className="flex items-center mt-[8px]">
            <input
              type="checkbox"
              name="filter"
              value="filter"
              className="w-4 h-4 shrink-0"
            />
            <label className="ml-[8px]">Φίλτρο</label>
          </div>
        </div>
      </div>

    </div>
  );
}
