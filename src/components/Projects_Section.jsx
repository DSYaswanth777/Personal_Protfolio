//**Next Image import */
import Image from "next/image";
//**Project Images */
import project from "../../public/images/project.png";
import project2 from "../../public/images/project2.png";
import project3 from "../../public/images/project3.png";
//**React Icon  imports */
import { FaGithub } from "react-icons/fa";
import { GrShare } from "react-icons/gr";
import { forwardRef } from "react";
const Projects_Section = forwardRef((props, ref) => {
  return (
    <div className="container md:mx-auto md:px-10 h-full " ref={ref}>
      <div className="flex justify-around flex-col  pt-32">
        <div className="text-center">
          <p className="font-extra-bold text-3xl underline underline-offset-4 pb-5  ">
            My Works
          </p>
          <p className="text-xl">
            Showcasing my diverse range of projects and creations in the world
            of technology.{" "}
          </p>
        </div>
      </div>
      <div className="pt-16 px-5 flex flex-col gap-10">
        <div className="bg-normalWhite p-10 rounded-xl shadow-xl flex gap-10 flex-col md:flex-col lg:flex-row justify-center items-center">
          <div className="border-4 rounded-lg hover:backdrop-blur-lg cursor-pointer relative group">
            <Image src={project} alt="Project"  />
            <div className="absolute inset-0 flex items-center justify-center group-hover:backdrop-blur-lg transition-all duration-300 opacity-0 group-hover:opacity-100">
              <div className="text-center">
                <div className="flex gap-5 cursor-pointer">
                  <div className="flex gap-2">
                    <a
                      href="https://github.com/DSYaswanth777/Marketing_Landing_Page"
                      target="_blank"
                      className="text-lg font-bold hover:border-b-2"
                    >
                      Code
                    </a>
                    <FaGithub size={25} />
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://marketing-landing-page-gray.vercel.app/"
                      target="_blank"
                      className="text-lg font-bold hover:border-b-2"
                    >
                      Demo
                    </a>
                    <GrShare size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2">
            <h1 className="text-center text-xl font-extra-bold pb-3 uppercase">
              Digital Marketing Landing Page
            </h1>
            <p className="text-center text-customBlack font-bold">
              Crafted a dynamic Digital Marketing Landing Page that succinctly
              communicates diverse services and drives lead generation through
              engaging visuals and responsive design. Client success showcases
              further validate credibility, paving the way for business growth.
            </p>
            <div className="flex justify-center gap-5 pt-5">
              <p className="uppercase p-2 bg-white rounded-md shadow-md">
                REACT
              </p>
              <p className="uppercase p-2 bg-white rounded-md shadow-md">
                Bootstrap
              </p>
            </div>
            <div className="flex gap-5 pt-5 justify-center cursor-pointer">
              <div className="flex gap-2">
                <p className="text-lg font-bold hover:border-b-2 cursor-pointer">
                  Code
                </p>
                <FaGithub size={25} />
              </div>
              <div className="flex gap-2">
                <p className="text-lg font-bold hover:border-b-2 cursor-pointer">
                  Demo
                </p>
                <GrShare size={20} />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-normalWhite p-10 rounded-xl shadow-xl flex gap-10 flex-col md:flex-col lg:flex-row justify-center items-center">
          <div className="border-4 rounded-lg hover:backdrop-blur-lg cursor-pointer relative group">
            <Image src={project2} alt="Project" />
            <div className="absolute inset-0 flex items-center justify-center group-hover:backdrop-blur-lg transition-all duration-300 opacity-0 group-hover:opacity-100">
              <div className="text-center">
                <div className="flex gap-5 cursor-pointer">
                  <div className="flex gap-2">
                    <a
                      href="https://github.com/DSYaswanth777/Budget-Manger"
                      target="_blank"
                      className="text-lg font-bold hover:border-b-2 cursor-pointer"
                    >
                      Code
                    </a>
                    <FaGithub size={25} />
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://budget-manger.vercel.app/"
                      target="_blank"
                      className="text-lg font-bold hover:border-b-2 cursor-pointer"
                    >
                      {" "}
                      Demo
                    </a>
                    <GrShare size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2">
            <h1 className="text-center text-xl font-extra-bold pb-3 uppercase underline underline-offset-4">
              Budget manager
            </h1>
            <p className="text-center text-customBlack font-bold">
              Experience the convenience of seamless budgeting and expense
              tracking with my Budget Manager project. Developed using React and
              Bootstrap, this intuitive web application empowers users to create
              budgets, log expenses, and visualize their financial journey with
              ease.
            </p>
            <div className="flex justify-center gap-5 pt-5">
              <p className="uppercase p-2 bg-white rounded-md shadow-md">
                REACT
              </p>
              <p className="uppercase p-2 bg-white rounded-md shadow-md">
                Bootstrap
              </p>
            </div>
            <div className="flex gap-5 pt-5 justify-center cursor-pointer">
              <div className="flex gap-2">
                <a
                  href="https://github.com/DSYaswanth777/Budget-Manger"
                  target="_blank"
                  className="text-lg font-bold hover:border-b-2 cursor-pointer"
                >
                  Code
                </a>
                <FaGithub size={25} />
              </div>
              <div className="flex gap-2">
                <a
                  href="https://budget-manger.vercel.app/"
                  target="_blank"
                  className="text-lg font-bold hover:border-b-2 cursor-pointer"
                >
                  Demo
                </a>
                <GrShare size={20} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-normalWhite p-10 rounded-xl shadow-xl flex gap-10 flex-col md:flex-col lg:flex-row justify-center items-center">
          <div className="border-4 rounded-lg hover:backdrop-blur-lg cursor-pointer relative group">
            <Image src={project3} alt="Project" />
            <div className="absolute inset-0 flex items-center justify-center group-hover:backdrop-blur-lg transition-all duration-300 opacity-0 group-hover:opacity-100">
              <div className="text-center">
                <div className="flex gap-5 cursor-pointer ">
                  <div className="flex gap-2 ">
                    <a
                      href="https://github.com/DSYaswanth777/Simple-Shopping-Cart"
                      target="_blank"
                      className="text-lg font-bold hover:border-b-2 cursor-pointer"
                    >
                      Code
                    </a>
                    <FaGithub size={25} />
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://simple-shopping-cart-chi.vercel.app/"
                      target="_blank"
                      className="text-lg font-bold hover:border-b-2 cursor-pointer"
                    >
                      Demo
                    </a>
                    <GrShare size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2">
            <h1 className="text-center text-xl font-extra-bold pb-3 uppercase underline underline-offset-4">
              Simple shopping Cart
            </h1>
            <p className="text-center text-customBlack font-bold">
              I combined Bootstrap and React custom hooks to craft an efficient
              application, showcasing impactful cart features and skillful state
              management for a seamless user experience. By seamlessly
              integrating essential cart features and demonstrating adeptness in
              React &apos;s custom hooks for efficient state management,
            </p>
            <div className="flex justify-center gap-5 pt-5">
              <p className="uppercase p-2 bg-white rounded-md shadow-md">
                REACT
              </p>
              <p className="uppercase p-2 bg-white rounded-md shadow-md">
                Bootstrap
              </p>
            </div>
            <div className="flex gap-5 pt-5 justify-center cursor-pointer">
              <div className="flex gap-2">
                <a
                  href="https://github.com/DSYaswanth777/Simple-Shopping-Cart"
                  target="_blank"
                  className="text-lg font-bold hover:border-b-2 cursor-pointer"
                >
                  Code
                </a>

                <FaGithub size={25} />
              </div>
              <div className="flex gap-2">
                <a
                  href="https://simple-shopping-cart-chi.vercel.app/"
                  target="_blank"
                  className="text-lg font-bold hover:border-b-2 cursor-pointer"
                >
                  Demo
                </a>
                <GrShare size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <a
          href="https://github.com/DSYaswanth777"
          target="_blank"
          className="text-center  font-extra-bold text-2xl underline underline-offset-4"
        >
          More Projects
        </a>
      </div>
    </div>
  );
});
Projects_Section.displayName = "Projects_Section"; // Add this line

export default Projects_Section;
