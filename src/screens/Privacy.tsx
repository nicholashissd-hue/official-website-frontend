import { Fragment } from "react";
import Reveal from "@/components/ui/reveal";

const LAST_UPDATED = "July 16, 2026";

/** A paragraph is plain text, or a mix of text and links — an opt-out the
 *  reader cannot click is not really an opt-out. */
type Part = string | { text: string; href: string };
type Paragraph = string | Part[];

interface PrivacySection {
  title: string;
  paragraphs: Paragraph[];
}

const LI_PRIVACY = "https://www.linkedin.com/legal/privacy-policy";
const LI_AD_SETTINGS = "https://www.linkedin.com/psettings/advertising";
const LI_GUEST_OPT_OUT =
  "https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out";

const SECTIONS: PrivacySection[] = [
  {
    title: "1. Overview",
    paragraphs: [
      'This Privacy Policy explains how ElderOps ("ElderOps", "we", "us", or "our") collects, uses, and protects information when you visit the website located at elderops.net (the "Site") or contact us through it. The Site has no user accounts.',
      "Beyond what you send us through our forms, we use one advertising tool — the LinkedIn Insight Tag — to measure our LinkedIn advertising and to show ads on LinkedIn to people who have visited this Site (retargeting). Section 3 explains exactly what it collects and how to opt out.",
    ],
  },
  {
    title: "2. Information You Provide",
    paragraphs: [
      "Contact form. When you submit the form on our contact page, we receive the details you enter: your name, work email, company, what you are looking for, your focus area, and your message.",
      "Hiring Advisor. Before starting a conversation with our Hiring Advisor assistant, you provide your name, email, and optionally your company, which we use only to follow up on your hiring question. If you choose to share a recommendation with us, the details you typed — such as a project description or job description — are included so we can respond meaningfully.",
      "Scheduling. If you book a consultation, scheduling happens through Calendly's own booking window, and any details you enter there are collected by Calendly under its own privacy policy.",
    ],
  },
  {
    title: "3. Information Collected Automatically",
    paragraphs: [
      [
        "LinkedIn Insight Tag. Our pages load the LinkedIn Insight Tag, an advertising and measurement tool provided by LinkedIn. It places cookies in your browser and sends information to LinkedIn, including your IP address, browser and device characteristics, referring site, the pages you view on this Site, and the time of your visit. We use it to measure how our LinkedIn advertising performs, to see aggregated demographic reporting about the audience that visits us, and to show ads on LinkedIn to people who have visited this Site (retargeting). If you are a LinkedIn member, LinkedIn may associate this activity with your LinkedIn account. LinkedIn's handling of that information is governed by ",
        { text: "LinkedIn's own privacy policy", href: LI_PRIVACY },
        ".",
      ],
      [
        "You can opt out. If you have a LinkedIn account, you can turn this off in your ",
        { text: "LinkedIn advertising settings", href: LI_AD_SETTINGS },
        ". If you do not have a LinkedIn account, use LinkedIn's ",
        { text: "guest retargeting opt-out", href: LI_GUEST_OPT_OUT },
        ". Opting out does not affect your ability to use the Site or to contact us.",
      ],
      "To be precise about what blocking cookies does: it stops LinkedIn from recognizing your browser across visits, but your IP address and browser type are still sent to LinkedIn when the tag loads, and the tag includes a fallback image pixel that works even without cookies or JavaScript. To stop the collection itself rather than just the persistence, use the LinkedIn opt-out above or a tracker-blocking browser extension.",
      "Aside from that tag, we do not run general-purpose website analytics, and we do not use any other advertising or social media pixels.",
      "Some technical data is processed as an unavoidable part of serving a website: our hosting provider (Vercel) keeps standard server request logs, and the font services our pages load from (Fontshare and Google Fonts) receive standard connection data such as your IP address and browser type when the fonts are fetched. If our server-side email providers are unavailable, your form submission is sent to FormSubmit directly from your browser, in which case FormSubmit also receives your IP address and browser type.",
    ],
  },
  {
    title: "4. How We Use Your Information",
    paragraphs: [
      "We use the information you submit through our forms for one purpose: to respond to your inquiry and follow up on it. That includes answering questions, preparing recommendations or shortlists you have asked for, and scheduling conversations. We do not sell the details you submit, we do not pass them to advertisers, and we do not add you to marketing lists you have not asked to join. The contact details you type into our forms are never sent to LinkedIn.",
      "We do not sell your personal information for money. Because the LinkedIn Insight Tag is used for retargeting, however, our disclosure of browsing activity to LinkedIn may count as \"sharing\" for cross-context behavioral advertising — also called \"targeted advertising\" — under some United States state privacy laws. To stop it, use the opt-out options in section 3, or email contact@elderops.net and we will help.",
    ],
  },
  {
    title: "5. How Your Information Is Stored",
    paragraphs: [
      "The Site does not operate a customer database. When you submit the contact form or a Hiring Advisor request, your submission is converted into an email delivered to our team inbox (contact@elderops.net) and is retained there as ordinary business correspondence.",
      "Hiring Advisor replies are generated by rule-based logic on our own infrastructure — your chat is not sent to any artificial-intelligence service. Your messages are transmitted to our server in order to generate each reply, but we keep no database of conversations: the transcript lives in your browser and is discarded when you close the chat.",
    ],
  },
  {
    title: "6. Service Providers",
    paragraphs: [
      "We rely on a small number of providers to handle visitor information, each receiving only what is necessary for its role: Vercel (website hosting and request handling), Resend, EmailJS, and FormSubmit (delivery of form submissions to our inbox as email), Calendly (consultation scheduling, only when you open the booking window), LinkedIn (advertising measurement and retargeting, via the Insight Tag described in section 3), and Fontshare and Google Fonts (webfont delivery).",
      [
        "Apart from LinkedIn, these providers process data on our behalf and are not authorized to use your information for their own marketing. LinkedIn operates as an advertising platform under its own ",
        { text: "privacy policy", href: LI_PRIVACY },
        " and advertising terms, and may use the activity its tag collects in accordance with those terms.",
      ],
    ],
  },
  {
    title: "7. Cookies",
    paragraphs: [
      "The LinkedIn Insight Tag described in section 3 places cookies in your browser for advertising measurement and retargeting. These are the only tracking cookies on the Site; we use no other advertising, analytics, or marketing cookies.",
      "You can refuse or delete them at any time through your browser settings, and the Site remains fully usable with them blocked. As noted in section 3, blocking cookies limits how LinkedIn recognizes you across visits but does not by itself stop the tag from loading — use the LinkedIn opt-out links in section 3 to stop the tracking.",
      "Separately, a single functional cookie is used by an internal staff tool, reachable only with a staff password. It is never set for ordinary visitors — it is issued only after a successful staff sign-in — and it does nothing but keep that tool signed in.",
    ],
  },
  {
    title: "8. Data Retention",
    paragraphs: [
      "Inquiry emails are retained for as long as needed to handle your request and maintain a record of our business correspondence, after which they may be deleted in the ordinary course. You may ask us to delete your inquiry at any time using the contact details below.",
      [
        "Browsing information collected by the LinkedIn Insight Tag is held by LinkedIn rather than by us, and is subject to LinkedIn's own retention limits, described in ",
        { text: "LinkedIn's privacy policy", href: LI_PRIVACY },
        ". We keep no visitor-level record of it ourselves — we see only aggregated reporting and advertising audiences within our LinkedIn advertising account.",
      ],
    ],
  },
  {
    title: "9. Your Rights",
    paragraphs: [
      "You may request access to, correction of, or deletion of the personal information you have sent us, and you may ask us to stop contacting you at any time. Depending on where you live, local law (such as the GDPR in the European Economic Area and the United Kingdom, or state privacy laws in the United States) may give you additional rights, including the right to opt out of targeted advertising or the sharing of your personal information.",
      [
        "These rights also cover information collected automatically about your visit. Because the browsing data gathered by the LinkedIn Insight Tag is held by LinkedIn, requests about that data are best directed to LinkedIn through your ",
        { text: "LinkedIn advertising settings", href: LI_AD_SETTINGS },
        ", the ",
        { text: "guest retargeting opt-out", href: LI_GUEST_OPT_OUT },
        ", or LinkedIn's own privacy request process. For anything else, email contact@elderops.net — we will respond within a reasonable period.",
      ],
    ],
  },
  {
    title: "10. Data Security",
    paragraphs: [
      "The Site is served over HTTPS, and form submissions are transmitted over encrypted connections. Because we operate no visitor database, the only information we store ourselves is the email correspondence you initiate; browsing information collected by the LinkedIn Insight Tag is held by LinkedIn and reaches us only as aggregated reporting and advertising audiences. No method of transmission or storage is completely secure.",
    ],
  },
  {
    title: "11. International Transfers",
    paragraphs: [
      "Our service providers operate infrastructure in the United States and other countries, so information you submit may be processed outside your own jurisdiction. Where required, transfers rely on the safeguards provided in our providers' data processing terms.",
    ],
  },
  {
    title: "12. Children's Privacy",
    paragraphs: [
      "The Site is a business-to-business service and is not directed to children under 16. We do not knowingly collect personal information from children. If you believe a child has provided us information, contact us and we will delete it.",
    ],
  },
  {
    title: "13. Changes to This Policy",
    paragraphs: [
      'We may update this Privacy Policy from time to time. Changes take effect when posted on this page, and the "Last updated" date above reflects the most recent revision. Material changes will be reflected prominently on this page.',
    ],
  },
  {
    title: "14. Contact",
    paragraphs: [
      "Questions about this Privacy Policy or your information can be sent to contact@elderops.net.",
    ],
  },
];

const Privacy = () => {
  return (
    <section className="bg-bg-cream">
      <div className="container pb-24 pt-36 md:pb-32 md:pt-44">
        <Reveal immediate y={20}>
          <h1 className="font-display text-[clamp(2.2rem,4.6vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-primary">
            Privacy Policy
          </h1>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-three">
            Last updated — {LAST_UPDATED}
          </p>
        </Reveal>

        <Reveal immediate delay={0.15} y={24}>
          <div className="mt-14 max-w-3xl space-y-12">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-xl font-semibold leading-snug tracking-[-0.01em] text-primary md:text-2xl">
                  {section.title}
                </h2>
                {section.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="mt-4 text-[15px] leading-[1.85] text-accent-one"
                  >
                    {typeof paragraph === "string"
                      ? paragraph
                      : paragraph.map((part, partIndex) =>
                          typeof part === "string" ? (
                            <Fragment key={partIndex}>{part}</Fragment>
                          ) : (
                            <a
                              key={partIndex}
                              href={part.href}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="font-medium text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:decoration-primary"
                            >
                              {part.text}
                            </a>
                          ),
                        )}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Privacy;
