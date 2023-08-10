"use client";
function Skils_Section() {
  return (
    <div className="h-screen container md:mx-auto">
      <div className="flex justify-center items-center flex-col gap-6 md:mx-auto">
        <div className="text-left px-44 text-3xl underline underline-offset-4">
          My Skill Set
        </div>
        <p className="text-xl text-left">List of tech/tools I've worked with</p>
      </div>
      <div>
        <div className=" skills-section pt-16">
          <div className="bg-white skill-item  p-5 rounded-full shadow-xl transition-all ease-in-out delay-150 hover:scale-110 duration-500">
            <p className="text-center pt-2 text-red">HTML </p>
          </div>
          <div className="bg-white skill-item  p-5 rounded-full shadow-xl transition-all ease-in-out delay-150 hover:scale-110 duration-500">
            <p className="text-center pt-2">CSS3 </p>
          </div>
          <div className="bg-white skill-item  p-5 rounded-full shadow-xl transition-all ease-in-out delay-150 hover:scale-110 duration-500">
            <p className="text-center pt-2">Javascript </p>
          </div>
          <div className="bg-white skill-item  p-5 rounded-full shadow-xl transition-all ease-in-out delay-150 hover:scale-110 duration-500">
            <p className="text-center pt-2">Bootstrap </p>
          </div>
          <div className="bg-white  skill-item p-5 rounded-full shadow-xl transition-all ease-in-out delay-150 hover:scale-110 duration-500">
            <p className="text-center pt-2">Sass </p>
          </div>
          <div className="bg-white skill-item  p-5 rounded-full shadow-xl transition-all ease-in-out delay-150 hover:scale-110 duration-500">
            <p className="text-center pt-2">React.Js </p>
          </div>
          <div className="bg-white skill-item  p-5 rounded-full shadow-xl transition-all ease-in-out delay-150 hover:scale-110 duration-500 ">
            <p className="text-center">NextJs </p>
          </div>
          <div className="bg-white skill-item  p-5 rounded-full shadow-xl transition-all ease-in-out delay-150 hover:scale-110 duration-500">
            <p className="text-center pt-2">Git </p>
          </div>
          <div className="bg-white skill-item p-5 rounded-full shadow-xl transition-all ease-in-out delay-150 hover:scale-110 duration-500">
            <p className="text-center pt-2">Python </p>
          </div>
          <div className="bg-white skill-item p-5 rounded-full text-center shadow-xl transition-all ease-in-out delay-150 hover:scale-110 duration-500">
            <p className="text-center pt-2">C++ </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skils_Section;
