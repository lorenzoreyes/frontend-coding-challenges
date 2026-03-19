export const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"] as const;

export type HouseType = (typeof houses)[number];
