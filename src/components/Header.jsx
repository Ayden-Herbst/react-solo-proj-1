import React from "react";


export default function Header() {
  return (
    <>
      <div className="">
        <img
          className="rounded-t-lg md:max-h-[40vh] aspect-auto w-full object-cover"
          src="./src/assets/profile.jpg"
          alt="user_photo"
        />
      </div>
      <div className="title">
        <h1 className="text-center pt-8 text-2xl font-main font-semibold">Ayden Herbst</h1>
        <h3 className="text-center pt-0.5 pb-2 text-xs font-main font-light text-orange-300">Full Stack Developer</h3>
        <p className="text-center text-2xs">aeroswebdesign.com</p>
      </div>
      <div className="buttons flex pt-4 mx-8 gap-3 pb-8 md:justify-center ">
        <a href="https://aeroswebdesign.com" className="email rounded-md py-2 px-5 flex bg-white w-32 items-center justify-center">
            <img className="w-5" src="./src/assets/Mail.svg" alt="" />
            <p className="text-button px-2 text-center">Email</p>
        </a>
        <a href="https://aeroswebdesign.com" className="linkedin rounded-md flex py-2 px-5 bg-slate-700 w-32 items-center justify-center">
            <img className="w-5" src="./src/assets/GitHub Icon.svg" alt="" />
            <p className="px-2 text-center">GitHub</p>
        </a>
      </div>
    </>
  );
}
