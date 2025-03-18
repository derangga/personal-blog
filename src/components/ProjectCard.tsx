export interface ProjectCardProps {
  name: string;
  image: string;
  description: string;
  onclick: () => void;
}
export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div
      className="card card-sm bg-base-100 w-full shadow-sm hover:scale-105 hover:cursor-pointer transition-all"
      onClick={props.onclick}
    >
      <figure>
        <img src={props.image} alt={props.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
