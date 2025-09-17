import React, { useState, useEffect } from 'react'

const Herosection = () => {
    const herosectionData = [
        {
            title: "Expert Staff Available",
            subtitle: "Luxury Spa in New Bel Road, Bangalore",
            phone: "+91 8147835622",
            whatsapp: "+91 8147835622",
            image: "/hero/1.png"
        },
        {
            title: "Bangkok Style Massage",
            subtitle: "Luxury Spa in New Bel Road, Bangalore",
            phone: "+91 8147835622",
            whatsapp: "+91 8147835622",
            image: "/hero/3.png"
        },
        {
            title: "Best Luxurious Spa in New Bel Road",
            subtitle: "Luxury Spa in New Bel Road, Bangalore",
            phone: "+91 8147835622",
            whatsapp: "+91 8147835622",
            image: "/hero/2.png"
        }
    ]

    const [currentSlide, setCurrentSlide] = useState(0)
    const [showScrollToTop, setShowScrollToTop] = useState(false)

    // Carousel functions
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % herosectionData.length)
    }

    const previousSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + herosectionData.length) % herosectionData.length)
    }

    const goToSlide = (index) => {
        setCurrentSlide(index)
    }

    // Auto-play carousel
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 5000) // Change slide every 5 seconds

        return () => clearInterval(interval)
    }, [nextSlide])

    // Scroll to top functionality
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollToTop(true)
            } else {
                setShowScrollToTop(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }



    return (
        <div className="relative min-h-screen">
            {/* Full Screen Background Carousel */}
            <div className="relative h-screen overflow-hidden">
                {herosectionData.map((hero, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        {/* Background Image */}
                        <img
                            src={hero.image}
                            alt={hero.title}
                            className="w-full h-full object-cover"
                        />
                        
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/40"></div>
                        
                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center text-white px-4 max-w-4xl">
                                <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
                                    {hero.title}
                                </h1>
                                <p className="text-xl lg:text-2xl text-primary-200 mb-8 font-medium drop-shadow-lg">
                                    {hero.subtitle}
                                </p>
                                
                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href={`tel:${hero.phone}`}
                                        className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                        <span>Call Now</span>
                                    </a>
                                    
                                    <a
                                        href={`https://wa.me/${hero.whatsapp.replace(/\D/g, '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                        </svg>
                                        <span>WhatsApp Now</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigation Arrows */}
                <button
                    onClick={previousSlide}
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 z-10 hover:scale-110"
                    aria-label="Previous slide"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                
                <button
                    onClick={nextSlide}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 z-10 hover:scale-110"
                    aria-label="Next slide"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Carousel Navigation Dots */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
                    {herosectionData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-4 h-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                                index === currentSlide 
                                    ? 'bg-white scale-125' 
                                    : 'bg-white/50 hover:bg-white/80 hover:scale-110'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </div>

            {/* Scroll to Top Button */}
            {showScrollToTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-20 right-6 z-50 bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 transform hover:scale-110 group"
                    aria-label="Scroll to top"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-primary-600 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        Back to Top
                    </div>
                </button>
            )}
        </div>
    )
}

export default Herosection