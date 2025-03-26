import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function AboutSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-brand-blue-900 mb-6">关于斯洛特过滤科技</h2>
            <p className="text-gray-700 mb-6 text-lg">
              河北斯洛特过滤科技有限公司是一家深耕工业精密过滤及自清洗过滤领域的综合性企业，拥有十余年行业经验和优秀的设计研发能力，为客户提供全方位的过滤解决方案。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-brand-blue-600 font-bold text-3xl mb-2">10+</div>
                <div className="text-gray-600">年行业经验</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-brand-blue-600 font-bold text-3xl mb-2">500+</div>
                <div className="text-gray-600">成功案例</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-brand-blue-600 font-bold text-3xl mb-2">20+</div>
                <div className="text-gray-600">专利技术</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-brand-blue-600 font-bold text-3xl mb-2">50+</div>
                <div className="text-gray-600">专业技术人员</div>
              </div>
            </div>
            <Button className="group" asChild>
              <Link href="/about">
                了解更多
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop"
                alt="斯洛特过滤科技工厂"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
