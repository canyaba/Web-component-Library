export interface BasicInfo {
  name: string;
  headline: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  bio: string;
}

export interface AboutHighlight {
  title: string;
  detail: string;
}

export interface WorkItem {
  title: string;
  description: string;
  image: string;
  link: string;
  techList: string[];
}

export interface Skills {
  description: string;
  languagesAndFrameworks: string[];
  tools: string[];
}

export interface ResourceItem {
  title: string;
  icon: string;
  summary: string;
  link: string;
}

export interface DevSetup {
  vscodeSetup: string;
  terminalSetup: string;
  preferredEditorFont: string;
  supportingResource: {
    title: string;
    summary: string;
    link: string;
  };
}

export interface ContactAction {
  label: string;
  href: string;
  helper: string;
}

export const basicInfo: BasicInfo;
export const aboutHighlights: AboutHighlight[];
export const workItems: WorkItem[];
export const skills: Skills;
export const resources: ResourceItem[];
export const devSetup: DevSetup;
export const contactActions: ContactAction[];

declare const portfolioData: {
  basicInfo: BasicInfo;
  aboutHighlights: AboutHighlight[];
  workItems: WorkItem[];
  skills: Skills;
  resources: ResourceItem[];
  devSetup: DevSetup;
  contactActions: ContactAction[];
};

export default portfolioData;
