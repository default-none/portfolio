import { Logo } from "..";

const NAV_LIST = ["Portfolio", "Plan", "Program"];

const gnb = NAV_LIST.map((list, index) => {
  return <li className="text-list mx-[10px]" key={index}><a href="">{list}</a></li>;
});

export default function Header() {
  return (
    <header className="w-[100%] bg-[#111111] fixed z-50">
      <div className="basic-screen flex-between-center">
        <Logo size="w-[30px]"></Logo>
        <ul className="flex">
          {gnb}
        </ul>
      </div>
    </header>
  );
}
