import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { publicationsData } from "@/components/data/publicationsData";
import { useRouter } from "next/router";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import ThemeToggleButton from "@/components/ui/ThemeToggleButton";
import styles from "@/styles/Container.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";
import { Files } from "lucide-react";

type IconProps = {
  ["data-hide"]: boolean;
};

interface Publication {
  title: string;
  authors: string;
  conference: string;
  location: string;
  image: string;
  links: { type: string; url: string }[];
}

const navLinks = [
  { href: "/#home", text: "Home" },
  { href: "/#research", text: "Research" },
  { href: "/#teaching", text: "Teaching" },
  { href: "/#publications", text: "Publications" },
  { href: "/people", text: "People" },
  { href: "/blog", text: "Blog" },
];

// Manejo del scroll al hacer clic en un enlace
function handleClick(
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  router: ReturnType<typeof useRouter>,
) {
  e.preventDefault();
  const href = e.currentTarget.getAttribute("href");

  if (href) {
    const [path, hash] = href.split("#");

    if (path && path === router.pathname) {
      const section = document.querySelector(`#${hash}`);
      if (section) {
        const top = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    } else if (path) {
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
          console.error("Error during navigation", error);
        });
    }
  }
}

type NavProps = {
  text: string;
  href: string;
  i: number;
  className?: string;
};

// Variantes de animación para framer-motion
const variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.12,
    },
  }),
  hidden: { opacity: 0 },
};

// Componente NavItem para manejar los enlaces de navegación
function NavItem(props: NavProps) {
  const router = useRouter();

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
        onClick={(e) => handleClick(e, router)}
        className={cn(props.i === 0 && "nav-active", "nav-link")}
      >
        {props.text}
      </a>
    </motion.li>
  );
}

// Componente de tarjeta de publicación
const PublicationCard: React.FC<{ publication: Publication }> = ({
  publication,
}) => {
  const filteredLinks = publication.links.filter(
    (link) => link.type !== "Project Page",
  );

  return (
    <div className="group relative flex w-full flex-col items-center rounded-lg bg-white p-6 transition duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary dark:bg-gray-800 md:max-w-6xl md:flex-row">
      <div
        className="h-48 w-48 flex-shrink-0 rounded-lg bg-gray-200 shadow-md dark:bg-gray-700 md:h-64 md:w-64"
        style={{
          backgroundImage: `url(${publication.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="mt-6 flex w-full flex-col justify-between md:ml-8 md:mt-0">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-800 dark:text-gray-200">
            {publication.title}
          </h2>
          <p className="mb-1 text-sm text-gray-700 dark:text-gray-100">
            {publication.authors}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-50">
            {publication.conference}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            {publication.location}
          </p>
        </div>

        <div className="mt-4 flex space-x-4">
          {filteredLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              download={link.type === "BibTeX" ? true : undefined}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded bg-gray-200 p-2 text-gray-800 transition hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
            >
              {link.type === "PDF" && (
                <FontAwesomeIcon icon={faFilePdf} className="mr-2" />
              )}
              {link.type === "BibTeX" && (
                <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
              )}
              {link.type}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

// Componente principal de la página de publicaciones
const PublicationsPage: React.FC = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const controls = useAnimation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Publications</title>
        <meta name="description" content="All publications of Hoover" />
      </Head>
      {/* Navbar */}
      <nav
        className={cn(
          styles.nav,
          isScrolled
            ? "bg-gradient-to-br from-background to-transparent shadow-md backdrop-blur transition"
            : "bg-transparent",
        )}
      >
        <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mr-6 inline-flex transform items-center justify-center rounded-md p-2 transition-all duration-300 focus:outline-none"
          >
            {isOpen ? (
              <CrossIcon data-hide={!isOpen} />
            ) : (
              <MenuIcon data-hide={isOpen} />
            )}
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
                    © {new Date().getFullYear()} Hoover F. Rueda-Chacón. All
                    rights reserved.
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main content */}
      <section className="relative my-44" data-scroll-section>
        <div className="relative z-10 my-14 flex flex-col items-center justify-center">
          <Files className="md:size-10" color="#00e298" />

          <h2 className="mt-3 text-center text-4xl font-semibold tracking-tight xl:text-5xl">
            All Publications
          </h2>

          {/* Grid de publicaciones */}
          <div className="mx-10 mt-10 grid grid-cols-1 gap-6 md:mx-auto ">
            {publicationsData.map((publication, index) => (
              <PublicationCard key={index} publication={publication} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-gradient-to-r p-2">
          <div className="w-full max-w-md rounded-lg bg-slate-700 p-6 text-center shadow-lg sm:p-8 dark:bg-gray-100">
            <h1 className="text-2xl font-bold text-gray-50 sm:text-3xl dark:text-gray-900">
              🚧 Under Construction 🚧
            </h1>
          </div>
        </div>

        <Link href="/#publications">
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

export default PublicationsPage;

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
