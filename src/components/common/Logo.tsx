type Props = {
  size: string;
}

export default function Logo({size}:Props) {
  return (
    <h1>
      <a href="./">
        <img className={`w-[${size}]`} src="/asset/image/logo.svg" alt="로고" />
      </a>
    </h1>
  );
}
