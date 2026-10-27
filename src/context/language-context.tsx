"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";
import { Locale, TranslationDictionary } from "@/data/translations/types";
import { idTranslations } from "@/data/translations/id";
import { enTranslations } from "@/data/translations/en";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: TranslationDictionary;
}

const STORAGE_KEY = "arya_portfolio_lang";
const LANG_CHANGE_EVENT = "arya_portfolio_lang_change";

const dictionaries: Record<Locale, TranslationDictionary> = {
  id: idTranslations,
  en: enTranslations,
};

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener(LANG_CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(LANG_CHANGE_EVENT, callback);
  };
}

function getSnapshot(): Locale {
  try {
    const savedLocale = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (savedLocale === "id" || savedLocale === "en") {
      return savedLocale;
    }
  } catch {
    // LocalStorage unavailable
  }
  return "id";
}

function getServerSnapshot(): Locale {
  // Default to Indonesian ('id') on server per requirement #1
  return "id";
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLocale = (newLocale: Locale) => {
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
      document.documentElement.lang = newLocale;
      const dict = dictionaries[newLocale];
      if (dict?.meta?.title) {
        document.title = dict.meta.title;
      }
      window.dispatchEvent(new Event(LANG_CHANGE_EVENT));
    } catch {
      // LocalStorage unavailable
    }
  };

  const toggleLocale = () => {
    const nextLocale = locale === "id" ? "en" : "id";
    setLocale(nextLocale);
  };

  const currentDictionary = dictionaries[locale] || idTranslations;

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        toggleLocale,
        t: currentDictionary,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
