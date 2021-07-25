/// <reference types="svelte" />
type page = "auth" | "metadata" | "url";

interface Metadata {
  _id: string;
  clicks: number;
  created: string;
}
