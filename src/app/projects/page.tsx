import Project from "@/components/project";

export default function Page() {
  return (
    <div className="flex flex-col px-8 py-8 font-jersey bg-background bg-[15px_20px] bg-[linear-gradient(to_right,#8080804D_1px,transparent_1px),linear-gradient(to_bottom,#80808090_1px,transparent_1px)] shadow-shadow [background-size:70px_70px]">
      <h1 className="font-jersey text-5xl lg:text-6xl">
        {"Project That I've Been Worked On ✨"}
      </h1>
      <div className="py-6" />
      <Project />
    </div>
  );
}
