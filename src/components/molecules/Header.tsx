import React from "react";
import type { Section } from "../../types/types";
import NavButton from "../atoms/NavButton";
import { SECTIONS } from "../utils/constants";

interface Props {
  section: Section;
  setSection: (section: Section) => void;
}

const Header: React.FC<Props> = ({ section, setSection }) => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-white">
          Test - casino simulation - Adrian
        </h1>

        <nav className="flex gap-4">
          {SECTIONS.map((sec) => (
            // Render a NavButton for each section
            <NavButton
              key={sec}
              label={
                sec === "games"
                  ? "Casino Games"
                  : sec.charAt(0).toUpperCase() + sec.slice(1)
              }
              isActive={section === sec}
              onClick={() => setSection(sec)}
            />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
