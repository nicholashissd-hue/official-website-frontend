import Eyebrow from "@/components/ui/eyebrow";
import Reveal from "@/components/ui/reveal";

const LAST_UPDATED = "June 11, 2026";

interface TermsSection {
  title: string;
  paragraphs: string[];
}

const SECTIONS: TermsSection[] = [
  {
    title: "1. Agreement to These Terms",
    paragraphs: [
      "These Terms of Service (the \"Terms\") govern your access to and use of the website located at elderops.net (the \"Site\") and the engineering services offered by ElderOps (\"ElderOps\", \"we\", \"us\", or \"our\"). By accessing the Site or engaging our services, you agree to be bound by these Terms. If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind that entity.",
      "If you do not agree to these Terms, you may not access the Site or use our services.",
    ],
  },
  {
    title: "2. Our Services",
    paragraphs: [
      "ElderOps provides senior engineering services, including team extension, dedicated engineering teams, and outcome-based delivery engagements across cloud and DevOps, data platforms, analytics, AI/ML enablement, and product engineering (collectively, the \"Services\").",
      "Information on the Site — including descriptions of capabilities, representative engagements, process timelines, and response times — is provided for general information only and does not constitute a binding offer. The specific scope, deliverables, fees, and timelines of any engagement are defined exclusively in a mutually executed proposal, statement of work, or services agreement (each, an \"Engagement Agreement\").",
    ],
  },
  {
    title: "3. Engagements",
    paragraphs: [
      "Each engagement begins only upon execution of an Engagement Agreement. In the event of a conflict between these Terms and an Engagement Agreement, the Engagement Agreement controls with respect to that engagement.",
      "Candidate shortlists, engineer profiles, and matching recommendations (including output of automated tools such as our Hiring Advisor) are provided for evaluation purposes. Estimated turnaround times, such as shortlist delivery targets, are good-faith estimates and not guarantees.",
    ],
  },
  {
    title: "4. Fees and Payment",
    paragraphs: [
      "Fees for Services are set out in the applicable Engagement Agreement. Unless otherwise agreed in writing, invoices are payable within thirty (30) days of the invoice date. Late amounts may accrue interest at the lesser of 1.5% per month or the maximum rate permitted by law. Fees are exclusive of taxes, which are the client's responsibility (excluding taxes on ElderOps' income).",
    ],
  },
  {
    title: "5. Confidentiality",
    paragraphs: [
      "Each party may receive non-public information from the other in connection with an engagement (\"Confidential Information\"). The receiving party will use Confidential Information only to perform under the applicable engagement, protect it with at least reasonable care, and not disclose it to third parties except to personnel and contractors bound by obligations at least as protective. These obligations do not apply to information that is or becomes public through no fault of the receiving party, was lawfully known prior to disclosure, is independently developed, or must be disclosed by law.",
    ],
  },
  {
    title: "6. Intellectual Property",
    paragraphs: [
      "Unless otherwise stated in an Engagement Agreement, upon full payment of the applicable fees, deliverables created specifically for a client under an engagement are assigned to the client. ElderOps retains ownership of its pre-existing materials, methodologies, know-how, and generalized learning, and grants the client a non-exclusive license to such pre-existing materials to the extent embedded in deliverables.",
      "The Site and its content — including text, design, graphics, logos, and software — are the property of ElderOps or its licensors and are protected by intellectual property laws. Third-party logos shown on the Site are the property of their respective owners and indicate prior delivery experience of engineers in our network; they do not imply endorsement.",
    ],
  },
  {
    title: "7. Client Responsibilities",
    paragraphs: [
      "Clients agree to provide timely access to the personnel, systems, information, and approvals reasonably required for delivery, and to ensure they have the right to grant any access provided to ElderOps engineers. Clients are responsible for their own data backups and production change-management approvals unless an Engagement Agreement expressly states otherwise.",
    ],
  },
  {
    title: "8. Warranties and Disclaimer",
    paragraphs: [
      "ElderOps warrants that Services will be performed in a professional and workmanlike manner consistent with industry standards. EXCEPT AS EXPRESSLY SET OUT IN THESE TERMS OR AN ENGAGEMENT AGREEMENT, THE SITE AND SERVICES ARE PROVIDED \"AS IS\" AND ELDEROPS DISCLAIMS ALL OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.",
    ],
  },
  {
    title: "9. Limitation of Liability",
    paragraphs: [
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER PARTY WILL BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, REVENUE, OR DATA, ARISING OUT OF OR RELATED TO THE SITE OR SERVICES. EXCEPT FOR BREACHES OF CONFIDENTIALITY, INFRINGEMENT OF THE OTHER PARTY'S INTELLECTUAL PROPERTY, OR A PARTY'S INDEMNIFICATION OBLIGATIONS, EACH PARTY'S TOTAL AGGREGATE LIABILITY WILL NOT EXCEED THE FEES PAID OR PAYABLE TO ELDEROPS UNDER THE APPLICABLE ENGAGEMENT AGREEMENT IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM.",
    ],
  },
  {
    title: "10. Indemnification",
    paragraphs: [
      "Each party will defend and indemnify the other against third-party claims arising from its gross negligence, willful misconduct, or infringement of third-party intellectual property rights, subject to prompt notice, control of the defense by the indemnifying party, and reasonable cooperation.",
    ],
  },
  {
    title: "11. Term and Termination",
    paragraphs: [
      "These Terms apply while you use the Site or receive Services. Termination rights for specific engagements are set out in the applicable Engagement Agreement. Sections relating to fees, confidentiality, intellectual property, disclaimers, limitation of liability, indemnification, and governing law survive termination.",
    ],
  },
  {
    title: "12. Independent Contractor; Non-Solicitation",
    paragraphs: [
      "ElderOps and its engineers act as independent contractors. Nothing in these Terms creates an employment, agency, partnership, or joint-venture relationship.",
      "During an active engagement and for twelve (12) months after its conclusion, the client agrees not to directly solicit for employment or engagement any ElderOps engineer introduced through the engagement without ElderOps' prior written consent, which may be conditioned on a mutually agreed conversion fee.",
    ],
  },
  {
    title: "13. Governing Law",
    paragraphs: [
      "These Terms are governed by the laws of the State of Delaware, without regard to its conflict-of-laws principles. The parties submit to the exclusive jurisdiction of the state and federal courts located in Delaware for any dispute arising out of these Terms, except that either party may seek injunctive relief in any court of competent jurisdiction.",
    ],
  },
  {
    title: "14. Changes to These Terms",
    paragraphs: [
      "We may update these Terms from time to time. The \"Last updated\" date above reflects the most recent revision. Material changes will be posted on this page, and continued use of the Site or Services after changes take effect constitutes acceptance of the revised Terms. Changes do not retroactively modify executed Engagement Agreements.",
    ],
  },
  {
    title: "15. Contact",
    paragraphs: [
      "Questions about these Terms can be directed to contact@elderops.net.",
    ],
  },
];

const Terms = () => {
  return (
    <section className="bg-bg-cream">
      <div className="container pb-24 pt-36 md:pb-32 md:pt-44">
        <Reveal immediate y={20}>
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-6 font-display text-[clamp(2.2rem,4.6vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-primary">
            Terms of Service
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
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="mt-4 text-[15px] leading-[1.85] text-accent-one"
                  >
                    {paragraph}
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

export default Terms;
