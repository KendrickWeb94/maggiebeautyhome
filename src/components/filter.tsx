import React, { useState } from "react";

interface CategoryFilterProps {
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  onCategoryChange,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    "Women",
    "Men",
    "Kids",
    "Jeans",
    "Shirt",
    "Shoes/sandals",
    "Dresses",
  ];
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <section className="flex ds:w-full ds:max-w-full breakpoint:max-w-[280px] ds:pt-8 md:pt-4 flex-col gap-6">
      <h1 className="inter-tight-600 text-gray-800 text-2xl">Categories</h1>
      <ul className="flex flex-col gap-4">
        {categories.map((category) => (
          <li key={category}>
            <button
              className={`flex items-baseline justify-between ${
                selectedCategory === category
                  ? "underline text-gray-700 inter-400"
                  : "text-gray-400 inter-400"
              } hover:underline underline-offset-4 smooth hover:text-gray-700 hover:inter-500`}
              onClick={() => handleCategoryClick(category)}
            >
              <p>{category}</p>
              {/* <span>({categoryCounts[category]})</span> */}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
