"use client";
function Skils_Section() {
  return (
    <div className="h-full container md:mx-auto px-12 pt-12">
      <div className="flex justify-center items-center flex-row gap-6 md:mx-auto ">
        <div className="  text-center text-3xl underline underline-offset-4 font-extra-bold">
          Skills
        </div>
      </div>
      <div className="flex justify-around flex-col md:flex-col lg:flex-row gap-20  pt-10 ">
        <div className="flex flex-col ">
          <div className="flex flex-col ">
            <p className="text-2xl font-extra-bold text-center">My Skill Set</p>
            <h1 className="pt-2 text-lg text-center">
              List of tech/tools I've worked with
            </h1>
            <div className="skills-section pt-10">
              <p>HTML</p> <p>CSS</p> <p>Javascript</p> <p>Bootstrap</p>{" "}
              <p>Sass</p> <p>tailwind CSS</p> <p>React.Js</p> <p>Next.Js</p>
              <p>Python</p> <p>C++</p>
            </div>
          </div>
        </div>
        <div className="border-b-4 md:border-l-4 "></div>
        <div className="">
          <h1 className="text-2xl font-extra-bold text-center">
            What Am I Learning?
          </h1>
          <p className="pt-2 text-lg pb-4 text-center">
            List of things I’m learning, thought I’d share this.
          </p>
          <div className="border-t-4"> </div>
          <div className="flex justify-between items-center">
            <div className="text-xl pt-2 pb-2">TypeScript</div>
            <div className="bg-customBlack p-1  rounded text-white">
              Learning
            </div>
          </div>
          {/* <div className="border-t-4"> </div> */}
          <div className="border-t-4"> </div>
          <div className="flex justify-between items-center">
            <div className="text-xl pt-2 pb-2">
              MongoDB, Express Js, Node Js
            </div>
            <div className="bg-customBlack p-1  rounded text-white">
              Learning
            </div>
          </div>
          <div className="border-t-4"> </div>
          <div className="flex justify-between items-center">
            <div className="text-xl pt-2 pb-2">Devops</div>
            <div className="bg-customBlack p-1  rounded text-white">Queued</div>
          </div>
          <div className="border-t-4"> </div>
        </div>
      </div>
    </div>
  );
}

export default Skils_Section;
