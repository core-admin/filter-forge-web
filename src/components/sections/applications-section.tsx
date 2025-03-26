'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { APPLICATION_AREAS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Pill, Utensils, Droplet, FlaskConical, Fuel, Zap } from 'lucide-react';

// 图标映射
const iconMap: Record<string, React.ReactNode> = {
  pill: <Pill className="h-6 w-6" />,
  utensils: <Utensils className="h-6 w-6" />,
  droplet: <Droplet className="h-6 w-6" />,
  flask: <FlaskConical className="h-6 w-6" />,
  fuel: <Fuel className="h-6 w-6" />,
  zap: <Zap className="h-6 w-6" />,
};

export function ApplicationsSection() {
  const [activeArea, setActiveArea] = useState(APPLICATION_AREAS[0].title);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-brand-blue-900 mb-4">应用领域</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            我们的过滤解决方案广泛应用于多个行业，满足不同工况下的过滤需求
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">选择行业</h3>
              <div className="space-y-2">
                {APPLICATION_AREAS.map(area => (
                  <button
                    key={area.title}
                    onClick={() => setActiveArea(area.title)}
                    className={cn(
                      'w-full flex items-center p-3 rounded-lg transition-colors text-left',
                      activeArea === area.title
                        ? 'bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-200'
                        : 'hover:bg-gray-50 text-gray-700',
                    )}
                  >
                    <span className="flex-shrink-0 mr-3 text-brand-blue-600">{iconMap[area.icon]}</span>
                    <span className="font-medium">{area.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            {APPLICATION_AREAS.map(area => (
              <div
                key={area.title}
                className={cn(
                  'bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-opacity duration-300',
                  activeArea === area.title ? 'block' : 'hidden',
                )}
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-6 md:p-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-blue-100 text-brand-blue-600 mb-4">
                      {iconMap[area.icon]}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                    <p className="text-gray-600 mb-6">{area.description}</p>
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-900 mb-3">推荐产品:</h4>
                      <ul className="space-y-2">
                        {area.products.map((product, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-500 mr-2"></span>
                            {product}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="group" asChild>
                      <a href={`/applications#${area.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        了解更多
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                  <div className="relative h-64 md:h-auto">
                    <img
                      src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop"
                      alt={area.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
