interface CourseDetailHeroProps {
  course: {
    title: string;
    subtitle: string;
    teacher: string;
    category: string;
    difficulty: string;
    images: string[];
  };
}

export default function CourseDetailHero({ course }: CourseDetailHeroProps) {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 leading-tight">{course.title}</h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">{course.subtitle}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 items-start sm:items-center text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-semibold">SM</span>
            </div>
            <div>
              <p className="text-xs text-gray-500">Teacher</p>
              <p className="font-medium text-gray-900 text-sm sm:text-base">{course.teacher}</p>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <p className="text-xs text-gray-500">Categories</p>
            <p className="font-medium text-gray-900 text-sm sm:text-base">{course.category}</p>
          </div>
          
          <div className="flex-shrink-0">
            <p className="text-xs text-gray-500">Difficulty Level</p>
            <p className="font-medium text-gray-900 text-sm sm:text-base">{course.difficulty}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

