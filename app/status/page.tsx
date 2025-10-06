import Link from 'next/link';
import { ArrowLeft, CheckCircle, AlertCircle, Clock } from 'lucide-react';

export default function StatusPage() {
  // In a real app, this would fetch live status from an API
  const services = [
    { name: 'Web Application', status: 'operational', uptime: '99.98%' },
    { name: 'API', status: 'operational', uptime: '99.99%' },
    { name: 'File Upload', status: 'operational', uptime: '99.95%' },
    { name: 'Audio Processing', status: 'operational', uptime: '99.97%' },
    { name: 'Video Generation', status: 'operational', uptime: '99.96%' },
    { name: 'CDN Delivery', status: 'operational', uptime: '99.99%' },
  ];

  const incidents = [
    {
      date: 'Jan 15, 2024',
      title: 'Scheduled Maintenance',
      status: 'resolved',
      description: 'Database optimization and security patches applied.',
      duration: '30 minutes'
    },
    {
      date: 'Jan 8, 2024',
      title: 'Slow Processing Times',
      status: 'resolved',
      description: 'Increased server capacity to handle peak demand.',
      duration: '2 hours'
    },
    {
      date: 'Dec 28, 2023',
      title: 'API Rate Limiting Issues',
      status: 'resolved',
      description: 'Fixed incorrect rate limiting configuration.',
      duration: '45 minutes'
    }
  ];

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
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            System Status
          </h1>
          <p className="text-gray-600 mb-10">Real-time status and uptime for InfiniteMix services</p>

          {/* Overall Status */}
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 mb-10 flex items-center gap-6">
            <CheckCircle className="w-16 h-16 text-green-600 flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-bold text-green-900 mb-2">All Systems Operational</h2>
              <p className="text-green-800 text-lg">
                All services are running smoothly. Last checked: {new Date().toLocaleString()}
              </p>
            </div>
          </div>

          {/* Service Status */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Status</h2>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <div>
                      <h3 className="font-bold text-gray-900">{service.name}</h3>
                      <p className="text-sm text-gray-600">Uptime: {service.uptime} (last 30 days)</p>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold">
                    Operational
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Incidents */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Incidents</h2>
            <div className="space-y-6">
              {incidents.map((incident, index) => (
                <div key={index} className="border-l-4 border-gray-300 pl-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{incident.date}</p>
                      <h3 className="font-bold text-gray-900 text-lg">{incident.title}</h3>
                    </div>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-bold">
                      {incident.status}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-2">{incident.description}</p>
                  <p className="text-sm text-gray-500">Duration: {incident.duration}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Uptime Stats */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Uptime Statistics</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">99.97%</div>
                <p className="text-gray-600">Last 30 Days</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">99.95%</div>
                <p className="text-gray-600">Last 90 Days</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">99.93%</div>
                <p className="text-gray-600">Last Year</p>
              </div>
            </div>
          </div>

          {/* Subscribe to Updates */}
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-10 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Get Status Updates</h2>
            <p className="text-xl mb-6 text-white/90">
              Subscribe to receive email notifications about service incidents and maintenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
