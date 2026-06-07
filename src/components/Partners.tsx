import type { PartnerSchool } from "@/types";
import { CATEGORY_LABELS } from "@/lib/constants";

interface PartnersProps {
  schools: PartnerSchool[];
}

export default function Partners({ schools }: PartnersProps) {
  return (
    <section id="partners" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold tracking-widest text-brand-600 uppercase">
            05 · 合作学校
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            值得信赖的合作伙伴
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {schools.map((school) => (
            <div
              key={school.id}
              className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-100 text-lg font-bold text-brand-600">
                {school.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-gray-900">{school.name}</div>
                <div className="text-sm text-gray-500">
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
