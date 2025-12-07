"use client";

import { Piece as PieceType, Square as ChessSquare } from "chess.js";
import { Piece } from "./Piece";
import { cn } from "@/lib/utils";

interface SquareProps {
  square: ChessSquare;
  piece: PieceType | null;
  isSelected: boolean;
  isPossibleMove: boolean;
  inCheck: boolean;
  onClick: () => void;
}

export function Square({
  square,
  piece,
  isSelected,
  isPossibleMove,
  inCheck,
  onClick,
}: SquareProps) {
  const fileIndex = square.charCodeAt(0) - 97;
  const rankIndex = parseInt(square[1], 10);
  const isLightSquare = (fileIndex + rankIndex) % 2 === 0;
  const backgroundClass = inCheck
    ? "bg-destructive/40"
    : isSelected
      ? "bg-accent/40"
      : isLightSquare
        ? "bg-muted/30"
        : "bg-muted/70";

  return (
    <div
      onClick={onClick}
      className={cn(
        "w-[12.5%] aspect-square flex items-center justify-center relative transition-colors",
        backgroundClass
      )}
    >
      {piece && <Piece piece={piece} />}
      {isPossibleMove && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={cn(
              "rounded-full",
              piece ? "w-full h-full border-4 border-accent/50" : "w-1/3 h-1/3 bg-accent/50"
            )}
          ></div>
        </div>
      )}
    </div>
  );
}
