import cloud from "@/assets/webp/v4/svc-cloud-infrastructure.webp";
import cloud1600 from "@/assets/webp/v4/svc-cloud-infrastructure-1600.webp";
import cloud828 from "@/assets/webp/v4/svc-cloud-infrastructure-828.webp";
import platform from "@/assets/webp/v4/svc-platform-engineering.webp";
import platform1600 from "@/assets/webp/v4/svc-platform-engineering-1600.webp";
import platform828 from "@/assets/webp/v4/svc-platform-engineering-828.webp";
import devops from "@/assets/webp/v4/svc-devops-delivery.webp";
import devops1600 from "@/assets/webp/v4/svc-devops-delivery-1600.webp";
import devops828 from "@/assets/webp/v4/svc-devops-delivery-828.webp";
import security from "@/assets/webp/v4/svc-security-devsecops.webp";
import security1600 from "@/assets/webp/v4/svc-security-devsecops-1600.webp";
import security828 from "@/assets/webp/v4/svc-security-devsecops-828.webp";
import reliability from "@/assets/webp/v4/svc-reliability-operations.webp";
import reliability1600 from "@/assets/webp/v4/svc-reliability-operations-1600.webp";
import reliability828 from "@/assets/webp/v4/svc-reliability-operations-828.webp";
import cost from "@/assets/webp/v4/svc-finops.webp";
import cost1600 from "@/assets/webp/v4/svc-finops-1600.webp";
import cost828 from "@/assets/webp/v4/svc-finops-828.webp";
import data from "@/assets/webp/v4/svc-data-modernization.webp";
import data1600 from "@/assets/webp/v4/svc-data-modernization-1600.webp";
import data828 from "@/assets/webp/v4/svc-data-modernization-828.webp";
import advisory from "@/assets/webp/v4/svc-technology-advisory.webp";
import advisory1600 from "@/assets/webp/v4/svc-technology-advisory-1600.webp";
import advisory828 from "@/assets/webp/v4/svc-technology-advisory-828.webp";

/**
 * One photograph per capability page, in the site's three widths.
 *
 * The base is 3840 wide (Sept 2026, Nicholas): these are full-bleed heroes and
 * on a high density display the old 2880 was being upscaled by the browser.
 *
 * Deliberately one per page: the hero carries it, and everything below is
 * typography. A second photograph on a page this long would land in the
 * middle of an argument and interrupt it.
 */
export type ServicePhoto = { src: string; srcSet: string };

const photo = (full: string, w1600: string, w828: string): ServicePhoto => ({
  src: full,
  srcSet: `${w828} 828w, ${w1600} 1600w, ${full} 3840w`,
});

export const SERVICE_PHOTOS: Record<string, ServicePhoto> = {
  "cloud-infrastructure": photo(cloud, cloud1600, cloud828),
  "platform-engineering": photo(platform, platform1600, platform828),
  "devops-delivery": photo(devops, devops1600, devops828),
  "security-devsecops": photo(security, security1600, security828),
  "reliability-operations": photo(reliability, reliability1600, reliability828),
  finops: photo(cost, cost1600, cost828),
  "data-modernization": photo(data, data1600, data828),
  "technology-advisory": photo(advisory, advisory1600, advisory828),
};
