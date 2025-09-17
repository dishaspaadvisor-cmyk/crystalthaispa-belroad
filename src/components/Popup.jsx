import React, { useEffect, useState } from 'react'
import { Contact } from '../Data/spaData'

const Popup = ({ isOpen, onClose, autoShow = false }) => {
  const contactData = Contact[0]
  const [showPopup, setShowPopup] = useState(false)

  // Auto-show popup after 15 seconds
  useEffect(() => {
    if (autoShow) {
      const timer = setTimeout(() => {
        setShowPopup(true)
      }, 15000) // 15 seconds

      return () => clearTimeout(timer)
    }
  }, [autoShow])

  // Handle manual open/close
  useEffect(() => {
    if (isOpen !== undefined) {
      setShowPopup(isOpen)
    }
  }, [isOpen])

  if (!showPopup) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl transform transition-all duration-300 scale-100 animate-in">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <img src={contactData.image} alt="" />
          </div>
          <h3 className="text-2xl font-bold text-neutral-800 mb-3">
           Crystal Thai Spa
          </h3>
          <p className="text-neutral-600 text-base leading-relaxed">
            20% off discount 
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="space-y-4 mb-6">
          {/* Call Button */}
          <a
            href={`tel:${contactData.phone}`}
            className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105 hover:shadow-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>Call Now</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${contactData.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105 hover:shadow-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            <span>WhatsApp Now</span>
          </a>
        </div>

        {/* Close Button */}
        <button
          onClick={() => {
            setShowPopup(false)
            onClose && onClose()
          }}
          className="w-full py-3 px-6 border-2 border-neutral-300 text-neutral-600 rounded-xl font-medium hover:border-neutral-400 hover:text-neutral-700 transition-all duration-300 hover:bg-neutral-50"
        >
          Maybe Later
        </button>

        {/* Close Icon */}
        <button
          onClick={() => {
            setShowPopup(false)
            onClose && onClose()
          }}
          className="absolute top-4 right-4 w-8 h-8 bg-neutral-100 hover:bg-neutral-200 rounded-full flex items-center justify-center transition-colors"
          aria-label="Close popup"
        >
          <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Popup
