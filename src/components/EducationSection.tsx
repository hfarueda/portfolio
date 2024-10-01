import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap } from 'lucide-react';

interface TimelineItem {
  degree: string;
  institution: string;
  date: string;
  description: string;
  advisor: string;
  logo: string;
}

const timelineVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

const EducationTimelineItem: React.FC<{
  item: TimelineItem;
  index: number;
}> = ({ item, index }) => (
  <motion.li
    className="group relative z-10 flex flex-col items-center rounded-lg bg-white p-6 text-center transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary dark:bg-gray-800"
    style={{ minWidth: "250px" }}
    custom={index}
    initial="hidden"
    animate="visible"
    variants={timelineVariants}
  >
    <Image
      src={item.logo}
      alt={`${item.institution} logo`}
      width={64}
      height={64}
      className="mb-4 h-24 w-24 rounded-full object-contain shadow-md"
    />
    <time className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
      {item.date}
    </time>
    <h3 className="mt-2 text-2xl font-extrabold text-gray-900 dark:text-white">
      {item.degree}
    </h3>
    <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300">
      {item.institution}
    </h4>

    {/* Content that is revealed on hover */}
    <div className="max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-48">
      <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
        {item.description}
      </p>
      <span className="mt-4 block text-sm font-light italic text-gray-500 dark:text-gray-400">
        Advisor: {item.advisor}
      </span>
    </div>
  </motion.li>
);

const educationTimeline = [
  {
    degree: "B.Sc. in Computer Science",
    institution: "Universidad Industrial de Santander (UIS), Colombia",
    date: "2006-2008",
    description:
      "Graduate project: “Design and development of a software tool as support for communications via mobile phones through speech synthesis”",
    advisor: "Henry Arguello",
    logo: "/assets/uis.webp",
  },
  {
    degree: "M.Sc. in Computer Science",
    institution: "Universidad Industrial de Santander (UIS), Colombia",
    date: "2010-2012",
    description:
      "Master Thesis: “Super-resolution algorithm applied to spectral images acquired via Compressive Sensing”",
    advisor: "Henry Arguello",
    logo: "/assets/uis.webp",
  },
  {
    degree: "M.Sc. in Electrical and Computer Engineering",
    institution: "University of Delaware (UDel), Newark, DE, USA",
    date: "2013 - 2015",
    description:
      "Master Thesis: “Higher order discretization model for coded aperture spectral imaging systems”",
    advisor: "Gonzalo R. Arce",
    logo: "/assets/u_delaware.webp",
  },
  {
    degree: "Ph.D. in Electrical and Computer Engineering",
    institution: "University of Delaware (UDel), Newark, DE, USA",
    date: "2015 - 2017",
    description:
      "Doctoral Dissertation: “Compressive coded-aperture multimodal imaging systems”",
    advisor: "Gonzalo R. Arce",
    logo: "/assets/u_delaware.webp",
  },
];

const EducationSection: React.FC = () => {
  return (
    <section id="education" data-scroll-section>
      <div
        data-scroll
        data-scroll-speed=".1"
        data-scroll-position="top"
        className="relative mx-auto my-44 flex max-w-6xl flex-col items-center justify-center space-y-6"
      >
        <Gradient />
        <GraduationCap className="md:size-10" color="#00e298"/>

        <h2 className="relative z-10 text-4xl font-semibold tracking-tighter xl:text-5xl">
          Education
        </h2>
        <ol className="relative z-10 grid w-full grid-cols-1 gap-8 sm:grid-cols-4">
          {educationTimeline.map((item, index) => (
            <EducationTimelineItem key={index} item={item} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
};

function Gradient() {
  return (
    <>
      {/* Upper gradient */}
      <div className="absolute inset-0 right-0 top-0 z-0 transform-gpu overflow-hidden blur-3xl sm:right-0 sm:top-0 pointer-events-none">
        <svg
          className="relative h-[21.1875rem] max-w-none -translate-y-[30%] translate-x-[30%] rotate-[30deg] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        > 
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".2"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0d9488" />
              <stop offset={1} stopColor="#5eead4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lower gradient */}
      <div className="absolute inset-0 bottom-0 left-0 z-0 transform-gpu overflow-hidden blur-3xl sm:bottom-0 sm:left-0 pointer-events-none">
        <svg
          className="absolute top-[-30%] right-[-30%] h-[21.1875rem] max-w-none -translate-x-[30%] translate-y-[30%] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".2"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
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

export default EducationSection;
