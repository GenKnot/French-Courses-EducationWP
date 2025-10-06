"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";
import FilterSidebar from "./FilterSidebar";
import CourseHeader from "./CourseHeader";
import Pagination from "./Pagination";
import Footer from "./Footer";
import { coursesData } from "@/data/courses";

interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  views: number;
  students: number;
  category: string;
}

export default function CourseLayout() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newly-published");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState({
    categories: [] as string[],
    priceRange: "all"
  });

  const courses: Course[] = Object.entries(coursesData).map(([slug, courseData], index) => {
    let category = "Basic Courses";
    if (courseData.category === "EXAM") {
      category = "Exam Preparation";
    } else if (courseData.category === "COMBO") {
      category = "Combo Package";
    } else if (courseData.category === "VIP") {
      category = "VIP Course";
    }

    const baseViews = 50 + (index * 7);
    const baseStudents = 10 + (index * 2);

    return {
      id: slug,
      title: courseData.title,
      description: courseData.introduction.description,
      price: parseFloat(courseData.price.replace("$", "").replace(",", "")),
      views: baseViews,
      students: baseStudents,
      category: category
    };
  });

  const handleSearchChange = (search: string) => {
    setSearchTerm(search);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
  };

  const handleFilterChange = (newFilters: { categories: string[]; priceRange: string }) => {
    setFilters(newFilters);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleViewModeChange = (mode: 'grid' | 'list') => {
    setViewMode(mode);
  };

  const filteredCourses = courses.filter(course => {
    const matchesCategory = filters.categories.length === 0 || filters.categories.includes(course.category);
    const matchesPrice = filters.priceRange === "all" || 
      (filters.priceRange === "free" && course.price === 0) ||
      (filters.priceRange === "paid" && course.price > 0);
    const matchesSearch = searchTerm === "" || 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesPrice && matchesSearch;
  }).sort((a, b) => {
    switch (sortBy) {
      case "price-low-high":
        return a.price - b.price;
      case "price-high-low":
        return b.price - a.price;
      case "most-popular":
        return b.students - a.students;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-4" style={{ maxWidth: '1170px' }}>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <CourseHeader
              onSearchChange={handleSearchChange}
              onSortChange={handleSortChange}
              viewMode={viewMode}
              onViewModeChange={handleViewModeChange}
            />
            
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch"
              : ""
            }>
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  description={course.description}
                  price={course.price}
                  views={course.views}
                  students={course.students}
                  category={course.category}
                  viewMode={viewMode}
                />
              ))}
            </div>
            
            <Pagination
              currentPage={currentPage}
              totalPages={1}
              onPageChange={handlePageChange}
            />
          </div>
          
          <div className="lg:w-80">
            <FilterSidebar courses={courses} onFilterChange={handleFilterChange} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
