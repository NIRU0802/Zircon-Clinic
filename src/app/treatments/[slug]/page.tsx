import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  treatments,
  getTreatmentBySlug,
  getRelatedTreatments,
} from "@/data/treatments";
import { generateTreatmentSEO, generateMedicalProcedureSchema } from "@/utils/seo";
import TreatmentDetailClient from "@/components/treatment/TreatmentDetailClient";

// ✅ Pre-builds a static page for every treatment at build time (great for SEO + speed)
export function generateStaticParams() {
  return treatments.map((treatment) => ({
    slug: treatment.slug,
  }));
}

// ✅ Server Component — this is what makes per-page metadata possible
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    return {
      title: "Treatment Not Found | Zircon Dental & Implant Clinic",
    };
  }

  // Uses the metaTitle/metaDescription already defined per-treatment in treatments.ts
  return generateTreatmentSEO(
    treatment.metaTitle || treatment.title,
    treatment.metaDescription || treatment.description,
    treatment.slug,
    treatment.clinicPrice?.min || ""
  );
}

export default async function TreatmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    notFound();
  }

  const relatedTreatments = getRelatedTreatments(slug, 4);

  const procedureSchema = generateMedicalProcedureSchema(
    treatment.title,
    treatment.description,
    treatment.clinicPrice?.min || ""
  );

  return (
    <>
      {/* ✅ Structured data for rich results in Google Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />
      <TreatmentDetailClient
        treatment={treatment}
        relatedTreatments={relatedTreatments}
      />
    </>
  );
}