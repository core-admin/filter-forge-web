import { cn } from '@/lib/utils';
import { Breadcrumb } from './breadcrumb';

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbItems: Array<{ label: string; href?: string }>;
  className?: string;
}

export function PageHeader({ title, description, breadcrumbItems, className }: PageHeaderProps) {
  return (
    <div className={cn('space-y-4', className)}>
      <Breadcrumb
        items={breadcrumbItems}
        className="hidden sm:flex mb-2 px-4 sm:px-0 overflow-x-auto pb-1 scrollbar-none"
      />

      {/* 移动端面包屑 - 优化显示 */}
      <div className="sm:hidden flex overflow-x-auto scrollbar-none pb-1 px-4">
        <Breadcrumb
          items={
            breadcrumbItems.length > 2
              ? [
                  breadcrumbItems[0],
                  { label: '...', href: breadcrumbItems[breadcrumbItems.length - 2].href },
                  breadcrumbItems[breadcrumbItems.length - 1],
                ]
              : breadcrumbItems
          }
        />
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">{title}</h1>
        {description && <p className="text-gray-600 max-w-3xl">{description}</p>}
      </div>
    </div>
  );
}
