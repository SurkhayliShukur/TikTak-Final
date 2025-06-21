import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-[6rem] bg-white flex justify-evenly items-center">
        <h1 className="uppercase text-800 text-[40px]">Tik Tak Admin</h1>
        <input
          type="text"
          placeholder="Axtarış"
          className="w-[588px] h-[45px] px-[25px] py-[13px] rounded-xl outline-none bg-[var(--main-color)] "
        />
      </div>
    </>
  );
};

export default Navbar;
