import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

export interface ProjectProps {
  name: string;
  image: string;
  description: string;
  stack: string[];
  onclick: () => void;
}

const ProjectItem = (props: ProjectProps) => {
  return (
    <Card className="font-jersey bg-secondary-background gap-3 hover:scale-105 transform transition-transform">
      <CardHeader>
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src={props.image}
            alt={props.name}
            className="w-full object-cover transition-transform group-hover:scale-110"
            width={600} // Add width and height attributes
            height={400}
          />
        </div>
        <h2 className="text-3xl">{props.name}</h2>
      </CardHeader>
      <CardContent>
        <div className="text-2xl">{props.description}</div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap gap-2 mb-4">
          {props.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-yellow-300 dark:text-black"
              style={{
                border: "2px solid black",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectItem;
