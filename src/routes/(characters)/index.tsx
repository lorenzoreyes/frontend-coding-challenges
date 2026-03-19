import { createFileRoute } from "@tanstack/react-router";
import { CharactersGrid } from "./-components/CharactersGrid";

export const Route = createFileRoute("/(characters)/")({
  component: CharactersIndexView,
});

function CharactersIndexView() {
  return <CharactersGrid />;
}
