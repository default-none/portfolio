import { HISTORY, PROFILE_DATA } from "./profileData";

const profileDetail = Object.entries(PROFILE_DATA).map(([key, value]) => (
  <li className="text-main w-[100%] flex-to-center mb-[10px]" key={key}>
    <span className="w-[35%] text-end">{key}</span>
    <span className="w-[65%] text-start">{value}</span>
  </li>
));
const history = HISTORY.map((event) => {
  return <li className="text-memo w-[calc(50%-20px)] mobile_b:max-laptop:w-[100%] max-mobile_b:w-[calc(100%/4-20px)] max-mobile_b:write-vertical" key={event.id}>- {event.content} <b>[{event.date}]</b></li>;
});

export default function Profile() {
  return (
    <div>
      <div className="flex-to-center mb-[50px]">
        <img
          className="w-[210px] h-[280px]"
          src="/asset/image/profile.jpg"
          alt="박진수_증명사진"
        />
        <ul className="w-[360px]">{profileDetail}</ul>
      </div>
      <ul className="flex justify-center flex-wrap mobile_b:max-laptop:flex-col gap-[10px]">{history}</ul>
    </div>
  );
}
