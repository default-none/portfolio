type Props = {
    text: string;
  };
  
  export default function SubTitle({ text }: Props) {
    return <h2 className="text-subtitle">{text}</h2>;
  }
  