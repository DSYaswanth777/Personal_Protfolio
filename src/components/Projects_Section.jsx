import Image from "next/image";
import Project_Img from "../../public/images/tree-736885_1280.jpg";
function Projects_Section() {
  return (
    <div className="container md:mx-auto h-screen">
      <div className="flex justify-around flex-col">
        <div className="text-center">
          <p className="font-bold">Works</p>
          <h1 className="text-3xl">Latest Projects Works</h1>
          <p className="">
            Here you can find some of the projects that I created recently
          </p>
        </div>
        <div></div>
      </div>
      <div className="flex flex-row justify-around pt-10 ">
        <Image src={Project_Img} width={380} height={380} />
        <Image src={Project_Img} width={380} height={380} />
      </div>
      <div className="flex flex-row justify-around pt-10 ">
        <Image src={Project_Img} width={380} height={380} />
        <Image src={Project_Img} width={380} height={380} />
      </div>
    </div>
  );
}

export default Projects_Section;
