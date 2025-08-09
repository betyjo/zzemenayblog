import { useState, useEffect, ChangeEvent } from "react";

interface LanguageSwitcherProps {
  onLanguageChange?: (lang: string) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  onLanguageChange,
}) => {
  const [language, setLanguage] = useState<string>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) setLanguage(savedLang);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    localStorage.setItem("language", selectedLang);
    if (onLanguageChange) onLanguageChange(selectedLang);
  };

  return (
    <select value={language} onChange={handleChange}>
      <option value="en">English</option>
      <option value="other">french</option>
    </select>
  );
};

export default LanguageSwitcher;
