import {
  BadgeCheck,
  HandCoins,
  HeartHandshake,
  MonitorSmartphone,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Photo } from "@/components/ui/photo";
import { PHOTOS } from "@/lib/images";

const FEATURES = [
  {
    icon: MonitorSmartphone,
    title: "Modern tools and\nvisit records",
    body: "Digital care notes families can see, not a paper folder in a cupboard.",
  },
  {
    icon: HandCoins,
    title: "Transparent, fair\npricing",
    body: "Quoted per package with no hidden call-out fees or weekend surcharges.",
  },
  {
    icon: BadgeCheck,
    title: "Experienced and\nvetted carers",
    body: "Enhanced DBS checks and verified right to work before a first shift.",
  },
  {
    icon: HeartHandshake,
    title: "Person-centred\ncare",
    body: "Plans built around the person's routine, not around our rota.",
  },
];

/* Reference section 9: team image beside heading and subtext, with a row
   of four supporting feature columns beneath. */
export function WhyChooseUs() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Photo
            photo={PHOTOS.careTeamGroup}
            ratio="4/3"
            duotone="navy"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="shadow-card"
          />
          <div className="flex flex-col items-start gap-4">
            <span className="inline-flex items-center rounded-pill bg-navy-100 px-3 py-1 text-overline text-navy-800 uppercase">
              Why choose us
            </span>
            <h2 className="text-h2">
              Trusted by families
              <br className="hidden sm:block" /> and by councils
            </h2>
            <p className="measure text-ink-500">
              We are judged by the same standards as the providers we advise,
              which keeps both halves of the business honest.
            </p>
          </div>
        </div>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, body }, i) => (
            <li
              key={title}
              className={`flex flex-col gap-3 ${
                i > 0 ? "lg:border-l lg:border-navy-100 lg:pl-8" : ""
              }`}
            >
              <Icon
                className="size-6 text-care-600"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <h3 className="font-display text-h4 whitespace-pre-line">
                {title}
              </h3>
              <p className="text-small text-ink-500">{body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
