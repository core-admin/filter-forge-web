'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { COMPANY_PHONE, COMPANY_EMAIL, COMPANY_ADDRESS } from '@/lib/constants';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 模拟表单提交
    await new Promise(resolve => setTimeout(resolve, 1000));

    // 重置表单
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    });
    setIsSubmitting(false);

    // 这里可以添加成功提示
    alert('您的信息已提交，我们将尽快与您联系！');
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-brand-blue-900 mb-4">联系我们</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            无论您有任何问题或需求，我们的团队随时准备为您提供专业的支持和服务。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-brand-blue-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-brand-blue-900 mb-6">联系方式</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-brand-blue-100 p-3 rounded-lg text-brand-blue-600 mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">电话</h4>
                    <p className="text-gray-900">{COMPANY_PHONE}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-blue-100 p-3 rounded-lg text-brand-blue-600 mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">邮箱</h4>
                    <p className="text-gray-900">{COMPANY_EMAIL}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-blue-100 p-3 rounded-lg text-brand-blue-600 mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">地址</h4>
                    <p className="text-gray-900">{COMPANY_ADDRESS}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-medium text-gray-500 mb-4">工作时间</h4>
                <div className="space-y-2 text-gray-700">
                  <p>周一至周五: 9:00 - 18:00</p>
                  <p>周六: 9:00 - 12:00</p>
                  <p>周日: 休息</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-brand-blue-900 mb-6">发送询盘</h3>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      姓名 <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      公司名称
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="请输入您的公司名称"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      邮箱 <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="请输入您的邮箱"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      电话
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="请输入您的联系电话"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    留言内容 <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="请详细描述您的需求或问题"
                    rows={5}
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      提交中...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      提交询盘
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
