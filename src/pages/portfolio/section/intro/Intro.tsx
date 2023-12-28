import { IntroLogo, TypingText } from "./piece";

export default function Intro() {
  return (
    <section>
      <div className="basic-screen h-[100dvh] xy-center-f relative">
        <TypingText text={["박진수's Portfolio"]} />
        <IntroLogo/>
      </div>
    </section>
  );
}
