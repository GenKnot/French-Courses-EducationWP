"use client";

import Link from "next/link";
import Image from "next/image";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  viewMode: 'grid' | 'list';
}

export default function CourseCard({
  id,
  title,
  description,
  price,
  category,
  viewMode
}: CourseCardProps) {
  if (viewMode === 'list') {
    return (
      <Link href={`/courses/${id}`} className="block">
        <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 hover:shadow-md transition-all duration-200 cursor-pointer">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="w-full sm:w-32 h-32 sm:h-24 flex items-center justify-center rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
              <Image
                src="/Coures.png"
                alt="Course"
                width={128}
                height={96}
                className="w-full h-full object-cover"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                <div className="flex-1 min-w-0">
                  <div className="px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full inline-block mb-2">
                    {category}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-2">{description}</p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <div className="text-lg sm:text-xl font-bold text-red-600">${price.toFixed(0)} CAD</div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/courses/${id}`} className="block">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer">
        <div className="relative h-32 flex items-center justify-center">
          <Image
            src="/Coures.png"
            alt="Course"
            width={400}
            height={128}
            className="w-full h-full object-cover"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        
        <div className="relative -mt-8 flex justify-center mb-2">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center border-4 border-white">
            <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        </div>
        
        <div className="px-6 pb-6">
          <div className="text-center mb-4">
            <p className="text-sm text-gray-500 mb-1">Admin</p>
            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{title}</h3>
            <p className="text-sm text-gray-600 mb-3 leading-relaxed line-clamp-3">{description}</p>
            <div className="w-12 h-0.5 bg-blue-400 mx-auto"></div>
          </div>
          
          <div className="text-center">
            <p className="text-xl font-bold text-red-600">${price.toFixed(0)} CAD</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
