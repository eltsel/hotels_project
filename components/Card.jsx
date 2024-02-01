export default function Card(props) {
  return (
    <div className="flex flex-col md:w-[280px] w-full shadow-lg rounded-[12px] bg-white/80">
      <img
        src={props.photo}
        alt="Hotel Name"
        className="h-[250px] rounded-[12px]"
      />
      <div className="grid gap-4 pt-[20px] pb-[24px] px-[24px]">
        <div className="flex flex-col ">
          <div className="flex justify-between text-gray-500 text-[12px]">
            <p>{props.city}</p>
            <p>Βαθμολογία: {props.rating}</p>
          </div>
          <div className="flex items-center content-center mt-2">
            <img
              src="./Icons/icons8-meal-96.png"
              alt="Icon Meal Plan"
              className="h-[23px] mr-2"
            />
            <p className="text-gray-500 font-[200]">{props.mealplan}</p>
          </div>

          <p className="pt-[10px] text-[#555563] text-[20px] font-[600] uppercase tracking-[1.25px] max-h-[75px] min-h-[75px]">
            {props.name}
          </p>
        </div>
        <div className="flex items-center justify-between ">
          <p className=" text-[12px]">
            ΑΠΟ
            <span className="text-[20px] text-[#555563] font-[600] ml-[4px]">
              {props.price}
            </span>
          </p>
          <button className="hover:bg-[#00B9F2] transition-all px-[25px] py-[14px] rounded-[8px] bg-[#009649] text-white text-[13px]">
            Κράτηση
          </button>
        </div>
      </div>
    </div>
  );
}
