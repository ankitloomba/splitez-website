import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-[#100D22] text-white overflow-hidden">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* Logo placeholder */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-lg">
              S
            </div>
            <span className="text-xl font-bold">SplitEZ</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
            <a href="#" className="hover:text-white transition">Product</a>
            <a href="#" className="hover:text-white transition">Pricing</a>
            <a href="#" className="hover:text-white transition">Blog</a>
            <a href="#" className="hover:text-white transition">Support</a>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-500 transition px-6 py-2.5 rounded-full text-sm font-semibold">
            Get the app
          </button>
        </nav>

        {/* Hero Content */}
        <div className="container mx-auto px-6 pt-16 pb-32 flex flex-col lg:flex-row items-center">
          {/* Left Side: Text */}
          <div className="lg:w-1/2 mt-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block mr-2"></span>
              Free forever · Ad-free from ₹99/month
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Nobody <br /> remembers <br /> who paid <br /> for the cab.
            </h1>
            
            <p className="text-lg text-gray-400 mb-10 max-w-md leading-relaxed">
              SplitEZ does. Add the expense, split it however you like, and everyone in the group sees the same number — down to the last rupee.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
              <button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 transition px-8 py-3.5 rounded-full text-base font-semibold">
                Get the app — free
              </button>
              <button className="w-full sm:w-auto bg-transparent hover:bg-white/5 transition px-8 py-3.5 rounded-full text-base font-semibold flex items-center justify-center">
                See how it works
              </button>
            </div>
            
            {/* Badges / Trust points */}
            <div className="flex flex-wrap gap-x-12 gap-y-4 text-xs text-gray-500 font-medium">
              <div className="flex flex-col">
                <span>iOS &</span>
                <span>Android</span>
              </div>
              <div className="flex flex-col">
                <span>Built for ₹, works in 30+</span>
                <span>currencies</span>
              </div>
              <div className="flex flex-col">
                <span>No bank access,</span>
                <span>ever</span>
              </div>
            </div>
          </div>
          
          {/* Right Side: Mockup Placeholder */}
          <div className="lg:w-1/2 relative mt-20 lg:mt-0 flex justify-center">
            {/* Decorative background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-900/20 blur-3xl rounded-full"></div>
            
            {/* Phone Mockup Frame */}
            <div className="relative w-[300px] h-[600px] bg-[#1a172c] rounded-[40px] border-[8px] border-[#2a2640] shadow-2xl shadow-indigo-900/50 overflow-hidden flex flex-col">
              {/* Fake App UI */}
              <div className="p-6 pt-10">
                <div className="flex justify-between items-center mb-6">
                  <div className="w-8 h-8 rounded-full bg-white/10"></div>
                  <div className="w-8 h-8 rounded-full bg-white/10"></div>
                </div>
                <div className="text-xs text-gray-400">Overall, you are owed</div>
                <div className="text-3xl font-bold text-green-400 mb-8">₹1,220</div>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="font-bold">Groups & trips</div>
                  <div className="text-xs text-indigo-400 font-semibold">See all</div>
                </div>
                
                {/* Fake Card 1 */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-4 mb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-bold mb-1">Goa trip</div>
                      <div className="text-xs text-white/70">4 people · 22-29 Aug</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-white/70">owes you</div>
                      <div className="font-bold">₹2,340</div>
                    </div>
                  </div>
                </div>

                {/* Fake Card 2 */}
                <div className="bg-white/5 rounded-2xl p-4 mb-3 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center mr-3">🏠</div>
                  <div className="flex-1">
                    <div className="font-bold text-sm">Flat 402</div>
                    <div className="text-xs text-gray-400">3 people · Group</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400">you owe</div>
                    <div className="font-bold text-red-400">₹1,120</div>
                  </div>
                </div>
                
              </div>
              
              {/* Fake Floating Action Button */}
              <div className="absolute bottom-6 right-6 w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center text-2xl shadow-lg shadow-indigo-900/50">
                +
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE TAPS SECTION */}
      <section className="py-24 bg-gray-50 text-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-xs font-bold tracking-widest text-indigo-600 uppercase mb-4">How it works</div>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <h2 className="text-5xl font-extrabold tracking-tight max-w-xl">
              Three taps from dinner to settled.
            </h2>
            <a href="#" className="text-indigo-600 font-semibold hover:underline mt-4 md:mt-0">
              The full walkthrough →
            </a>
          </div>
          
          {/* Add Split Settle Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 font-bold rounded-full flex items-center justify-center mb-6">1</div>
              <h3 className="text-2xl font-bold mb-4">Add</h3>
              <p className="text-gray-500 mb-8">Scan the bill or type the amount. Category, payer and date fill themselves in.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-teal-50 text-teal-600 font-bold rounded-full flex items-center justify-center mb-6">2</div>
              <h3 className="text-2xl font-bold mb-4">Split</h3>
              <p className="text-gray-500 mb-8">Equally, or not. Exact amounts, shares and percentages are all one tap away.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-yellow-50 text-yellow-600 font-bold rounded-full flex items-center justify-center mb-6">3</div>
              <h3 className="text-2xl font-bold mb-4">Settle</h3>
              <p className="text-gray-500 mb-8">One balance per person. Send a reminder, mark it paid, and the group clears.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
