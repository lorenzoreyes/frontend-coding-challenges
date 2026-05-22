import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "@lib/api/characters";
import { useAppStore } from "@lib/hooks/useAppStore";
import { Character } from "@lib/constants/characters";

export const useCharacters = () => {
  const { preferredHouse } = useAppStore();

  const { data, ...rest } = useQuery<Character[]>({
    queryKey: ["characters", preferredHouse],
    queryFn: () => fetchCharacters(),
    staleTime: Infinity,
  });

  const characters = data || [];

  return {
    characters,
    ...rest,
  };
};