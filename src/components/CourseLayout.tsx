"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";
import FilterSidebar from "./FilterSidebar";
import CourseHeader from "./CourseHeader";
import Pagination from "./Pagination";
import Footer from "./Footer";

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

  const courses: Course[] = [
    {
      id: "1",
      title: "Pronunciation and Basic Vocabulary",
      description: "Master French pronunciation and build essential vocabulary foundation for beginners",
      price: 160.00,
      views: 45,
      students: 12,
      category: "Basic Courses"
    },
    {
      id: "2", 
      title: "Basic Grammar and Speaking Introduction",
      description: "Learn fundamental grammar rules and start speaking with confidence in French",
      price: 680.00,
      views: 78,
      students: 18,
      category: "Basic Courses"
    },
    {
      id: "3",
      title: "Grammar Application and Speaking Advancement", 
      description: "Apply grammar knowledge in real conversations and improve your fluency",
      price: 1200.00,
      views: 92,
      students: 25,
      category: "Basic Courses"
    },
    {
      id: "4",
      title: "Writing Skills, Advanced Grammar and Speaking Training",
      description: "Develop writing abilities and master advanced grammatical structures",
      price: 2600.00,
      views: 67,
      students: 15,
      category: "Basic Courses"
    },
    {
      id: "5",
      title: "Advanced Writing Techniques and Speaking Training",
      description: "Perfect your writing style and achieve native-level speaking skills",
      price: 3400.00,
      views: 54,
      students: 12,
      category: "Basic Courses"
    },
    {
      id: "6",
      title: "Complete Exam Training with Examiner Coaching",
      description: "Comprehensive exam preparation with personalized examiner guidance",
      price: 4500.00,
      views: 89,
      students: 22,
      category: "Exam Preparation"
    },
    {
      id: "7",
      title: "Complete Exam Training for Educational Institutions",
      description: "Specialized exam preparation program designed for schools and institutions",
      price: 3600.00,
      views: 76,
      students: 19,
      category: "Exam Preparation"
    },
    {
      id: "8",
      title: "Combo Zero to CLB5 Exam Package",
      description: "Complete learning path from beginner to CLB5 with exam preparation",
      price: 5640.00,
      views: 98,
      students: 28,
      category: "Combo Package"
    },
    {
      id: "9",
      title: "Combo Zero to B2 Exam Package",
      description: "Comprehensive package from beginner to B2 level with exam prep",
      price: 8240.00,
      views: 85,
      students: 24,
      category: "Combo Package"
    },
    {
      id: "10",
      title: "Combo Zero to CLB7 Ultimate Package",
      description: "Ultimate learning package from beginner to CLB7 excellence",
      price: 11640.00,
      views: 72,
      students: 20,
      category: "Combo Package"
    },
    {
      id: "11",
      title: "VIP Unlimited Learning Program",
      description: "Unlimited learning with personalized one-on-one examiner coaching",
      price: 19999.00,
      views: 156,
      students: 35,
      category: "VIP Course"
    }
  ];

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
              totalResults={filteredCourses.length}
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
