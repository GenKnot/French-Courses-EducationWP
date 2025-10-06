"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  views: number;
  students: number;
  category: string;
}

interface FilterSidebarProps {
  courses: Course[];
  onFilterChange: (filters: {
    categories: string[];
    priceRange: string;
  }) => void;
}

export default function FilterSidebar({ courses, onFilterChange }: FilterSidebarProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState("all");

  const categories = courses.reduce((acc, course) => {
    const existing = acc.find(cat => cat.name === course.category);
    if (existing) {
      existing.count++;
    } else {
      acc.push({ name: course.category, count: 1 });
    }
    return acc;
  }, [] as { name: string; count: number }[]);

  const freeCount = courses.filter(course => course.price === 0).length;
  const paidCount = courses.length - freeCount;

  const handleCategoryChange = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(newCategories);
    onFilterChange({ categories: newCategories, priceRange: selectedPrice });
  };

  const handlePriceChange = (price: string) => {
    setSelectedPrice(price);
    onFilterChange({ categories: selectedCategories, priceRange: price });
  };

  return (
    <div className="w-80 space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Course categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.name} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.name)}
                onChange={() => handleCategoryChange(category.name)}
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">
                {category.name} ({category.count})
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Price</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="price"
              value="all"
              checked={selectedPrice === "all"}
              onChange={(e) => handlePriceChange(e.target.value)}
              className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300"
            />
            <span className="ml-2 text-sm text-gray-700">All ({courses.length})</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="price"
              value="free"
              checked={selectedPrice === "free"}
              onChange={(e) => handlePriceChange(e.target.value)}
              className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300"
            />
            <span className="ml-2 text-sm text-gray-700">Free ({freeCount})</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="price"
              value="paid"
              checked={selectedPrice === "paid"}
              onChange={(e) => handlePriceChange(e.target.value)}
              className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300"
            />
            <span className="ml-2 text-sm text-gray-700">Paid ({paidCount})</span>
          </label>
        </div>
      </div>

      <button className="text-white py-2 px-4 rounded-md text-sm font-semibold transition-colors" style={{backgroundColor: '#8bcae1'}}>
        FILTER RESULTS
      </button>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">ALL COURSES</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <a
                key={category.name}
                href="#"
                className="block text-sm text-gray-600 hover:text-red-600 transition-colors"
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">LATEST COURSES</h3>
          <div className="space-y-3">
            <Link href="/courses/basic-course-0-preparatory" className="block">
              <div className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded transition-colors">
                <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">FR</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900">Basic Course 0 - Preparatory</h4>
                  <p className="text-xs text-gray-500">Pronunciation and Basic Vocabulary</p>
                  <p className="text-sm font-bold text-gray-900">$160.00</p>
                </div>
              </div>
            </Link>
            <Link href="/courses/basic-course-preparatory-a1" className="block">
              <div className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded transition-colors">
                <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">FR</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900">Basic Course Preparatory - A1</h4>
                  <p className="text-xs text-gray-500">Basic Grammar and Speaking Introduction</p>
                  <p className="text-sm font-bold text-gray-900">$680.00</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
