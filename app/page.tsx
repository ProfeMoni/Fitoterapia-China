import { Header } from "@/components/header";
import { SearchPanel } from "@/components/search-panel";
import { SectionsMenu } from "@/components/sections-menu";
import { getFitotecaDocuments } from "@/lib/fitoteca";

export const dynamic = "force-dynamic";

export default async function Home() {
  const libraryResult = await getFitotecaDocuments();

  return (
    <main>
      <Header />
      <div className="page-shell">
        <SearchPanel />
        <SectionsMenu libraryResult={libraryResult} />
        <footer className="footer"><span>LA BOTICA DE LA CHINITA</span><span>Biblioteca documental · Fitoterapia China</span></footer>
      </div>
    </main>
  );
}
