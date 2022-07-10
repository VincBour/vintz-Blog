import cn from "classnames";

interface WrapperProps {
  children: React.ReactNode;
  height: "h-400" | "min-h-min z-3";
  isPost?: boolean;
}

export function Wrapper({ children, height = "h-400", isPost }: WrapperProps) {
  return (
    <div
      className={cn(`${height} bg-mikadoYellow`, {
        "sticky z-2 top-0": isPost,
      })}
    >
      {children}
    </div>
  );
}
