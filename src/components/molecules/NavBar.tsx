import React from "react";
import type { Section } from "../../types/types";

interface Props {
  section: Section;
  setSection: (section: Section) => void;
}

const NavBar: React.FC<Props> = ({ section, setSection }) => (
  <nav className="flex justify-center gap-4 my-4">
    {(["games", "promotions", "news"] as Section[]).map((sec) => (
      <button
        key={sec}
        onClick={() => setSection(sec)}
        className={`px-4 py-2 rounded-lg font-medium ${
          section === sec ? "bg-blue-600 text-white" : "bg-gray-200"
        }`}
      >
        {sec === "games"
          ? "Casino Games"
          : sec.charAt(0).toUpperCase() + sec.slice(1)}
      </button>
    ))}
  </nav>
);

export default NavBar;
