import { SubTitle } from "components";
import { SKILL_DATA } from "./skillData";

const skillContent = SKILL_DATA.map((skill) => {
  return (
    <div
      className="w-[calc(100%/6-50px)] max-laptop:w-[25%] flex items-center gap-[10px]"
      key={skill.id}
    >
      <img className="w-[50px]" src={skill.link} alt={skill.name} />
      <h4 className="text-memo">{skill.name}</h4>
    </div>
  );
});

export default function Skill() {
  return (
    <div>
      <SubTitle text="Skill" />
      <div className="mt-[50px] flex-between-center gap-[50px] flex-wrap">
        {skillContent}
      </div>
    </div>
  );
}
