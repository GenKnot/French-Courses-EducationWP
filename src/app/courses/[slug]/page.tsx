import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseDetailHero from "@/components/CourseDetailHero";
import CourseDetailContent from "@/components/CourseDetailContent";
import CourseDetailSidebar from "@/components/CourseDetailSidebar";
import { coursesData } from "@/data/courses";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return Object.keys(coursesData).map((slug) => ({
    slug: slug,
  }));
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const courseData = coursesData[slug as keyof typeof coursesData];

  if (!courseData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-[90px]">
        <CourseDetailHero course={courseData} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <div className="relative w-full h-64 sm:h-80 lg:h-96 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={courseData.images[0]}
                alt={courseData.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CourseDetailContent course={courseData} />
          </div>
          <div className="lg:col-span-1 order-first lg:order-last">
            <CourseDetailSidebar course={courseData} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

