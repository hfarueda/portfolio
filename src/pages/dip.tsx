import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import ThemeToggleButton from "@/components/ui/ThemeToggleButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import styles from "@/styles/Container.module.css";
import { cn } from "@/lib/utils";

type IconProps = {
  ["data-hide"]: boolean;
};

const navLinks = [
  { href: "/#home", text: "Home" },
  { href: "/#research", text: "Research" },
  { href: "/#teaching", text: "Teaching" },
  { href: "/#publications", text: "Publications" },
  { href: "/people", text: "People" },
  { href: "/blog", text: "Blog" },
];

type NavProps = {
  text: string;
  href: string;
  i: number;
  className?: string;
};

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.12,
    },
  }),
  hidden: { opacity: 0 },
};

type CarouselSlide = {
  image: string;
  title: string;
  description: string;
};

type TermContent = {
  label: string;
  subtitle: string;
  carousels: [
    {
      title: string;
      slides: CarouselSlide[];
    },
    {
      title: string;
      slides: CarouselSlide[];
    },
  ];
};

const termOptions = ["2024-1", "2025-1", "2026-1"] as const;
type TermKey = (typeof termOptions)[number];

const termContent: Record<TermKey, TermContent> = {
  "2024-1": {
    label: "2024-1",
    subtitle: "",
    carousels: [
      {
        title: "Class Projects",
        slides: [
          {
            image: "/assets/under_construction.webp",
            title: "Under Construction",
            description: "TBD",
          }
        ],
      },
      {
        title: "Challenges and Quizzes",
        slides: [
          {
            image: "/assets/under_construction.webp",
            title: "Under Construction",
            description: "TBD",
          }
        ],
      },
    ],
  },
  "2025-1": {
    label: "2025-1",
    subtitle: "",
    carousels: [
      {
        title: "Class Projects",
        slides: [
          {
            image: "/assets/under_construction.webp",
            title: "Under Construction",
            description: "TBD",
          },
        ],
      },
      {
        title: "Challenges and Quizzes",
        slides: [
          {
            image: "/assets/under_construction.webp",
            title: "Under Construction",
            description: "TBD",
          },
        ],
      },
    ],
  },
  "2026-1": {
    label: "2026-1",
    subtitle: "",
    carousels: [
      {
        title: "Class Projects",
        slides: [
          {
            image: "/assets/coming_soon.png",
            title: "Coming Soon!",
            description: "TBD",
          },
        ],
      },
      {
        title: "Challenges and Quizzes",
        slides: [
          {
            image: "/subjects/pinhole contest/2201827.webp",
            title: "Pinhole Contestant #1",
            description: "Vote for your favorite!",
          },
          {
            image: "/subjects/pinhole contest/2220039.webp",
            title: "Pinhole Contestant #2",
            description: "Vote for your favorite!",
          },
          {
            image: "/subjects/pinhole contest/2220040.webp",
            title: "Pinhole Contestant #3",
            description: "Vote for your favorite!",
          },
          {
            image: "/subjects/pinhole contest/2220087.webp",
            title: "Pinhole Contestant #4",
            description: "Vote for your favorite!",
          },
          {
            image: "/subjects/pinhole contest/2220505.webp",
            title: "Pinhole Contestant #5",
            description: "Vote for your favorite!",
          },
          {
            image: "/subjects/pinhole contest/2221551.webp",
            title: "Pinhole Contestant #6",
            description: "Vote for your favorite!",
          },
          {
            image: "/subjects/pinhole contest/2221707.webp",
            title: "Pinhole Contestant #7",
            description: "Vote for your favorite!",
          },
          {
            image: "/subjects/pinhole contest/2221790.webp",
            title: "Pinhole Contestant #8",
            description: "Vote for your favorite!",
          },
          {
            image: "/subjects/pinhole contest/2221905.webp",
            title: "Pinhole Contestant #9",
            description: "Vote for your favorite!",
          },
          {
            image: "/subjects/pinhole contest/2221907.webp",
            title: "Pinhole Contestant #10",
            description: "Vote for your favorite!",
          },
          {
            image: "/subjects/pinhole contest/2221918.webp",
            title: "Pinhole Contestant #11",
            description: "Vote for your favorite!",
          },
          {
            image: "/subjects/pinhole contest/2230027.webp",
            title: "Pinhole Contestant #12",
            description: "Vote for your favorite!",
          },
          {
            image: "/subjects/pinhole contest/2230033.webp",
            title: "Pinhole Contestant #13",
            description: "Vote for your favorite!",
          },
          {
            image: "/subjects/pinhole contest/2230035.webp",
            title: "Pinhole Contestant #14",
            description: "Vote for your favorite!",
          },
          {
            image: "/subjects/pinhole contest/2230037.webp",
            title: "Pinhole Contestant #15",
            description: "Vote for your favorite!",
          },
          {
            image: "/subjects/pinhole contest/2230054.webp",
            title: "Pinhole Contestant #16",
            description: "Vote for your favorite!",
          },
          {
            image: "/subjects/pinhole contest/2230086.webp",
            title: "Pinhole Contestant #17",
            description: "Vote for your favorite!",
          },
          {
            image: "/subjects/pinhole contest/2230089.webp",
            title: "Pinhole Contestant #18",
            description: "Vote for your favorite!",
          },
          {
            image: "/subjects/pinhole contest/2230090.webp",
            title: "Pinhole Contestant #19",
            description: "Vote for your favorite!",
          },
          {
            image: "/subjects/pinhole contest/2151316.webp",
            title: "Pinhole Contestant #20",
            description: "Vote for your favorite!",
          },
          {
            image: "/subjects/pinhole contest/2230095.webp",
            title: "Pinhole Contestant #21",
            description: "Vote for your favorite!",
          },
          {
            image: "/subjects/pinhole contest/2230096.webp",
            title: "Pinhole Contestant #22",
            description: "Vote for your favorite!",
          },
          {
            image: "/subjects/pinhole contest/2235004.webp",
            title: "Pinhole Contestant #23",
            description: "Vote for your favorite!",
          },

        ],
      },
    ],
  },
};

function handleClick(
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  router: ReturnType<typeof useRouter>,
) {
  e.preventDefault();
  const href = e.currentTarget.getAttribute("href");

  if (href) {
    const [path, hash] = href.split("#");

    if (path && path === router.pathname) {
      // Si ya estamos en la misma ruta, hacemos scroll directo
      const section = document.querySelector(`#${hash}`);
      if (section) {
        const top = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    } else if (path) {
      // Si estamos en una ruta diferente, redirigimos y esperamos a que la nueva página cargue
      // Properly handle the promise returned by `router.push`:
      router
        .push(path)
        .then(() => {
          if (hash) {
            setTimeout(() => {
              const section = document.querySelector(`#${hash}`);
              if (section) {
                const top =
                  section.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                  top,
                  behavior: "smooth",
                });
              }
            }, 300);
          }
        })
        .catch((error) => {
          console.error("Error navigating:", error); // Add error handling
        });
    }
  }
}

function NavItem(props: NavProps) {
  const router = useRouter(); // Usamos useRouter para navegar entre páginas

  return (
    <motion.li
      className={props.className}
      variants={variants}
      custom={props.i}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <a
        href={props.href}
        onClick={(e) => handleClick(e, router)} // Llamamos a handleClick con el router
        className={cn(props.i === 0 && "nav-active", "nav-link")}
      >
        {props.text}
      </a>
    </motion.li>
  );
}

const DIP: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedTerm, setSelectedTerm] = useState<TermKey>("2024-1");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activeTerm = termContent[selectedTerm];

  return (
    <>
      <Head>
        <title>Digital Image Processing</title>
        <meta name="description" content="Digital Image Processing" />
      </Head>

      {/* Navbar */}
      <nav
        className={cn(
          styles.nav,
          isScrolled
            ? "bg-gradient-to-br from-background to-transparent shadow-md backdrop-blur transition"
            : "bg-transparent"
        )}
      >
        <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)} 
            className="inline-flex transform items-center justify-center rounded-md p-2 transition-all duration-300 focus:outline-none mr-6"
          >
            {isOpen ? <CrossIcon data-hide={!isOpen} /> : <MenuIcon data-hide={isOpen} />}
          </button>
        </div>
        <Link href="/" className="text-lg font-semibold">
          Hoover
        </Link>

        {/* Desktop menu */}
        <ul className={styles["desktop-nav"]}>
          {navLinks.map((link, i) => (
            <NavItem
              key={link.href}
              href={link.href}
              text={link.text}
              i={i}
              className="text-base"
            />
          ))}
          <ThemeToggleButton />
        </ul>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed right-0 top-0 z-40 flex h-screen w-full flex-col justify-start overflow-y-hidden bg-background"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 1, type: "spring", bounce: 0.25 }}
            >
              <div className="flex h-20 max-h-20 min-h-[60px] w-full items-center justify-between border-b pl-[22px] pr-1">
                <span className="text-base font-medium lowercase">Menu</span>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={styles.burger}
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <CrossIcon data-hide={!isOpen} />
                </button>
              </div>
              <div className="flex h-full flex-col items-start justify-between overflow-y-auto">
                <ul className="flex min-h-fit w-full flex-col items-start space-y-6 px-[22px] py-[58px]">
                  {navLinks.map((link, i) => (
                    <button key={link.href} onClick={() => setIsOpen(false)}>
                      <NavItem
                        key={link.href}
                        href={link.href}
                        text={link.text}
                        i={i}
                        className="text-xl"
                      />
                    </button>
                  ))}
                  <ThemeToggleButton />
                </ul>

                <div className="flex min-h-fit w-full flex-col space-y-8 px-[22px] py-10">
                  <span className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Hoover F. Rueda-Chacón. All rights reserved.
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main content */}
      <section id="dip" className="relative my-44" data-scroll-section>
        <div className="relative z-10 my-14 flex flex-col items-center justify-center">
          <h2 className="mt-3 mb-5 text-center text-4xl font-semibold tracking-tight xl:text-5xl ">
            Digital Image Processing
          </h2>
            <div className="mt-1 flex flex-row items-center justify-center gap-12 font-medium text-gray-300 drop-shadow-md max-w-7xl">
            <p className="text-lg flex-1">Digital Image Processing explores techniques for enhancing, analyzing, and manipulating digital images. Topics include image transformations, filtering, segmentation, and morphological operations, with applications in object detection, image recognition, and computer vision. Emphasis is placed on both theoretical understanding and practical implementation.</p>
            <img src="/subjects/dip2.webp" alt="dip" className="rounded-lg shadow-lg flex-1 max-w-2xl h-full object-cover" />
            </div>
          <h3 className="mt-10 mb-5 text-center text-2xl font-semibold tracking-tight xl:text-3xl">
            Contents
          </h3>

          <div className="w-full max-w-3xl space-y-6 px-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                Chapter 1: Introduction and Fundamentals
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600 dark:text-gray-400">
                <li>What is a digital image?</li>
                <li>Types of images and modalities: Spectral, depth, polarization, thermal, X-ray, computed tomography (CT), MRI, ultrasound, microscopy, space imagery, etc.</li>
                <li>Images as arrays and basic operations</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                Chapter 2: Digital Image Acquisition
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600 dark:text-gray-400">
                <li>Image Formation: Lenses, Refraction, Geometric Optics, and Ray Tracing </li>
                <li>Image Acquisition: Field of View (FoV), Depth of Field (DoF), Sensors, Resolution, Diffraction, and Aberrations </li>
                <li>The Exposure Triangle</li>
                <li>Visual Perception and the Human Visual System</li>
                <li>Color Images and Demosaicking</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                Chapter 3: Image Transformation and Filtering
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600 dark:text-gray-400">
                <li>WIP</li>
              </ul>
            </div>
          </div>

          <h3 className="mt-10 mb-5 text-center text-2xl font-semibold tracking-tight xl:text-3xl">
            Course Highlights
          </h3>
          <div className="mt-1 flex w-full max-w-7xl flex-wrap items-center justify-center gap-4 font-medium text-gray-300 drop-shadow-md">
            {termOptions.map((term) => {
              const isActive = selectedTerm === term;

              return (
                <button
                  key={term}
                  onClick={() => setSelectedTerm(term)}
                  className={cn(
                    "hover:brightness-120 group relative overflow-hidden rounded-md border border-b-4 px-8 py-4 text-lg font-medium outline-none duration-300 hover:border-b hover:border-t-4 active:opacity-75",
                    isActive
                      ? "border-green-950 bg-green-300 text-green-950 dark:border-green-300 dark:bg-green-800 dark:text-green-100"
                      : "border-green-900 bg-green-200 text-green-900 dark:border-green-400 dark:bg-green-950 dark:text-green-400 dark:hover:brightness-150",
                  )}
                >
                  <span className="absolute -top-[150%] left-0 inline-flex h-[5px] w-80 rounded-md bg-green-900 opacity-50 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] shadow-green-900 duration-500 group-hover:top-[150%] dark:bg-green-400 dark:shadow-green-400"></span>
                  {term}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTerm}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative mt-10 w-full max-w-6xl"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-400/20 via-white/10 to-green-400/20 blur-2xl" />
              <div className="relative rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-black/20 md:p-8">
                <div className="mb-6">
                  <h4 className="text-center text-2xl font-semibold text-gray-900 dark:text-gray-100 md:text-3xl">
                    {activeTerm.label}
                  </h4>
                  <p className="mt-2 text-center text-sm text-gray-700 dark:text-gray-300 md:text-base">
                    {activeTerm.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-10 xl:grid-cols-2 xl:gap-14">
                  {activeTerm.carousels.map((carousel) => (
                    <div key={carousel.title} className="mx-auto w-full max-w-[460px] space-y-3">
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {carousel.title}
                      </h5>
                      <Carousel
                        opts={{ align: "start", loop: true }}
                        className="w-full"
                      >
                        <CarouselContent>
                          {carousel.slides.map((slide) => (
                            <CarouselItem key={slide.title}>
                              <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/70 shadow-lg dark:border-white/10 dark:bg-black/40">
                                <img
                                  src={slide.image}
                                  alt={slide.title}
                                  className="h-48 w-full object-contain"
                                />
                                <div className="space-y-1 p-3">
                                  <h6 className="text-sm font-semibold text-gray-900 dark:text-gray-100 md:text-base">
                                    {slide.title}
                                  </h6>
                                  <p className="text-xs text-gray-700 dark:text-gray-300 md:text-sm">
                                    {slide.description}
                                  </p>
                                </div>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex" />
                        <CarouselNext className="hidden md:flex" />
                      </Carousel>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
        <Link href="/">
          <button className="hover:brightness-120 group fixed bottom-8 left-6 z-10 overflow-hidden rounded-md border border-b-4 border-green-900 bg-green-200 px-8 py-4 text-lg font-medium text-green-900 outline-none duration-300 hover:border-b hover:border-t-4 active:opacity-75 dark:border-green-400 dark:bg-green-950 dark:text-green-400 dark:hover:brightness-150">
            <span className="absolute -top-[150%] left-0 inline-flex h-[5px] w-80 rounded-md bg-green-400 opacity-50 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] shadow-green-400 duration-500 group-hover:top-[150%]"></span>
            ↩ Go Back
          </button>
        </Link>


      </section>

      <Footer />
    </>
  );
};

export default DIP;

function MenuIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute h-5 w-5 text-neutral-900 dark:text-neutral-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 2.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props: IconProps) {
  return (
    <svg
      className="absolute h-5 w-5 text-neutral-900 dark:text-neutral-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
