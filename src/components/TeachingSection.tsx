import React from "react";
import { School } from "lucide-react";

interface Subject {
  subjectName: string;
  subjectImage: string;
  subjectDescription: string;
  subjectDate: string;
}

const subjects: Subject[] = [
  {
    subjectName: "Data Structures & Algorithms",
    subjectImage: "/subjects/data.webp",
    subjectDescription:
      "focuses on the design, implementation, and efficiency of data structures such as lists, stacks, queues, hash tables, and trees. It covers key algorithms for searching, sorting, and traversal, along with the analysis of their performance using Big O notation to evaluate time and space complexity.",
    subjectDate: "2022-Present",
  },
  {
    subjectName: "Statistics",
    subjectImage: "/subjects/stats.webp",
    subjectDescription:
      "introduces fundamental statistical concepts, covering descriptive statistics, probability theory, sampling methods, and hypothesis testing. Emphasis is placed on applying statistical methods to real-world data and making data-driven decisions, with a focus on interpreting results and understanding uncertainty.",
    subjectDate: "2022-Present",
  },
  {
    subjectName: "Digital Image Processing",
    subjectImage: "/subjects/dip.webp",
    subjectDescription:
      "Digital Image Processing explores techniques for enhancing, analyzing, and manipulating digital images. Topics include image transformations, filtering, segmentation, and morphological operations, with applications in object detection, image recognition, and computer vision. Emphasis is placed on both theoretical understanding and practical implementation.",
    subjectDate: "Spring 2024",
  },
];

const TeachingCard: React.FC<{ subject: Subject }> = ({ subject }) => (
  <a className="group relative mx-auto block h-[350px] w-full transform overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 sm:h-[400px] lg:h-[450px]">
    <div
      className="relative h-full w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${subject.subjectImage})` }}
    >
      {/* Superposición de color */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenido antes del hover */}
      <div className="relative z-10 p-6">
        <h2 className="text-2xl font-bold text-white drop-shadow-md">
          {subject.subjectName}
        </h2>
        <p className="mt-1 text-lg font-medium text-gray-300 drop-shadow-md">
          {subject.subjectDate}
        </p>
      </div>

      {/* Contenido al hacer hover */}
      <div className="absolute inset-0 z-20 flex items-center justify-center bg-gray-100 bg-opacity-90 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl ">
            {subject.subjectName}
          </h3>
          <p className="mt-2 text-justify text-sm text-gray-800 lg:text-base">
            {subject.subjectDescription}
          </p>
        </div>
      </div>
    </div>
  </a>
);

const TeachingSection: React.FC = () => {
  return (
    <section id="teaching" className="relative my-44" data-scroll-section>
    <Gradient />
       
      <div
        data-scroll
        data-scroll-speed=".1"
        data-scroll-position="top"
        className="relative z-10 mx-auto my-14 flex max-w-6xl flex-col items-center justify-center space-y-6"
      >
        <School className="md:size-10" color="#00e298" />
        <h2 className="mt-3 text-center text-4xl font-semibold tracking-tight xl:text-5xl">
          Teaching{" "}
        </h2>
        <div className="mt-10 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject, index) => (
            <TeachingCard key={index} subject={subject} />
          ))}
        </div>
      </div>
    </section>
  );
};

function Gradient() {
  return (
    <>
      {/* Upper gradient */}
      <div className="absolute left-0 top-0 z-0 transform-gpu overflow-hidden blur-2xl sm:left-10 sm:top-10 pointer-events-none">
        <svg
          className="relative h-[18rem] max-w-none -translate-y-[20%] translate-x-[20%] rotate-[45deg] scale-[1.2] sm:h-[36rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#newGradientUpper)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="newGradientUpper"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#14b8a6" />
              <stop offset={1} stopColor="#6ee7b7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lower gradient */}
      <div className="absolute bottom-0 right-0 z-0 transform-gpu overflow-hidden blur-2xl sm:bottom-10 sm:right-10 pointer-events-none">
        <svg
          className="relative h-[18rem] max-w-none -translate-y-[20%] translate-x-[20%] rotate-[-45deg] scale-[1.2] sm:h-[36rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#newGradientLower)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="newGradientLower"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#14b8a6" />
              <stop offset={1} stopColor="#6ee7b7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}

export default TeachingSection;
