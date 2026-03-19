export const characterFilters = ["students", "staff", "favorite"] as const;

export type CharacterFilterType = (typeof characterFilters)[number];
