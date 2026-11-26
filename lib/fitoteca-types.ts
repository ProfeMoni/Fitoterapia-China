export type FitotecaDocument = {
  titulo: string | null;
  numero_fasciculo: string | number | null;
  total_paginas: string | number | null;
};

export type FitotecaReadResult =
  | { ok: true; documents: FitotecaDocument[] }
  | { ok: false; reason: "configuration" | "query" };
