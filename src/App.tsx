import "./index.css";
import { BriefCaseIcon } from "./components/BriefeCaseIcon";
import { GlobeIcon } from "./components/GlobeIcon";
import { MediumIcon } from "./components/MediumIcon";
import Microlink from "@microlink/react";
import { WorkExperienceItem } from "./components/WorkExperienceItem";
import { ProjectCard } from "./components/ProjectCard";
import { useRef } from "react";
import { blog, project, workExperience } from "./utils/content";
import { MailIcon } from "./components/MailIcon";
import { LinkedinIcon } from "./components/LinkedinIcon";
import { GithubIcon } from "./components/GithubIcon";

function App() {
  const aboutRef = useRef<HTMLElement | null>(null);
  const projectRef = useRef<HTMLElement | null>(null);
  const blogRef = useRef<HTMLElement | null>(null);

  const year = new Date().getFullYear();
  return (
    <div>
      <header className="sticky top-0 z-50">
        <div className="navbar bg-base-100 shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a
                    className="font-poppins text-lg font-semibold"
                    onClick={() => {
                      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="font-poppins text-lg font-semibold"
                    onClick={() => {
                      projectRef.current?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    Project
                  </a>
                </li>
                <li>
                  <a
                    className="font-poppins text-lg font-semibold"
                    onClick={() => {
                      blogRef.current?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-8">
              <li>
                <a
                  className="font-poppins text-lg font-semibold"
                  onClick={() => {
                    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="font-poppins text-lg font-semibold"
                  onClick={() => {
                    projectRef.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  className="font-poppins text-lg font-semibold"
                  onClick={() => {
                    blogRef.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-end"></div>
        </div>
      </header>
      <main className="flex relative size-full">
        <aside className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
          <div className="hidden lg:flex flex-col items-center justify-center w-16 h-64 bg-white shadow-md border border-gray-100 rounded-full gap-3">
            <a href="mailto:derangga1011@gmail.com">
              <div className="p-2 rounded-lg hover:bg-gray-200">
                <MailIcon />
              </div>
            </a>
            <div
              className="p-2 rounded-lg hover:bg-gray-200 hover:cursor-pointer"
              onClick={() => {
                window.open("https://www.linkedin.com/in/derangga/");
              }}
            >
              <LinkedinIcon />
            </div>
            <div
              className="p-2 rounded-lg hover:bg-gray-200 hover:cursor-pointer"
              onClick={() => {
                window.open("https://github.com/derangga");
              }}
            >
              <GithubIcon />
            </div>
          </div>
        </aside>
        <aside className="fixed left-1/2 bottom-4 -translate-x-1/2 z-50">
          <div className="flex lg:hidden items-center justify-center h-16 w-64 bg-white shadow-md border border-gray-100 rounded-full gap-3">
            <a href="mailto:derangga1011@gmail.com">
              <div className="p-2 rounded-lg hover:bg-gray-200">
                <MailIcon />
              </div>
            </a>
            <div
              className="p-2 rounded-lg hover:bg-gray-200 hover:cursor-pointer"
              onClick={() => {
                window.open("https://www.linkedin.com/in/derangga/");
              }}
            >
              <LinkedinIcon />
            </div>
            <div
              className="p-2 rounded-lg hover:bg-gray-200 hover:cursor-pointer"
              onClick={() => {
                window.open("https://github.com/derangga");
              }}
            >
              <GithubIcon />
            </div>
          </div>
        </aside>
        <div className="flex flex-col overflow-scroll">
          <section className="w-screen bg-slate-50" id="about" ref={aboutRef}>
            <div className="min-h-[30rem] max-w-3xl lg:max-w-2/3 grid grid-cols-2 sm:grid-cols-3 mx-auto lg:gap-12">
              <div className="sm:col-span-2 flex flex-col h-full justify-center w-full px-6 py-2 lg:px-0 lg:py-0">
                <h2 className="text-3xl font-poppins dark:text-black">
                  {"I'm"} <strong>Fullstack Engineer</strong>
                </h2>
                <h2 className="text-4xl font-poppins font-semibold dark:text-black">
                  Dimas Rangga
                </h2>
                <p className="sm:text-xl font-poppins mt-4 dark:text-black">
                  A Software Engineer with over 4 years of expertise in
                  designing and building applications used by more than 800,000
                  users. My primary focus has been on delivering
                  high-performance, user-friendly mobile and desktop solutions
                  that meet both user needs and business objectives.
                </p>
              </div>
              <div className="flex w-full justify-end">
                <div className="relative w-56 h-full overflow-hidden">
                  <img
                    src={"/assets/profile-0-bg.png"}
                    alt="profile"
                    className="object-[40%_50%] sm:object-bottom object-cover size-full"
                  />
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="flex flex-col max-w-3xl lg:max-w-2/3 mx-auto py-8 px-4 lg:px-0">
              <div className="flex flex-row items-center gap-6">
                <BriefCaseIcon />
                <h2 className="text-3xl font-poppins font-semibold">
                  Work Experience
                </h2>
              </div>
              <div className="h-0.5 w-full bg-slate-200 rounded-full my-6" />
              <div className="flex flex-col gap-3">
                {workExperience.map((e, idx) => (
                  <WorkExperienceItem {...e} key={idx + 1} />
                ))}
              </div>
            </div>
          </section>
          <section className="w-screen bg-sky-50" id="project" ref={projectRef}>
            <div className="flex flex-col max-w-3xl lg:max-w-2/3 mx-auto py-8 px-4 lg:px-0">
              <div className="flex flex-row items-center gap-6">
                <GlobeIcon />
                <h2 className="text-3xl font-poppins font-semibold text-slate-600">
                  Project Experience
                </h2>
              </div>
              <div className="h-0.5 w-full rounded-full my-6 bg-slate-600" />
              <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-6">
                {project.map((e, idx) => (
                  <ProjectCard key={idx + 1} {...e} />
                ))}
              </div>
            </div>
          </section>
          <section className="w-screen bg-stone-50" id="blog" ref={blogRef}>
            <div className="flex flex-col max-w-3xl lg:max-w-2/3 mx-auto py-8 px-4 lg:px-0">
              <div className="flex flex-row items-center gap-6">
                <MediumIcon />
                <h2 className="text-3xl font-poppins font-semibold">Blog</h2>
                <div className="grow"></div>
                <div
                  className="font-poppins font-semibold py-1 px-2 hover:cursor-pointer"
                  onClick={() => {
                    window.open("https://medium.com/@derangga");
                  }}
                >
                  Open Medium
                </div>
              </div>
              <div className="h-0.5 w-full bg-black rounded-full my-6" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {blog.map((e, idx) => (
                  <Microlink url={e} key={idx + 1} className="rounded-xl" />
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-slate-700 w-screen">
        <div className="max-w-3xl lg:max-w-2/3 mx-auto py-24 lg:py-8 px-4 text-white font-poppins">
          Copyright © {year} Dimas Rangga
        </div>
      </footer>
    </div>
  );
}

export default App;
