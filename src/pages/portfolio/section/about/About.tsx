import { Title } from "components";
import { Profile } from "./piece";
import Skill from "./piece/Skill";

export default function About() {
  return (
    <section>
      <div className="basic-screen h-[100dvh] max-laptop:h-auto max-laptop:my-[200px] xy-center-f col-screen relative">
      <Title text="About Me"/>
      <Profile/>
      <Skill/>
      </div>
    </section>
  );
}
