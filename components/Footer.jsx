import { Linkedin, Github, Twitter, Copyright } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full backdrop-blur-sm bg-white/75 px-5 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Copyright size={18} className="text-gray-900" />
          <span className="text-gray-900 text-sm">2025 All rights reserved.</span>
        </div>
        <div className="flex items-center space-x-5">
          <Link href="linkedin.com/in/fariraimasocha" className="hover:opacity-80 transition-opacity">
            <Linkedin size={20} className="text-gray-900" />
          </Link>
          <Link href="https://github.com/fariraimasocha" className="hover:opacity-80 transition-opacity">
            <Github size={20} className="text-gray-900" />
          </Link>
          <Link href="https://x.com/fariraijames" className="hover:opacity-80 transition-opacity">
            <Twitter size={20} className="text-gray-900" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
