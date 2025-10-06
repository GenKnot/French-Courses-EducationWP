"use client";

import { useState } from "react";
import Image from "next/image";

interface CourseDetailContentProps {
  course: {
    introduction: {
      title: string;
      subtitle: string;
      description: string;
    };
    courseFeatures: string[];
    courseBenefits: string[];
    courseAdvantages: string[];
    curriculum: Array<{
      stage: string;
      lessons: Array<{
        title: string;
        duration: string;
      }>;
    }>;
    instructors: Array<{
      name: string;
      title: string;
      bio: string;
      image: string;
    }>;
    reviews: Array<{
      name: string;
      role: string;
      rating: number;
      comment: string;
      image: string;
    }>;
  };
}

export default function CourseDetailContent({ course }: CourseDetailContentProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "curriculum" | "instructor" | "reviews">("overview");
  const [openStage, setOpenStage] = useState<number | null>(0);

  const tabs = [
    { id: "overview", label: "Overview", icon: "•" },
    { id: "curriculum", label: "Curriculum", icon: "•" },
    { id: "instructor", label: "Instructor", icon: "•" },
    { id: "reviews", label: "Reviews", icon: "•" }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md border">
      <div className="border-b">
        <div className="flex gap-1 p-1 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as "overview" | "curriculum" | "instructor" | "reviews")}
              className={`flex-1 py-3 sm:py-4 px-3 sm:px-6 font-semibold transition text-xs sm:text-sm whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-gray-50 text-gray-900 border-b-2 border-gray-900"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <span className="mr-1 sm:mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 sm:p-6 lg:p-8">
        {activeTab === "overview" && (
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{course.introduction.title}</h2>
              <h3 className="text-lg sm:text-xl text-gray-700 mb-3 sm:mb-4">{course.introduction.subtitle}</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{course.introduction.description}</p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Course Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {course.courseFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Course Benefits</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {course.courseBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Course Advantages</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {course.courseAdvantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm sm:text-base text-gray-700">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === "curriculum" && (
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Curriculum</h2>
            {course.curriculum.map((stage, stageIndex) => (
              <div key={stageIndex} className="border rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenStage(openStage === stageIndex ? null : stageIndex)}
                  className="w-full flex items-center justify-between p-3 sm:p-4 bg-gray-50 hover:bg-gray-100 transition"
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base text-left pr-2">{stage.stage}</span>
                  <svg
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-600 transition-transform flex-shrink-0 ${
                      openStage === stageIndex ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openStage === stageIndex && (
                  <div className="p-3 sm:p-4 space-y-2 sm:space-y-3 bg-white">
                    {stage.lessons.map((lesson, lessonIndex) => (
                      <div key={lessonIndex} className="flex items-center justify-between py-2 sm:py-3 border-b last:border-b-0">
                        <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-900 text-xs sm:text-sm leading-tight">{lesson.title}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2 text-gray-600 flex-shrink-0">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-xs sm:text-sm">{lesson.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "instructor" && (
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Instructors</h2>
            {course.instructors.map((instructor, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 border rounded-lg hover:shadow-md transition">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 mx-auto sm:mx-0">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{instructor.name}</h3>
                  <p className="text-sm sm:text-base text-gray-600 font-medium mb-2 sm:mb-3">{instructor.title}</p>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{instructor.bio}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Student Reviews</h2>
            {course.reviews.map((review, index) => (
              <div key={index} className="p-4 sm:p-6 border rounded-lg hover:shadow-md transition">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm sm:text-base">{review.name}</h4>
                        <p className="text-xs sm:text-sm text-gray-600">{review.role}</p>
                      </div>
                      <div className="flex gap-1 mt-1 sm:mt-0">
                        {[...Array(review.rating)].map((_, i) => (
                          <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed italic">&ldquo;{review.comment}&rdquo;</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

