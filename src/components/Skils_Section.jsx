"use client";
function Skils_Section() {
  return (
    <div className="h-full container md:mx-auto">
      <div className="flex justify-center items-center flex-col gap-6 md:mx-auto">
        <div className="text-left px-44 text-3xl underline underline-offset-4 font-extra-bold">
          Skills
        </div>
      </div>
      <div className="flex justify-around pt-10">
        <div>
          <div className="text-xl font-extra-bold">My Skill Set</div>
          <h1 className="pt-2 text-lg">List of tech/tools I've worked with</h1>
          <div className="skills-section pt-10">
            <p>HTML</p> <p>CSS</p> <p>Javascript</p> <p>Bootstrap</p>{" "}
            <p>Sass</p> <p>tailwind CSS</p> <p>React.Js</p> <p>Next.Js</p>
            <p>Python</p> <p>C++</p> 
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-extra-bold">What Am I Learning?</h1>
          <p className="pt-2 text-lg pb-4">
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
            <div className="text-xl pt-2 pb-2">
              Devops
            </div>
            <div className="bg-customBlack p-1  rounded text-white">
              Queued
            </div>
          </div>
          <div className="border-t-4"> </div>
        </div>
      </div>
    </div>
  );
}

export default Skils_Section;
