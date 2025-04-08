import Avatar from "@/components/avatar";
import { GithubIcon } from "@/components/icons/github-icon";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import AnimatedName from "@/components/sections/animated-name";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="size-full flex justify-center items-center py-12 px-6 lg:px-0 lg:py-0 bg-background bg-[15px_20px] bg-[linear-gradient(to_right,#8080804D_1px,transparent_1px),linear-gradient(to_bottom,#80808090_1px,transparent_1px)] shadow-shadow [background-size:70px_70px]">
      <Card className="lg:w-[800px] p-4 md:p-8 bg-secondary-background">
        <CardContent className="p-0">
          <div className="flex flex-col justify-center gap-10 lg:flex-row lg:justify-between">
            <div className="order-last lg:order-1 lg:w-[500px]">
              <div className="mb-6 flex flex-col gap-y-2 text-center lg:text-start font-jersey">
                <AnimatedName />
                <h1 className="text-4xl sm:text-6xl">
                  {"I'm Dimas Rangga "}
                  <span className="animate-wave origin-[70%_70%] inline-block">
                    👋🏻
                  </span>
                </h1>
                <h2 className="text-4xl font-medium">Full Stack Engineer</h2>
                <p className="text-2xl">
                  A Software Engineer with over 4 years of expertise in
                  designing and building applications used by more than 800,000
                  users. My primary focus has been on delivering
                  high-performance, user-friendly mobile and desktop solutions
                  that meet both user needs and business objectives.
                </p>
              </div>
              <div className="mt-10 flex justify-center space-x-5 lg:justify-start">
                <a href="mailto:derangga1011@gmail.com" target="_blank">
                  <Mail className="opacity-60 hover:opacity-100" />
                </a>
                <a href="https://github.com/derangga" target="_blank">
                  <GithubIcon className="opacity-60 hover:opacity-100" />
                </a>
                <a href="https://www.linkedin.com/in/derangga/" target="_blank">
                  <LinkedinIcon className="opacity-60 hover:opacity-100" />
                </a>
              </div>
            </div>
            <div className="relative order-1 mx-auto lg:order-last">
              <Avatar />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
