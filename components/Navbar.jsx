'use client';

import { BadgePlus, Github, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Link from 'next/link';

const Navbar = () => {
  const handleNewChat = () => {
    window.dispatchEvent(new Event('newChat'));
  };

  return (
    <nav className="sticky top-0 backdrop-blur-sm bg-white/75 px-5 py-4 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer relative group"
          whileHover={{ scale: 1.05 }}
          onClick={handleNewChat}
        >
          <motion.div
            animate={{ rotate: 0 }}
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <BadgePlus size={25} className="text-gray-900" />
          </motion.div>
          <span className="absolute left-full ml-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            New Chat
          </span>
        </motion.div>
        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            href="https://github.com/fariraimasocha/farai"
          >
            <Button>
              <Github size={18} />
              <span className="font-medium text-sm hidden sm:inline-block">
                Star on GitHub
              </span>
            </Button>
          </Link>

          <Dialog>
            <DialogTrigger asChild>
              <button
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                aria-label="Information"
              >
                <Info size={20} className="text-gray-600" />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  About AI Search
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4 space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Features</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Advanced AI-powered search capabilities</li>
                    <li>Real-time trending topics</li>
                    <li>Quick access to popular platforms</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    How to Use
                  </h3>
                  <ul className="list-decimal list-inside space-y-2 text-gray-600">
                    <li>Type your query or click a trending topic</li>
                    <li>Click the up arrow or press Enter to search</li>
                    <li>Use social media shortcuts for quick access</li>
                    <li>Click "New Chat" to start fresh</li>
                  </ul>
                </div>

                <div className="text-sm text-gray-500">
                  Version 1.0.0 • Built with Next.js and exa.ai
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
