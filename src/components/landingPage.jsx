import landingImage from '../assets/landing.jpg'


export const LandingPage = () => {
    return(
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <img src={landingImage} className="h-7 sm:h-8" />
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <p>An advanced event management system designed to help you plan, organize, and manage events efficiently.</p>
                  <p className="font-bold text-lg">Features:</p>
                  <ul className="list-disc space-y-2">
                   <li className="flex items-start">
                      <span className="h-6 flex items-center sm:h-7">
                        <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 002 0V7zm-1 12a1 1 0 102 0v-3a1 1 0 00-2 0v3z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <p className="ml-2">
                        Event Scheduling
                      </p>
                   </li>
                   <li className="flex items-start">
                      <span className="h-6 flex items-center sm:h-7">
                        <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 002 0V7zm-1 12a1 1 0 102 0v-3a1 1 0 00-2 0v3z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <p className="ml-2">
                        Attendee Management
                      </p>
                   </li>
                   <li className="flex items-start">
                      <span className="h-6 flex items-center sm:h-7">
                        <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 002 0V7zm-1 12a1 1 0 102 0v-3a1 1 0 00-2 0v3z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <p className="ml-2">
                        Venue Booking
                      </p>
                   </li>
                  </ul>
                </div>
                <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                  <p>
                   Start your free trial today.
                  </p>
                </div>
                <div className="mt-8">
                  <div className="rounded-lg shadow-md">
                   <a href="signup" className="block w-full text-center rounded-lg border border-transparent px-4 py-3 text-base font-medium text-white bg-cyan-600 hover:bg-cyan-700">
                      Get started
                   </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
    </div>
    )
}