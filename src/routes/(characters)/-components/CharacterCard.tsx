import { Link } from "@tanstack/react-router";
import { slugify } from "@lib/utils/slugify";

import { cn } from "@lib/utils";
import { Character } from "@lib/constants/characters";

type CharacterCardProps = {
  character: Character;
  className?: string;
};

export const CharacterCard = ({
  character,
  className,
}: CharacterCardProps) => {
  return (
    <Link
      to="/$characterName"
      params={{
        characterName: slugify(character.name),
      }}
    >
      <article
        className={cn(
          "relative isolate flex h-87.5 flex-col justify-end overflow-hidden rounded-2xl px-3 py-6 shadow-md shadow-zinc-950 transition-transform hover:scale-105",
          className
        )}
      >
        <img
          src={
            character.image ||
            `/houses/${character.house || "Gryffindor"}.png`
          }
          alt={character.name}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-stone-900/20" />

        <h3 className="z-10 font-light tracking-wide">
          {character.name}
        </h3>
      </article>
    </Link>
  );
};