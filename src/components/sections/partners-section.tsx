import { PARTNERS } from '@/lib/constants';

export function PartnersSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-brand-blue-900 mb-4">合作伙伴</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            我们与众多行业领先企业建立了长期稳定的合作关系，为各行各业提供可靠的过滤解决方案
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {PARTNERS.map(partner => (
            <div
              key={partner.name}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center h-24 md:h-32"
            >
              <img src={partner.logo} alt={partner.name} className="max-h-12 md:max-h-16 max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
