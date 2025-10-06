"use client";

interface CourseDetailSidebarProps {
  course: {
    price: string;
    subtitle: string;
    courseIncludes: {
      instructor: string;
      duration: string;
      period: string;
      suitableFor: string;
      language: string;
      targetLevel: string;
      passRate: string;
      features: string;
    };
  };
}

export default function CourseDetailSidebar({ course }: CourseDetailSidebarProps) {
  return (
    <div className="lg:sticky lg:top-24">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border">
        <div className="mb-4 sm:mb-6">
          <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{course.price}</div>
          <p className="text-sm sm:text-base text-gray-600">{course.subtitle}</p>
        </div>

        <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
          <a 
            href="https://megaeducations.com/contact-3/" 
            className="w-full bg-gray-900 text-white py-3 px-4 sm:px-6 rounded-lg font-semibold hover:bg-gray-800 transition block text-center text-sm sm:text-base"
          >
            Enroll Now
          </a>
          <a 
            href="https://megaeducations.com/contact-3/" 
            className="w-full border-2 border-gray-900 text-gray-900 py-3 px-4 sm:px-6 rounded-lg font-semibold hover:bg-gray-50 transition block text-center text-sm sm:text-base"
          >
            Free Trial Class
          </a>
        </div>

        <div className="border-t pt-4 sm:pt-6">
          <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Course Includes:</h3>
          <div className="space-y-2 sm:space-y-3">
            <div className="flex justify-between items-start">
              <span className="text-gray-600 text-xs sm:text-sm flex-shrink-0 mr-2">Instructor</span>
              <span className="font-medium text-gray-900 text-xs sm:text-sm text-right">{course.courseIncludes.instructor}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-gray-600 text-xs sm:text-sm flex-shrink-0 mr-2">Duration</span>
              <span className="font-medium text-gray-900 text-xs sm:text-sm text-right">{course.courseIncludes.duration}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-gray-600 text-xs sm:text-sm flex-shrink-0 mr-2">Period</span>
              <span className="font-medium text-gray-900 text-xs sm:text-sm text-right">{course.courseIncludes.period}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-gray-600 text-xs sm:text-sm flex-shrink-0 mr-2">Suitable For</span>
              <span className="font-medium text-gray-900 text-xs sm:text-sm text-right">{course.courseIncludes.suitableFor}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-gray-600 text-xs sm:text-sm flex-shrink-0 mr-2">Language</span>
              <span className="font-medium text-gray-900 text-xs sm:text-sm text-right">{course.courseIncludes.language}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-gray-600 text-xs sm:text-sm flex-shrink-0 mr-2">Target Level</span>
              <span className="font-medium text-gray-900 text-xs sm:text-sm text-right">{course.courseIncludes.targetLevel}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-gray-600 text-xs sm:text-sm flex-shrink-0 mr-2">Pass Rate</span>
              <span className="font-medium text-gray-900 text-xs sm:text-sm text-right">{course.courseIncludes.passRate}</span>
            </div>
          </div>
          
          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t">
            <div className="flex items-start gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-900">Features</p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{course.courseIncludes.features}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

