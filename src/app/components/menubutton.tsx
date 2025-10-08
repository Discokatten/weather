import { Settings, ChevronDown } from "lucide-react";
export default function MenuButton() {
  return (
    <button className="bg-theme-800 rounded-lg p-1 text-white flex gap-1 text-sm items-center">
      {/* Lucide-icon */}
      <Settings className="h-5" />
      Meny 
      {/* Lucide-icon */}
      <ChevronDown className="h-5"/>
    </button>
  );
}
