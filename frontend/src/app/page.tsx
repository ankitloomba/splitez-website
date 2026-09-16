import Image from "next/image";
import { PrismaClient } from '@prisma/client';
import { Logo } from "@/components/Logo";

const prisma = new PrismaClient();

async function getFaqs() {
  try {
    const faqs = await prisma.faq.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return faqs;
  } catch (error) {
    return null;
  }
}

export default async function Home() {
  const faqs = await getFaqs();
  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-[#100D22] text-white overflow-hidden">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
          <Logo reversed={true} size={36} />
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

      {/* WHAT'S INSIDE SECTION */}
      <section className="py-24 bg-white text-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-xs font-bold tracking-widest text-teal-600 uppercase mb-4">WHAT'S INSIDE</div>
          <h2 className="text-5xl font-extrabold tracking-tight max-w-3xl mb-16 leading-tight">
            Every argument about money, pre-empted.
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-50/80 p-8 rounded-3xl border border-gray-100 hover:shadow-md transition">
              <div className="w-8 h-8 bg-indigo-100 rounded flex items-center justify-center mb-6">
                <div className="w-3 h-3 bg-indigo-500 rounded-sm"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Four ways to split</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Equal, exact, shares, percentage. Change your mind after the fact and everyone's balance follows.</p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-gray-50/80 p-8 rounded-3xl border border-gray-100 hover:shadow-md transition">
              <div className="w-8 h-8 bg-teal-100 rounded flex items-center justify-center mb-6">
                <div className="w-3 h-3 bg-teal-500 rounded-sm"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Groups and trips</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Banner images, categories, duplicate last month's flat, archive the trip when it's done.</p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-gray-50/80 p-8 rounded-3xl border border-gray-100 hover:shadow-md transition">
              <div className="w-8 h-8 bg-yellow-100 rounded flex items-center justify-center mb-6">
                <div className="w-3 h-3 bg-yellow-500 rounded-sm"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Reminders that land</h3>
              <p className="text-gray-500 text-sm leading-relaxed">In-app first, then a share link through any messaging app. Nudges, not spam.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-50/80 p-8 rounded-3xl border border-gray-100 hover:shadow-md transition">
              <div className="w-8 h-8 bg-indigo-100 rounded flex items-center justify-center mb-6">
                <div className="w-3 h-3 bg-indigo-500 rounded-sm"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Receipt scanning</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Point the camera at the bill. The amount, date and merchant pre-fill — you just confirm.</p>
            </div>

            {/* Card 5 */}
            <div className="bg-gray-50/80 p-8 rounded-3xl border border-gray-100 hover:shadow-md transition">
              <div className="w-8 h-8 bg-teal-100 rounded flex items-center justify-center mb-6">
                <div className="w-3 h-3 bg-teal-500 rounded-sm"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Exports that survive audits</h3>
              <p className="text-gray-500 text-sm leading-relaxed">CSV, Excel or PDF from any group, with the full activity log attached.</p>
            </div>

            {/* Card 6 */}
            <div className="bg-gray-50/80 p-8 rounded-3xl border border-gray-100 hover:shadow-md transition">
              <div className="w-8 h-8 bg-yellow-100 rounded flex items-center justify-center mb-6">
                <div className="w-3 h-3 bg-yellow-500 rounded-sm"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Group Buy</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Curated partner rates on things groups actually buy, split automatically across the group.</p>
            </div>
          </div>
          
          <div className="mt-8">
            <a href="#" className="text-indigo-600 font-semibold hover:underline text-sm">
              All features in detail →
            </a>
          </div>
        </div>
      </section>

      {/* TRIPS SECTION */}
      <section className="py-24 bg-[#193F34] text-white">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="text-xs font-bold tracking-widest text-teal-300 uppercase mb-4">TRIPS</div>
            <h2 className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              Four people, three currencies, one number at the end.
            </h2>
            <p className="text-lg text-teal-100 mb-10 max-w-md leading-relaxed">
              Pay in baht, log it in baht. SplitEZ converts at the day's rate, keeps the original on the receipt, and settles everyone in rupees when you're home.
            </p>
            <button className="bg-[#112d24] hover:bg-[#0c201a] transition px-6 py-3 rounded-full text-sm font-semibold border border-[#235043]">
              Trip features →
            </button>
          </div>
          
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
            {/* Mockup Card */}
            <div className="bg-[#1f4b3e] p-6 rounded-3xl border border-teal-800/30 w-full max-w-md shadow-2xl">
              <div className="text-xs font-bold tracking-widest text-teal-300 uppercase mb-6">BANGKOK · 4 DAYS</div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-6 border-b border-teal-700/50">
                  <div>
                    <div className="font-bold text-lg">Grand Palace tickets</div>
                    <div className="text-sm text-teal-200">Split 4 ways</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">฿2,000</div>
                    <div className="text-xs text-teal-300">₹5,240</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pb-6 border-b border-teal-700/50">
                  <div>
                    <div className="font-bold text-lg">Street food night</div>
                    <div className="text-sm text-teal-200">Rhea paid</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">฿860</div>
                    <div className="text-xs text-teal-300">₹2,253</div>
                  </div>
                </div>

                <div className="flex justify-between items-center pb-6 border-b border-teal-700/50">
                  <div>
                    <div className="font-bold text-lg">Airport transfer</div>
                    <div className="text-sm text-teal-200">Split 3 ways</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">฿1,200</div>
                    <div className="text-xs text-teal-300">₹3,144</div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-bold text-lg">Hotel · 3 nights</div>
                    <div className="text-sm text-teal-200">You paid</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">฿9,600</div>
                    <div className="text-xs text-teal-300">₹25,152</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-24 bg-gray-50 text-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs font-bold tracking-widest text-pink-600 uppercase mb-4">PRICING</div>
            <h2 className="text-5xl lg:text-6xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
              Free forever. Ad-free for the price of one chai a week.
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
            {/* Free Tier */}
            <div className="flex-1 bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <div className="text-6xl font-extrabold mb-2">₹0</div>
              <p className="text-gray-500 text-sm mb-8">Everything that splits money</p>
              
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-center text-sm font-medium"><span className="text-green-500 mr-3">✓</span> Unlimited groups, trips and expenses</li>
                <li className="flex items-center text-sm font-medium"><span className="text-green-500 mr-3">✓</span> All four split modes</li>
                <li className="flex items-center text-sm font-medium"><span className="text-green-500 mr-3">✓</span> Balances, settle-up and reminders</li>
                <li className="flex items-center text-sm font-medium"><span className="text-green-500 mr-3">✓</span> CSV and PDF export</li>
                <li className="flex items-center text-sm font-medium"><span className="text-green-500 mr-3">✓</span> Multi-currency trips</li>
              </ul>
            </div>
            
            {/* Plus Tier */}
            <div className="flex-1 bg-[#100D22] text-white p-10 rounded-[40px] shadow-xl relative flex flex-col">
              <div className="absolute top-8 right-8 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                7 DAYS FREE
              </div>
              <h3 className="text-2xl font-bold mb-2">SplitEZ Plus</h3>
              <div className="flex items-end mb-2">
                <div className="text-6xl font-extrabold mr-2">₹99</div>
                <div className="text-sm text-gray-400 mb-2">/month · ₹890/yr</div>
              </div>
              <p className="text-gray-400 text-sm mb-8">No ads, and the smart bits</p>
              
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-center text-sm font-medium"><span className="text-white mr-3">✓</span> No banner or interstitial ads</li>
                <li className="flex items-center text-sm font-medium"><span className="text-white mr-3">✓</span> AI receipt scanning, unlimited</li>
                <li className="flex items-center text-sm font-medium"><span className="text-white mr-3">✓</span> Charts per person, group and trip</li>
                <li className="flex items-center text-sm font-medium"><span className="text-white mr-3">✓</span> Excel export and scheduled reports</li>
                <li className="flex items-center text-sm font-medium"><span className="text-white mr-3">✓</span> Priority support</li>
              </ul>
              
              <button className="w-full bg-indigo-600 hover:bg-indigo-500 transition py-4 rounded-2xl text-sm font-bold">
                Compare plans
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-white text-gray-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-16 max-w-5xl">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">Questions people actually ask.</h2>
            <a href="#" className="text-indigo-600 font-semibold hover:underline text-sm flex items-center">
              Full help centre →
            </a>
          </div>
          
          <div className="md:w-2/3">
            <div className="divide-y divide-gray-100">
              
              {faqs && faqs.length > 0 ? (
                faqs.map((faq: any) => {
                  // Handle both Strapi v4 and v5 data structures
                  const question = faq.attributes?.question || faq.question;
                  const id = faq.id || faq.documentId;
                  
                  return (
                    <div key={id} className="py-6 flex justify-between items-center cursor-pointer group">
                      <h3 className="text-lg font-bold group-hover:text-indigo-600 transition">{question}</h3>
                      <span className="text-indigo-400 text-xl font-light">+</span>
                    </div>
                  );
                })
              ) : (
                /* Fallback if Strapi is not connected */
                <>
                  <div className="py-6 flex justify-between items-center cursor-pointer group">
                    <h3 className="text-lg font-bold group-hover:text-indigo-600 transition">Does SplitEZ move money? (Not connected to Strapi yet)</h3>
                    <span className="text-indigo-400 text-xl font-light">+</span>
                  </div>
                  <div className="py-6 flex justify-between items-center cursor-pointer group">
                    <h3 className="text-lg font-bold group-hover:text-indigo-600 transition">Can I use it if my friends don't?</h3>
                    <span className="text-indigo-400 text-xl font-light">+</span>
                  </div>
                  <div className="py-6 flex justify-between items-center cursor-pointer group">
                    <h3 className="text-lg font-bold group-hover:text-indigo-600 transition">What happens on a trip with three currencies?</h3>
                    <span className="text-indigo-400 text-xl font-light">+</span>
                  </div>
                  <div className="py-6 flex justify-between items-center cursor-pointer group">
                    <h3 className="text-lg font-bold group-hover:text-indigo-600 transition">Are the ads bad?</h3>
                    <span className="text-indigo-400 text-xl font-light">+</span>
                  </div>
                </>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight mb-2">Settle the trip before the tan fades.</h2>
            <p className="text-indigo-100">Free on iOS and Android. Ad-free from ₹99 a month.</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-white text-indigo-600 hover:bg-gray-50 transition px-8 py-4 rounded-full font-bold shadow-lg">
              Get the app
            </button>
            <button className="bg-indigo-700 hover:bg-indigo-800 transition px-8 py-4 rounded-full font-bold border border-indigo-500">
              See pricing
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#100D22] text-white pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-12 border-b border-white/10 pb-16 mb-8">
            
            <div className="md:w-1/3">
              <div className="mb-6">
                <Logo reversed={true} size={32} />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
                Shared expenses, made EZ. Built in India, for the group chat that always ends in "who paid for what".
              </p>
              <div className="flex gap-4">
                <button className="bg-white/5 border border-white/10 hover:bg-white/10 transition px-4 py-2 rounded-lg text-sm font-medium">App Store</button>
                <button className="bg-white/5 border border-white/10 hover:bg-white/10 transition px-4 py-2 rounded-lg text-sm font-medium">Google Play</button>
              </div>
            </div>
            
            <div className="flex gap-12 sm:gap-24">
              <div>
                <h4 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-6">Product</h4>
                <ul className="space-y-4 text-sm text-gray-300">
                  <li><a href="#" className="hover:text-white transition">Features</a></li>
                  <li><a href="#" className="hover:text-white transition">How it works</a></li>
                  <li><a href="#" className="hover:text-white transition">Pricing & Plus</a></li>
                  <li><a href="#" className="hover:text-white transition">Security & privacy</a></li>
                  <li><a href="#" className="hover:text-white transition">Download</a></li>
                  <li><a href="#" className="hover:text-white transition">Support</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-6">Company</h4>
                <ul className="space-y-4 text-sm text-gray-300">
                  <li><a href="#" className="hover:text-white transition">About</a></li>
                  <li><a href="#" className="hover:text-white transition">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition">Contact</a></li>
                  <li><a href="#" className="hover:text-white transition">Press kit</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-6">Legal</h4>
                <ul className="space-y-4 text-sm text-gray-300">
                  <li><a href="#" className="hover:text-white transition">Terms of use</a></li>
                  <li><a href="#" className="hover:text-white transition">Privacy policy</a></li>
                  <li><a href="#" className="hover:text-white transition">Refund policy</a></li>
                  <li><a href="#" className="hover:text-white transition">Ad & data choices</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
            <div>© 2026 SplitEZ. All rights reserved.</div>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-gray-300">Terms</a>
              <a href="#" className="hover:text-gray-300">Privacy</a>
              <a href="#" className="hover:text-gray-300">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
