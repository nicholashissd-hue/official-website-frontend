import { Navigate, useParams } from "react-router";
import ServiceHero from "@/components/screens/serviceDetail/ServiceHero";
import ServiceIntro from "@/components/screens/serviceDetail/ServiceIntro";
import ServiceWork from "@/components/screens/serviceDetail/ServiceWork";
import ServiceEngagement from "@/components/screens/serviceDetail/ServiceEngagement";
import ServiceCaseStudy from "@/components/screens/serviceDetail/ServiceCaseStudy";
import ServiceWhy from "@/components/screens/serviceDetail/ServiceWhy";
import ServiceFaqs from "@/components/screens/serviceDetail/ServiceFaqs";
import ServiceClose from "@/components/screens/serviceDetail/ServiceClose";
import { SERVICE_PAGES } from "@/contents/services";
import { serviceBySlug } from "@/contents/taxonomy";

/**
 * One capability, at /services/<slug>.
 *
 * The slug resolves through the taxonomy rather than through the page
 * registry, so a URL can only exist for a capability the site actually
 * sells. An unknown slug is a redirect to the index rather than a 404: the
 * reader asked for a service page, and /services is the honest answer.
 *
 * Section order is the rebuild spec's: hero, when to call us, what we do, what
 * changes, case study, then the shared blocks. The grounds alternate the whole
 * way down (dark, bone, paper, bone, dark, paper, bone, paper, bone, paper,
 * dark), so no two adjacent sections share a surface and the two dark beats
 * never touch.
 */
const ServiceDetail = () => {
  const { slug } = useParams();
  const service = slug ? serviceBySlug(slug) : undefined;
  const page = service ? SERVICE_PAGES[service.id] : undefined;

  if (!page) return <Navigate to="/services" replace />;

  return (
    <>
      <ServiceHero page={page} />
      <ServiceIntro page={page} />
      <ServiceWork page={page} />
      <ServiceEngagement page={page} />
      <ServiceCaseStudy page={page} />
      <ServiceWhy />
      <ServiceFaqs page={page} />
      <ServiceClose page={page} />
    </>
  );
};

export default ServiceDetail;
