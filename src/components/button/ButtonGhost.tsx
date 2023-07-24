import React from "react";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";
import { cn } from "@/lib/utils";

export interface ButtonGhostProps extends ButtonBaseProps {
  color?: "multiplayer" | "singleplayer" | "settings";
}

export default function ButtonGhost({
  className,
  children,
  color = "multiplayer",
  ...other
}: ButtonGhostProps) {
  return (
    <ButtonBase
      {...other}
      className={cn(
        color === "multiplayer" && "text-multiplayer-mid",
        color === "singleplayer" && "text-single-player-mid",
        color === "settings" && "text-settings-mid",
        "outline-0 hover:outline-0 border-none outline-offset-0 shadow-none hover:shadow-md",
        className
      )}
    >
      {children}
    </ButtonBase>
  );
}
