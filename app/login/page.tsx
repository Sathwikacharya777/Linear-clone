import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative p-6">
      
      {/* 1. Back Button - Top Left */}
      <Link 
        href="/" 
        className="absolute top-8 left-8 flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-medium"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      <div className="w-full max-w-[360px] flex flex-col items-center">
        
        {/* 2. Logo (Using the same style as your Navbar) */}
        <div className="w-12 h-12 bg-white rounded-[10px] flex items-center justify-center mb-8">
          <div className="w-4 h-4 bg-black rotate-45" />
        </div>

        {/* 3. Title */}
        <h1 className="text-xl font-semibold mb-8">Log in to Linear-Clone</h1>

        {/* 4. Login Buttons Container */}
        <div className="w-full flex flex-col gap-3">
          
          {/* Primary Button */}
          <button className="w-full py-2.5 px-4 bg-[#5e6ad2] hover:bg-[#4d59c2] rounded-md text-white font-medium transition-colors text-sm">
            Continue with Google
          </button>

          {/* Secondary Buttons */}
          <button className="w-full py-2.5 px-4 bg-[#161617] hover:bg-[#1c1c1d] border border-white/5 rounded-md text-white font-medium transition-colors text-sm">
            Continue with email
          </button>

          <button className="w-full py-2.5 px-4 bg-[#161617] hover:bg-[#1c1c1d] border border-white/5 rounded-md text-white font-medium transition-colors text-sm">
            Continue with SAML SSO
          </button>

          <button className="w-full py-2.5 px-4 bg-[#161617] hover:bg-[#1c1c1d] border border-white/5 rounded-md text-white font-medium transition-colors text-sm">
            Log in with passkey
          </button>
        </div>

        {/* 5. Footer Text */}
        <p className="mt-12 text-zinc-500 text-sm">
          Don't have an account? {' '}
          <Link href="/signup" className="text-white hover:underline">Sign up</Link> 
          {' '} or {' '}
          <Link href="/about" className="text-white hover:underline">learn more</Link>
        </p>

      </div>
    </main>
  );
}