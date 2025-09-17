import React from 'react'

const ServiceCard = ({ service }) => {
  // Check if service and service.duration exist before mapping
  const durations = service?.duration || ['60-120 min']

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-neutral-100 transform hover:-translate-y-1">
      {/* Service Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={service?.image || '/images/4.webp'}
          alt={service?.name || 'Spa Service'}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Time Overlay - Fixed 60-120 min */}
        <div className="absolute top-4 right-4">
          <span className="bg-primary-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            60-120 min
          </span>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Service Content */}
      <div className="p-6">
        {/* Service Title */}
        <h3 className="text-xl font-bold text-neutral-800 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
          {service?.name || 'Spa Service'}
        </h3>
        
        {/* Service Description */}
        <p className="text-neutral-600 mb-4 line-clamp-3 leading-relaxed">
          {service?.description || 'Experience ultimate relaxation with our premium spa treatment.'}
        </p>

        {/* Duration Options */}
        <div className="flex flex-wrap gap-2 mb-6">
          {durations.map((duration, idx) => (
            <span
              key={idx}
              className="bg-neutral-100 text-neutral-700 px-3 py-1.5 rounded-full text-sm font-medium border border-neutral-200"
            >
              {duration}
            </span>
          ))}
        </div>

        {/* Action Buttons - Mobile Optimized */}
        <div className="flex gap-3">
          {/* Call Now Button */}
          <a
            href={`tel:${service?.call || '+91 8147835622'}`}
            className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-2.5 px-3 sm:py-3 sm:px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="hidden sm:inline">Call Now</span>
            <span className="sm:hidden">Call</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${(service?.whatsapp || '+91 8147835622').replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2.5 px-3 sm:py-3 sm:px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            <span className="hidden sm:inline">WhatsApp Now</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard