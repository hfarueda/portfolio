import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { publicationsData } from "./data/publicationsData";
import { Files } from "lucide-react";

interface Publication {
  title: string;
  authors: string;
  conference: string;
  location: string;
  image: string;
  links: { type: string; url: string }[];
}

const PublicationCard: React.FC<{ publication: Publication }> = ({
  publication,
}) => {
  const filteredLinks = publication.links.filter(
    (link) => link.type !== "Project Page",
  );

  return (
    <div className="group relative flex w-full flex-col rounded-lg bg-white p-4 duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary dark:bg-gray-800 sm:w-96">
      <div
        className="absolute -bottom-4 -right-4 rounded-lg bg-gray-200 shadow-md duration-700 group-hover:-translate-x-2 group-hover:-translate-y-1 dark:bg-gray-700 md:-bottom-4 md:-right-2 md:h-24 md:w-32 md:group-hover:-translate-x-4 md:group-hover:-translate-y-2 sm:block hidden"
        style={{
          backgroundImage: `url(${publication.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div>
        <h2 className="mb-2 text-justify text-lg font-bold text-gray-800 dark:text-gray-200">
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
      <div className="mt-16 flex w-44 flex-col items-start space-y-2 text-center">
        <div className="absolute bottom-4 left-4 flex space-x-4">
          {filteredLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              download={link.type === "BibTeX" ? true : undefined}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded bg-gray-200 p-4 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
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

function Gradient() {
  return (
    <>
      {/* Left gradient */}
      <div className="absolute inset-0 left-0 top-1/2 z-0 -translate-y-1/2 transform-gpu overflow-hidden blur-3xl sm:left-0 pointer-events-none">
        <svg
          className="relative h-[21.1875rem] max-w-none -translate-x-[40%] rotate-[60deg] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#newLeftGradient)"
            fillOpacity=".3"
            d="M500 550L300 700 50 400l300 100 220-300c10 130 60 350 220 150C950 150 900-50 1050 60c120 110 140 310 130 390L850 320l20 370-570-150z"
          />
          <defs>
            <linearGradient
              id="newLeftGradient"
              x1="1200"
              x2="-100"
              y1="0"
              y2="500"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#14b8a6" />
              <stop offset={1} stopColor="#6ee7b7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Right gradient */}
      <div className="absolute inset-0 right-0 top-1/2 z-0 -translate-y-1/2 transform-gpu overflow-hidden blur-3xl sm:right-0 pointer-events-none">
        <svg
          className="relative h-[21.1875rem] max-w-none translate-x-[40%] rotate-[-60deg] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#newRightGradient)"
            fillOpacity=".3"
            d="M500 550L300 700 50 400l300 100 220-300c10 130 60 350 220 150C950 150 900-50 1050 60c120 110 140 310 130 390L850 320l20 370-570-150z"
          />
          <defs>
            <linearGradient
              id="newRightGradient"
              x1="1200"
              x2="-100"
              y1="2200"
              y2="500"
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

const PublicationsSection: React.FC = () => {
  const flattenedPublications = publicationsData.slice(0, 6);
  return (
    <section id="publications" className="relative my-44" data-scroll-section>
      <Gradient />
       
      <div
        data-scroll
        data-scroll-speed=".1"
        data-scroll-position="top"
        className="relative z-10 my-14 flex flex-col items-center justify-center"
      >
        <Files className="md:size-10" color="#00e298" />

        <h2 className="mt-3 text-center text-4xl font-semibold tracking-tight xl:text-5xl">
          Recent Publications
        </h2>

        {/* Grid de publicaciones */}
        <div className="mt-10 grid grid-cols-1 gap-28 sm:grid-cols-2 lg:grid-cols-3">
          {flattenedPublications.map((publication, index) => (
            <PublicationCard key={index} publication={publication} />
          ))}
        </div>

        {/* Botón "Ver más publicaciones" con los nuevos estilos */}
        <div className="mt-40">
          <Link href="/publications">
            <button className="hover:brightness-120 group relative overflow-hidden rounded-md border border-b-4 border-green-900 bg-green-200 px-8 py-4 text-lg font-medium text-green-900 outline-none duration-300 hover:border-b hover:border-t-4 active:opacity-75 dark:border-green-400 dark:bg-green-950 dark:text-green-400 dark:hover:brightness-150">
              <span className="absolute -top-[150%] left-0 inline-flex h-[5px] w-80 rounded-md bg-green-900 opacity-50 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] shadow-green-900 duration-500 group-hover:top-[150%] dark:bg-green-400 dark:shadow-green-400"></span>
              See more publications
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
