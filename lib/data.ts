export type IdeaRecord = {
  id: string;
  title: string;
  summary: string;
  category: string;
  status: string;
  stage: string;
  creatorName: string;
  email: string;
  problem: string;
  solution: string;
  company?: string;
  team?: string;
  createdAt?: string;
};

export const defaultIdeas: IdeaRecord[] = [
  {
    id: 'smart-irrigation',
    title: 'Smart Irrigation Planner',
    summary: 'A mobile tool helping smallholder farmers plan watering schedules based on rainfall, crops, and soil types.',
    category: 'Agriculture',
    status: 'Seeking support',
    stage: 'Prototype',
    creatorName: 'Student team — Kigali',
    email: 'hello@smartirrigation.rw',
    company: 'Student team — Kigali',
    team: '3 founders',
    problem: 'Farmers often overwater or underwater crops due to inconsistent rainfall and limited agricultural data.',
    solution: 'We combine local rainfall patterns and crop needs to recommend irrigation timing using a simple mobile dashboard.'
  },
  {
    id: 'clinic-connect',
    title: 'Clinic Connect',
    summary: 'A referral and communication platform for remote patients and healthcare providers in underserved districts.',
    category: 'Health',
    status: 'Open for mentoring',
    stage: 'MVP',
    creatorName: 'Health innovation lab',
    email: 'team@clinicconnect.rw',
    company: 'Health innovation lab',
    team: '5 members',
    problem: 'Many patients miss low-cost follow-up care due to poor communication and weak referral visibility.',
    solution: 'A lightweight system that links patients, clinics, and community health workers to improve continuity of care.'
  },
  {
    id: 'green-grid',
    title: 'Green Grid Analytics',
    summary: 'A data platform helping schools and homes monitor energy consumption and reduce waste.',
    category: 'Climate',
    status: 'Pitch ready',
    stage: 'Concept',
    creatorName: 'EcoTech Rwanda',
    email: 'team@greengrid.rw',
    company: 'EcoTech Rwanda',
    team: '4 founders',
    problem: 'Energy inefficiency is difficult to track without real-time insight, especially in schools and local housing.',
    solution: 'We use simple sensors and dashboards to identify waste and suggest the biggest energy-saving opportunities.'
  }
];

export const stats = [
  { value: '500+', label: 'Ideas' },
  { value: '48', label: 'Companies' },
  { value: '120+', label: 'Mentors' }
];

export const ideas = defaultIdeas;

export const featuredIdeas = defaultIdeas;

export const opportunities = [
  {
    type: 'Competition',
    title: 'Rwanda Youth Innovation Challenge',
    description: 'A national opportunity for students and early-stage founders to pitch scalable digital solutions.',
    deadline: 'Ends 12 Oct',
    value: '$8,000 prize pool'
  },
  {
    type: 'Mentorship',
    title: 'Climate & Agri Founders Circle',
    description: 'Support for founders building practical solutions in agriculture, sustainability, and food systems.',
    deadline: 'Rolling intake',
    value: 'Mentor network'
  },
  {
    type: 'Funding',
    title: 'Impact Venture Support',
    description: 'An investment and grant readiness program for youth-led startups with measurable local impact.',
    deadline: 'Applications open',
    value: 'Seed support'
  }
];

export const companies = [
  { name: 'Kigali Innovation Hub', sector: 'Startup support', focus: 'Early-stage founders and accelerators' },
  { name: 'Rwanda Mobile Health', sector: 'Health tech', focus: 'Digital health and community care systems' },
  { name: 'GreenBuild Rwanda', sector: 'Climate & construction', focus: 'Climate-smart infrastructure and clean energy' },
  { name: 'AgriPulse Labs', sector: 'Agriculture', focus: 'Agri-tech and rural digital services' }
];

export const mentors = [
  {
    name: 'Aline Uwimana',
    specialty: 'Product strategy',
    focus: 'Helping student founders turn concepts into real products.',
    availability: 'Open for 2 projects'
  },
  {
    name: 'Jean Baptiste Nshuti',
    specialty: 'Startup fundraising',
    focus: 'Grant readiness, pitch coaching, and investment support.',
    availability: 'Available this month'
  },
  {
    name: 'Michele Ndayambaje',
    specialty: 'Climate and agri-tech',
    focus: 'Commercialising climate-smart solutions with rural impact.',
    availability: 'Accepting 3 new matches'
  },
  {
    name: 'Cynthia Mukamana',
    specialty: 'UX and community design',
    focus: 'User research and human-centered design for early products.',
    availability: 'Open for mentorship'
  }
];
