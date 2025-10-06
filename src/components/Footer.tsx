"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-gray-900 mt-16" style={{ backgroundColor: '#fff4f5' }}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16" style={{ maxWidth: '1170px' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="flex items-center">
              <Image
                src="/Logo/cropped-mgedu.png"
                alt="Mega Global EDUCATION"
                width={240}
                height={72}
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-600 text-base">Your one-stop learning platform</p>
            <div className="space-y-3 text-base text-gray-600">
              <p>Phone: 604-238-6841</p>
              <p>Email: Info@megaeducations.com</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Quick Links</h3>
            <div className="space-y-3">
              <Link 
                href="https://megaeducations.com/refund-policy/" 
                className="block bg-gray-400 text-white px-5 py-3 rounded text-base hover:bg-gray-700 transition-colors w-fit"
              >
                Refund Policy
              </Link>
              <Link href="https://megaeducations.com/course/learnpress-101/" target="_self" className="block text-gray-600 hover:text-red-600 transition-colors text-base">
                Free Access Type
              </Link>
              <Link href="https://megaeducations.com/course/node/" target="_self" className="block text-gray-600 hover:text-red-600 transition-colors text-base">
                Other Free Type
              </Link>
              <Link href="https://megaeducations.com/course/become-a-php-master-and-make-money-fast/" target="_self" className="block text-gray-600 hover:text-red-600 transition-colors text-base">
                Paid Type
              </Link>
              <Link href="https://megaeducations.com/course/improve-your-css-workflow-with-sass/" target="_self" className="block text-gray-600 hover:text-red-600 transition-colors text-base">
                Other Paid Type
              </Link>
              <Link href="https://eduma.thimpress.com/profile/keny/" target="_self" className="block text-gray-600 hover:text-red-600 transition-colors text-base">
                Instructor Profile
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="w-full h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.1234567890!2d-123.127469!3d49.18335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548675243e64354f%3A0xe38c0241ceb48ef1!2s8877%20Odlin%20Crescent%20Unit%20235%2C%20Richmond%2C%20BC%20V6X%203Z7%2C%20Canada!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mega Global Education Location"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-right text-base">
            © Mega Global Education. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
