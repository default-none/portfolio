import { PROJECT_DATA } from "./projectData";

const content = PROJECT_DATA.map((project, index) => {
  const tools = project.tool.map((tool, index) => {
    return (
      <span key={index} className="flex w-[calc(50%-20px)] gap-[5px]">
        <img
          className="w-[20px]"
          src={
            tool === "CSS3"
              ? "/asset/image/icon/css3.svg"
              : tool === "JavaScript"
              ? "/asset/image/icon/javascript.svg"
              : tool === "NextJS"
              ? "/asset/image/icon/nextdotjs.svg"
              : tool === "ReactJs"
              ? "/asset/image/icon/react.svg"
              : tool === "Redux"
              ? "/asset/image/icon/redux.svg"
              : tool === "Sass"
              ? "/asset/image/icon/sass.svg"
              : tool === "Tailwind"
              ? "/asset/image/icon/tailwindcss.svg"
              : tool === "ThreeJs"
              ? "/asset/image/icon/threedotjs.svg"
              : tool === "TypeScript"
              ? "/asset/image/icon/typescript.svg"
              : "/"
          }
          alt="tool"
        />
        {tool}
      </span>
    );
  });
  return (
    <div key={index} className="rounded-[10px] overflow-hidden border-pack">
      <div className="w-[100%] h-[180px] bg-white">
        <img className="m-auto" src={project.image} alt={project.title} />
      </div>
      <h3 className="text-subtitle text-center mt-[10px]">{project.title}</h3>
      <ul className="text-memo p-[10px] flex flex-col gap-[10px]">
        <li className="text-center border-y p-[10px]">{project.outline}</li>
        <li>
          사용된 도구{" "}
          <div className="grid grid-cols-2 gap-[10px]">{tools} </div>
        </li>
        <li>인원 : {project.number}</li>
        <li className="max-desktop:hidden">{project.class}</li>
        <li>기여도 : {project.share}</li>
      </ul>
      <span>{project.link}</span>
    </div>
  );
});

export default function ProjectWrap() {
  return (
    <div className=" laptop:w-[100%] grid gap-[50px] grid-cols-4 max-laptop:grid-cols-2 max-mobile_b:grid-cols-1 gap-y-[100px]">
      {content}
    </div>
  );
}
