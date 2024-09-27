import React from "react";
import { FaGraduationCap, FaFileAlt, FaGlobe, FaBriefcase, FaAward } from "react-icons/fa";  // Font Awesome Icons

interface Honor {
  awardName: string;
  awardPlace: string;
  eventName: string;
}

const honors: Honor[] = [
  {
    awardName: "Undergraduate Outstanding Student (2006-2008)",
    awardPlace: "Bucaramanga, Colombia",
    eventName:
      "Department of Computer Science and Informatics, Universidad Industrial de Santander",
  },
  {
    awardName: "Best Paper Award (2010)",
    awardPlace:
      "9th IberoConference on Systemics, Cibernetics and Informatics – CISCI 2010, Orlando, FL., USA",
    eventName:
      "Session: Image, Acoustic, Visual and Language Signal Processing",
  },
  {
    awardName: "Master Outstanding Student (2011-2012)",
    awardPlace: "Bucaramanga, Colombia",
    eventName:
      "Department of Computer Science and Informatics, Universidad Industrial de Santander",
  },
  {
    awardName: "Master’s Meritorious Thesis Award (2012)",
    awardPlace: "Universidad Industrial de Santander, Bucaramanga, Colombia",
    eventName:
      "Thesis: “Super-resolution algorithm applied to spectral images acquired via CS”",
  },
  {
    awardName: "Fulbright-COLCIENCIAS Scholarship (2012-2017)",
    awardPlace: "Bogota D.C., Colombia",
    eventName: "Scholarship for pursuing Ph.D. studies abroad. COLCIENCIAS",
  },
  {
    awardName: "Professional Development Award (2014 and 2016)",
    awardPlace: "Newark, DE., USA",
    eventName:
      "Office of Graduate and Professional Education, University of Delaware",
  },
  {
    awardName:
      "Signal Processing and Communications Graduate Faculty Award (2016)",
    awardPlace: "Newark, DE., USA",
    eventName:
      "Department of Electrical and Computer Engineering, University of Delaware",
  },
  {
    awardName: "University Dissertation Fellow Award (2016)",
    awardPlace: "Newark, DE., USA",
    eventName:
      "Office of Graduate and Professional Education, University of Delaware",
  },
];

const HonorItem: React.FC<{ honor: Honor; icon: JSX.Element }> = ({ honor, icon }) => (
  <li className="group relative mb-6 flex h-36 items-center py-4 transform space-x-4 rounded-lg p-4 shadow-md transition-transform duration-300 hover:scale-[1.02] bg-white dark:bg-gray-800 hover:shadow-lg">
    <div className="flex-shrink-0">
      {icon} {/* Use meaningful icon */}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-emerald-400 dark:text-white">
        {honor.awardName}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {honor.eventName}
      </p>
      <p className="text-xs text-gray-400 dark:text-gray-500">
        {honor.awardPlace}
      </p>
    </div>
    <span className="absolute bottom-0 left-0 right-0 mt-6 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:bg-gray-700"></span>
  </li>
);

const HonorsSection: React.FC = () => {
  // Split honors into two groups
  const leftHonors = honors.slice(0, 4); // First 4 honors
  const rightHonors = honors.slice(4, 8); // Last 4 honors

  // Map icons to specific honors
  const icons = [
    <FaGraduationCap key="graduation-1" size={40} className="text-emerald-400" />,  
    <FaFileAlt key="file" size={40} className="text-emerald-400" />,              
    <FaGraduationCap key="graduation-2" size={40} className="text-emerald-400" />,  
    <FaAward key="award-1" size={40} className="text-emerald-400" />,              
    <FaGlobe key="globe" size={40} className="text-emerald-400" />,                 
    <FaBriefcase key="briefcase" size={40} className="text-emerald-400" />,         
    <FaGraduationCap key="graduation-3" size={40} className="text-emerald-400" />,  
    <FaAward key="award-2" size={40} className="text-emerald-400" />,               
  ];

  function Gradient() {
    return (
      <>
        {/* Left gradient */}
        <div className="absolute left-0 top-1/2 z-0 -translate-y-1/2 transform-gpu overflow-hidden blur-3xl sm:left-0">
          <svg
            className="relative h-[400px] max-w-none -translate-x-[30%] rotate-[45deg] sm:h-[600px]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#leftGradient)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="leftGradient"
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
  
        {/* Right gradient */}
        <div className="absolute right-0 top-1/2 z-0 -translate-y-1/2 transform-gpu overflow-hidden blur-3xl sm:right-0">
          <svg
            className="relative h-[400px] max-w-none translate-x-[30%] rotate-[-45deg] sm:h-[600px]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#rightGradient)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="rightGradient"
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
  

  return (
    <section id="honors" className="relative my-24">
      <Gradient />
      <div className="relative z-10 mx-auto flex flex-col items-center space-y-12">
        <div
          data-scroll
          data-scroll-speed=".1"
          data-scroll-position="top"
          className="mx-auto my-14 flex max-w-6xl flex-col items-center justify-center space-y-6"
        >
          <span className="text-gradient clash-grotesk relative z-10 font-semibold tracking-tighter"
          style={{ fontSize: '2rem' }} >
            🏆 
          </span>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight xl:text-5xl">
            Some of my achievements
          </h2>

          {/* Two-column grid for honors */}
          <div className="grid w-full max-w-6xl grid-cols-1 gap-10 md:grid-cols-2">
            {/* Left Column */}
            <ul className="space-y-6">
              {leftHonors.map((honor, index) => (
                <HonorItem key={index} honor={honor} icon={icons[index] ?? <FaAward size={40} className="text-gray-500" />} />
              ))}
            </ul>

            {/* Right Column */}
            <ul className="space-y-6">
              {rightHonors.map((honor, index) => (
                <HonorItem key={index} honor={honor} icon={icons[index + 4] ?? <FaAward size={40} className="text-gray-500" />} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HonorsSection;
