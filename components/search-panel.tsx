"use client";

import { FormEvent, useState } from "react";
import { SearchIcon } from "@/components/icons";

export function SearchPanel() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);
  function handleSearch(event: FormEvent<HTMLFormElement>) { event.preventDefault(); if (query.trim()) setSubmitted(true); }
  return <section className="search-section" id="inicio" aria-labelledby="search-title"><div className="eyebrow"><span className="eyebrow-line" /> CONSULTA DOCUMENTAL</div><h1 id="search-title">Una biblioteca viva<br />para <em>explorar.</em></h1><p className="search-intro">Consultá la información contenida en los fascículos de la biblioteca.</p><form className="search-form" onSubmit={handleSearch}><label className="sr-only" htmlFor="library-search">Nombre de una planta, afección o consulta</label><SearchIcon className="search-icon"/><input id="library-search" type="search" placeholder="Una planta, una afección o una pregunta…" value={query} onChange={(event) => { setQuery(event.target.value); setSubmitted(false); }} /><button type="submit">Buscar <span aria-hidden="true">↗</span></button></form><div className="search-hint"><span className="hint-mark">i</span> La búsqueda se habilitará cuando se incorporen los fascículos.</div>{submitted && <div className="empty-results" role="status"><strong>Todavía no hay documentos para consultar.</strong><span>Cuando la biblioteca tenga fascículos disponibles, acá aparecerán los fragmentos y sus referencias.</span></div>}<div className="search-rule"><span>PLANTAS · SABERES · DOCUMENTOS</span><span>01 — 07</span></div></section>;
}
