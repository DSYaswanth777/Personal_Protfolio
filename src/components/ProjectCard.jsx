import Image from "next/image";
import { GrShare } from "react-icons/gr";
import { Reveal2 } from "./Animations/Reveal2";

const ProjectCard = ({
  imageSrc,
  title,
  techStack,
  demoLink,
  description,
  type,
  involvement,
}) => (
  <article className="project-card lg:p-5 p-5  rounded-bottom rounded-xl flex gap-10 flex-col justify-center items-center">
    <div className=" rounded-lg cursor-pointer relative group">
      <Reveal2>
        <Image
          src={imageSrc}
          alt="Project"
          className="rounded-t-lg"
          style={{
            objectFit: "cover",
            minWidth: "fitContent",
            height: "400px",
            objectPosition: "50% 0%",
          }}
        />
      </Reveal2>
      <div className="content bg- p-5 bg-normalWhite rounded-b-lg">
        <div className="text-left">
          <div className="flex gap-2 flex-col   justify-start items-start cursor-pointer">
            <Reveal2>
              <div className="flex justify-start align-start gap-4 flex-col lg:flex-row pb-3">
                <div>
                  <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-sm md:text-lg  font-medium text-gray-600 ring-2 ring-inset ring-customBlack">
                    {type}
                  </span>
                </div>
                <div>
                  <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-sm md:text-lg font-medium text-gray-600 ring-2 ring-inset ring-customBlack">
                    {involvement}
                  </span>
                </div>
              </div>
            </Reveal2>
            <Reveal2>
              <h1 className="text-2xl font-extra-bold">{title}</h1>
            </Reveal2>

            <Reveal2>
              <p className="text-xl">{description}</p>
            </Reveal2>
            <Reveal2>
              <div className="flex gap-2">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold hover:border-b-2"
                >
                  View Live
                </a>
                <GrShare size={20} />
              </div>
            </Reveal2>
          </div>
        </div>
      </div>
    </div>
  </article>
);

export default ProjectCard;
