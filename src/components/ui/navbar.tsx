'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { NAV_ITEMS, COMPANY_NAME } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-colors duration-300',
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent md:bg-transparent bg-black/50 backdrop-blur-sm',
      )}
    >
      <div className="container-wide flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="斯洛特过滤科技"
            className="w-auto h-8 md:h-10 rounded-md"
          />
          <span
            className={cn(
              'font-bold text-lg md:text-xl transition-colors',
              isScrolled ? 'text-brand-blue-900' : 'text-white',
            )}
          >
            {COMPANY_NAME}
          </span>
        </Link>

        {/* 桌面导航 */}
        <nav className="hidden md:flex items-center space-x-1">
          {NAV_ITEMS.map(item => {
            if (item.children) {
              return (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={cn(
                        'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                        isScrolled
                          ? 'text-gray-700 hover:text-brand-blue-600 hover:bg-gray-100'
                          : 'text-white/90 hover:text-white hover:bg-white/10',
                      )}
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    {item.children.map(child => (
                      <DropdownMenuItem key={child.label} asChild>
                        <Link href={child.href}>{child.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                  isScrolled
                    ? 'text-gray-700 hover:text-brand-blue-600 hover:bg-gray-100'
                    : 'text-white/90 hover:text-white hover:bg-white/10',
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <Link href="/contact">联系我们</Link>
          </Button>
        </div>

        {/* 移动端菜单 - 使用Sheet组件 */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden p-2 rounded-md" aria-label="打开菜单">
              <Menu className={cn('h-6 w-6', isScrolled ? 'text-gray-700' : 'text-white')} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] max-w-sm p-0">
            <SheetHeader className="p-4 border-b">
              <SheetTitle className="text-left flex items-center">
                <img
                  src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="斯洛特过滤科技"
                  className="w-auto h-8 mr-2 rounded-md"
                />
                {COMPANY_NAME}
              </SheetTitle>
            </SheetHeader>
            <div className="py-4 overflow-y-auto">
              <nav className="flex flex-col">
                {NAV_ITEMS.map((item, index) => {
                  if (item.children) {
                    return (
                      <Accordion type="single" collapsible key={item.label}>
                        <AccordionItem value={`item-${index}`} className="border-none">
                          <AccordionTrigger className="py-3 px-4 hover:bg-gray-50 hover:no-underline">
                            <span className="font-medium">{item.label}</span>
                          </AccordionTrigger>
                          <AccordionContent className="pt-1 pb-2">
                            <div className="space-y-1">
                              {item.children.map(child => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className="flex items-center py-2 pl-8 pr-4 text-gray-600 hover:text-brand-blue-600 hover:bg-gray-50"
                                >
                                  <ChevronRight className="h-4 w-4 mr-2 text-gray-400" />
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center py-3 px-4 font-medium text-gray-900 hover:text-brand-blue-600 hover:bg-gray-50"
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-6 px-4">
                <Button className="w-full" asChild>
                  <Link href="/contact">联系我们</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
