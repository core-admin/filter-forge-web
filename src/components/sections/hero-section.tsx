'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HERO_SLIDES } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating],
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % HERO_SLIDES.length);
  }, [currentSlide, goToSlide, HERO_SLIDES.length]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, [currentSlide, goToSlide, HERO_SLIDES.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[800px]">
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            'absolute inset-0 transition-opacity duration-500',
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0',
          )}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container-wide">
              <div className="max-w-3xl animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{slide.title}</h1>
                <p className="text-xl text-white/90 mb-8">{slide.description}</p>
                <Button size="lg" asChild>
                  <Link href={slide.cta.href}>{slide.cta.label}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
        aria-label="上一张"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
        aria-label="下一张"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center space-x-2">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              'w-3 h-3 rounded-full transition-colors',
              index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/70',
            )}
            aria-label={`转到幻灯片 ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
