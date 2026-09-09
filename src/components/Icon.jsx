import {
  FiCode, FiCpu, FiZap, FiGitBranch, FiShield, FiFolder, FiGitPullRequest,
  FiUsers, FiStar, FiBook, FiList, FiMessageSquare, FiBookmark, FiLayers,
  FiGitMerge, FiTarget, FiGitCommit, FiAward,
} from "react-icons/fi";
import { FiGitBranch as FiGitFork } from "react-icons/fi";
import { BiBug } from "react-icons/bi";
import {
  SiGit, SiGithub, SiHtml5, SiCss, SiTailwindcss, SiPython, SiFastapi,
  SiJavascript, SiReact, SiMysql, SiNextdotjs, SiNodedotjs, SiExpress,
  SiDjango, SiMongodb, SiPostgresql,
} from "react-icons/si";
import { FaCloud, FaRocket } from "react-icons/fa";

const GENERIC = {
  code: FiCode,
  cpu: FiCpu,
  zap: FiZap,
  gitbranch: FiGitBranch,
  shield: FiShield,
  folder: FiFolder,
  gitfork: FiGitFork,
  bug: BiBug,
  gitpr: FiGitPullRequest,
  users: FiUsers,
  star: FiStar,
  book: FiBook,
  list: FiList,
  message: FiMessageSquare,
  bookmark: FiBookmark,
  layers: FiLayers,
  gitmerge: FiGitMerge,
  rocket: FaRocket,
  target: FiTarget,
  gitcommit: FiGitCommit,
  award: FiAward,
  clock: FiUsers, // placeholder overwritten below
};
// fix clock icon properly
import { FiClock } from "react-icons/fi";
GENERIC.clock = FiClock;


const TECH_COLORS = {
  git: "#F05033",
  github: "#181717",
  html5: "#E34F26",
  css3: "#1572B6",
  tailwindcss: "#06B6D4",
  python: "#3776AB",
  fastapi: "#009688",
  javascript: "#F7DF1E",
  react: "#61DAFB",
  mysql: "#4479A1",
  nextJs: "#000000",
  nodeJs: "#339933",
  express: "#000000",
  django: "#092E20",
  mongodb: "#47A248",
  postgresql: "#4169E1",
  cloud: "#FF9900",
};


const TECH = {
  git: SiGit,
  github: SiGithub,
  html5: SiHtml5,
  css3: SiCss,
  tailwindcss: SiTailwindcss,
  python: SiPython,
  fastapi: SiFastapi,
  javascript: SiJavascript,
  react: SiReact,
  mysql: SiMysql,
  nextJs: SiNextdotjs,
  nodeJs: SiNodedotjs,
  express: SiExpress,
  django: SiDjango,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  cloud: FaCloud,
};

export function Icon({ name, size = 20, className = "" }) {
  const Comp = GENERIC[name];
  if (!Comp) return null;
  return <Comp size={size} className={className} />;
}

export function TechIcon({ name, size = 20, className = "" }) {
  const Comp = TECH[name];
  if (!Comp) return null;
  return <Comp size={size} className={className} color={TECH_COLORS[name]} />;
}
