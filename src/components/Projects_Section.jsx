import { FaGithub } from "react-icons/fa";
import { GrShare } from "react-icons/Gr";

function Projects_Section() {
  return (
    <div className="container md:mx-auto h-full">
      <div className="flex justify-around flex-col">
        <div className="text-center">
          <p className="font-extra-bold text-3xl underline underline-offset-4 pb-5">
            My Works
          </p>
          <p className="text-xl">
            Showcasing my diverse range of projects and creations in the world
            of technology.{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-around gap-10 pt-10 container md:mx-auto px-20">
        <div className="bg-white p-8 border-4 rounded-lg shadow-xl transition-all ease-in-out delay-150 hover:scale-110 duration-400">
          <h2 className="text-lg font-extra-bold">Book My show Clone</h2>
          <ol className="list-disc px-8 pt-3">
            <li>
              Developed a BookMyShow frontend clone using ReactJS and Tailwind
              CSS.
            </li>
            <li>
              Integrated the TMDB API to fetch movie data Implemented secure
              online,payment functionality using Razor Pay
            </li>
            <li>Tech Used: ReactJS | TailwindCSS .</li>
            <div className="pt-3 flex gap-2">
              <div className="flex justify-center items-center gap-2 hover:underline">
                <p>Code</p>
                <FaGithub size={20} />
              </div>
              <div className="flex justify-center items-center gap-2 hover:underline">
                <p>Demo</p>

                <GrShare />
              </div>
            </div>
          </ol>
        </div>
        <div className="bg-white p-8 border-4 rounded-lg shadow-xl transition-all ease-in-out delay-150 hover:scale-110 duration-400">
          <h2 className="text-lg font-extra-bold">Book My show Clone</h2>
          <ol className="list-disc px-8 pt-3">
            <li>
              Developed a BookMyShow frontend clone using ReactJS and Tailwind
              CSS.
            </li>
            <li>
              Integrated the TMDB API to fetch movie data Implemented secure
              online,payment functionality using Razor Pay
            </li>
            <li>Tech Used: ReactJS | TailwindCSS .</li>
            <div className="pt-3 flex gap-2">
              <div className="flex justify-center items-center gap-2 hover:underline">
                <p>Code</p>
                <FaGithub size={20} />
              </div>
              <div className="flex justify-center items-center gap-2 hover:underline">
                <p>Demo</p>

                <GrShare />
              </div>
            </div>
          </ol>
        </div>
      </div>
      <div className="flex justify-around gap-10 pt-10 container md:mx-auto px-20">
        <div className="bg-white p-8 border-4 rounded-lg shadow-xl transition-all ease-in-out delay-150 hover:scale-110 duration-400">
          <h2 className="text-lg font-extra-bold">Book My show Clone</h2>
          <ol className="list-disc px-8 pt-3">
            <li>
              Developed a BookMyShow frontend clone using ReactJS and Tailwind
              CSS.
            </li>
            <li>
              Integrated the TMDB API to fetch movie data Implemented secure
              online,payment functionality using Razor Pay
            </li>
            <li>Tech Used: ReactJS | TailwindCSS .</li>
            <div className="pt-3 flex gap-2">
              <div className="flex justify-center items-center gap-2 hover:underline">
                <p>Code</p>
                <FaGithub size={20} />
              </div>
              <div className="flex justify-center items-center gap-2 hover:underline">
                <p>Demo</p>

                <GrShare />
              </div>
            </div>
          </ol>
        </div>
        <div className="bg-white p-8 border-4 rounded-lg shadow-xl transition-all ease-in-out delay-150 hover:scale-110 duration-400">
          <h2 className="text-lg font-extra-bold">Book My show Clone</h2>
          <ol className="list-disc px-8 pt-3">
            <li>
              Developed a BookMyShow frontend clone using ReactJS and Tailwind
              CSS.
            </li>
            <li>
              Integrated the TMDB API to fetch movie data Implemented secure
              online,payment functionality using Razor Pay
            </li>
            <li>Tech Used: ReactJS | TailwindCSS .</li>
            <div className="pt-3 flex gap-2">
              <div className="flex justify-center items-center gap-2 hover:underline">
                <p>Code</p>
                <FaGithub size={20} />
              </div>
              <div className="flex justify-center items-center gap-2 hover:underline">
                <p>Demo</p>

                <GrShare />
              </div>
            </div>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Projects_Section;
