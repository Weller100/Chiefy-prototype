import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => (
  <footer className="bg-black pt-20 pb-8">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div>
          <Link href="/" className="flex items-center gap-2 mb-6">
            <Image src="/chiefy-logo.png" alt="Chiefy" width={32} height={32} />
            <span className="font-bold text-xl">Chiefy</span>
          </Link>
          <p className="text-white/70">
            Transforming property development careers through AI-powered mentoring.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6">Product</h3>
          <ul className="space-y-4">
            <li><Link href="#" className="text-white/70 hover:text-white">Features</Link></li>
            <li><Link href="#" className="text-white/70 hover:text-white">Pricing</Link></li>
            <li><Link href="#" className="text-white/70 hover:text-white">Enterprise</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6">Company</h3>
          <ul className="space-y-4">
            <li><Link href="#" className="text-white/70 hover:text-white">About Us</Link></li>
            <li><Link href="#" className="text-white/70 hover:text-white">Careers</Link></li>
            <li><Link href="#" className="text-white/70 hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6">Legal</h3>
          <ul className="space-y-4">
            <li><Link href="#" className="text-white/70 hover:text-white">Terms</Link></li>
            <li><Link href="#" className="text-white/70 hover:text-white">Privacy</Link></li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-white/10">
        <p className="text-white/50">© 2024 Chiefy. All rights reserved.</p>
        <Image src="/apple-store-badge.png" alt="Download on App Store" width={120} height={40} />
      </div>
    </div>
  </footer>
); 