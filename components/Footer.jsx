import css from "styled-jsx/css";

export default function Footer() {
  return (
    <div className="flex relative justify-center h-[492px] md:h-[468px] mb-[50px] md:mb-[128px] shadow-lg mx-4">
      <img src="./Pictures/footer-img.png" alt="" className="absolute top-0 object-cover w-[100%] h-[100%] rounded-[8px]" />
      <div className="absolute top-0 bg-black/20 w-[100%] h-[100%] rounded-[8px]"></div>
      <div className="flex flex-col relative justify-center content-center items-center h-full">
        <p className="text-white text-center h0 font-[600] md:text-[39px] text-[31px]">
          ΔΕ ΒΡΗΚΑΤΕ ΑΥΤΟ ΠΟΥ ΨΑΧΝΕΤΕ;
        </p>
        <button className="hover:bg-[#009649] hover:border-[1px] hover:border-[#009649] transition-all flex items-center gap-2 text-[14px] text-white px-[24px] py-[16px] border-[1px] border-white rounded-[8px] mt-[16px]">
          Επικοινωνήστε μαζί μας <img src="./Icons/send.png" alt="Send Image" />
        </button>
      </div>
    </div>
  );
}
