import { immediateLoadImplants } from "./immediateLoadImplants";
import { dentalImplants } from "./dentalImplants";
import { advancedImplants } from "./advancedImplants";
import { rootCanal } from "./rootCanal";
import { smileDesign } from "./smileDesign";
import { teethWhitening } from "./teethWhitening";
import { crownsBridges } from "./crownsBridges";
import { orthodontics } from "./orthodontics";
import { oralSurgery } from "./oralSurgery";
import { childDentistry } from "./childDentistry";

// ✅ Export all shared types
export * from "./types";

// Export treatment data
export * from "./immediateLoadImplants";
export * from "./dentalImplants";
export * from "./advancedImplants";
export * from "./rootCanal";
export * from "./smileDesign";
export * from "./teethWhitening";
export * from "./crownsBridges";
export * from "./orthodontics";
export * from "./oralSurgery";
export * from "./brandPriceList";
export * from "./childDentistry";

export const treatments = [
  immediateLoadImplants,
  dentalImplants,
  advancedImplants,
  rootCanal,
  smileDesign,
  teethWhitening,
  crownsBridges,
  orthodontics,
  oralSurgery,
  childDentistry,
];

export const getTreatmentBySlug = (slug: string) =>
  treatments.find((t) => t.slug === slug);

export const getRelatedTreatments = (
  slug: string,
  limit = 4
) =>
  treatments
    .filter((t) => t.slug !== slug)
    .slice(0, limit);

export const getTreatmentsByCategory = (category: string) =>
  category === "All"
    ? treatments
    : treatments.filter((t) => t.category === category);

export const getCategories = () => [
  "All",
  ...new Set(treatments.map((t) => t.category)),
];