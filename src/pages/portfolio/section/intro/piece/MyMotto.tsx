import { useTyping } from "hooks/useTyping";

type Props = {
  text: string[];
}

export default function MyMotto({text}: Props) {
  const { typingText } = useTyping(text);
  return <h2 className="text-white-7xl">{typingText}</h2>;
}
