import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { rawBlogPosts, Post } from "@/components/data/blogData"; // Importa Post desde blogData
import { applyDefaultAuthor } from "@/components/ui/applyDefaultAuthor";
import ThemeToggleButton from "@/components/ui/ThemeToggleButton";
import styles from "@/styles/Container.module.css";
import Footer from "@/components/Footer";
import { parseISO, format } from 'date-fns';
import { es } from 'date-fns/locale'; 
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb } from 'lucide-react';
import { useRouter } from "next/router"; // Importamos useRouter para manejar la navegación



// Aplicamos los valores por defecto para authorName y authorPhoto
export const blogPosts = applyDefaultAuthor(rawBlogPosts);

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(blogPosts);
  /* const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [mediaUrl, setMediaUrl] = useState<string>("");
  const [mediaType, setMediaType] = useState<"image" | "video" | "">(""); */
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const navLinks = [
    { href: "/#home", text: "Home" },
    { href: "/#research", text: "Research" },
    { href: "/#teaching", text: "Teaching" },
    { href: "/#publications", text: "Publications" },
    { href: "/people", text: "People" },
    { href: "/blog", text: "Blog" },
  ];

  const router = useRouter();
  /* const addPost = () => {
    if (!description || !title) return;

    const date = new Date().toISOString();

    const newPost: Post = {
      id: posts.length + 1,
      description,
      mediaUrl: mediaUrl || undefined,
      mediaType: mediaType || undefined,
      date,
    };

    setPosts([newPost, ...posts]);
    setTitle("");
    setDescription("");
    setMediaUrl("");
    setMediaType("");
  }; */

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
    router: ReturnType<typeof useRouter>
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
        router.push(path).then(() => {
          if (hash) {
            // Asegúrate de que el hash esté en el DOM antes de hacer scroll
            setTimeout(() => {
              const section = document.querySelector(`#${hash}`);
              if (section) {
                const top = section.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                  top,
                  behavior: 'smooth',
                });
              }
            }, 300);
          }
        }).catch((err) => {
          console.error("Error during navigation", err); // Manejo del error
        });
      }
    }
  }

  function NavItem(props: NavProps) {
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
        <title>Blog</title>
        <meta name="description" content="People I have worked with" />
      </Head>
      <nav
        className={cn(
          styles.nav,
          isScrolled
            ? "bg-gradient-to-br from-background to-transparent shadow-md backdrop-blur transition"
            : "bg-transparent",
        )}
      >
      {/* Navbar */}
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

      {/* Blog content */}
      <section className="relative mx-auto my-32 max-w-2xl">
        <div className="relative z-10 my-14 flex flex-col items-center justify-center">
        <Lightbulb className="md:size-10" color="#00e298"/>
          <h2 className="mt-3 text-center text-4xl font-semibold tracking-tight xl:text-5xl">
            Thoughts and insights
          </h2>
        </div>

        {/* List of posts */}
        {posts.length === 0 ? (
          <p>No hay publicaciones aún.</p>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="mt-8 mx-10 md:mx-auto flex flex-col gap-2 rounded-md bg-white p-5 shadow-md duration-150 hover:scale-105 hover:duration-150 dark:bg-gray-800 dark:text-white"
            >
              {/* Header: Author's Photo and Name */}
              <div className="flex items-center justify-between ">
                <div className="flex items-center">
                  <img
                    src={post.authorPhoto} // URL de la foto del autor
                    alt={post.authorName}
                    className="mr-3 h-16 w-16 rounded-full" // Tamaño y estilo de la imagen
                  />
                  <p className="text-md font-semibold">{post.authorName}</p>
                </div>
                <p className="text-md">
                  {format(parseISO(post.date), "dd MMMM yyyy", { locale: es })}{" "}
                </p>
              </div>

              {/* Post Description */}
              <p className="mt-1 text-lg">{post.description}</p>

              {/* Media: Image or Video */}
              {post.mediaUrl &&
                (post.mediaType === "image" ? (
                  <img
                    src={post.mediaUrl}
                    alt="Publication"
                    className="mt-2 h-auto w-full rounded-md"
                  />
                ) : (
                  <video controls className="mt-2 h-auto w-full rounded-md">
                    <source src={post.mediaUrl} type="video/mp4" />
                    Tu navegador no soporta videos HTML5.
                  </video>
                ))}
            </div>
          ))
        )}

        {/* Botón para volver */}
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

export default Blog;
