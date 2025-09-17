import React, { useState } from 'react'
import { Services as ServicesData } from '../Data/spaData'
import ServiceCard from '../components/Cards/ServiceCard'

const Services = () => {
  // Access the nested services array from the data structure
  const services = ServicesData[0]?.services || []
  
  // 🔥 NEW: State to control how many services to show
  const [showAllServices, setShowAllServices] = useState(false)
  
  // 🔥 NEW: Calculate how many services to display
  const servicesToShow = showAllServices ? services : services.slice(0, 6)
  
  // 🔥 NEW: Check if there are more than 6 services
  const hasMoreServices = services.length > 6

  // Check if services exist and have data
  if (!services || services.length === 0) {
    return (
      <section id="services" className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
            Our Premium Spa Services
          </h2>
          <p className="text-xl text-neutral-600">
            Services are being loaded. Please check back soon.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-neutral-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
            Our Premium Spa Services
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Experience the ultimate relaxation with our expert therapists and premium spa treatments. 
            Each service is carefully crafted to provide you with the perfect blend of luxury and wellness.
          </p>
        </div>

        {/* 🔥 UPDATED: Services Grid - Now dynamic based on state */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {servicesToShow.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        
        {hasMoreServices && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAllServices(!showAllServices)}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              {showAllServices ? 'Show Less Services' : 'View All Services'}
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 sm:p-10 text-white shadow-2xl">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              Ready to Experience Ultimate Relaxation?
            </h3>
            <p className="text-lg sm:text-xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Book your appointment today and discover the perfect blend of luxury and wellness. 
              Our expert therapists are ready to provide you with an unforgettable spa experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              {/* Call Now Button */}
              <a
                href={`tel:${services[0]?.call || '+91 8147835622'}`}
                className="bg-white text-primary-600 px-6 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-neutral-100 transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105 hover:shadow-2xl"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Call Now</span>
              </a>
              
              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${(services[0]?.whatsapp || '+91 8147835622').replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-6 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-green-600 transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105 hover:shadow-2xl"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.87 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.87 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.87 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.87 0 0020.885 3.488"/>
                </svg>
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services