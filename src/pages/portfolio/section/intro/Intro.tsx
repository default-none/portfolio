import { IntroLogo, MyMotto } from "./piece";

export default function Intro() {
  return (
    <section>
      <div className="basic-screen h-[100dvh] xy-center-f relative">
        <MyMotto text={[ "반갑습니다.", "저는", "꺼지지않는 불꽃입니다."]} />
        <IntroLogo/>
      </div>
    </section>
  );
}
