import React from "react";

function Personal_Info() {
  return (
    <div className="container md:mx-auto h-full pt-36">
      <div className="flex justify-around flex-col">
        <div className="text-center">
          <p className="font-extra-bold text-3xl underline underline-offset-4 ">About Me</p>
          <p className="text-xl pt-4">Get to Know more about me</p>
        </div>
        <div className="flex justify-center flex-col  md:flex-col lg:flex-row pt-8 gap-16 px-12">
          <div className="relative">
            <div className="step-dot"></div>
            <div className="step-line"></div>
            <h2 className="text-2xl text-center font-extra-bold underline underline-offset-4">
              Experience
            </h2>
            <div className="py-4">
              <div className="text-xl font-extra-bold">
                Trainee Web Developer (Internship)
              </div>
              <p>11/2022 - 05/2023</p>
              <div className="text-lg font-bold ">Zignuts Techno Lab Pvt Ltd.</div>
            </div>
            <div className="relative">
              <div className="step-dot"></div>
              <div className="text-xl font-extra-bold pt-12">
                Looking for new position !
              </div>
              <a href="" className="underline underline-offset-2 font-extra-bold">Hire me</a>
            </div>
          </div>
          <div className="border-b-4 md:border-l-4 "></div>
          <div className="relative">
            <div className="step-dot"></div>
            <div className="step-line"></div>
            <h2 className="text-2xl text-center font-extra-bold underline underline-offset-4">
              Education
            </h2>
            <div className="py-4">
              <div className="text-xl font-extra-bold">
                B.tech in Computer Science & Engineering
              </div>
              <p>Parul Institute of Engineering & Technology</p>
              <p>CGPA: 7.56/10.0</p>
            </div>
            <div className="relative">
              <div className="step-dot"></div>
              <div className="text-xl font-extra-bold pt-8">
                Intermediate (+2/12th)
              </div>
              <p>Narayana Junior college</p>
              <p>CGPA: 8.17/10.0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal_Info;
