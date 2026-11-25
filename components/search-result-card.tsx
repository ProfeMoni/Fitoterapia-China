import { FileIcon } from "@/components/icons";

/** Resultado para contenido extraído y verificado desde los fascículos. */
export type SearchResult = {
  plantName: string;
  excerpt: string;
  fascicleTitle: string;
  pageNumber: number;
};

export function SearchResultCard({ result }: { result: SearchResult }) {
  return <article className="result-card"><div className="result-card-top"><span className="result-label">PLANTA</span><span className="result-page">PÁG. {result.pageNumber}</span></div><h3>{result.plantName}</h3><p className="result-excerpt">{result.excerpt}</p><div className="result-source"><FileIcon/><span><small>FUENTE DOCUMENTAL</small><strong>{result.fascicleTitle}</strong></span></div></article>;
}
