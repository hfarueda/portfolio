import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Microscope } from "lucide-react";

interface Research {
  service: string;
  description: string;
  imageSrc: string;
}

const research: Research[] = [
  {
    service: "Deep Learning",
    description:
      "Algorithms that mimic neural networks to transform big data into accurate, autonomous intelligence.",
    imageSrc: "/areas/dl.webp",
  },
  {
    service: "Computational Imaging",
    description:
      "Applies mathematical models and algorithms to enhance and analyze images captured with non-traditional systems.",
    imageSrc: "/areas/CI.webp",
  },
  {
    service: "Hyperspectral Imaging",
    description:
      "Enhancing the capture and analysis of spectral data across multiple wavelengths to improve material identification, environmental monitoring, and precision agriculture.",
    imageSrc: "/areas/hsi_new.webp",
  },
  {
    service: "Single-Photon  Imaging",
    description:
      "Harnessing cutting-edge technology to capture and analyze light at the single-photon level, enabling ultra-sensitive imaging and measurement.",
    imageSrc: "/areas/spi.webp",
  },
  {
    service: "Optics",
    description:
      "Advancing the manipulation and control of light to improve imaging, sensing, and communication systems.",
    imageSrc: "/areas/optics.webp",
  },
  {
    service: "Computer Vision",
    description:
      "Designing intelligent systems that interpret and analyze visual data to automate tasks such as image recognition, object detection, and pattern recognition.",
    imageSrc: "/areas/CV_banner.webp",
  },
];

function NewGradient() {
  return <>{/* Left gradient - New Distribution */}</>;
}

const ResearchSection: React.FC = () => {
  return (
    <section id="research" data-scroll-section className="my-24">
      <div
        data-scroll
        data-scroll-speed=".1"
        data-scroll-position="top"
        className="relative mx-auto flex max-w-6xl flex-col justify-start space-y-10 px-4"
      >
        {/* Title and description */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            staggerChildren: 0.5,
          }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <Microscope className="md:size-10" color="#00e298" />

            <h3 className="mt-3 text-4xl font-semibold tracking-tight xl:text-5xl">
              Research Areas
            </h3>
          </div>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            staggerChildren: 0.5,
          }}
          viewport={{ once: true }}
          className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {research.map((service) => (
            <div
              key={service.service}
              className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md dark:bg-gray-900 dark:hover:bg-gray-800"
            >
              <Image
                src={service.imageSrc}
                alt={service.service}
                className="h-48 w-full object-cover"
                width={800}
                height={600}
              />
              <div className="flex flex-col p-6">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {service.service}
                </h3>
                <p className="mt-2 text-justify tracking-tighter text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;
