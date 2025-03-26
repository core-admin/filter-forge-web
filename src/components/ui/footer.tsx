import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { NAV_ITEMS, COMPANY_NAME, COMPANY_PHONE, COMPANY_EMAIL, COMPANY_ADDRESS } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop"
                alt="斯洛特过滤科技"
                className="w-auto h-10 rounded-md"
              />
              <span className="font-bold text-xl">斯洛特过滤科技</span>
            </div>
            <p className="text-gray-400 mb-6">十余年专注工业过滤领域，为客户提供高品质的过滤系统和专业的技术支持。</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">快速链接</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">联系我们</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">{COMPANY_PHONE}</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">{COMPANY_EMAIL}</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">{COMPANY_ADDRESS}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">订阅我们</h3>
            <p className="text-gray-400 mb-4">订阅我们的电子邮件，获取最新产品和技术资讯。</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="您的邮箱地址"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-brand-blue-600 text-white rounded-md hover:bg-brand-blue-700 transition-colors"
              >
                订阅
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} {COMPANY_NAME}. 保留所有权利.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-500 hover:text-gray-400 text-sm">
                隐私政策
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-gray-400 text-sm">
                使用条款
              </Link>
              <Link href="/sitemap" className="text-gray-500 hover:text-gray-400 text-sm">
                网站地图
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
