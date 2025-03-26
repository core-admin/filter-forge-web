import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  description: string;
  features?: string[];
  href: string;
  className?: string;
  variant?: 'default' | 'horizontal';
}

export function ProductCard({
  id,
  name,
  image,
  description,
  features,
  href,
  className,
  variant = 'default',
}: ProductCardProps) {
  if (variant === 'horizontal') {
    return (
      <div
        className={cn(
          'group bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row card-hover',
          className,
        )}
      >
        <div className="relative h-48 md:h-auto md:w-1/3">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6 md:w-2/3">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          {features && features.length > 0 && (
            <div className="space-y-2 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-gray-600">
                  <Check className="h-4 w-4 text-brand-blue-500 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}
          <Button variant="outline" size="sm" className="group" asChild>
            <Link href={href}>
              查看详情
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn('group bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 card-hover', className)}
    >
      <div className="relative h-48 md:h-64">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        {features && features.length > 0 && (
          <div className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-gray-600">
                <Check className="h-4 w-4 text-brand-blue-500 mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        )}
        <Button variant="outline" size="sm" className="w-full group" asChild>
          <Link href={href}>
            查看详情
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
