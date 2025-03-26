import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/utils';

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category?: string;
}

export function NewsCard({ id, title, excerpt, date, image, category }: NewsCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 card-hover">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {category && (
          <div className="absolute top-4 left-4 bg-brand-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
            {category}
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <time dateTime={date}>{formatDate(date)}</time>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <Button variant="outline" size="sm" className="group" asChild>
          <Link href={`/news/${id}`}>
            阅读更多
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
