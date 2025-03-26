import * as React from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react"
import Link from 'next/link';

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
  className?: string;
}

export function Pagination({ currentPage, totalPages, baseUrl, className }: PaginationProps) {
  // 生成页码数组
  const generatePagination = () => {
    // 如果总页数小于等于7，显示所有页码
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // 否则，显示当前页附近的页码和首尾页码
    const pages = [];

    // 总是显示第一页
    pages.push(1);

    // 当前页接近开始
    if (currentPage <= 3) {
      pages.push(2, 3, 4, '...', totalPages);
    }
    // 当前页接近结束
    else if (currentPage >= totalPages - 2) {
      pages.push('...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    }
    // 当前页在中间
    else {
      pages.push('...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
    }

    return pages;
  };

  const pages = generatePagination();

  return (
    <nav className={cn('flex justify-center', className)} aria-label="分页导航">
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <Link
            href={currentPage === 1 ? '#' : `${baseUrl}/${currentPage - 1}`}
            className={cn(
              'block px-3 py-2 ml-0 leading-tight border border-gray-300 rounded-l-lg',
              currentPage === 1
                ? 'text-gray-400 bg-gray-100 cursor-not-allowed'
                : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700',
            )}
            aria-disabled={currentPage === 1}
            tabIndex={currentPage === 1 ? -1 : 0}
          >
            <span className="sr-only">上一页</span>
            <ChevronLeftIcon className="w-5 h-5" />
          </Link>
        </li>

        {pages.map((page, index) => (
          <li key={index}>
            {page === '...' ? (
              <span className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300">...</span>
            ) : (
              <Link
                href={page === currentPage ? '#' : `${baseUrl}/${page}`}
                className={cn(
                  'px-3 py-2 leading-tight border border-gray-300',
                  page === currentPage
                    ? 'text-white bg-brand-blue-600 border-brand-blue-600 hover:bg-brand-blue-700'
                    : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700',
                )}
                aria-current={page === currentPage ? 'page' : undefined}
              >
                {page}
              </Link>
            )}
          </li>
        ))}

        <li>
          <Link
            href={currentPage === totalPages ? '#' : `${baseUrl}/${currentPage + 1}`}
            className={cn(
              'block px-3 py-2 leading-tight border border-gray-300 rounded-r-lg',
              currentPage === totalPages
                ? 'text-gray-400 bg-gray-100 cursor-not-allowed'
                : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700',
            )}
            aria-disabled={currentPage === totalPages}
            tabIndex={currentPage === totalPages ? -1 : 0}
          >
            <span className="sr-only">下一页</span>
            <ChevronRightIcon className="w-5 h-5" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  )
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">

function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className
      )}
      {...props}
    />
  )
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  )
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  )
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
