'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CASE_STUDIES } from '@/lib/constants';

export function CaseStudiesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-brand-blue-900 mb-4">成功案例</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            我们为各行业客户提供定制化的过滤解决方案，解决复杂工况下的过滤难题
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map(study => (
            <div
              key={study.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 card-hover"
            >
              <div className="relative h-48">
                <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{study.description}</p>
                <Button variant="outline" size="sm" className="group" asChild>
                  <Link href={`/case-studies/${study.id}`}>
                    查看详情
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group" asChild>
            <Link href="/case-studies">
              查看更多案例
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
