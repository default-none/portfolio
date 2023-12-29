import { Title } from "components";
import { ProjectWrap } from "./piece";

export default function Project() {
  return <section>
    <div className="basic-screen h-[100dvh] max-laptop:h-auto max-laptop:my-[200px] xy-center-f col-screen relative">
    <Title text="Project"/>
    <ProjectWrap/>
    </div>
  </section>;
}