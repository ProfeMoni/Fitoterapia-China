import { NextResponse } from "next/server";
import { getFitotecaDocuments } from "@/lib/fitoteca";

export const dynamic = "force-dynamic";

export async function GET() {
  const result = await getFitotecaDocuments();

  if (!result.ok) {
    const isConfigurationError = result.reason === "configuration";
    return NextResponse.json(
      { error: isConfigurationError ? "Supabase no está configurado en el servidor." : "No se pudo leer la biblioteca." },
      { status: isConfigurationError ? 503 : 502 },
    );
  }

  return NextResponse.json(result.documents);
}
