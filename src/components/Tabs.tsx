type TabsProps = {
    options: { label: string; value: string }[];
    selected: string;
    onChange: (value: string) => void;
  };
  
  export const Tabs = ({ options, selected, onChange }: TabsProps) => {
    return (
      <div className="inline-flex rounded-full bg-gray-200 p-1 shadow-sm">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
              selected === option.value
                ? "bg-[#5e17eb] text-white"
                : "text-gray-700 hover:bg-gray-300"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    );
  };
  