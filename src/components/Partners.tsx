import SectionTitle from "@/components/SectionTitle";
import type { PartnerSchool } from "@/types";
import { CATEGORY_LABELS } from "@/lib/constants";

interface PartnersProps {
  schools: PartnerSchool[];
}

export default function Partners({ schools }: PartnersProps) {
  return (
    <section id="partners" className="section-padding bg-cream">
      <div className="container-max">
        <SectionTitle
          number="05"
          title="合作学校"
          subtitle="值得信赖的合作伙伴"
          align="center"
        />

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {schools.map((school) => (
            <div
              key={school.id}
              className="flex items-center gap-4 bg-white p-5 ring-1 ring-dark/5 transition hover:ring-brand-500/30"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-brand-500 text-sm font-bold text-white">
                {school.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-dark">{school.name}</div>
                <div className="text-xs text-dark/45">
                  {CATEGORY_LABELS[school.level]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
