import { Logo } from "../logo/Logo";
import { Spacer } from "../spacer/Spacer";
import cn from "classnames";

type HeaderProps = {
  isPost?: boolean;
};

export function Header({ isPost = false }: HeaderProps) {
  return (
    <div
      className={cn("h-20 grid grid-cols-5 gap-4", {
        "sticky top-0 z-2": !isPost,
      })}
    >
      <div></div>
      <div className="flex items-center justify-center">
        <Logo />
      </div>
      <nav className="flex items-center justify-center">
        <ul className="flex flex-1 justify-around">
          <Li label="Latest" />
          <Li label="Posts" />
          <Li label="Tutorials" />
          <Li label="Resources" />
          <Li label="About" />
        </ul>
      </nav>
      <Spacer height="14" />
      <ul className="flex items-center justify-around">
        <Li label="Subscribe" />
        <Li label="Search" />
      </ul>
    </div>
  );
}

interface LiProps {
  label: string;
}

function Li({ label }: LiProps) {
  return <li className="font-sans font-semibold text-lg">{label}</li>;
}
