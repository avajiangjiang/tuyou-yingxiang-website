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

        <div className="mt-8 grid gap-2.5 sm:mt-12 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
          {schools.map((school) => (
            <div
              key={school.id}
              className="flex items-center gap-3 rounded-xl bg-white p-4 ring-1 ring-dark/5 sm:gap-4 sm:p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-400 text-sm font-bold text-white sm:h-11 sm:w-11">
                {school.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold text-dark sm:text-base">
                  {school.name}
                </div>
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
