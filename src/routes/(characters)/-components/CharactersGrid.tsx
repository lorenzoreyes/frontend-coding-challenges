import { useState } from "react";

import { Spinner } from "@lib/components/Spinner";
import { Button } from "@lib/components/Button";

import { CharacterCard } from "./CharacterCard";
import { useCharacters } from "../-hooks/useCharacters";

type CharacterFilter = "all" | "students" | "staff" | "favorites";

export const CharactersGrid = () => {
  const { characters, isLoading, isError } = useCharacters();

  const [characterFilter, setCharacterFilter] =
    useState<CharacterFilter>("all");

  const filteredCharacters = characters.filter((character) => {
    if (characterFilter === "students") {
      return character.hogwartsStudent;
    }

    if (characterFilter === "staff") {
      return character.hogwartsStaff;
    }

    if (characterFilter === "favorites") {
      const favorites = JSON.parse(
        localStorage.getItem("favorites") || "[]"
      );

      return favorites.includes(character.id);
    }

    return true;
  });

  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center gap-4 py-20 text-center">
        <p className="text-lg text-amber-200/60">
          Something went wrong while fetching characters.
        </p>

        <p className="text-sm text-amber-200/30">
          Please try again later.
        </p>
      </div>
    );
  }

  if (filteredCharacters.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 py-20 text-center">
        <p className="text-lg text-amber-200/60">
          No characters found.
        </p>

        <p className="text-sm text-amber-200/30">
          Try adjusting your filters or search query.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-center gap-3">
        <Button onClick={() => setCharacterFilter("all")}>
          All
        </Button>

        <Button onClick={() => setCharacterFilter("students")}>
          Students
        </Button>

        <Button onClick={() => setCharacterFilter("staff")}>
          Staff
        </Button>

        <Button onClick={() => setCharacterFilter("favorites")}>
          Favorites
        </Button>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filteredCharacters.map((character) => (
          <CharacterCard
            key={character.id}
            character={{
              ...character,
              image:
                character.image ||
                `/houses/${character.house || "Gryffindor"}.png`,
            }}
            className="transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          />
        ))}
      </div>
    </div>
  );
};