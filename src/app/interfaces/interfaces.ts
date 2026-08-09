export interface PageData {
  path: string;
  meta_title: string | null;
  meta_description: string | null;
  meta_image_url: string | null;
  canonical_url: string | null;
  components: any[];
}