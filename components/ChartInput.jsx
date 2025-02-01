import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { CircleChevronRight } from 'lucide-react';

const AIChatInput = ({
  searchMethod,
  setSearchMethod,
  query,
  setQuery,
  handleSearch,
}) => {
  return (
    <div className="relative w-full max-w-3xl mx-auto rounded-lg border p-4">
      <div className="absolute top-4 left-4">
        <Select value={searchMethod} onValueChange={setSearchMethod}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Choose model" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="exa">Exa</SelectItem>
              <SelectItem value="groq">Llama</SelectItem>
              <SelectItem value="deepseek">DeepSeek</SelectItem>
              <SelectItem value="mixtral">Mixtral</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <form onSubmit={handleSearch} className="mt-12">
        <div className="relative">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="How can I help you today?"
            className="w-full min-h-[100px] p-4 bg-transparent text-gray-900 placeholder-zinc-400 resize-none focus:outline-none"
          />

          <div className="absolute bottom-4 right-4">
            <Button type="submit" variant="outline">
              <CircleChevronRight size={20} />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AIChatInput;
