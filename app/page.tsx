import { Header } from "@/components/header";
import { SearchPanel } from "@/components/search-panel";
import { SectionsMenu } from "@/components/sections-menu";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="page-shell">
        <SearchPanel />
        <SectionsMenu />
        <footer className="footer"><span>LA BOTICA DE LA CHINITA</span><span>Biblioteca documental · Fitoterapia China</span></footer>
      </div>
    </main>
  );
}
