import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router";
import Reveal from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/v4";
import { capabilities } from "@/contents/screens/servicesV4";
import { SERVICES } from "@/contents/taxonomy";

/**
 * The capability schematic: the eight capabilities drawn as one plate rather
 * than listed as eight paragraphs. The drawing carries the argument the list
 * could not — that these are a system with a build order, not a menu. Reading
 * left to right: FOUNDATION is what everything stands on, DELIVERY is how
 * change reaches production, OPERATE is what keeps it honest once it is
 * there, and the control plane sits above all three because advisory work
 * directs the other seven rather than sitting beside them.
 *
 * Two deliberate departures from the plate as it was drafted:
 *
 *  - It is laid on paper, contained, rather than run full bleed. A dark plate
 *    at full width would land directly against the interlude photograph below
 *    it, and two dark bands in a row is the one rhythm rule this page has.
 *    A drawing sheet laid on a page is also simply what a schematic is.
 *  - The schedule under the plate is not decoration. Hover reveals each
 *    node's sub-offerings, and hover does not exist on a phone; the schedule
 *    is where a touch reader gets the same content, and it is what carries
 *    the taxonomy anchors that the hero and the footer link into.
 *
 * Geometry is in the SVG user space (1312 x 980) and was generated, so the
 * coordinates are exact rather than eyeballed. Interaction lives in the .sc-
 * block in index.css: it is relational (hovering one node has to dim every
 * unrelated edge and light the ones that touch it), which is a `:has()` and
 * attribute-selector problem that utility classes cannot express.
 */

/** Node box, in user units. Every offset below is measured off these. */
const NW = 320;
const NH = 168;

const node = (
  num: string,
  x: number,
  y: number,
  symbol: ReactNode,
  kind: string,
  subs: string,
) => {
  const service = SERVICES.find((entry) => entry.num === num);
  if (!service) return null;

  // Two labels carry a parenthetical qualifier and are wider than the node at
  // full size. Setting the qualifier smaller is what a drawing does with a
  // variant name anyway, and it keeps the taxonomy label intact rather than
  // inventing a shorter one for the plate.
  const qualified = service.label.match(/^(.*?)\s\((.*)\)$/);

  return (
    <Link
      key={num}
      to={`/services/${service.slug}`}
      className="sc-node"
      data-n={num}
      aria-label={`${service.label.replace(" & ", " and ")}: ${kind.toLowerCase()}`}
    >
      <rect className="sc-nbg" x={x} y={y} width={NW} height={NH} />
      <rect
        className="sc-nbr"
        x={x + 0.5}
        y={y + 0.5}
        width={NW - 1}
        height={NH - 1}
      />
      <text className="sc-nidx" x={x + 16} y={y + 32}>
        {num}
      </text>
      <path className="sc-nrule" d={`M${x + 44} ${y + 28} H${x + 228}`} />
      {symbol}
      <text className="sc-ntitle" x={x + 16} y={y + 106}>
        {qualified ? qualified[1] : service.label}
        {qualified && (
          <tspan className="sc-nqual" dx="7">
            ({qualified[2]})
          </tspan>
        )}
      </text>
      <text className="sc-nkind" x={x + 16} y={y + 128}>
        {kind}
      </text>
      <text className="sc-nsubs" x={x + 16} y={y + 152}>
        {subs}
      </text>
    </Link>
  );
};

const CapabilitySchematic = () => (
  <section id="capabilities" className="bg-paper">
    <div className="container section-space-block">
      <Reveal>
        <Kicker>{capabilities.kicker}</Kicker>
        <h2 className="mt-3 font-display text-title font-bold tracking-[-0.03em] text-ink">
          {capabilities.title}
        </h2>
        <p className="mt-6 max-w-xl text-base text-sub">{capabilities.intro}</p>
      </Reveal>

      <Reveal className="mt-12 md:mt-14">
        {/* The sheet keeps its proportions and scrolls sideways rather than
            reflowing: a schematic that rewraps is no longer the same drawing. */}
        <div className="-mx-6 overflow-x-auto px-6 md:mx-0 md:px-0">
          <svg
            className="sc-plate"
            viewBox="0 0 1312 980"
            role="img"
            aria-labelledby="sc-plate-title"
          >
            <title id="sc-plate-title">
              A schematic of the eight ElderOps capabilities: what they stand
              on, how change reaches production, and what keeps it honest once
              it is there.
            </title>
            <defs>
              <pattern
                id="sc-grid"
                width="32"
                height="32"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M32 0 L0 0 0 32"
                  fill="none"
                  stroke="rgb(241 238 231 / 0.045)"
                  strokeWidth="1"
                />
              </pattern>
              <pattern
                id="sc-hx"
                width="4"
                height="4"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <path
                  d="M0 0 V4"
                  stroke="rgb(241 238 231 / 0.30)"
                  strokeWidth="0.7"
                />
              </pattern>
              <pattern
                id="sc-hx2"
                width="4"
                height="4"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(-45)"
              >
                <path
                  d="M0 0 V4"
                  stroke="rgb(241 238 231 / 0.22)"
                  strokeWidth="0.7"
                />
              </pattern>
              <marker
                id="sc-chev"
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto-start-reverse"
              >
                <path
                  d="M2 1.5 L8 5 L2 8.5"
                  fill="none"
                  stroke="rgb(241 238 231 / 0.34)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </marker>
              <marker
                id="sc-chev-live"
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto-start-reverse"
              >
                <path
                  d="M2 1.5 L8 5 L2 8.5"
                  fill="none"
                  stroke="var(--color-signal)"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </marker>
            </defs>
            <rect
              x="0"
              y="0"
              width="1312"
              height="980"
              fill="var(--color-plate)"
            />
            <rect x="0" y="0" width="1312" height="980" fill="url(#sc-grid)" />
            <g stroke="rgb(241 238 231 / 0.14)" strokeWidth="1" fill="none">
              <path d="M22.5 0.5 H1289" />
              <path d="M22.5 979 H1289" />
              <path d="M0.5 22.5 V957" />
              <path d="M1311 22.5 V957" />
            </g>
            <path
              d="M0.5 12.5 V0.5 H12.5"
              stroke="rgb(241 238 231 / 0.30)"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M1311 12.5 V0.5 H1299"
              stroke="rgb(241 238 231 / 0.30)"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M0.5 967 V979 H12.5"
              stroke="rgb(241 238 231 / 0.30)"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M1311 967 V979 H1299"
              stroke="rgb(241 238 231 / 0.30)"
              strokeWidth="1"
              fill="none"
            />
            <g
              stroke="rgb(241 238 231 / 0.13)"
              strokeWidth="1"
              strokeDasharray="2 3"
              fill="none"
            >
              <path d="M158.0 250 H404" />
              <path d="M40 250 H52" />
              <path d="M40 896 H404" />
              <path d="M40 250 V896" />
              <path d="M404 250 V896" />
            </g>
            <text x="56" y="254" className="sc-rlab">
              FOUNDATION
            </text>
            <g
              stroke="rgb(241 238 231 / 0.13)"
              strokeWidth="1"
              strokeDasharray="2 3"
              fill="none"
            >
              <path d="M556.8 250 H820" />
              <path d="M456 250 H468" />
              <path d="M456 688 H820" />
              <path d="M456 250 V688" />
              <path d="M820 250 V688" />
            </g>
            <text x="472" y="254" className="sc-rlab">
              DELIVERY
            </text>
            <g
              stroke="rgb(241 238 231 / 0.13)"
              strokeWidth="1"
              strokeDasharray="2 3"
              fill="none"
            >
              <path d="M964.2 250 H1236" />
              <path d="M872 250 H884" />
              <path d="M872 688 H1236" />
              <path d="M872 250 V688" />
              <path d="M1236 250 V688" />
            </g>
            <text x="888" y="254" className="sc-rlab">
              OPERATE
            </text>
            <path
              className="sc-edge"
              data-a="01"
              data-b="02"
              d="M382 582 L430 582 L430 430 L386 430"
              markerEnd="url(#sc-chev)"
            />
            <path
              className="sc-live"
              data-for="e1"
              d="M382 582 L430 582 L430 430 L386 430"
              style={{ "--len": 244 } as CSSProperties}
            />
            <rect
              className="sc-cut"
              x="408.75"
              y="511"
              width="42.5"
              height="13"
            />
            <text
              className="sc-elab"
              data-a="01"
              data-b="02"
              x="430"
              y="520"
              textAnchor="middle"
            >
              hosts
            </text>
            <path
              className="sc-edge"
              data-a="01"
              data-b="07"
              d="M382 582 L430 582 L430 734 L386 734"
              markerEnd="url(#sc-chev)"
            />
            <path
              className="sc-live"
              data-for="e2"
              d="M382 582 L430 582 L430 734 L386 734"
              style={{ "--len": 244 } as CSSProperties}
            />
            <path
              className="sc-edge"
              data-a="02"
              data-b="03"
              d="M382 374 L474 374"
              markerEnd="url(#sc-chev)"
            />
            <path
              className="sc-live"
              data-for="e3"
              d="M382 374 L474 374"
              style={{ "--len": 92 } as CSSProperties}
            />
            <rect
              className="sc-cut"
              x="406.75"
              y="353"
              width="42.5"
              height="13"
            />
            <text
              className="sc-elab"
              data-a="02"
              data-b="03"
              x="428"
              y="362"
              textAnchor="middle"
            >
              paves
            </text>
            <path
              className="sc-edge"
              data-a="04"
              data-b="03"
              d="M638 498 L638 462"
              markerEnd="url(#sc-chev)"
            />
            <path
              className="sc-live"
              data-for="e4"
              d="M638 498 L638 462"
              style={{ "--len": 36 } as CSSProperties}
            />
            <rect
              className="sc-cut"
              x="648.00"
              y="474"
              width="60.8"
              height="13"
            />
            <text
              className="sc-elab"
              data-a="04"
              data-b="03"
              x="648"
              y="483"
              textAnchor="start"
            >
              enforces
            </text>
            <path
              className="sc-edge"
              data-a="03"
              data-b="05"
              d="M798 374 L890 374"
              markerEnd="url(#sc-chev)"
            />
            <path
              className="sc-live"
              data-for="e5"
              d="M798 374 L890 374"
              style={{ "--len": 92 } as CSSProperties}
            />
            <rect
              className="sc-cut"
              x="816.65"
              y="353"
              width="54.7"
              height="13"
            />
            <text
              className="sc-elab"
              data-a="03"
              data-b="05"
              x="844"
              y="362"
              textAnchor="middle"
            >
              deploys
            </text>
            <path
              className="sc-edge"
              data-a="05"
              data-b="06"
              d="M1054 458 L1054 494"
              markerEnd="url(#sc-chev)"
            />
            <path
              className="sc-live"
              data-for="e6"
              d="M1054 458 L1054 494"
              style={{ "--len": 36 } as CSSProperties}
            />
            <rect
              className="sc-cut"
              x="1064.00"
              y="470"
              width="60.8"
              height="13"
            />
            <text
              className="sc-elab"
              data-a="05"
              data-b="06"
              x="1064"
              y="479"
              textAnchor="start"
            >
              observes
            </text>
            <path
              className="sc-edge"
              data-a="06"
              data-b="07"
              d="M1054 666 L1054 928 L222 928 L222 878"
              markerEnd="url(#sc-chev)"
            />
            <path
              className="sc-live"
              data-for="e7"
              d="M1054 666 L1054 928 L222 928 L222 878"
              style={{ "--len": 1144 } as CSSProperties}
            />
            <rect
              className="sc-cut"
              x="610.65"
              y="910"
              width="54.7"
              height="13"
            />
            <text
              className="sc-elab"
              data-a="06"
              data-b="07"
              x="638"
              y="919"
              textAnchor="middle"
            >
              informs
            </text>
            <rect className="sc-jn" x="427" y="579" width="6" height="6" />
            <path
              className="sc-edge sc-adv"
              data-a="08"
              data-b="02"
              d="M560 224 L560 238 L222 238 L222 286"
              markerEnd="url(#sc-chev)"
            />
            <path
              className="sc-edge sc-adv"
              data-a="08"
              data-b="03"
              d="M638 224 L638 286"
              markerEnd="url(#sc-chev)"
            />
            <path
              className="sc-edge sc-adv"
              data-a="08"
              data-b="05"
              d="M752 224 L752 238 L1054 238 L1054 286"
              markerEnd="url(#sc-chev)"
            />
            <rect className="sc-cut" x="361" y="229" width="60" height="13" />
            <text className="sc-elab" x="391" y="242" textAnchor="middle">
              advises
            </text>
            {node(
              "02",
              62,
              290,
              <g className="sc-sym" transform="translate(302,302)">
                <rect className="s" x="3" y="40" width="58" height="5" />
                <rect className="h" x="3" y="45" width="58" height="8" />
                <rect className="p" x="3" y="45" width="58" height="8" />
                <rect className="h2" x="3" y="53" width="58" height="8" />
                <rect className="p" x="3" y="53" width="58" height="8" />
                <rect className="p" x="8" y="26" width="12" height="14" />
                <rect className="p" x="26" y="26" width="12" height="14" />
                <rect className="p" x="44" y="26" width="12" height="14" />
                <path className="cl" d="M14 22 V63" />
                <path className="cl" d="M32 22 V63" />
                <path className="cl" d="M50 22 V63" />
                <path className="c" d="M6 38 V42" />
                <path className="c" d="M14 38 V42" />
                <path className="c" d="M22 38 V42" />
                <path className="c" d="M30 38 V42" />
                <path className="c" d="M38 38 V42" />
                <path className="c" d="M46 38 V42" />
                <path className="c" d="M54 38 V42" />
                <path className="c" d="M3 18 H14" />
                <path className="c" d="M11 15 L14 18 L11 21" />
              </g>,
              "PLATFORM",
              "golden paths / self-service / developer portal",
            )}
            {node(
              "01",
              62,
              498,
              <g className="sc-sym" transform="translate(302,510)">
                <rect className="p" x="13" y="4" width="38" height="56" />
                <path className="c" d="M17 4 V60" />
                <path className="c" d="M47 4 V60" />
                <rect className="s" x="17" y="7" width="30" height="7" />
                <rect className="h" x="17" y="16" width="30" height="7" />
                <rect className="p" x="17" y="16" width="30" height="7" />
                <rect className="s" x="17" y="25" width="30" height="7" />
                <rect className="h" x="17" y="34" width="30" height="7" />
                <rect className="p" x="17" y="34" width="30" height="7" />
                <rect className="s" x="17" y="43" width="30" height="7" />
                <rect className="p" x="17" y="52" width="30" height="7" />
                <path className="c" d="M21 54 V57" />
                <path className="c" d="M28 54 V57" />
                <path className="c" d="M35 54 V57" />
                <path className="c" d="M42 54 V57" />
                <path className="c" d="M7 4 V60" />
                <path className="c" d="M4 4 H10" />
                <path className="c" d="M4 60 H10" />
                <path className="cl" d="M32 0 V64" />
              </g>,
              "SUBSTRATE",
              "landing zones / IaC / networking / recovery",
            )}
            {node(
              "07",
              62,
              706,
              <g className="sc-sym" transform="translate(302,718)">
                <ellipse className="p" cx="35" cy="16" rx="11" ry="4" />
                <path className="p" d="M24 16 V50" />
                <path className="p" d="M46 16 V50" />
                <path className="p" d="M24 50 A11 4 0 0 0 46 50" />
                <path className="h" d="M24 36 h22 v14 A11 4 0 0 1 24 50 Z" />
                <path className="p" d="M24 36 H46" />
                <path className="c" d="M24 24 H46" />
                <path className="c" d="M24 30 H46" />
                <path className="c" d="M4 12 H14" />
                <path className="c" d="M4 24 H14" />
                <path className="c" d="M4 36 H14" />
                <path className="c" d="M14 12 V36" />
                <path className="p" d="M14 24 H24" />
                <path className="c" d="M21 21 L24 24 L21 27" />
                <path className="c" d="M46 44 H58" />
                <path className="c" d="M58 44 V28" />
                <path className="c" d="M55 31 L58 28 L61 31" />
                <path className="cl" d="M35 6 V60" />
              </g>,
              "STATEFUL",
              "platform / pipelines / governance",
            )}
            {node(
              "03",
              478,
              290,
              <g className="sc-sym" transform="translate(718,302)">
                <circle className="p" cx="16" cy="32" r="11" />
                <circle className="c" cx="16" cy="32" r="7.5" />
                <path className="c" d="M16 32 L16.0 23.0" />
                <path className="c" d="M16 32 L8.2 36.5" />
                <path className="c" d="M16 32 L23.8 36.5" />
                <circle className="s" cx="16" cy="32" r="2.6" />
                <circle className="p" cx="48" cy="32" r="11" />
                <circle className="c" cx="48" cy="32" r="7.5" />
                <path className="c" d="M48 32 L48.0 23.0" />
                <path className="c" d="M48 32 L40.2 36.5" />
                <path className="c" d="M48 32 L55.8 36.5" />
                <circle className="s" cx="48" cy="32" r="2.6" />
                <path className="p" d="M16 21 H48" />
                <path className="p" d="M16 43 H48" />
                <rect className="s" x="20" y="16" width="9" height="4.5" />
                <rect className="s" x="30" y="16" width="9" height="4.5" />
                <rect className="s" x="40" y="16" width="9" height="4.5" />
                <path className="c" d="M26 13 H40" />
                <path className="c" d="M37 10 L40 13 L37 16" />
                <path className="cl" d="M0 32 H64" />
              </g>,
              "PIPELINE",
              "CI/CD / release automation / environments",
            )}
            {node(
              "04",
              478,
              498,
              <g className="sc-sym" transform="translate(718,510)">
                <rect className="h" x="2" y="8" width="20" height="50" />
                <rect className="p" x="2" y="8" width="20" height="50" />
                <rect className="h" x="42" y="8" width="20" height="50" />
                <rect className="p" x="42" y="8" width="20" height="50" />
                <path className="c" d="M22 6 H42" />
                <path className="c" d="M22 60 H42" />
                <rect className="s" x="29" y="4" width="6" height="20" />
                <path className="c" d="M32 0 V4" />
                <path className="c" d="M29 2 H35" />
                <path className="c" d="M22 34 H42" />
                <path className="c" d="M39 31 L42 34 L39 37" />
                <path className="c" d="M22 48 H42" />
                <path className="c" d="M39 45 L42 48 L39 51" />
                <path className="c" d="M22 15 H27" />
                <path className="p" d="M27 11 V19" />
                <path className="cl" d="M32 24 V64" />
              </g>,
              "POLICY",
              "scanning / identity / secrets / supply chain",
            )}
            {node(
              "05",
              894,
              290,
              <g className="sc-sym" transform="translate(1134,302)">
                <path className="c" d="M2 22 H5" />
                <circle className="p" cx="12" cy="22" r="7" />
                <path className="c" d="M12 15 V29" />
                <path className="c" d="M5 22 H19" />
                <path className="s" d="M12 15 A7 7 0 0 1 19 22 L12 22 Z" />
                <path className="c" d="M19 22 H25" />
                <path className="c" d="M22 19 L25 22 L22 25" />
                <rect className="p" x="25" y="10" width="26" height="24" />
                <rect className="h" x="25" y="27" width="26" height="7" />
                <path className="c" d="M29 15 H47" />
                <path className="c" d="M29 20 H41" />
                <path className="c" d="M51 22 H59" />
                <path className="c" d="M59 22 V50" />
                <path className="c" d="M59 50 H47" />
                <rect className="p" x="23" y="42" width="24" height="16" />
                <rect className="h2" x="23" y="42" width="24" height="16" />
                <path className="c" d="M27 50 H43" />
                <path className="c" d="M23 50 H12" />
                <path className="c" d="M12 50 V31" />
                <path className="c" d="M9 34 L12 31 L15 34" />
                <path className="c" d="M4 30 H8" />
                <path className="c" d="M6 28 V32" />
                <path className="cl" d="M12 2 V15" />
                <path className="cl" d="M38 34 V42" />
              </g>,
              "CONTROL LOOP",
              "SLOs / observability / on-call / recovery",
            )}
            {node(
              "06",
              894,
              498,
              <g className="sc-sym" transform="translate(1134,510)">
                <path
                  className="c"
                  d="M12.1 37.3 L11.4 35.6 L10.8 33.8 L10.4 32.1 L10.1 30.2 L10.0 28.4 L10.0 26.6 L10.2 24.7 L10.6 22.9 L11.1 21.2 L11.7 19.4 L12.5 17.8 L13.4 16.2 L14.5 14.7 L15.7 13.3 L17.0 11.9 L18.4 10.7 L19.8 9.7 L21.4 8.7 L23.1 7.9 L24.8 7.2 L26.5 6.7 L28.3 6.3 L30.2 6.1 L32.0 6.0 L33.8 6.1 L35.7 6.3 L37.5 6.7 L39.2 7.2 L40.9 7.9 L42.6 8.7 L44.2 9.7 L45.6 10.7 L47.0 11.9 L48.3 13.3 L49.5 14.7 L50.6 16.2 L51.5 17.8 L52.3 19.4 L52.9 21.2 L53.4 22.9 L53.8 24.7 L54.0 26.6 L54.0 28.4 L53.9 30.2 L53.6 32.1 L53.2 33.8 L52.6 35.6 L51.9 37.3"
                />
                <path
                  className="p"
                  d="M15.7 35.6 L15.1 34.2 L14.6 32.8 L14.3 31.3 L14.1 29.8 L14.0 28.3 L14.0 26.8 L14.2 25.3 L14.5 23.8 L14.9 22.4 L15.4 21.0 L16.1 19.6 L16.8 18.3 L17.7 17.1 L18.6 15.9 L19.7 14.9 L20.8 13.9 L22.1 13.0 L23.3 12.2 L24.7 11.6 L26.1 11.0 L27.5 10.6 L29.0 10.3 L30.5 10.1 L32.0 10.0 L33.5 10.1 L35.0 10.3 L36.5 10.6 L37.9 11.0 L39.3 11.6 L40.7 12.2 L41.9 13.0 L43.2 13.9 L44.3 14.9 L45.4 15.9 L46.3 17.1 L47.2 18.3 L47.9 19.6 L48.6 21.0 L49.1 22.4 L49.5 23.8 L49.8 25.3 L50.0 26.8 L50.0 28.3 L49.9 29.8 L49.7 31.3 L49.4 32.8 L48.9 34.2 L48.3 35.6"
                />
                <path className="c" d="M15.7 35.6 L20.2 33.5" />
                <path className="c" d="M14.5 23.8 L19.4 25.0" />
                <path className="c" d="M20.8 13.9 L23.9 17.8" />
                <path className="c" d="M32.0 10.0 L32.0 15.0" />
                <path className="c" d="M43.2 13.9 L40.1 17.8" />
                <path className="c" d="M49.5 23.8 L44.6 25.0" />
                <path className="c" d="M48.3 35.6 L43.8 33.5" />
                <path className="c" d="M15.7 35.6 L18.0 34.6" />
                <path className="c" d="M14.1 29.8 L16.6 29.6" />
                <path className="c" d="M14.5 23.8 L16.9 24.4" />
                <path className="c" d="M16.8 18.3 L18.9 19.7" />
                <path className="c" d="M20.8 13.9 L22.4 15.8" />
                <path className="c" d="M26.1 11.0 L26.9 13.4" />
                <path className="c" d="M32.0 10.0 L32.0 12.5" />
                <path className="c" d="M37.9 11.0 L37.1 13.4" />
                <path className="c" d="M43.2 13.9 L41.6 15.8" />
                <path className="c" d="M47.2 18.3 L45.1 19.7" />
                <path className="c" d="M49.5 23.8 L47.1 24.4" />
                <path className="c" d="M49.9 29.8 L47.4 29.6" />
                <path className="c" d="M48.3 35.6 L46.0 34.6" />
                <path className="p" d="M32 28 L17.3 24.9" />
                <circle className="s" cx="32" cy="28" r="2.8" />
                <rect className="p" x="26" y="48" width="12" height="14" />
                <rect className="h" x="26" y="48" width="12" height="14" />
                <path className="c" d="M20 55 H26" />
                <path className="c" d="M38 55 H44" />
                <path className="cl" d="M32 2 V62" />
              </g>,
              "GOVERNOR",
              "allocation / guardrails / unit economics",
            )}
            {node(
              "08",
              496,
              56,
              <g className="sc-sym" transform="translate(736,68)">
                <path className="p" d="M32 38 L11 62" />
                <path className="p" d="M32 38 V62" />
                <path className="p" d="M32 38 L53 62" />
                <path className="c" d="M18 54 H46" />
                <rect className="s" x="24" y="34" width="16" height="4" />
                <rect className="p" x="27" y="26" width="10" height="8" />
                <circle className="p" cx="32" cy="21" r="9" />
                <path className="c" d="M23.0 21.0 L25.5 21.0" />
                <path className="c" d="M25.6 14.6 L27.4 16.4" />
                <path className="c" d="M32.0 12.0 L32.0 14.5" />
                <path className="c" d="M38.4 14.6 L36.6 16.4" />
                <path className="c" d="M41.0 21.0 L38.5 21.0" />
                <rect className="p" x="17" y="17" width="30" height="8" />
                <rect className="s" x="13" y="18.5" width="4" height="5" />
                <rect className="s" x="47" y="18.5" width="4" height="5" />
                <path className="cl" d="M51 21 H64" />
                <path className="c" d="M60 18 L63 21 L60 24" />
                <path className="cl" d="M32 6 V38" />
              </g>,
              "CONTROL PLANE",
              "fractional leadership / architecture / diligence",
            )}
          </svg>
        </div>
        <p className="mt-3 font-mono text-xs tracking-[0.1em] text-sub/70 xl:hidden">
          Drag the sheet sideways &rarr;
        </p>
      </Reveal>

      {/* The schedule. Same eight, in the plate's own order, carrying the
          anchors and the one line of plain English each node cannot hold. */}
      <div className="mt-14 grid border-t border-hairline md:mt-16 lg:grid-cols-2 lg:gap-x-16">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            id={service.id}
            className="group relative flex scroll-mt-28 items-baseline gap-5 border-b border-hairline py-5"
          >
            <span className="font-mono text-xs tracking-[0.1em] text-primary">
              {service.num}
            </span>
            <div>
              <h3 className="font-display text-lg font-bold tracking-[-0.015em] text-ink">
                <Link
                  to={`/services/${service.slug}`}
                  className="transition-colors duration-300 after:absolute after:inset-0 group-hover:text-primary"
                >
                  {service.label}
                </Link>
              </h3>
              <p className="mt-1.5 max-w-md text-sm text-sub">
                {service.gerund}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CapabilitySchematic;
