import { Logo } from "..";

const NAV_LIST = ["Portfolio", "Plan", "Program"];

const gnb = NAV_LIST.map((list, index) => {
  return <li className="text-list text-white mx-[10px]" key={index}><a href="">{list}</a></li>;
});

export default function Header() {
  return (
    <header className="w-[100%] bg-[#111111] fixed">
      <div className="basic-screen flex-between-center">
        <Logo size="30px"></Logo>
        <ul className="flex">
          {gnb}
        </ul>
      </div>
    </header>
  );
}
