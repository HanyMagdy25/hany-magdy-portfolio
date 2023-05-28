import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefer-color-scheme: dark)";
  const [mode, setMode] = useState("");
  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");
  
    const handleChange = () => {
      let check
      if (userPref) {
         check = userPref === "dark" ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
         check = mediaQuery.matches ? "dark" : "light";
        setMode(check);
        window.localStorage.setItem("theme", check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
      setMode(check);
      document.documentElement.classList.toggle("dark", check === "dark");
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
     if (mode === "light"){
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  // useEffect(() => {
  //   if (mode === "dark" || mode === "light") { // Add this condition
  //     window.localStorage.setItem("theme", mode);
  //   }

  //   document.documentElement.classList.toggle("dark", mode === "dark");
  // }, [mode]);
  

  return [mode, setMode];
};

export default useThemeSwitcher;
