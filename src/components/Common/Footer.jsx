import { Footer as FooterData } from '../../Data/spaData'

const Footer = () => {
  const footerData = FooterData[0]

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
               <img src={footerData.image} alt="" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{footerData.logo}</h3>
                <p className="text-primary-300">New Bel Road, Bangalore</p>
              </div>
            </div>
            <p className="text-neutral-300 leading-relaxed mb-6 max-w-md">
              {footerData.tagline}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/919071555550"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
              <a
                href="tel:+919071555550"
                className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>
              <a
                href="mailto:crystalthaispa.bangalore@gmail.com"
                className="w-10 h-10 bg-neutral-600 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-300">SERVICES</h4>
            <ul className="space-y-3">
              {footerData.services.map((service, index) => (
                <li key={index}>
                  <a
                    href={`/#services`}
                    className="text-neutral-300 hover:text-primary-300 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-300">USEFUL LINKS</h4>
            <ul className="space-y-3">
              {footerData.usefulLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link === 'HOME' ? '/' : `/${link.toLowerCase()}`}
                    className="text-neutral-300 hover:text-primary-300 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Nearest Spa Locations */}
      <div className="border-t border-neutral-800">
        <div className="container mx-auto px-4 py-8">
          <h4 className="text-lg font-semibold mb-6 text-primary-300 text-center">
            Best Spa Locations Near You
          </h4>
          <div className="grid md:grid-cols-5 gap-4">
            {footerData.nearestSpa.map((spa, index) => (
              <div key={index} className="text-center">
                <a
                  href={`tel:${spa.links}`}
                  className="text-neutral-300 hover:text-primary-300 transition-colors text-sm"
                >
                  {spa.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-neutral-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm">
              {footerData.copyright}
            </p>
            <div className="flex space-x-6 text-sm text-neutral-400">
              <a href="/privacy-policy" className="hover:text-primary-300 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-conditions" className="hover:text-primary-300 transition-colors">
                Terms & Conditions
              </a>
              <a href="/disclaimer" className="hover:text-primary-300 transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
