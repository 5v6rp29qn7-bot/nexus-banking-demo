const Anthropic = require('@anthropic-ai/sdk').default;

// Allowed origins for CORS
const ALLOWED_ORIGINS = [
    'https://nexus-banking-demo.vercel.app',
    'https://nexus-demo-banking.vercel.app',
    'http://localhost:3000',
    'http://localhost:5500'
];

const DEMO_TOKEN = process.env.DEMO_TOKEN || 'nexus-banking-2025';

// Helper to fetch with timeout
async function fetchWithTimeout(url, timeout = 5000) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    try {
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(id);
        return response;
    } catch (e) {
        clearTimeout(id);
        throw e;
    }
}

module.exports = async (req, res) => {
    const origin = req.headers.origin || req.headers.referer || '';
    
    // Set CORS headers
    const isAllowedOrigin = ALLOWED_ORIGINS.some(allowed => 
        origin.includes(allowed.replace('https://', '').replace('http://', ''))
    );
    
    if (isAllowedOrigin || process.env.NODE_ENV !== 'production') {
        res.setHeader('Access-Control-Allow-Origin', origin || '*');
    } else {
        res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGINS[0]);
    }
    
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Demo-Token');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
    
    // Validate demo token
    const providedToken = req.headers['x-demo-token'];
    if (providedToken !== DEMO_TOKEN) {
        console.warn('Invalid demo token attempt');
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const { message, conversationHistory = [] } = req.body;
        if (!message) return res.status(400).json({ error: 'Message required' });

        // Fetch live data (UAE-relevant)
        const dataPromises = [];
        let liveDataContext = '\n=== LIVE DATA FEEDS ===\n';

        // NCM Weather (UAE National Center of Meteorology) - using open-meteo as proxy
        dataPromises.push(
            fetchWithTimeout('https://api.open-meteo.com/v1/forecast?latitude=25.2&longitude=55.27&current=temperature_2m,weather_code&daily=temperature_2m_max,precipitation_sum&timezone=Asia/Dubai&forecast_days=3')
                .then(r => r.ok ? r.json() : null)
                .then(data => {
                    if (data?.current) {
                        return `\n🌡️ UAE WEATHER (Dubai): ${data.current.temperature_2m}°C | 3-day forecast available\n`;
                    }
                    return '\n🌡️ Weather data temporarily unavailable.\n';
                })
                .catch(() => '\n🌡️ Weather data temporarily unavailable.\n')
        );

        // Currency rates (AED)
        dataPromises.push(
            fetchWithTimeout('https://open.er-api.com/v6/latest/AED')
                .then(r => r.ok ? r.json() : null)
                .then(data => {
                    if (data?.rates) {
                        return `\n💱 AED RATES: 1 AED = ${(1/data.rates.USD).toFixed(4)} USD | ${(data.rates.INR).toFixed(2)} INR | ${(data.rates.PKR).toFixed(2)} PKR\n`;
                    }
                    return '';
                })
                .catch(() => '')
        );

        // Wait for all data
        const results = await Promise.all(dataPromises);
        liveDataContext += results.filter(r => r).join('');
        liveDataContext += '\n=== END LIVE DATA ===\n';

        const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

        // SCENARIO BASELINE - Banking-specific
        const BASELINE = {
            // Network
            totalBranches: 47,
            networkEfficiency: '91%',
            depositsAtRisk: 'AED 85M',
            growthOpportunity: 'AED 210M',
            underservedZones: 12,
            marketShare: '14.2%',
            
            // Expat Demographics
            expatPercent: '88.5%',
            underbankedPercent: '32%',
            indianPercent: '38%',
            pakistaniPercent: '17%',
            filipinoPercent: '7%',
            
            // Site Selection
            alReemDeposits: 'AED 42M',
            alReemPayback: '18 months',
            alReemCatchment: '89,000',
            yasDeposits: 'AED 38M',
            yasPayback: '22 months',
            khalifaDeposits: 'AED 31M',
            khalifaPayback: '26 months',
            
            // Flood Risk
            floodExposureTotal: 'AED 1.24B',
            alQuozProperties: 847,
            alQuozExposure: 'AED 420M',
            businessBayExposure: 'AED 380M',
            jvcExposure: 'AED 280M',
            
            // Trade
            tradeClientsTotal: 847,
            highExposureClients: 15,
            redSeaExposure: 'AED 194M',
            
            // Consolidation
            deiraCustomers: 2847,
            deiraMigrationRate: '67%',
            deiraAtRisk: 312,
            deiraAtRiskValue: 'AED 20M',
            alKaramaMigrationRate: '82%',
            alKaramaAtRisk: 89,
            alKaramaAtRiskValue: 'AED 4M'
        };

        const systemPrompt = `You are NEXUS BANKING INTELLIGENCE, a strategic advisor to UAE Bank Executives.

=== HARD RULES (NON-NEGOTIABLE) ===

1) OUTPUT FORMAT:
   - Output MUST be valid, safe HTML using ONLY these tags: div, p, strong, br, ul, li, span
   - NO scripts, NO styles, NO links, NO images
   - NO inline event handlers

2) CURRENCY: Always use AED (UAE Dirhams). Never USD unless comparing.

3) FORBIDDEN TOPICS:
   - NEVER discuss KYC, AML, anti-money laundering, or sanctions
   - NEVER discuss specific customer names or PII
   - NEVER make up competitor-specific intelligence without caveat

4) NUMBERS - USE ONLY THESE BASELINE VALUES:
   Network:
   - Total Branches: ${BASELINE.totalBranches}
   - Network Efficiency: ${BASELINE.networkEfficiency}
   - Deposits at Risk: ${BASELINE.depositsAtRisk}
   - Growth Opportunity: ${BASELINE.growthOpportunity}
   - Market Share: ${BASELINE.marketShare}
   
   Demographics:
   - Expat Population: ${BASELINE.expatPercent}
   - Underbanked Rate: ${BASELINE.underbankedPercent}
   - Indian Nationals: ${BASELINE.indianPercent}
   - Pakistani Nationals: ${BASELINE.pakistaniPercent}
   - Filipino Nationals: ${BASELINE.filipinoPercent}
   
   Site Selection:
   - Al Reem Island: ${BASELINE.alReemDeposits} potential, ${BASELINE.alReemPayback} payback, ${BASELINE.alReemCatchment} catchment
   - Yas Island: ${BASELINE.yasDeposits} potential, ${BASELINE.yasPayback} payback
   - Khalifa City: ${BASELINE.khalifaDeposits} potential, ${BASELINE.khalifaPayback} payback
   
   Flood Risk:
   - Total Exposure: ${BASELINE.floodExposureTotal}
   - Al Quoz: ${BASELINE.alQuozProperties} properties, ${BASELINE.alQuozExposure}
   - Business Bay: ${BASELINE.businessBayExposure}
   - JVC: ${BASELINE.jvcExposure}
   
   Trade:
   - Clients Analyzed: ${BASELINE.tradeClientsTotal}
   - High Red Sea Exposure: ${BASELINE.highExposureClients} clients, ${BASELINE.redSeaExposure}
   
   Consolidation:
   - Deira: ${BASELINE.deiraCustomers} customers, ${BASELINE.deiraMigrationRate} migration, ${BASELINE.deiraAtRisk} at risk (${BASELINE.deiraAtRiskValue})
   - Al Karama: ${BASELINE.alKaramaMigrationRate} migration, ${BASELINE.alKaramaAtRisk} at risk (${BASELINE.alKaramaAtRiskValue})

5) REGULATORY CONTEXT - ALWAYS ALIGN WITH:
   - CBUAE National Financial Inclusion Strategy 2026-2030
   - Climate Risk Assessment mandate (2024)
   - UAE Vision 2031 / Sustainable Finance Framework
   - Emiratisation targets

6) VISUAL BLOCKS - Use these for substantive answers:

KEY METRICS (2-4 cards):
<div class="viz-roi-cards">
    <div class="roi-card"><div class="roi-label">Label</div><div class="roi-value">Value</div></div>
    <div class="roi-card positive"><div class="roi-label">Good</div><div class="roi-value green">Value</div></div>
</div>

BREAKDOWNS (use classes: red, amber, cyan, green):
<div class="viz-risk-matrix">
    <div class="risk-matrix-header">Title</div>
    <div class="risk-item"><div class="risk-level critical"></div><div class="risk-info"><div class="risk-name">Name</div><div class="risk-detail">Detail</div></div><div class="risk-value red">Value</div></div>
</div>

DATA PROVENANCE (always include):
<div class="provenance">
    <span class="prov-label">Data Sources</span>
    <div class="prov-sources">
        <span class="prov-badge">Source 1</span>
        <span class="prov-badge">Source 2</span>
    </div>
    <div class="prov-meta">
        <span>Confidence: 89%</span>
        <span>Updated: Now</span>
    </div>
</div>

${liveDataContext}

=== DATA SOURCES TO CITE ===
Bank Internal: CRM, Core Banking, Loan Portfolio
Esri Platform: Demographics, Drive-Time Analysis, Climate Layers
Government: Dubai Land Dept (DLD), DED Business Registry, NCM Weather
Partners: K&A Flood Modeling, Creditsafe, HERE Mobility
Trade: DP World CARGOES, MarineTraffic AIS, Panjiva

=== BEHAVIOR ===

1. Lead with the business decision, then evidence
2. Use EXACT numbers from baseline - never round or estimate
3. Be executive-concise (CFO/CEO audience)
4. Stay in character: confident, analytical, financially literate
5. Always suggest 2-3 follow-up exploration paths
6. If asked about something outside baseline, say: "That metric is not in the current scenario baseline. I can estimate if you provide [specific inputs needed]."

=== UAE CONTEXT ===

Key Areas: Dubai South, Al Reem Island, Yas Island, Khalifa City, Deira, Bur Dubai, Al Quoz, Business Bay, JVC, International City, Discovery Gardens, Al Nahda (Sharjah), JAFZA, DIFC, Mussafah

April 2024 Floods: Worst in 75 years. 100mm in 12 hours. USD 2.9-3.4B insurance losses. CBUAE mandated 6-month loan deferrals.

Expat Reality: 88.5% of UAE is expats. 32% underbanked. Indians (38%), Pakistanis (17%), Filipinos (7%) are largest groups.

Red Sea Disruption: Houthi attacks forcing ships around Cape of Good Hope. +10-14 days transit. +300% insurance.`;

        const messages = [
            ...conversationHistory.map(msg => ({ role: msg.role, content: msg.content })),
            { role: 'user', content: message }
        ];

        const response = await client.messages.create({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 2000,
            system: systemPrompt,
            messages: messages
        });

        return res.status(200).json({
            response: response.content[0].text,
            dataSources: results.filter(r => r).length,
            usage: response.usage
        });
    } catch (error) {
        console.error('API Error:', error);
        return res.status(500).json({ error: 'Failed to process request', details: error.message });
    }
};
