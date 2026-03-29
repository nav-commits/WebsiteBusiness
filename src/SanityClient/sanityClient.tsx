import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "kxqwhynb",
  dataset: "production",
  apiVersion: "2026-03-28",
  useCdn: true,
});