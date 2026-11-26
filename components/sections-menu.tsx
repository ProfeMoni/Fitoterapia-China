"use client";

import { useState } from "react";
import { LibrarySection } from "@/components/library-section";
import { AdminSection } from "@/components/admin-section";
import type { FitotecaReadResult } from "@/lib/fitoteca-types";

type Section = "library" | "admin";

export function SectionsMenu({ libraryResult }: { libraryResult: FitotecaReadResult }) {
  const [activeSection, setActiveSection] = useState<Section>("library");

  return <div className="sections-area">
    <nav className="sections-menu" aria-label="Secciones de la biblioteca">
      <button type="button" className={activeSection === "library" ? "section-tab active" : "section-tab"} aria-current={activeSection === "library" ? "page" : undefined} onClick={() => setActiveSection("library")}>Biblioteca</button>
      <button type="button" className={activeSection === "admin" ? "section-tab active" : "section-tab"} aria-current={activeSection === "admin" ? "page" : undefined} onClick={() => setActiveSection("admin")}>Incorporar PDF</button>
    </nav>
    <div className="section-content" key={activeSection}>
      {activeSection === "library" ? <LibrarySection onAdd={() => setActiveSection("admin")} result={libraryResult} /> : <AdminSection />}
    </div>
  </div>;
}
