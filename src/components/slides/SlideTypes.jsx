import { Icon, TechIcon } from "../Icon";

export function TitleSlide({ s }) {
  return (
    <div className="slide-inner title-slide">
      <div className="eyebrow">{s.eyebrow}</div>
      <h1 className="title-headline">{s.title}</h1>
      <p className="title-sub">{s.subtitle}</p>
    </div>
  );
}

export function QuoteSlide({ s }) {
  return (
    <div className="slide-inner quote-slide">
      <div className="quote-mark">&ldquo;</div>
      <blockquote className="quote-text">{s.quote}</blockquote>
      <div className="quote-attr">{s.attribution}</div>
      <p className="quote-note">{s.note}</p>
    </div>
  );
}

export function PipelineSlide({ s }) {
  return (
    <div className="slide-inner">
      <div className="eyebrow">{s.eyebrow}</div>
      <h2 className="slide-h2">{s.title}</h2>
      <p className="slide-lede">{s.lede}</p>
      <div className="pipeline-row">
        {s.steps.map((st, i) => (
          <div className="pipeline-item" key={st.title}>
            <div className="pipeline-icon"><Icon name={st.icon} size={26} /></div>
            <div className="pipeline-title">{st.title}</div>
            <div className="pipeline-desc">{st.desc}</div>
            {i < s.steps.length - 1 && <div className="pipeline-arrow">&rarr;</div>}
          </div>
        ))}
      </div>
      <div className="callout-strip">{s.callout}</div>
    </div>
  );
}

export function TwoColCompareSlide({ s }) {
  return (
    <div className="slide-inner">
      <div className="eyebrow">{s.eyebrow}</div>
      <h2 className="slide-h2">{s.title}</h2>
      <p className="slide-lede">{s.lede}</p>
      <div className="compare-grid">
        {[s.colA, s.colB].map((col) => (
          <div className="compare-col" key={col.title}>
            <div className="compare-col-head">
              <Icon name={col.icon} size={18} className="compare-col-icon" />
              <span>{col.title}</span>
            </div>
            <div className="rule-list">
              {col.points.map((p) => (
                <div className="rule-item" key={p}>
                  <span className="rule-check">&#10003;</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {s.footnote && <p className="slide-footnote">{s.footnote}</p>}
    </div>
  );
}

export function PerspectivesSlide({ s }) {
  return (
    <div className="slide-inner reveal-slide">
      <div className="eyebrow">{s.eyebrow}</div>
      <h2 className="reveal-headline">{s.title}</h2>
      <div className="persp-grid">
        {[s.colA, s.colB].map((col) => (
          <div className="persp-col" key={col.title}>
            <div className="persp-col-title">{col.title}</div>
            <div className="rule-list">
              {col.points.map((p) => (
                <div className="rule-item" key={p}>
                  <span className="rule-check">&#9656;</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TermsSlide({ s }) {
  return (
    <div className="slide-inner terms-slide">
      <div className="eyebrow">{s.eyebrow}</div>
      <h2 className="slide-h2">{s.title}</h2>
      <div className="terms-groups">
        {s.groups.map((g) => (
          <div className="terms-group" key={g.heading}>
            <div className="terms-group-heading">{g.heading}</div>
            <div className="terms-pair">
              {g.terms.map((t) => (
                <div className="term-card" key={t.term}>
                  <div className="term-icon"><Icon name={t.icon} size={20} /></div>
                  <div className="term-name">{t.term}</div>
                  <div className="term-def">{t.def}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="roles-row">
        {s.roles.items.map((r) => (
          <div className="role-chip" key={r.role}>
            <Icon name={r.icon} size={16} />
            <div>
              <div className="role-name">{r.role}</div>
              <div className="role-desc">{r.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <p className="slide-footnote center">{s.roles.note}</p>
    </div>
  );
}

export function StepsSlide({ s }) {
  return (
    <div className="slide-inner">
      <div className="eyebrow">{s.eyebrow}</div>
      <h2 className="slide-h2">{s.title}</h2>
      <div className="steps-row">
        {s.steps.map((st, i) => (
          <div className="step-card" key={st.title}>
            <div className="step-num">{String(i + 1).padStart(2, "0")}</div>
            <div className="step-icon"><Icon name={st.icon} size={22} /></div>
            <div className="step-title">{st.title}</div>
            <div className="step-desc">{st.desc}</div>
          </div>
        ))}
      </div>
      <div className="callout-strip">{s.callout}</div>
    </div>
  );
}

export function RulesSlide({ s }) {
  return (
    <div className="slide-inner reveal-slide">
      <div className="eyebrow">{s.eyebrow}</div>
      <h2 className="reveal-headline">
        {s.title} <span className="accent">{s.accent}</span>
      </h2>
      <div className="rules-grid">
        {s.rules.map((r) => (
          <div className="rule-item" key={r}>
            <span className="rule-check">&#10003;</span>
            <span>{r}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function EventsSlide({ s }) {
  return (
    <div className="slide-inner">
      <div className="eyebrow">{s.eyebrow}</div>
      <h2 className="slide-h2">{s.title}</h2>
      <div className="events-grid">
        {s.events.map((e) => (
          <div className="event-tile" key={e.name}>
            <div className="event-name">{e.name}</div>
            <div className="event-when">{e.when}</div>
            <div className="event-mode">{e.mode}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TracksSlide({ s }) {
  return (
    <div className="slide-inner">
      <div className="eyebrow">{s.eyebrow}</div>
      <h2 className="slide-h2">{s.title}</h2>
      <div className="compare-grid">
        {[s.colA, s.colB].map((col) => (
          <div className="compare-col" key={col.title}>
            <div className="compare-col-head">
              <Icon name={col.icon} size={18} className="compare-col-icon" />
              <span>{col.title}</span>
            </div>
            <div className="rule-list">
              {col.points.map((p) => (
                <div className="rule-item" key={p}>
                  <span className="rule-check">&#9656;</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechSlide({ s }) {
  return (
    <div className="slide-inner">
      <div className="eyebrow">{s.eyebrow}</div>
      <h2 className="slide-h2">{s.title}</h2>
      {s.sections.map((sec) => (
        <div className="tech-section" key={sec.heading}>
          <div className="tech-section-label">{sec.heading}</div>
          <div className="tech-grid">
            {sec.items.map((it) => (
              <div className="tech-tile" key={it}>
                <div className="tech-logo-chip"><TechIcon name={it} size={20} /></div>
                <span className="tech-name">{it}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function TimelineSlide({ s }) {
  return (
    <div className="slide-inner">
      <div className="eyebrow">{s.eyebrow}</div>
      <h2 className="slide-h2">{s.title}</h2>
      <p className="slide-lede">{s.lede}</p>
      <div className="timeline-row">
        {s.stops.map((t, i) => (
          <div className="timeline-item" key={t.title}>
            <div className="timeline-period">{t.period}</div>
            <div className="timeline-icon"><Icon name={t.icon} size={20} /></div>
            <div className="timeline-title">{t.title}</div>
            <div className="timeline-desc">{t.desc}</div>
            {i < s.stops.length - 1 && <div className="timeline-connector" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectsSlide({ s }) {
  return (
    <div className="slide-inner">
      <div className="eyebrow">{s.eyebrow}</div>
      <h2 className="slide-h2">{s.title}</h2>
      <div className="project-cat-grid">
        {s.categories.map((c) => (
          <div className="project-cat-card" key={c.title}>
            <div className="project-cat-title">{c.title}</div>
            <div className="stack-tags">
              {c.tags.map((t) => (
                <span className="stack-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function GradingSlide({ s }) {
  return (
    <div className="slide-inner">
      <div className="eyebrow">{s.eyebrow}</div>
      <h2 className="slide-h2">{s.title}</h2>
      <p className="slide-lede">{s.lede}</p>
      <div className="eval-groups">
        {s.groups.map((g) => (
          <div className="eval-group" key={g.month}>
            <div className="eval-group-category">{g.month}</div>
            <div className="eval-group-rows">
              {g.rows.map((r) => (
                <div className="eval-group-row" key={r.label}>
                  <span>{r.label}</span>
                  <span className="weight">{r.weight}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="slide-lede small">{s.footnote}</p>
    </div>
  );
}

export function NextStepsSlide({ s }) {
  return (
    <div className="slide-inner">
      <div className="eyebrow">{s.eyebrow}</div>
      <h2 className="slide-h2">{s.title}</h2>
      <div className="nextsteps-grid">
        {s.steps.map((st) => (
          <div className="nextstep-card" key={st.title}>
            <div className="nextstep-num">{st.n}</div>
            <div className="nextstep-title">{st.title}</div>
            <div className="nextstep-desc">{st.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ClosingSlide({ s }) {
  return (
    <div className="slide-inner closing-slide">
      <h1 className="closing-kicker">{s.kicker}</h1>
      {s.sub && <p className="closing-sub">{s.sub}</p>}
    </div>
  );
}
