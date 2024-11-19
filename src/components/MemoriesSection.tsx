import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Camera } from "lucide-react";

const MemoriesSection: React.FC = () => {
  const images = [
    {
      src: "/memories/projects.webp",
      alt: "Photo 1",
      description: "Presentation of Final Projects - HoCV 2024",
    },
    {
      src: "/memories/bill_freeman.webp",
      alt: "Photo 2",
      description: "Meeting William Freeman",
    },
    {
      src: "/memories/cvpr2024.webp",
      alt: "Photo 3",
      description: "At CVPR 2024",
    },
    { src: "/memories/group.webp", alt: "Photo 3", description: "HoCV Group" },
    {
      src: "/memories/optica.webp",
      alt: "Photo 4",
      description: "Optica 2023",
    },
    {
      src: "/memories/session.webp",
      alt: "Photo 5",
      description: "Research Seedbed Session",
    },
  ];

  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.85,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.85,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    }),
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(([prevIndex]) => [(prevIndex + 1) % images.length, 1]);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const paginate = (newDirection: number) => {
    setCurrentIndex(([prevIndex]) => [
      (prevIndex + newDirection + images.length) % images.length,
      newDirection,
    ]);
  };

  return (
    <section id="memories" data-scroll-section className="relative">
      <div
        data-scroll
        data-scroll-speed=".1"
        data-scroll-position="top"
        className="relative mx-auto my-16 flex max-w-full flex-col items-center justify-center space-y-6 px-4 sm:my-24 md:my-44 md:max-w-6xl"
      >
        <Gradient /> 
         
        <Camera className="md:size-10" color="#00e298" />
        <h2 className="relative z-10 mt-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl xl:text-5xl">
          Some Memories
        </h2>
        <div className="relative z-0 h-[300px] w-full overflow-hidden rounded-lg border-2 border-gray-600 shadow-2xl shadow-emerald-400 dark:border-gray-200 sm:h-[400px] md:h-[600px] lg:h-[700px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute left-0 top-0 h-full w-full"
            >
              {images[currentIndex] && (
                <>
                  <Image
                    src={images[currentIndex]?.src ?? ""}
                    alt={images[currentIndex]?.alt ?? ""}
                    fill
                    className="rounded-lg object-cover"
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-2 text-center sm:p-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="relative rounded-lg p-2 shadow-lg sm:p-4">
                      <div className="absolute inset-0 rounded-lg bg-gray-800 opacity-80"></div>
                      <p className="relative text-xs font-semibold text-white drop-shadow-md sm:text-xl">
                        {images[currentIndex]?.description ?? ""}
                      </p>
                    </div>
                  </motion.div>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Botones de navegación */}
          <button
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 transform rounded-full bg-black bg-opacity-60 p-2 text-white shadow-md transition hover:bg-opacity-80 sm:left-4 sm:p-3"
            onClick={() => paginate(-1)}
          >
            {"<"}
          </button>
          <button
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 transform rounded-full bg-black bg-opacity-60 p-2 text-white shadow-md transition hover:bg-opacity-80 sm:right-4 sm:p-3"
            onClick={() => paginate(1)}
          >
            {">"}
          </button>
        </div>
        {/* Indicadores de imagen */}
        <div className="mt-4 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-300"
              } transition`}
            />
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
      <div className="absolute inset-0 right-0 top-0 z-0 transform-gpu overflow-hidden blur-3xl sm:right-0 sm:top-0 pointer-events-none">
        <svg
          className="relative h-[15rem] max-w-none -translate-y-[30%] translate-x-[30%] rotate-[30deg] sm:h-[30rem]"
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
          className="relative h-[15rem] max-w-none -translate-x-[30%] translate-y-[30%] sm:h-[30rem]"
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

export default MemoriesSection;
