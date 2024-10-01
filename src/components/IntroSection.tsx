import React from "react";
import Image from "next/image";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";

/* import {
  Mail,
  GraduationCap,
  Linkedin,
  Github,
  Twitter,
  FileMinus,
} from "lucide-react"; */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faOrcid,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGraduationCap } from "@fortawesome/free-solid-svg-icons"; // Solid icons go here
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";

interface IntroSectionProps {
  isScrolled: boolean;
}

const TwitterXIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="28"
    height="28"
    fill="currentColor"
  >
    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
  </svg>
);

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const IntroSection: React.FC<IntroSectionProps> = ({ isScrolled }) => {
  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
     <Gradient />
      <section
        id="home"
        data-scroll-section
        className="m-8 flex mt-14 flex-col items-center justify-center space-y-4 text-center md:m-44 md:space-y-5"
      >
        <Image
          src="/assets/Hoover-Fabian-Rueda.png"
          alt="Professor's Photo"
          width={200} // Reduce el tamaño en móviles
          height={200}
          className="rounded-full h-32 w-32 md:h-48 md:w-48"
          layout="intrinsic"

        />
        <motion.h1
          className="text-3xl font-bold text-foreground md:text-5xl"
          variants={fadeInUp}
        >
          Hoover F. Rueda-Chacón
        </motion.h1>
        <motion.p
          className="text-lg text-primary md:text-xl"
          variants={fadeInUp}
        >
          Assistant Professor
        </motion.p>
        <p className="text-sm text-muted-foreground md:text-lg">
          Department of Computer Science,{" "}
          <a
            className="text-primary underline decoration-2 transition-colors duration-300 hover:text-secondary hover:decoration-4"
            target="_blank"
            href="https://uis.edu.co/en/"
          >
            Universidad Industrial de Santander
          </a>
        </p>
        <motion.p
          className="max-w-screen-lg px-4 text-justify text-sm text-muted-foreground md:px-0 md:text-lg"
          variants={fadeInUp}
        >
          Received the B.Sc. and M.Sc. degrees in Computer Science from the
          Universidad Industrial de Santander, Colombia, in 2009 and 2012,
          respectively, and the M.Sc. and Ph.D. degrees in Electrical and
          Computer Engineering from the University of Delaware, Newark, DE, USA,
          in 2015 and 2017, respectively, sponsored by a Fulbright-Colciencias
          scholarship. From 2021 to 2022, he was a Postdoctoral Associate with
          the Department of Electrical and Computer Engineering at Boston
          University, USA. At present, he is an Assistant Professor at
          Universidad Industrial de Santander, Colombia. His main research
          interests include computational imaging, deep learning, hyperspectral
          imaging, single-photon imaging, and computer vision. He is the leader
          of the research seedbed Hands-on Computer Vision -{" "}
          <a
            href="https://semillerocv.github.io/"
            target="_blank"
            className="text-primary underline decoration-2 transition-colors duration-300 hover:text-secondary hover:decoration-4"
          >
            HoCV
          </a>{" "}
          .
        </motion.p>
        {/* Social Links */}
        <motion.div className="z-0 flex gap-4 md:gap-6" variants={fadeInUp}>
          <a
            href="mailto:hfarueda@uis.edu.co"
            className="transform text-primary transition-transform duration-300 hover:translate-y-[-4px] hover:text-secondary"
            target="_blank"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" color="#00e298" />
          </a>
          <a
            href="https://scholar.google.com/citations?user=seyRms4AAAAJ&hl=en"
            className="transform text-primary transition-transform duration-300 hover:translate-y-[-4px] hover:text-secondary"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGraduationCap} size="2x" color="#00e298" />
          </a>
          <a
            href="https://github.com/hfarueda"
            className="transform text-primary transition-transform duration-300 hover:translate-y-[-4px] hover:text-secondary"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" color="#00e298" />
          </a>
          <a
            href="https://www.linkedin.com/in/hoover-rueda-chac%C3%B3n-18318a313/"
            className="transform text-primary transition-transform duration-300 hover:translate-y-[-4px] hover:text-secondary"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" color="#00e298" />
          </a>
          <a
            href="https://x.com/hfarueda"
            className="transform text-primary transition-transform duration-300 hover:translate-y-[-4px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterXIcon />
          </a>
          <a
            href="https://orcid.org/0000-0002-6763-8629"
            className="transform text-primary transition-transform duration-300 hover:translate-y-[-4px] hover:text-secondary"
            target="_blank"
          >
            <FontAwesomeIcon icon={faOrcid} size="2x" color="#00e298" />
          </a>
          <a
            href=""
            className="transform text-primary transition-transform duration-300 hover:translate-y-[-4px] hover:text-secondary"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFileAlt} size="2x" color="#00e298" />
          </a>
        </motion.div>
        {/* Logos Section */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-10"
          variants={fadeInUp}
        >
          <a
            href="https://uis.edu.co/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/Logotipo_UIS.webp"
              alt="Logo 1"
              width={70}
              height={70}
              className="md:w-200 md:h-200 rounded-lg transition-all duration-200 hover:scale-110"
            />
          </a>
          <a
            href="https://www.udel.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/ud.webp"
              alt="Logo 2"
              width={70}
              height={70}
              className="md:w-100 md:h-100 transition-all duration-200 hover:scale-110 md:ml-4"
            />
          </a>
          <a
            href="https://www.bu.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/BU.webp"
              alt="Logo 3"
              width={70}
              height={70}
              className="md:w-70 md:h-70 transition-all duration-200 hover:scale-110"
            />
          </a>
          <a
            href="https://semillerocv.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/hocv.webp"
              alt="Logo 3"
              width={100}
              height={100}
              className="md:w-100 md:h-100 transition-all duration-200 hover:scale-110"
            />
          </a>
        </motion.div>
        {/* Scroll Down Indicator */}
        <motion.div
          className={cn(styles.scroll, isScrolled && styles["scroll--hidden"])}
          variants={fadeInUp}
        >
          <TriangleDownIcon className="mt-1 animate-bounce" />
        </motion.div>{" "}
      </section>
    </motion.div>
  );
};

function Gradient() {
  return (
    <>
      {/* Upper gradient */}
      <div className="absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
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
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] pointer-events-none">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
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

export default IntroSection;
