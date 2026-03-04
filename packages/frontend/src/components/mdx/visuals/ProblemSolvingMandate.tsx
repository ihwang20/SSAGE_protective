import ScrollReveal from '../ScrollReveal';

export default function ProblemSolvingMandate() {
  return (
    <ScrollReveal>
      <div className="my-8">
        <div style={{ background: 'linear-gradient(135deg,#1E1B4B,#4F46E5)', borderRadius: 12, padding: '2rem', textAlign: 'center', color: 'white' }}>
          <div style={{ fontSize: '0.72rem', opacity: 0.55, marginBottom: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            AI-Enabled Problem Solving
          </div>
          <div style={{ fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.7, fontStyle: 'italic', maxWidth: 500, margin: '0 auto', color: 'white' }}>
            "Adopt with intention. Start with data. Lead with AI. Sustain through people."
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
