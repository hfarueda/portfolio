import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router"; // Importamos useRouter para manejar la navegación
import Head from "next/head";
import peopleData from "@/components/data/peopleData";
import { motion, useAnimation } from "framer-motion";
import Footer from "@/components/Footer";
import ThemeToggleButton from "@/components/ui/ThemeToggleButton";
import styles from "@/styles/Container.module.css";
import { cn } from "@/lib/utils";
import { UsersRound } from "lucide-react";

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

const People: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sortedPeopleData = useMemo(() => {
    const gradeOrder: Record<string, number> = {
      PhD: 1,
      MSc: 2,
      Undergraduate: 3,
    };

    return peopleData.sort((a, b) => {
      const aGrade = gradeOrder[a.grade] ?? 4;
      const bGrade = gradeOrder[b.grade] ?? 4;

      return aGrade - bGrade;
    });
  }, [peopleData]);

  return (
    <>
      <Head>
        <title>People</title>
        <meta name="description" content="People I have worked with" />
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
          <button className="inline-flex transform items-center justify-center rounded-md p-2 transition-all duration-300 focus:outline-none">
            <span className="sr-only">Open main menu</span>
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
      </nav>

      {/* Main content */}
      <section id="people" className="relative my-44" data-scroll-section>
        <div className="relative z-10 my-14 flex flex-col items-center justify-center">
          <UsersRound className="md:size-10" color="#00e298" />
          <h2 className="mt-3 text-center text-4xl font-semibold tracking-tight xl:text-5xl">
            People I have worked with
          </h2>

          {/* People Profiles */}
          <div className="m-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {sortedPeopleData.map((person, index) => (
              <Link key={index} href={person.link} target="_blank" passHref>
                <div className="group relative flex max-w-lg flex-col items-center overflow-hidden rounded-xl bg-gray-50 p-8 text-center shadow-lg shadow-gray-400 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500 dark:bg-gray-800 dark:shadow-gray-500 dark:hover:shadow-emerald-500">
                  {/* Avatar */}
                  <div className="text-gray-500 transition-all dark:text-gray-50">
                    <img
                      src={person.logo}
                      alt={person.name}
                      className="mb-4 h-36 w-36 rounded-full object-cover"
                    />
                  </div>

                  {/* Name and Grade */}
                  <div className="transition-all duration-500">
                    <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-50">
                      {person.name}
                    </h1>
                    <p className="text-base text-gray-600 dark:text-gray-400">
                      {person.grade}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
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

export default People;
