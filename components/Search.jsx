'use client';
import { useState } from 'react';
import toast from 'react-hot-toast';
import AIChatInput from './ChartInput';

export default function Search() {
  const [query, setQuery] = useState('');
  const [searchMethod, setSearchMethod] = useState('exa');
  const [results, setResults] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    const loadingToast = toast.loading('Thinking...');

    try {
      let endpoint = '/api/groq';
      let body = {
        userMessage: query,
        model: 'llama-3.3-70b-versatile',
      };

      if (searchMethod === 'exa') {
        endpoint = '/api/exa';
        body = { query };
      } else if (searchMethod === 'deepseek') {
        endpoint = '/api/deepseek';
        body = { userMessage: query };
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Search failed');
      }

      const data = await response.json();
      setResults(data);
      toast.success('Search completed successfully');
    } catch (err) {
      toast.error(`Error: ${err.message}`);
      setResults(null);
    } finally {
      toast.dismiss(loadingToast);
    }
  };

  console.log('results:', results);

  return (
    <div className="max-w-2xl mx-auto px-5 py-4 mt-60">
      <AIChatInput
        searchMethod={searchMethod}
        setSearchMethod={setSearchMethod}
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
      />

      {results && (
        <div className="mt-4 space-y-4">
          {searchMethod === 'exa' ? (
            <div className="space-y-4">
              {results?.results?.map((result, index) => (
                <div key={index} className="p-4 border rounded-md">
                  <a
                    href={result.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-600 hover:text-blue-800"
                  >
                    {result.title}
                  </a>
                  <div className="mt-1 text-sm text-gray-600">
                    {result.url && (
                      <p className="truncate">URL: {result.url}</p>
                    )}
                    {result.publishedDate && (
                      <p>
                        Published:{' '}
                        {new Date(result.publishedDate).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 border rounded-md">
              <pre className="whitespace-pre-wrap">{results.content}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
