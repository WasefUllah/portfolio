import React from "react";

const Education = () => {
  const educationData = [
    {
      level: "University",
      institute: "Bangladesh University of Professionals (BUP)",
      duration: "2022 – Present",
      details: "Department of Information and Communication Technology (ICT)",
    },
    {
      level: "College",
      institute: "Noakhali Govt. College",
      duration: "Passed in 2021",
      details: "Higher Secondary Certificate (HSC)",
    },
    {
      level: "School",
      institute: "Noakhali Zila School",
      duration: "Passed in 2019",
      details: "Secondary School Certificate (SSC)",
    },
  ];

  return (
    <section id="education" className="py-12 px-4 md:px-10  bg-base-100 text-base-content w-11/12 mx-auto ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center mt-14">
           Education
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="border  rounded-xl p-5 shadow-md hover:shadow-lg transition "
            >
              <h3 className="text-xl font-semibold text-primary">
                {edu.level}
              </h3>
              <p className="text-lg font-medium">{edu.institute}</p>
              <p className="text-sm text-gray-500">{edu.duration}</p>
              <p className="mt-1">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
