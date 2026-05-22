import { Character } from "@lib/constants/characters";

const API_URL = import.meta.env.VITE_HARRY_POTTER_API_URL;

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");

export const fetchCharacter = async (
  characterName: string
): Promise<Character | null> => {
  const response = await fetch(`${API_URL}/characters`);

  if (!response.ok) {
    throw new Error("Failed to fetch characters");
  }

  const data: Character[] = await response.json();

  console.log("TOTAL CHARACTERS FROM API:", data.length);

  const character =
    data.find(
      (item) => slugify(item.name) === characterName
    ) || null;

  return character;
};

export type CharacterScope = "all" | "students" | "staff";

export const fetchCharacters = async (
  scope: CharacterScope = "all"
): Promise<Character[]> => {
  const scopeSuffix =
    scope === "students"
      ? "/students"
      : scope === "staff"
        ? "/staff"
        : "";

  const response = await fetch(
    `${API_URL}/characters${scopeSuffix}`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: Character[] = await response.json();

  console.log("TOTAL CHARACTERS FROM API:", data.length);

  return data;
};
// OLD LOGIC TO FILTER BY HOUSE, NOW THIS ATTRIBUTE IS BEING IGNORED FOLLOWING FIGMA

// import { Character } from "@lib/constants/characters";
// import { HouseType } from "@lib/constants/houses";

// const API_URL = import.meta.env.VITE_HARRY_POTTER_API_URL;

// export const fetchCharacter = async (
//   id: string
// ): Promise<Character | null> => {
//   const response = await fetch(`${API_URL}/character/${id}`);

//   if (!response.ok) {
//     throw new Error("Failed to fetch character");
//   }

//   const data: Character[] = await response.json();

//   return data.length > 0 ? data[0] : null;
// };

// export type CharacterScope = "all" | "students" | "staff";

// export const fetchCharacters = async (
//   house?: HouseType | null,
//   scope: CharacterScope = "all"
// ): Promise<Character[]> => {
//   const scopeSuffix =
//     scope === "students"
//       ? "/students"
//       : scope === "staff"
//         ? "/staff"
//         : "";

//   const routeSuffix = house ? `/house/${house}` : "";

//   const response = await fetch(
//     `${API_URL}/characters${scopeSuffix}${routeSuffix}`
//   );

//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }

//   const data: Character[] = await response.json();

//   console.log("TOTAL CHARACTERS FROM API:", data.length);
//   console.log("FIRST 10:", data.slice(0, 10));

//   return data;
// };

