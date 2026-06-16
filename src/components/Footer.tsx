import Link from "next/link";



export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-3xl font-heading text-white tracking-wider flex items-center gap-2 mb-4">
              <span className="text-primary">IRON</span>FORGE
            </Link>
            <p className="text-gray-400 max-w-sm">
              Forge your limits in an environment designed for those who take their training seriously. Elite equipment, expert guidance.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['About', 'Programs', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>123 Industrial Park Road</li>
              <li>Mumbai, MH 400001</li>
              <li>+91 98765 43210</li>
              <li>info@ironforgegym.com</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Rivutrion Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
