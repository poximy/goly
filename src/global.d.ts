/// <reference types="svelte" />
type page = "auth" | "metadata" | "url";

interface Metadata {
  _id: string;
  url: string;
  clicks: number;
  created: string;
}

declare global {
  var API_URL: string;
}
