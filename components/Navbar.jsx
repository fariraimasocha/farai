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
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import Link from 'next/link';
import { Linkedin, Twitter } from 'lucide-react';

const Navbar = () => {
  const handleNewChat = () => {
    window.location.reload();
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
          <Link href="https://github.com/fariraimasocha/farai">
            <Button variant="outline">
              <Github size={18} />
              <span className="font-medium text-sm hidden sm:inline-block">
                Star on GitHub
              </span>
            </Button>
          </Link>

          <Dialog>
            <Card>
              <DialogTrigger asChild>
                <button
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  aria-label="Information"
                >
                  <Info size={20} className="text-gray-600" />
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold mb-4">
                    Open Source AI Search Engine
                  </DialogTitle>
                </DialogHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    An advanced open-source chat engine that leverages multiple
                    AI models for enhanced search capabilities.
                  </p>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900">
                      Key Features:
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>DeepSeek Integration - Advanced understanding</li>
                      <li>Exa AI - Real-time search capabilities</li>
                      <li>Groq Support - High-performance inference</li>
                      <li>
                        Multi-model Architecture - Flexible model selection
                      </li>
                      <li>
                        Open Source - Fully customizable and community-driven
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="text-gray-600 text-sm">
                  <div className='flex flex-col'>
                 <div>
                 A Side Project by
                  <span className="px-1">
                    <Badge variant="outline">Farirai Masocha</Badge>
                  </span>
                 </div>
                  <div className="flex items-center space-x-5 mt-4">
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
                </CardFooter>
              </DialogContent>
            </Card>
          </Dialog>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
