import { PrismaClient } from '@prisma/client'
import { createFaq, deleteFaq } from './actions'

const prisma = new PrismaClient()

export default async function AdminDashboard() {
  const faqs = await prisma.faq.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
          <h2 className="text-xl font-bold mb-4">Add New FAQ</h2>
          <form action={createFaq} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Question</label>
              <input 
                type="text" 
                name="question" 
                required 
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-indigo-500"
                placeholder="e.g. Does SplitEZ move money?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Answer</label>
              <textarea 
                name="answer" 
                required 
                rows={3}
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-indigo-500"
                placeholder="Your answer here..."
              />
            </div>
            <button 
              type="submit" 
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-indigo-700 transition"
            >
              Save FAQ
            </button>
          </form>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-4">Manage Existing FAQs</h2>
          {faqs.length === 0 ? (
            <p className="text-gray-500">No FAQs added yet.</p>
          ) : (
            <div className="divide-y divide-gray-100">
              {faqs.map((faq) => (
                <div key={faq.id} className="py-4 flex justify-between items-start gap-4">
                  <div>
                    <h3 className="font-bold text-lg">{faq.question}</h3>
                    <p className="text-gray-600 text-sm mt-1">{faq.answer}</p>
                  </div>
                  <form action={deleteFaq}>
                    <input type="hidden" name="id" value={faq.id} />
                    <button 
                      type="submit" 
                      className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition text-sm font-bold"
                    >
                      Delete
                    </button>
                  </form>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
