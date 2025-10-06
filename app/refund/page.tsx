import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/landing" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Refund Policy
          </h1>
          <p className="text-gray-600 mb-10">Last updated: January 2024</p>

          {/* Trust Badge */}
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 mb-10 flex items-start gap-4">
            <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-green-900 mb-2">60-Day Money-Back Guarantee</h3>
              <p className="text-green-800">
                We stand behind our product. If you're not satisfied with InfiniteMix for any reason,
                request a full refund within 60 days of purchase.
              </p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. AppSumo Purchases</h2>
              <p className="mb-3">
                InfiniteMix is available through AppSumo with a 60-day money-back guarantee.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Refund requests must be made within 60 days of your original purchase date</li>
                <li>All refunds are processed through AppSumo, not directly through InfiniteMix</li>
                <li>To request a refund, log in to your AppSumo account and follow their refund process</li>
                <li>Refunds typically process within 5-10 business days</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How to Request a Refund</h2>
              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Step-by-Step Process:</h3>
                <ol className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">1</span>
                    <span>Log in to your AppSumo account at <a href="https://appsumo.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">appsumo.com</a></span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">2</span>
                    <span>Go to "My Products" and find your InfiniteMix purchase</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">3</span>
                    <span>Click the "Request Refund" button</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">4</span>
                    <span>Fill out the brief refund request form (optional feedback)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">5</span>
                    <span>Submit your request and wait for confirmation</span>
                  </li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Refund Eligibility</h2>
              <p className="mb-3">You are eligible for a full refund if:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You purchased within the last 60 days</li>
                <li>You purchased through AppSumo</li>
                <li>You have not previously requested a refund for this product</li>
              </ul>

              <p className="mt-4 mb-3">No questions asked! Common reasons for refunds include:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The product doesn't meet your expectations</li>
                <li>You found a better alternative</li>
                <li>Technical issues that couldn't be resolved</li>
                <li>The features don't match your needs</li>
                <li>Simply changed your mind</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. After Your Refund</h2>
              <p className="mb-3">Once your refund is approved:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your InfiniteMix account will be deactivated</li>
                <li>You will lose access to the Service immediately</li>
                <li>Your files and projects will be permanently deleted after 7 days</li>
                <li>Refunds are processed to your original payment method</li>
                <li>It may take 5-10 business days for the refund to appear in your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Non-Refundable Situations</h2>
              <p className="mb-3">Refunds may not be available in these cases:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>More than 60 days have passed since purchase</li>
                <li>You violated our Terms of Service (account banned)</li>
                <li>Fraudulent purchase or chargeback initiated</li>
                <li>Purchase was not made through AppSumo</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Try Before You Refund</h2>
              <p className="mb-4">
                Before requesting a refund, we encourage you to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Check our <Link href="/help" className="text-purple-600 hover:underline">Help Center</Link> for solutions</li>
                <li>Watch our <Link href="/tutorials" className="text-purple-600 hover:underline">video tutorials</Link> to learn all features</li>
                <li>Contact our <Link href="/contact" className="text-purple-600 hover:underline">support team</Link> - we're here to help!</li>
                <li>Review the <Link href="/guide" className="text-purple-600 hover:underline">Getting Started Guide</Link></li>
              </ul>
              <p className="mt-4">
                Many issues can be resolved quickly with help from our support team. We genuinely want you to succeed with InfiniteMix!
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Alternative: Account Pause</h2>
              <p>
                Not ready to commit but don't want to refund? Contact us about temporarily pausing your account.
                You can come back anytime within your license period without losing access.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Questions About Refunds</h2>
              <p className="mb-3">
                If you have questions about the refund process:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>AppSumo Refunds:</strong> Contact AppSumo support directly</li>
                <li><strong>Product Questions:</strong> <Link href="/contact" className="text-purple-600 hover:underline">Contact our support team</Link></li>
                <li><strong>Technical Issues:</strong> We may be able to help resolve the problem</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Our Commitment</h2>
              <p>
                We believe in our product and want you to be completely satisfied. The 60-day money-back guarantee
                gives you plenty of time to thoroughly test InfiniteMix and decide if it's right for you.
                No risk, no hassle, no questions asked.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
              <div className="bg-purple-50 rounded-lg p-4">
                <p><strong>General Support:</strong> <a href="mailto:support@infinitemix.com" className="text-purple-600 hover:underline">support@infinitemix.com</a></p>
                <p><strong>AppSumo Support:</strong> <a href="https://appsumo.com/support" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">appsumo.com/support</a></p>
                <p><strong>Live Chat:</strong> <Link href="/contact" className="text-purple-600 hover:underline">Available in-app</Link></p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
