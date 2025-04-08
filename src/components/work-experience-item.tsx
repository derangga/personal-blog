import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";

export interface WorkExperienceProps {
  companyLogo?: string;
  companyUrl?: string;
  logoScale?: string;
  company: string;
  companyTextColor?: string;
  role: string;
  startDate: string;
  endDate: string;
  companyDescription: string;
  archievement: string[];
}

export const WorkExperienceItem = (props: WorkExperienceProps) => {
  const fontCompanyColor = props.companyTextColor || "";
  const scale = props.logoScale || "scale-50";
  return (
    <Card className="font-jersey bg-secondary-background">
      <CardHeader>
        <div className="flex flex-row gap-4 items-center">
          <div className="size-16 flex justify-center items-center rounded-xl bg-slate-100 overflow-hidden">
            {props.companyLogo ? (
              <Image
                src={props.companyLogo}
                width={64}
                height={64}
                style={{ objectFit: "contain" }}
                alt={props.company}
                className={scale}
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 dark:text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                />
              </svg>
            )}
          </div>
          <div className="flex flex-col grow justify-center">
            <a
              href={props.companyUrl}
              className={`text-4xl ${fontCompanyColor}`}
            >
              {props.company}
            </a>
            <div className="text-3xl">{props.role}</div>
          </div>
          <div className="hidden sm:block text-xl italic text-slate-500 dark:text-white">
            {props.startDate} - {props.endDate}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-2xl">{props.companyDescription}</p>
        <ul className="list-disc pl-4 text-xl">
          {props.archievement.map((e, idx) => (
            <li key={idx + 1}>{e}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
