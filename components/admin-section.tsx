"use client";

import { ChangeEvent, useState } from "react";
import { FileIcon, UploadIcon } from "@/components/icons";

export function AdminSection() {
  const [fileName, setFileName] = useState("");
  function handleFile(event: ChangeEvent<HTMLInputElement>) { setFileName(event.target.files?.[0]?.name ?? ""); }
  return <section className="admin-section" id="incorporar" aria-labelledby="admin-title"><div className="admin-copy"><div className="eyebrow"><span className="eyebrow-line" /> PARA ADMINISTRAR</div><h2 id="admin-title">Sumar un<br /><em>fascículo.</em></h2><p>Incorporá un documento PDF para ampliar la biblioteca. Esta selección es solo visual: el archivo no se procesa ni se guarda.</p><div className="admin-note"><span>01</span> Los datos del documento se completarán al integrarse la biblioteca.</div></div><div className="upload-panel"><div className="upload-icon"><UploadIcon /></div><h3>Seleccioná un fascículo</h3><p>Archivos PDF · Selección local</p><label className="file-button" htmlFor="pdf-file">Elegir archivo <span aria-hidden="true">↗</span></label><input className="sr-only" id="pdf-file" type="file" accept="application/pdf,.pdf" onChange={handleFile} aria-describedby="file-status" />{fileName ? <div className="file-name" id="file-status" role="status"><FileIcon/><span>{fileName}</span></div> : <span className="file-help" id="file-status">Ningún archivo seleccionado</span>}</div></section>;
}
