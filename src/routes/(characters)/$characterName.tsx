import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { fetchCharacter } from "@lib/api/characters";
import { InfoSection } from "@lib/components/InfoSection";

export const Route = createFileRoute("/(characters)/$characterName")({
  loader: async ({ params }) => {
    const character = await fetchCharacter(params.characterName);

    if (!character) {
      throw new Error("Character not found");
    }

    return character;
  },

  component: CharacterDetailView,
});

function CharacterDetailView() {
  const character = Route.useLoaderData();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition hover:bg-gray-100"
      >
        <ArrowLeft size={18} />
        Back to Characters
      </Link>

      <div className="flex gap-6 mb-8">
        <img
          src={character.image}
          alt={character.name}
          className="w-48 h-64 object-cover rounded-xl"
        />

        <div>
          <h1 className="text-4xl font-bold">{character.name}</h1>

          <p className="text-lg text-gray-500">
            {character.house || "No house"}
          </p>
        </div>
      </div>

      <InfoSection title="Basic Information" icon="👤">
        <InfoSection.Grid>
          <InfoSection.Item label="Species" value={character.species || "Unknown"} />
          <InfoSection.Item label="Gender" value={character.gender || "Unknown"} />
          <InfoSection.Item label="Date of Birth" value={character.dateOfBirth || "Unknown"} />
          <InfoSection.Item label="Ancestry" value={character.ancestry || "Unknown"} />
          <InfoSection.Item label="Eye Color" value={character.eyeColour || "Unknown"} />
          <InfoSection.Item label="Hair Color" value={character.hairColour || "Unknown"} />
        </InfoSection.Grid>
      </InfoSection>

      <InfoSection.Divider />

      <InfoSection title="Magical Information" icon="✨">
        <InfoSection.Grid>
          <InfoSection.Item
            label="Wizard / Witch"
            value={character.wizard ? "Yes" : "No"}
          />
          <InfoSection.Item
            label="Patronus"
            value={character.patronus || "Unknown"}
          />
        </InfoSection.Grid>
      </InfoSection>

      <InfoSection.Divider />

      <InfoSection title="Hogwarts" icon="🏰">
        <InfoSection.Grid>
          <InfoSection.Item
            label="Hogwarts Student"
            value={character.hogwartsStudent ? "Yes" : "No"}
          />
          <InfoSection.Item
            label="Hogwarts Staff"
            value={character.hogwartsStaff ? "Yes" : "No"}
          />
        </InfoSection.Grid>
      </InfoSection>

      <InfoSection.Divider />

      <InfoSection title="Portrayed By" icon="🎬">
        <InfoSection.Grid>
          <InfoSection.Item
            label="Actor"
            value={character.actor || "Unknown"}
          />
          <InfoSection.Item
            label="Alternate Actors"
            value={
              character.alternate_actors?.length
                ? character.alternate_actors.join(", ")
                : "None"
            }
          />
        </InfoSection.Grid>
      </InfoSection>
    </div>
  );
}