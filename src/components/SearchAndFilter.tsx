import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { categories } from "@/data/products";
import { ChangeEvent } from "react";

// Typescript interfaces
interface SearchAndFilterProps {
  searchTerm: string;
  selectedCategory: string;
  onSearchChange: (term: string) => void;
  onCategoryChange: (category: string) => void;
};

interface SearchInputProps {
  value: string;
  onChange: (term: string) => void;
};

interface CategorySelectProps {
  value: string;
  onChange: (category: string) => void;
  categories: string[];
};

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <Input
        placeholder="Search products..."
        value={value}
        onChange={handleChange}
        className="pl-10 h-12 border-gray-200 focus:border-purple-500 transition-colors duration-200"
      />
    </div>
  );
};

// CategorySelect component for category filtering
const CategorySelect = ({ value, onChange, categories }: CategorySelectProps) => (
  <Select value={value} onValueChange={onChange}>
    <SelectTrigger className="w-full sm:w-48 h-12 border-gray-200 focus:border-purple-500">
      <SelectValue placeholder="Select category" />
    </SelectTrigger>
    <SelectContent>
      {categories.map((category) => (
        <SelectItem key={category} value={category}>
          {category}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

// Main SearchAndFilter component
const SearchAndFilter = ({
  searchTerm,
  selectedCategory,
  onSearchChange,
  onCategoryChange
}: SearchAndFilterProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <SearchInput
        value={searchTerm}
        onChange={onSearchChange}
      />

      <CategorySelect
        value={selectedCategory}
        onChange={onCategoryChange}
        categories={categories}
      />
    </div>
  );
};

export default SearchAndFilter;