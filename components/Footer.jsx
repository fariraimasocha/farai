import { Linkedin, Github, Twitter, Copyright } from 'lucide-react';
import Link from 'next/link';
import { Badge } from './ui/badge';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full backdrop-blur-sm bg-white/75 px-5 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Copyright size={18} className="text-gray-900" />
          <span className="text-gray-900 text-sm">
            2025 All rights reserved.
          </span>
        </div>
        <div className="flex items-center space-x-5">
          <Link
            href="https://linkedin.com/in/fariraimasocha"
            className="hover:opacity-80 transition-opacity"
          >
            <Badge variant="outline">
              <Linkedin size={20} className="text-gray-800" />
            </Badge>
          </Link>
          <Link
            href="https://github.com/fariraimasocha"
            className="hover:opacity-80 transition-opacity"
          >
            <Badge variant="outline">
              <Github size={20} className="text-gray-900" />
            </Badge>
          </Link>
          <Link
            href="https://x.com/fariraijames"
            className="hover:opacity-80 transition-opacity"
          >
            <Badge variant="outline">
              <Twitter size={20} className="text-gray-900" />
            </Badge>
          </Link>
        </div>
      </div>
    </footer>
  );
}
