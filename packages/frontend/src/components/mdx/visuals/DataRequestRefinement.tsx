import ScrollReveal from '../ScrollReveal';

const typeColors: Record<string, { bg: string; text: string }> = {
  Data:    { bg: '#EEF2FF', text: '#4338CA' },
  Meeting: { bg: '#ECFDF5', text: '#065F46' },
  Tech:    { bg: '#FEF3C7', text: '#92400E' },
};

// [requestType, category, item, description, owner, isNew]
const rows: [string, string, string, string, string, boolean][] = [
  ['Data',    'Customer Satisfaction',    'Historical ACS scores and customer satisfaction survey data',              'Detailed customer satisfaction scores (ACS) for Metro Cable over the past 3–5 years, including satisfaction by service type, zip code, and demographics',                        'Customer Experience Team',    false],
  ['Data',    'Customer Support',         'Call center performance and customer service metrics',                     'Call center data including average wait times, call abandonment rates, first call resolution rates, and escalation frequency',                                                  'Customer Service Team',       false],
  ['Data',    'Pricing & Billing',        'Pricing information, billing accuracy, and dispute data',                  'Pricing information, billing accuracy, and statistics on billing error rates, customer disputes, and resolution times',                                                        'Billing Department',          false],
  ['Data',    'Product/Service Offerings','Service reliability, quality, and outage data',                            'Video/Audio quality metrics, cable TV channel availability, internet speed, reliability and outage frequency and duration by service area',                                   'Network Operations Team',     false],
  ['Data',    'Competitive Analysis',     'Competitor benchmark data and market analysis',                            'Pricing comparison, service offerings, customer satisfaction scores, and market share data for key competitors',                                                               'Strategy Team',               false],
  ['Data',    'Finance',                  'Rate case historical data and PSC decision documentation',                 'Previous rate case submissions, PSC decisions and feedback, and correlation between customer satisfaction and rate approvals',                                                 'Industry Affairs Management', false],
  ['Meeting', 'Stakeholder Alignment',   'Kickoff meeting with Metro Cable leadership',                              'Kickoff meeting to align on project scope, objectives, timeline, and key stakeholders',                                                                                        'Project Manager',             false],
  ['Meeting', 'Subject Matter Expert',   'Customer Experience team interview sessions',                              'Series of interviews with Customer Experience team to understand current pain points, recent changes, and known service issues',                                               'Customer Experience Team',    false],
  ['Tech',    'Data Access',             'Access to customer database and analytics systems',                        'User credentials and permissions for customer database, CRM system, billing system, and analytics platform',                                                                   'IT Department',               false],
  ['Data',    'Operations',              'Employee training and staffing data',                                      'Training completion rates, employee satisfaction data, staffing levels by department, and technician headcount and zone coverage',                                             'Human Resources',             false],
  ['Meeting', 'Regulatory',             'PSC requirements and expectations briefing',                                'Meeting with Regulatory Affairs to understand PSC requirements and expectations for the upcoming rate case submittal',                                                         'Industry Affairs Management', false],
  ['Data',    'Process Documentation',  'Current customer journey maps and process documentation',                   'Existing documentation of customer touchpoints, service delivery processes, escalation paths, and SLAs',                                                                      'Project Excellence Team',     false],
  // New rows added based on Issues Tree hypotheses
  ['Data',    'Customer Support',       'Repair service call data and resolution support',                           'Aggregate repair service call data including call volume, response times, time to resolution, and first-visit vs. repeat-visit outcomes across all channels',                  'Customer Service Team',       true],
  ['Data',    'Customer Support',       'New service install performance including cancellation and turnaround times','New service install data including scheduled vs. actual installation times, cancellation rates, and reasons for missed appointments',                                         'Customer Service Team',       true],
  ['Data',    'Customer Feedback',      'Qualitative customer feedback and website comments — blogs & PSC complaints','Open-ended survey responses, social media mentions, complaint logs, and any other unstructured customer feedback including PSC filings',                                      'Customer Insights Team',      true],
  ['Data',    'Procurement',            'Equipment inventories, truck and vendor assessment times',                  'Stocking levels, stock-out occurrences, and usage trends for key equipment and parts carried by field technicians',                                                            'Procurement Team',            true],
  ['Data',    'Web Team',               'Web site analytics and log data indicating user navigation',                'Usage levels and trends showing how customers engage with the Metro Cable website, including self-service and support pages',                                                  'Digital / Web Team',          true],
];

export default function DataRequestRefinement() {
  return (
    <ScrollReveal>
      <div className="my-8">
        <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#1E1B4B', marginBottom: '0.25rem' }}>
          Refined Data Request
        </h3>
        <p style={{ fontSize: '0.85rem', color: '#6B7280', marginBottom: '0.5rem' }}>
          Metro Cable — Illustrative Example. A revised data request reflects an edited form of the AI-generated request with <strong>additional items that align to initial hypotheses</strong> (highlighted below).
        </p>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', fontSize: '0.75rem', color: '#6B7280' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <span style={{ width: 12, height: 12, background: '#FEF3C7', border: '1px solid #F59E0B', borderRadius: 2, display: 'inline-block' }} />
            New additions based on hypotheses
          </span>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.78rem', tableLayout: 'fixed' }}>
            <thead>
              <tr style={{ background: '#1E1B4B', color: 'white' }}>
                <th style={{ padding: '0.5rem 0.6rem', textAlign: 'left', fontWeight: 600, width: '8%' }}>Type</th>
                <th style={{ padding: '0.5rem 0.6rem', textAlign: 'left', fontWeight: 600, width: '14%' }}>Category</th>
                <th style={{ padding: '0.5rem 0.6rem', textAlign: 'left', fontWeight: 600, width: '22%' }}>Request Item</th>
                <th style={{ padding: '0.5rem 0.6rem', textAlign: 'left', fontWeight: 600, width: '40%' }}>Description</th>
                <th style={{ padding: '0.5rem 0.6rem', textAlign: 'left', fontWeight: 600, width: '16%' }}>Owner</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([type, category, item, description, owner, isNew], i) => {
                const badge = typeColors[type] ?? { bg: '#F3F4F6', text: '#374151' };
                const rowBg = isNew ? '#FFFBEB' : (i % 2 === 0 ? 'white' : '#F8F9FA');
                return (
                  <tr key={i} style={{ background: rowBg, borderBottom: isNew ? '1px solid #FDE68A' : '1px solid #F3F4F6', borderLeft: isNew ? '3px solid #F59E0B' : '3px solid transparent' }}>
                    <td style={{ padding: '0.4rem 0.6rem' }}>
                      <span style={{ background: badge.bg, color: badge.text, borderRadius: '4px', padding: '2px 6px', fontWeight: 600, fontSize: '0.7rem', whiteSpace: 'nowrap' }}>
                        {type}
                      </span>
                    </td>
                    <td style={{ padding: '0.4rem 0.6rem', color: '#374151', fontWeight: isNew ? 600 : 400 }}>{category}</td>
                    <td style={{ padding: '0.4rem 0.6rem', color: '#1E1B4B', fontWeight: 600 }}>{item}</td>
                    <td style={{ padding: '0.4rem 0.6rem', color: '#374151' }}>{description}</td>
                    <td style={{ padding: '0.4rem 0.6rem', color: '#6B7280' }}>{owner}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </ScrollReveal>
  );
}
