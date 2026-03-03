import ScrollReveal from '../ScrollReveal';

const cols = [
  {
    title: 'Overly Comprehensive',
    color: '#1E3A5F',
    bg: '#EEF4FB',
    headerBg: '#D6E4F0',
    pros: [
      'A comprehensive data request is preferred as the subsequent analysis will reveal hidden contributors to the problem, or areas of significance that had not been initially considered.',
      'Getting more data earlier can help eliminate multiple subsequent requests that may prove frustrating for both the data team and those analyzing the data.',
    ],
    cons: [
      'Large data requests, especially from multiple sources (omni-channel) may delay data availability.',
      'Conducting data engineering on multiple data sets can consume valuable time and may not enhance the analysis results.',
      'Teams can unwittingly succumb to analysis paralysis and miss out on opportunities to secure quick wins.',
    ],
  },
  {
    title: 'Too Limited',
    color: '#1E3A5F',
    bg: '#EEF4FB',
    headerBg: '#D6E4F0',
    pros: [
      'Highly focused data requests can be fulfilled more rapidly, allowing teams to reveal opportunities and pursue quick win solutions.',
      'Fewer data sets simplifies data engineering and allows teams to quickly engage in analysis to validate hypotheses.',
    ],
    cons: [
      'A too tightly focused data request can lead teams away from larger opportunities or require subsequent data requests that may slow down progress.',
      'Analyzing the problem from a limited viewpoint can reduce the ability to identify potential unintended consequences of proposed solutions.',
      'Teams can unwittingly succumb to missing the forest of opportunities by looking too intensely at a single tree.',
    ],
  },
];

export default function DataRequestRisks() {
  return (
    <ScrollReveal>
      <div className="my-8">
        <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#1E1B4B', marginBottom: '0.25rem' }}>
          Data Request: Risks &amp; Considerations
        </h3>
        <p style={{ fontSize: '0.85rem', color: '#6B7280', marginBottom: '1rem' }}>
          AI analysis tools can render multiple analyses quickly; however, when making data requests teams should consider the practicality of the request based on the problem to be solved.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {cols.map((col, i) => (
            <div key={i} style={{ border: '1px solid #CBD5E1', borderRadius: 8, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              {/* Header */}
              <div style={{ background: col.headerBg, padding: '0.6rem 1rem', borderBottom: '1px solid #CBD5E1' }}>
                <span style={{ fontWeight: 700, color: col.color, fontSize: '0.9rem' }}>{col.title}</span>
              </div>

              <div style={{ padding: '0.75rem 1rem', background: col.bg, flex: 1 }}>
                {/* Pros */}
                <div style={{ fontWeight: 700, fontSize: '0.82rem', color: '#374151', marginBottom: '0.4rem' }}>Pros</div>
                {col.pros.map((p, pi) => (
                  <div key={pi} style={{ display: 'flex', gap: '0.4rem', fontSize: '0.8rem', color: '#374151', lineHeight: 1.5, marginBottom: '0.35rem' }}>
                    <span style={{ color: '#1E3A5F', flexShrink: 0 }}>&bull;</span>
                    {p}
                  </div>
                ))}

                {/* Cons */}
                <div style={{ fontWeight: 700, fontSize: '0.82rem', color: '#374151', marginTop: '0.6rem', marginBottom: '0.4rem' }}>Cons</div>
                {col.cons.map((c, ci) => (
                  <div key={ci} style={{ display: 'flex', gap: '0.4rem', fontSize: '0.8rem', color: '#374151', lineHeight: 1.5, marginBottom: '0.35rem' }}>
                    <span style={{ color: '#1E3A5F', flexShrink: 0 }}>&bull;</span>
                    {c}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer callout */}
        <div style={{ marginTop: '0.75rem', border: '1px solid #CBD5E1', borderRadius: 6, padding: '0.6rem 1rem', background: '#F8FAFC', fontSize: '0.82rem', color: '#374151', textAlign: 'center', fontStyle: 'italic' }}>
          Crafting an appropriate data request that balances these considerations is the "art" behind the "science".
        </div>
      </div>
    </ScrollReveal>
  );
}
