"use client";

import Image from "next/image";
import Link from "next/link";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  views: number;
  students: number;
  category: string;
  viewMode: 'grid' | 'list';
}

export default function CourseCard({
  id,
  title,
  description,
  price,
  views,
  students,
  category,
  viewMode
}: CourseCardProps) {
  if (viewMode === 'list') {
    return (
      <Link href={`/courses/${id}`} className="block">
        <div className="rounded-lg p-4 h-[230px] border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200 cursor-pointer" style={{backgroundColor: '#f9fafc', marginBottom: '24px'}}>
          <div className="flex items-center gap-6 h-full">
            <div className="w-48 h-48 flex items-center justify-center rounded-xl p-4" style={{backgroundColor: '#f9fafc'}}>
              <img
                src="/Coures.png"
                alt="Course"
                className="w-44 h-40 object-cover"
                style={{borderRadius: '12px'}}
              />
            </div>
            
            <div className="flex-1">
              <div className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full inline-block mb-2">
                {category}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                    </svg>
                    <span className="ml-2">{views} views</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16,4C18.2,4 20,5.8 20,8C20,10.2 18.2,12 16,12C13.8,12 12,10.2 12,8C12,5.8 13.8,4 16,4M16,13C18.67,13 24,14.33 24,17V20H8V17C8,14.33 13.33,13 16,13M8,12C10.2,12 12,10.2 12,8C12,5.8 10.2,4 8,4C5.8,4 4,5.8 4,8C4,10.2 5.8,12 8,12M8,13C5.33,13 0,14.33 0,17V20H6V17C6,15.9 6.4,14.9 7,14.1C7.6,14.4 8.3,14.5 9,14.5C9.7,14.5 10.4,14.4 11,14.1C11.6,14.9 12,15.9 12,17V20H18V17C18,14.33 12.67,13 10,13H8Z"/>
                    </svg>
                    <span className="ml-2">{students} students</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-red-600">${price.toFixed(0)}</div>
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
          <img
            src="/Coures.png"
            alt="Course"
            className="w-full h-full object-cover"
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
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                </svg>
                <span>{views}</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16,4C18.2,4 20,5.8 20,8C20,10.2 18.2,12 16,12C13.8,12 12,10.2 12,8C12,5.8 13.8,4 16,4M16,13C18.67,13 24,14.33 24,17V20H8V17C8,14.33 13.33,13 16,13M8,12C10.2,12 12,10.2 12,8C12,5.8 10.2,4 8,4C5.8,4 4,5.8 4,8C4,10.2 5.8,12 8,12M8,13C5.33,13 0,14.33 0,17V20H6V17C6,15.9 6.4,14.9 7,14.1C7.6,14.4 8.3,14.5 9,14.5C9.7,14.5 10.4,14.4 11,14.1C11.6,14.9 12,15.9 12,17V20H18V17C18,14.33 12.67,13 10,13H8Z"/>
                </svg>
                <span>{students}</span>
              </div>
            </div>
            
            <div className="text-right">
              <p className="text-lg font-bold text-red-600">${price.toFixed(0)}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
