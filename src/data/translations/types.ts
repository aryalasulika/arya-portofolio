export type Locale = "id" | "en";

export interface ProjectTranslation {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  problem: string;
  solution: string;
  role: string;
  status: string;
}

export interface SkillCategoryTranslation {
  title: string;
  description: string;
}

export interface JourneyItemTranslation {
  period: string;
  role: string;
  organization: string;
  badge: string;
  description: string;
  contributions: string[];
}

export interface PrincipleTranslation {
  title: string;
  description: string;
}

export interface TranslationDictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    projects: string;
    about: string;
    skills: string;
    experience: string;
    contact: string;
    cta: string;
    mobileTitle: string;
    mobileTagline: string;
    languageAriaLabel: string;
  };
  hero: {
    role: string;
    location: string;
    headlineBefore: string;
    headlineHighlight: string;
    subHighlight: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    floatingCards: {
      frontend: { label: string; sublabel: string };
      backend: { label: string; sublabel: string };
      database: { label: string; sublabel: string };
      deployment: { label: string; sublabel: string };
    };
  };
  projects: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    description: string;
    challengeLabel: string;
    solutionLabel: string;
    roleLabel: string;
    liveDemo: string;
    repository: string;
    deepDiveTitle: string;
    deepDiveDesc: string;
    deepDiveCta: string;
    items: Record<string, ProjectTranslation>;
  };
  about: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    description: string;
    p1: {
      greeting: string;
      name: string;
      suffix: string;
    };
    p2: string;
    p3: string;
    focusBadge: string;
    focusText: string;
    principles: PrincipleTranslation[];
  };
  skills: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    description: string;
    stackFocus: string;
    coreSpecialties: string;
    categoryTitles: Record<string, SkillCategoryTranslation>;
  };
  experience: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    description: string;
    highlightsLabel: string;
    items: JourneyItemTranslation[];
  };
  contact: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    description: string;
    directCommBadge: string;
    directTitle: string;
    directDesc: string;
    emailLabel: string;
    copyBtn: string;
    copiedBtn: string;
    launchEmailBtn: string;
    networksHeader: string;
    githubTitle: string;
    githubDesc: string;
    linkedinTitle: string;
    linkedinDesc: string;
    statusHeader: string;
    statusTitle: string;
    statusDesc: string;
  };
  footer: {
    brandDesc: string;
    navHeader: string;
    statusHeader: string;
    backToTop: string;
    copyrightText: string;
    tagline: string;
  };
}
