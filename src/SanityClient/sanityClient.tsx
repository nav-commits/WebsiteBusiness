import { createClient } from "@sanity/client";

// Local previews use Vite's read-only proxy; production still talks to Sanity directly.
const localPreview = import.meta.env.DEV && typeof window !== "undefined";

export const client = createClient({
  projectId: "kxqwhynb",
  dataset: "production",
  apiVersion: "2026-03-28",
  useCdn: !localPreview,
  ...(localPreview
    ? { apiHost: `${window.location.origin}/sanity-preview`, useProjectHostname: false }
    : {}),
});
