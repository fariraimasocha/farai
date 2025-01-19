'use client';

import { ArrowUp, Globe, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import toast from 'react-hot-toast';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const handleNewChat = () => {
      setQuery('');
      setResults([]);
      setError(null);
      router.refresh();
    };

    window.addEventListener('newChat', handleNewChat);
    return () => window.removeEventListener('newChat', handleNewChat);
  }, [router]);

  const handleSearch = async (e) => {
    e?.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    const toastId = toast.loading('Searching...');

    try {
      const response = await fetch('/api/exa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to perform search');
      }

      setResults(data.results || []);
      toast.success('Search completed', { id: toastId });
    } catch (err) {
      setError(err.message);
      toast.error('Search failed', { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  const handleTrendingClick = (text) => {
    setQuery(text);
    const inputElement = document.querySelector('input[type="text"]');
    if (inputElement) {
      inputElement.focus();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 px-4 -mt-32">
        <div className="flex items-center gap-2 text-4xl font-medium">
          {query || 'What do you want to search?'}
        </div>

        <form onSubmit={handleSearch} className="w-full max-w-3xl relative">
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask a question..."
            className="w-full h-32 pl-24 pr-14 rounded-2xl bg-gray-50 border-gray-200 text-lg"
          />
          <div className="absolute left-3 bottom-3 flex gap-2">
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full w-10 h-10 bg-gray-200 hover:bg-gray-300"
              disabled={loading}
              title="Web Search"
            >
              <Globe className="h-5 w-5 text-gray-600" />
            </Button>
          </div>
          <Button
            type="submit"
            size="icon"
            variant="ghost"
            disabled={loading}
            className="absolute right-3 bottom-3 rounded-full w-10 h-10 bg-gray-200 hover:bg-gray-300"
          >
            <ArrowUp className="h-5 w-5 text-gray-600" />
          </Button>
        </form>

        {error && (
          <div className="w-full max-w-3xl p-4 bg-red-50 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {results.length > 0 && (
          <div className="w-full max-w-3xl">
            <Tabs defaultValue="web" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="web" className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Web Search
                </TabsTrigger>
                {/* Add more tabs here if needed */}
              </TabsList>

              <TabsContent value="web" className="space-y-4">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-200"
                  >
                    <div className="flex gap-4">
                      {result.favicon && (
                        <div className="flex-shrink-0 w-6 h-6">
                          <img
                            src={result.favicon}
                            alt=""
                            className="w-full h-full rounded"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                      <div className="flex-grow min-w-0">
                        <h3 className="font-medium text-lg mb-1 text-gray-900">
                          <a
                            href={result.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600"
                          >
                            {result.title}
                          </a>
                        </h3>

                        {result.publishedDate && (
                          <div className="text-sm text-gray-500 mb-2">
                            Published:{' '}
                            {new Date(
                              result.publishedDate
                            ).toLocaleDateString()}
                          </div>
                        )}

                        {result.author && (
                          <div className="text-sm text-gray-600 mb-3">
                            <span className="font-medium">Authors:</span>{' '}
                            {result.author}
                          </div>
                        )}

                        {result.summary && (
                          <div className="mb-4">
                            <div className="font-medium text-sm text-gray-700 mb-1">
                              Summary
                            </div>
                            <p className="text-sm text-gray-600">
                              {result.summary}
                            </p>
                          </div>
                        )}

                        {result.highlights?.length > 0 && (
                          <div className="mb-4">
                            <div className="font-medium text-sm text-gray-700 mb-1">
                              Highlights
                            </div>
                            <div className="space-y-2">
                              {result.highlights.map((highlight, i) => (
                                <div
                                  key={i}
                                  className="text-sm text-gray-600 bg-gray-50 p-2 rounded"
                                >
                                  {highlight}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {result.subpages?.length > 0 && (
                          <div>
                            <div className="font-medium text-sm text-gray-700 mb-2">
                              Related Documents
                            </div>
                            <div className="space-y-3">
                              {result.subpages.map((subpage, i) => (
                                <div
                                  key={i}
                                  className="border-l-2 border-gray-200 pl-3"
                                >
                                  <h4 className="text-sm font-medium text-gray-800">
                                    <a
                                      href={subpage.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="hover:text-blue-600"
                                    >
                                      {subpage.title}
                                    </a>
                                  </h4>
                                  {subpage.summary && (
                                    <p className="text-sm text-gray-600 mt-1">
                                      {subpage.summary}
                                    </p>
                                  )}
                                  {subpage.highlights?.map((highlight, j) => (
                                    <div
                                      key={j}
                                      className="text-sm text-gray-600 bg-gray-50 p-2 rounded mt-2"
                                    >
                                      {highlight}
                                    </div>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-3 text-sm text-gray-500">
                          <a
                            href={result.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 truncate"
                          >
                            {result.url}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        )}

        <div className="flex flex-wrap gap-2 justify-center">
          {[
            { icon: '👤', text: 'Farirai Masocha', label: 'Developer' },
            { icon: '🎵', text: 'TikTok ban', label: 'Trending' },
            { icon: '🌐', text: 'Edge', label: 'Tech' },
            { icon: '🏛️', text: 'Washington', label: 'Trending' },
            { icon: '📺', text: 'Silo season 3', label: 'Trending' },
          ].map((item) => (
            <div
              key={item.text}
              onClick={() => handleTrendingClick(item.text)}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </div>
              <span className="text-xs text-gray-500">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
