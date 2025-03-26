'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PRODUCT_CATEGORIES } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { ProductCard } from '@/components/ui/product-card';

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState(PRODUCT_CATEGORIES[0].id);

  const activeProducts = PRODUCT_CATEGORIES.find(category => category.id === activeCategory)?.products || [];

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-brand-blue-900 mb-4">产品中心</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            我们提供全系列的工业过滤设备和解决方案，从标准过滤器到定制化系统，满足不同行业的各种需求。
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {PRODUCT_CATEGORIES.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                activeCategory === category.id
                  ? 'bg-brand-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              description={product.description}
              features={product.features}
              href={`/products/${activeCategory}/${product.id}`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group" asChild>
            <Link href="/products">
              查看全部产品
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
