import "server-only";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { FitotecaDocument, FitotecaReadResult } from "@/lib/fitoteca-types";

export async function getFitotecaDocuments(): Promise<FitotecaReadResult> {
  const supabase = createSupabaseServerClient();

  if (!supabase) {
    return { ok: false, reason: "configuration" };
  }

  const { data, error } = await supabase
    .from("fitoteca_documentos")
    .select("titulo, numero_fasciculo, total_paginas");

  if (error) {
    return { ok: false, reason: "query" };
  }

  return {
    ok: true,
    documents: (data ?? []) as FitotecaDocument[],
  };
}
