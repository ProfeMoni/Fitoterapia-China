import { ArrowIcon, BookIcon } from "@/components/icons";
import type { FitotecaReadResult } from "@/lib/fitoteca-types";

export function LibrarySection({ onAdd, result }: { onAdd: () => void; result: FitotecaReadResult }) {
  const documents = result.ok ? result.documents : [];

  return <section className="library-section" id="biblioteca" aria-labelledby="library-title">
    <div className="section-heading">
      <div><div className="eyebrow"><span className="eyebrow-line" /> EL ARCHIVO</div><h2 id="library-title">La biblioteca<span className="heading-period">.</span></h2></div>
      <span className="section-index">01 / 02</span>
    </div>
    {result.ok && documents.length > 0 ? <ul className="document-list" aria-label="Documentos de Fitoteca China">
      {documents.map((document, index) => <li className="document-row" key={`${document.numero ?? "fasciculo"}-${index}`}>
        <BookIcon />
        <div className="document-copy"><h3>{document.titulo || "Título no disponible"}</h3><p>Fascículo {document.numero ?? "—"}</p></div>
        <span className="document-pages">{document.total_paginas ?? "—"} páginas</span>
      </li>)}
    </ul> : <div className="library-empty">
      <div className="empty-illustration"><BookIcon/><span>—</span></div>
      <div className="empty-copy"><h3>{result.ok ? "Un espacio para el conocimiento" : "No se pudo cargar la biblioteca"}</h3><p>{result.ok ? "Todavía no hay fascículos disponibles para mostrar." : result.reason === "configuration" ? "La lectura requiere SUPABASE_URL y SUPABASE_SECRET_KEY configuradas en el entorno del servidor." : "La consulta a Fitoteca China no respondió. Volvé a intentarlo más tarde."}</p></div>
      <span className="document-count">{documents.length} DOCUMENTOS</span>
    </div>}
    <div className="library-caption"><span>COLECCIÓN DOCUMENTAL</span><span>Se muestran título, número de fascículo y total de páginas.</span></div>
    <button className="text-link" type="button" onClick={onAdd}>Incorporar un fascículo <ArrowIcon /></button>
  </section>;
}
