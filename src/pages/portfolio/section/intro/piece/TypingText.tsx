import { useTyping } from "hooks/useTyping";

type Props = {
  text: string[];
}

export default function TypingText({text}: Props) {
  const { typingText } = useTyping(text);
  return <h2 className="text-intro-title blinking-cursor ">{typingText}</h2>;
}
