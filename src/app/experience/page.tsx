import WorkExperience from "@/components/work-experience";

export default function Page() {
  return (
    <div className="flex flex-col px-8 py-6 font-jersey bg-background bg-[15px_20px] bg-[linear-gradient(to_right,#8080804D_1px,transparent_1px),linear-gradient(to_bottom,#80808090_1px,transparent_1px)] shadow-shadow [background-size:70px_70px]">
      <h1 className="text-6xl">Working Experience 🛠️</h1>
      <div className="text-2xl">
        This is my journey as Software Engineer throughout the years
      </div>
      <div className="mt-4">
        <WorkExperience />
      </div>
    </div>
  );
}
