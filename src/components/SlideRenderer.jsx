import {
  TitleSlide, QuoteSlide, PipelineSlide, TwoColCompareSlide, PerspectivesSlide,
  TermsSlide, StepsSlide, RulesSlide, EventsSlide, TracksSlide, TechSlide,
  TimelineSlide, ProjectsSlide, GradingSlide, NextStepsSlide, ClosingSlide,
} from "./slides/SlideTypes";

const MAP = {
  title: TitleSlide,
  quote: QuoteSlide,
  pipeline: PipelineSlide,
  "twocol-compare": TwoColCompareSlide,
  perspectives: PerspectivesSlide,
  terms: TermsSlide,
  steps: StepsSlide,
  rules: RulesSlide,
  events: EventsSlide,
  tracks: TracksSlide,
  tech: TechSlide,
  timeline: TimelineSlide,
  projects: ProjectsSlide,
  grading: GradingSlide,
  nextsteps: NextStepsSlide,
  closing: ClosingSlide,
};

export default function SlideRenderer({ slide }) {
  const Comp = MAP[slide.type];
  if (!Comp) return null;
  return <Comp s={slide} />;
}
