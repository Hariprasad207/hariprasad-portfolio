import { useMemo, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import { createAppTheme } from "./theme/theme";
import { profile } from "./data/profile";

import Navbar from "./components/Navbar";
import ScrollTopButton from "./components/ScrollTopButton";

import Hero from "./section/Hero";
import About from "./section/About";
import Skills from "./section/Skills";
import Projects from "./section/Project";
import Experience from "./section/Experience";
import Contact from "./section/Contact";

export default function App() {
  const [mode, setMode] =
    useState("dark");

  const theme = useMemo(
    () => createAppTheme(mode),
    [mode]
  );

  const scrollTo = (id) => {
    document
      .querySelector(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Navbar
        mode={mode}
        onToggleTheme={() =>
          setMode((current) =>
            current === "dark"
              ? "light"
              : "dark"
          )
        }
      />

      <main id="top">
        <Hero
          profile={profile}
          onProjectsClick={() =>
            scrollTo("#projects")
          }
          onContactClick={() =>
            scrollTo("#contact")
          }
        />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Contact profile={profile} />
      </main>

      <ScrollTopButton />
    </ThemeProvider>
  );
}