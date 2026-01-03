// ============================================
// NEXUS BANKING DEMO - UAE
// Version 1.0 - January 2025
// ============================================

const DEMO_TOKEN = 'nexus-banking-2025';

// ============================================
// SCENARIO BASELINE - Single source of truth
// ============================================

const BASELINE = {
    // Network Stats
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
    
    // Site Selection - Al Reem
    alReemDeposits: 'AED 42M',
    alReemPayback: '18 months',
    alReemCatchment: '89,000',
    alReemCannibalization: '4%',
    
    // Site Selection - Yas
    yasDeposits: 'AED 38M',
    yasPayback: '22 months',
    
    // Site Selection - Khalifa
    khalifaDeposits: 'AED 31M',
    khalifaPayback: '26 months',
    
    // Flood Risk
    floodExposureTotal: 'AED 1.24B',
    alQuozProperties: 847,
    alQuozExposure: 'AED 420M',
    businessBayProperties: 623,
    businessBayExposure: 'AED 380M',
    jvcProperties: 412,
    jvcExposure: 'AED 280M',
    
    // Trade Corridor
    tradeClientsTotal: 847,
    highExposureClients: 15,
    redSeaExposure: 'AED 194M',
    
    // Consolidation - Deira
    deiraCustomers: 2847,
    deiraMigrationRate: '67%',
    deiraAtRisk: 312,
    deiraAtRiskValue: 'AED 20M',
    
    // Consolidation - Al Karama
    alKaramaCustomers: 1923,
    alKaramaMigrationRate: '82%',
    alKaramaAtRisk: 89,
    alKaramaAtRiskValue: 'AED 4M'
};

// ============================================
// DATA SOURCES - For Provenance Display
// ============================================

const DATA_SOURCES = {
    bank: ['Bank CRM', 'Core Banking', 'Loan Portfolio'],
    esri: ['Esri Demographics', 'ArcGIS Analytics', 'Drive-Time Analysis'],
    government: ['Dubai Land Dept', 'DED Registry', 'NCM Weather'],
    partner: ['K&A Flood Modeling', 'Creditsafe', 'HERE Mobility'],
    trade: ['DP World CARGOES', 'MarineTraffic AIS']
};

// ============================================
// UAE LOCATIONS
// ============================================

const UAE_LOCATIONS = {
    alReem: { lat: 24.4942, lng: 54.4069, name: "Al Reem Island", emirate: "Abu Dhabi" },
    yasIsland: { lat: 24.4899, lng: 54.6010, name: "Yas Island", emirate: "Abu Dhabi" },
    khalifaCity: { lat: 24.4225, lng: 54.5773, name: "Khalifa City", emirate: "Abu Dhabi" },
    deira: { lat: 25.2697, lng: 55.3095, name: "Deira", emirate: "Dubai" },
    burDubai: { lat: 25.2582, lng: 55.2963, name: "Bur Dubai", emirate: "Dubai" },
    alKarama: { lat: 25.2469, lng: 55.3033, name: "Al Karama", emirate: "Dubai" },
    dubaiSouth: { lat: 24.8961, lng: 55.1557, name: "Dubai South", emirate: "Dubai" },
    alQuoz: { lat: 25.1413, lng: 55.2273, name: "Al Quoz Industrial", emirate: "Dubai" },
    businessBay: { lat: 25.1851, lng: 55.2719, name: "Business Bay", emirate: "Dubai" },
    jvc: { lat: 25.0657, lng: 55.2094, name: "JVC", emirate: "Dubai" },
    internationalCity: { lat: 25.1653, lng: 55.4048, name: "International City", emirate: "Dubai" },
    discoveryGardens: { lat: 25.0372, lng: 55.1352, name: "Discovery Gardens", emirate: "Dubai" },
    alNahda: { lat: 25.3030, lng: 55.3749, name: "Al Nahda", emirate: "Sharjah" },
    jafza: { lat: 24.9857, lng: 55.0272, name: "JAFZA", emirate: "Dubai" },
    difc: { lat: 25.2117, lng: 55.2817, name: "DIFC", emirate: "Dubai" },
    mussafah: { lat: 24.3547, lng: 54.4963, name: "Mussafah", emirate: "Abu Dhabi" },
    abuDhabiMain: { lat: 24.4539, lng: 54.3773, name: "Abu Dhabi CBD", emirate: "Abu Dhabi" },
    dubaiDowntown: { lat: 25.2048, lng: 55.2708, name: "Downtown Dubai", emirate: "Dubai" }
};

// ============================================
// INITIAL CHIPS
// ============================================

const INITIAL_CHIPS = [
    "Where should we target expat customers?",
    "Best location for new branch?",
    "Show flood risk exposure",
    "Trade corridor risks",
    "Show pilot deliverables"
];

// ============================================
// MARKET SIGNALS FEED EVENTS (Gemini Enhanced - 28 Events)
// ============================================

const FEED_EVENTS = [
    // --- OPPORTUNITIES (9 Events) ---
    { type: 'opportunity', title: 'Competitor Branch Closure', detail: 'Competitor X closing Deira branch. 14% local market share available.', area: 'Deira', metric: 'AED 15M deposits', delay: 1000, relatedFlow: 'consolidation' },
    { type: 'opportunity', title: 'Expat Influx Detected', detail: 'Al Reem Island leasing activity up 22%. High-income expat segment.', area: 'Al Reem Island', metric: '+3,500 premium clients', delay: 4000, relatedFlow: 'expat' },
    { type: 'opportunity', title: 'SME License Spike', detail: 'JAFZA issuing record number of logistics trade licenses in Q3.', area: 'JAFZA', metric: '450 new businesses', delay: 8000, relatedFlow: 'siteSelection' },
    { type: 'opportunity', title: 'Tourism Spending Surge', detail: 'Yas Island POV spending up 18% during F1 preparation window.', area: 'Yas Island', metric: '+18% card spend', delay: 12000, relatedFlow: 'siteSelection' },
    { type: 'opportunity', title: 'New Housing Handover', detail: 'Khalifa City Phase 2 handover begins. Mortgage acquisition window.', area: 'Khalifa City', metric: 'AED 120M mortgage potential', delay: 18000, relatedFlow: 'expat' },
    { type: 'opportunity', title: 'Logistics Hub Expansion', detail: 'Dubai South cargo terminal expansion approving new credit lines.', area: 'Dubai South', metric: 'AED 50M commercial lending', delay: 25000, relatedFlow: 'tradeCorridor' },
    { type: 'opportunity', title: 'Fintech Corridor Growth', detail: 'DIFC innovation hub startups seeking corporate banking partners.', area: 'DIFC', metric: '60+ startups', delay: 32000, relatedFlow: 'siteSelection' },
    { type: 'opportunity', title: 'Sharjah Commuter Deposits', detail: 'Al Nahda residents showing highest savings account growth rate.', area: 'Al Nahda', metric: '+9% savings volume', delay: 40000, relatedFlow: 'consolidation' },
    { type: 'opportunity', title: 'Retail Footfall Recovery', detail: 'Mussafah industrial area retail spending returns to pre-2020 levels.', area: 'Mussafah', metric: 'ATM tx volume up 12%', delay: 48000, relatedFlow: 'consolidation' },

    // --- RISKS (7 Events) ---
    { type: 'risk', title: 'Flood Zone Advisory', detail: 'NCM heavy rain alert. 847 mortgages in Al Quoz at elevated risk.', area: 'Al Quoz', metric: 'AED 420M exposure', delay: 6000, relatedFlow: 'floodRisk' },
    { type: 'risk', title: 'Infrastructure Strain', detail: 'Discovery Gardens drainage maintenance causing access issues.', area: 'Discovery Gardens', metric: 'Branch access limited', delay: 15000, relatedFlow: 'floodRisk' },
    { type: 'risk', title: 'Red Sea Disruption', detail: 'Vessel transit times up 14 days. Trade finance LC extensions required.', area: 'Red Sea Corridor', metric: '15 corporate clients', delay: 22000, relatedFlow: 'tradeCorridor' },
    { type: 'risk', title: 'Commercial Credit Watch', detail: 'Business Bay construction sub-contractors showing delayed payments.', area: 'Business Bay', metric: 'AED 35M risk', delay: 30000, relatedFlow: 'consolidation' },
    { type: 'risk', title: 'Industrial Fire Hazard', detail: 'Mussafah Sector 4 flagged for low insurance coverage compliance.', area: 'Mussafah', metric: 'Collateral risk high', delay: 38000, relatedFlow: 'siteSelection' },
    { type: 'risk', title: 'Cyber Threat Intel', detail: 'Phishing campaign targeting UAE real estate transfers detected.', area: 'UAE-wide', metric: 'Fraud alert', delay: 45000, relatedFlow: 'expat' },
    { type: 'risk', title: 'Hormuz Strait Tension', detail: 'Insurance premiums for tankers transiting Hormuz increased.', area: 'Strait of Hormuz', metric: '+0.5% cost basis', delay: 52000, relatedFlow: 'tradeCorridor' },

    // --- MARKET (7 Events) ---
    { type: 'market', title: 'DLD Transaction Spike', detail: 'Property transactions in JVC up 45% this quarter. Villa segment leading.', area: 'JVC', metric: '+45% volume', delay: 10000, relatedFlow: 'siteSelection' },
    { type: 'market', title: 'Remittance Corridor Shift', detail: 'Outflows to India up 12%. Philippines corridor stabilizing.', area: 'Bur Dubai', metric: 'AED 2.1B monthly', delay: 20000, relatedFlow: 'expat' },
    { type: 'market', title: 'Rental Yield Compression', detail: 'International City rental yields softening as tenants move to new suburbs.', area: 'International City', metric: '-2% yield YoY', delay: 28000, relatedFlow: 'siteSelection' },
    { type: 'market', title: 'Gold Souq Activity', detail: 'Deira Gold Souq merchants reporting higher cash deposit needs.', area: 'Deira', metric: 'Cash management demand', delay: 35000, relatedFlow: 'siteSelection' },
    { type: 'market', title: 'Off-Plan Sales Boom', detail: 'Dubai Marina off-plan launches selling out in < 48 hours.', area: 'Dubai Marina', metric: 'High mortgage pre-approval', delay: 42000, relatedFlow: 'expat' },
    { type: 'market', title: 'Logistics Employment', detail: 'Dubai South logistics sector hiring pacing 3x above national average.', area: 'Dubai South', metric: 'Payroll accounts', delay: 50000, relatedFlow: 'expat' },
    { type: 'market', title: 'EV Auto Loans', detail: 'Sustainable City residents showing 40% higher EV adoption rate.', area: 'Dubai', metric: 'Green financing demand', delay: 58000, relatedFlow: 'expat' },

    // --- REGULATORY (5 Events) ---
    { type: 'regulatory', title: 'CBUAE Climate Mandate', detail: 'New stress testing requirements for mortgage portfolios in flood zones.', area: 'UAE-wide', metric: 'Compliance Q2 2025', delay: 14000, relatedFlow: 'floodRisk' },
    { type: 'regulatory', title: 'Financial Inclusion Target', detail: 'NFIS 2026-2030 requires reporting on underserved area coverage.', area: 'Northern Emirates', metric: '32% underbanked', delay: 26000, relatedFlow: 'consolidation' },
    { type: 'regulatory', title: 'CBUAE Deferral Reporting', detail: 'Standardized reporting expected for 6-month loan deferrals and customer impact following extreme weather events.', area: 'UAE-wide', metric: '6-month deferrals', delay: 36000, relatedFlow: 'floodRisk' },
    { type: 'regulatory', title: 'Emiratization Targets', detail: 'Private sector quota increases for banking/finance roles.', area: 'UAE-wide', metric: '4% workforce target', delay: 44000, relatedFlow: 'consolidation' },
    { type: 'regulatory', title: 'Open Banking API', detail: 'New framework for third-party payment initiation released.', area: 'UAE-wide', metric: 'Tech integration', delay: 55000, relatedFlow: 'siteSelection' }
];

// ============================================
// SCRIPTED RESPONSES (Enhanced with ChatGPT + Claude)
// ============================================

const scriptedResponses = {
    // ========== INITIAL ==========
    "initial": {
        content: `<p>Good morning. I've been monitoring real-time data from <strong>Moro Hub</strong> and <strong>Esri</strong> across your UAE network.</p>
            <p>I've identified several strategic opportunities that require your attention:</p>
            <div class="viz-roi-cards">
                <div class="roi-card"><div class="roi-label">Deposits at Risk</div><div class="roi-value red">${BASELINE.depositsAtRisk}</div></div>
                <div class="roi-card"><div class="roi-label">Growth Opportunity</div><div class="roi-value green">${BASELINE.growthOpportunity}</div></div>
                <div class="roi-card"><div class="roi-label">Underbanked Population</div><div class="roi-value gold">${BASELINE.underbankedPercent}</div></div>
                <div class="roi-card"><div class="roi-label">Climate Exposure</div><div class="roi-value amber">${BASELINE.floodExposureTotal}</div></div>
            </div>
            <p>Most notably: <strong>Dubai South</strong> shows 34% population growth with minimal banking presence. This aligns with CBUAE's Financial Inclusion Strategy 2026-2030.</p>
            <p>What would you like to explore?</p>
            ${createProvenance(['Moro Hub (licensed feeds)', 'Esri ArcGIS', 'Bank Network (demo)'], 90)}`,
        chips: INITIAL_CHIPS
    },
    
    // ========== FLOW 1: EXPAT POPULATION INTELLIGENCE (ChatGPT Enhanced) ==========

    // ========== FLOW 1: EXPAT POPULATION INTELLIGENCE (ChatGPT Enhanced) ==========
    "where should we target expat customers?": {
        content: `<p>We should target expat communities where underbanking is highest and location access is frictionless.</p>
            <p><span class="text-cyan"><strong>UAE context:</strong></span> ${BASELINE.expatPercent} of the UAE population is expat; ~${BASELINE.underbankedPercent} are underbanked. Key segments: Indians (${BASELINE.indianPercent}), Pakistanis (${BASELINE.pakistaniPercent}), Filipinos (${BASELINE.filipinoPercent}).</p>
            <div class="viz-roi-cards">
                <div class="roi-card"><div class="roi-label">12-mo Deposit Uplift</div><div class="roi-value gold">AED 210M–260M</div></div>
                <div class="roi-card"><div class="roi-label">Remittance Fee Opportunity</div><div class="roi-value gold">AED 18M–26M</div></div>
                <div class="roi-card"><div class="roi-label">Priority Zones</div><div class="roi-value">Dubai South • Al Nahda • Int'l City</div></div>
                <div class="roi-card"><div class="roi-label">Inclusion Alignment</div><div class="roi-value green">High</div></div>
            </div>
            <p><strong>Recommended starting zones</strong> (fast activation, high density):</p>
            <div class="viz-risk-matrix">
                <div class="risk-matrix-header">📊 Expat Growth Zones</div>
                <div class="risk-item"><div class="risk-level critical"></div><div class="risk-info"><div class="risk-name">Dubai South</div><div class="risk-detail">+34% YoY • Logistics workforce • 1 branch / 45,000 residents</div></div><div class="risk-value green">HIGH PRIORITY</div></div>
                <div class="risk-item"><div class="risk-level high"></div><div class="risk-info"><div class="risk-name">Al Nahda (Sharjah)</div><div class="risk-detail">+18% YoY • Cross-emirate commuters • High remittance</div></div><div class="risk-value green">HIGH PRIORITY</div></div>
                <div class="risk-item"><div class="risk-level medium"></div><div class="risk-info"><div class="risk-name">International City</div><div class="risk-detail">+12% YoY • High remittance density • 2 branches / 85,000</div></div><div class="risk-value cyan">OPPORTUNITY</div></div>
                <div class="risk-item"><div class="risk-level low"></div><div class="risk-info"><div class="risk-name">Discovery Gardens</div><div class="risk-detail">-8% YoY • Filipino declining • Consider rebalancing</div></div><div class="risk-value amber">MONITOR</div></div>
            </div>
            <p><strong>CBUAE alignment:</strong> This targets measurable inclusion outcomes consistent with the <strong>National Financial Inclusion Strategy 2026–2030</strong> (access, usage, affordability).</p>
            ${createProvenance(['Esri Demographics', 'Government Census', 'Mobility Signals', 'Bank Network'], 89)}`,
        chips: ["Deep dive: Dubai South", "Remittance corridor analysis", "Show competitor gaps", "Islamic banking potential"],
        mapAction: { type: 'flyTo', location: 'dubaiSouth', zoom: 11 }
    },

    "deep dive: dubai south": {
        content: `<p>Dubai South is a high-growth expat catchment with strong "salary-to-remittance" behavior and low branch saturation.</p>
            <div class="viz-roi-cards">
                <div class="roi-card"><div class="roi-label">Underbanked Adults</div><div class="roi-value">46K–62K</div></div>
                <div class="roi-card"><div class="roi-label">New Account Potential</div><div class="roi-value green">14K–19K</div></div>
                <div class="roi-card"><div class="roi-label">Deposit Uplift (12-mo)</div><div class="roi-value gold">AED 58M–74M</div></div>
                <div class="roi-card"><div class="roi-label">Time-to-Value</div><div class="roi-value green">8–12 weeks</div></div>
            </div>
            <div class="viz-risk-matrix">
                <div class="risk-matrix-header">👥 Demographic Profile</div>
                <div class="risk-item"><div class="risk-level critical"></div><div class="risk-info"><div class="risk-name">Indian Nationals</div><div class="risk-detail">Logistics, warehousing, aviation sector</div></div><div class="risk-value">62%</div></div>
                <div class="risk-item"><div class="risk-level high"></div><div class="risk-info"><div class="risk-name">Pakistani Nationals</div><div class="risk-detail">Trade, transport, construction</div></div><div class="risk-value">18%</div></div>
                <div class="risk-item"><div class="risk-level medium"></div><div class="risk-info"><div class="risk-name">Filipino Nationals</div><div class="risk-detail">Hospitality, aviation services</div></div><div class="risk-value">9%</div></div>
                <div class="risk-item"><div class="risk-level low"></div><div class="risk-info"><div class="risk-name">Other</div><div class="risk-detail">Mixed nationalities</div></div><div class="risk-value">11%</div></div>
            </div>
            <p><strong>What makes Dubai South attractive:</strong></p>
            <ul style="margin: 10px 0 10px 20px; color: var(--text-secondary);">
                <li><span class="text-green"><strong>Access:</strong></span> High transit connectivity; easy drive-time coverage</li>
                <li><span class="text-green"><strong>Products:</strong></span> Salary accounts + low-fee remittance + family savings bundles</li>
                <li><span class="text-amber"><strong>Risk:</strong></span> Competitor digital offers; mitigate with payroll partnerships</li>
            </ul>
            <p><strong>Opportunity:</strong> Salary account partnerships with logistics employers. Estimated 12,000 potential new accounts.</p>
            ${createProvenance(['Esri Demographics', 'DED Registry', 'Mobility/Commuter Flows', 'Bank Network'], 91)}`,
        chips: ["Employer partnership strategy", "Remittance corridor analysis", "Compare to Al Nahda", "Return to overview"],
        mapAction: { type: 'flyTo', location: 'dubaiSouth', zoom: 13 }
    },

    "remittance corridor analysis": {
        content: `<p>Remittance behavior clusters tightly by community and commute pattern. We can optimize channel mix and placement.</p>
            <div class="viz-roi-cards">
                <div class="roi-card"><div class="roi-label">Monthly Outflow</div><div class="roi-value gold">AED 2.1B–2.5B</div></div>
                <div class="roi-card"><div class="roi-label">Top Corridors</div><div class="roi-value">India • Pakistan • Philippines</div></div>
                <div class="roi-card"><div class="roi-label">12-mo Fee Opportunity</div><div class="roi-value gold">AED 18M–26M</div></div>
                <div class="roi-card"><div class="roi-label">Recommended Channel</div><div class="roi-value green">Mobile + kiosks</div></div>
            </div>
            <div class="viz-risk-matrix">
                <div class="risk-matrix-header">💸 Corridor Hotspots by Nationality</div>
                <div class="risk-item"><div class="risk-level critical"></div><div class="risk-info"><div class="risk-name">India Corridor</div><div class="risk-detail">International City, Discovery Gardens, Al Nahda</div></div><div class="risk-value gold">AED 1.3B/mo</div></div>
                <div class="risk-item"><div class="risk-level high"></div><div class="risk-info"><div class="risk-name">Pakistan Corridor</div><div class="risk-detail">Al Nahda, Deira, Mussafah</div></div><div class="risk-value gold">AED 620M/mo</div></div>
                <div class="risk-item"><div class="risk-level medium"></div><div class="risk-info"><div class="risk-name">Philippines Corridor</div><div class="risk-detail">Al Nahda, Deira, JVC edges</div></div><div class="risk-value cyan">AED 310M/mo</div></div>
                <div class="risk-item"><div class="risk-level medium"></div><div class="risk-info"><div class="risk-name">Bangladesh Corridor</div><div class="risk-detail">Dhaka, Chittagong destinations • Stable</div></div><div class="risk-value cyan">AED 210M/mo</div></div>
            </div>
            <p><strong>Product Opportunity:</strong> Banks capturing salary accounts in high-remittance areas can cross-sell competitive FX. Average remitter sends 35% of salary monthly.</p>
            <p><strong>CBUAE alignment:</strong> Transparent, low-cost remittance access supports the <strong>NFIS 2026–2030</strong> (affordability + usage).</p>
            ${createProvenance(['CBUAE Exchange Data', 'Mobility Signals', 'Esri Location Intelligence', 'Bank Network'], 87)}`,
        chips: ["Target high-remittance areas", "FX product strategy", "Deep dive: Dubai South", "Return to overview"],
        mapAction: { type: 'highlight', location: 'internationalCity' }
    },

    "islamic banking potential": {
        content: `<p>We see strong demand pockets for Sharia-compliant offerings in family-dense expat areas and specific workforce corridors.</p>
            <div class="viz-roi-cards">
                <div class="roi-card"><div class="roi-label">Potential New Customers</div><div class="roi-value green">9K–13K</div></div>
                <div class="roi-card"><div class="roi-label">Deposit Uplift (12-mo)</div><div class="roi-value gold">AED 34M–49M</div></div>
                <div class="roi-card"><div class="roi-label">Best Launch Zones</div><div class="roi-value">Al Nahda • Deira • Mussafah</div></div>
                <div class="roi-card"><div class="roi-label">Confidence</div><div class="roi-value amber">Medium-High</div></div>
            </div>
            <div class="viz-risk-matrix">
                <div class="risk-matrix-header">🕌 Islamic Banking Gaps (High Muslim Population, Low Penetration)</div>
                <div class="risk-item"><div class="risk-level critical"></div><div class="risk-info"><div class="risk-name">Al Nahda (Sharjah)</div><div class="risk-detail">89% Muslim population • Only 1 Islamic branch</div></div><div class="risk-value green">HIGH</div></div>
                <div class="risk-item"><div class="risk-level high"></div><div class="risk-info"><div class="risk-name">International City</div><div class="risk-detail">85% Muslim population • 0 dedicated Islamic branches</div></div><div class="risk-value green">HIGH</div></div>
                <div class="risk-item"><div class="risk-level medium"></div><div class="risk-info"><div class="risk-name">Mussafah (Abu Dhabi)</div><div class="risk-detail">78% Muslim population • 2 Islamic branches</div></div><div class="risk-value cyan">MEDIUM</div></div>
            </div>
            <p><strong>Recommended Sharia-compliant product wedges:</strong></p>
            <ul style="margin: 10px 0 10px 20px; color: var(--text-secondary);">
                <li>Salary account + family savings (localized benefits)</li>
                <li>Remittance bundle with transparent pricing</li>
                <li>Auto finance / durable goods financing (community-anchored)</li>
            </ul>
            <p><strong>CBUAE alignment:</strong> Expands accessible product choice within the <strong>NFIS 2026–2030</strong>.</p>
            ${createProvenance(['Esri Demographics', 'POI Community Density', 'Mobility Signals', 'Bank Product Uptake'], 88)}`,
        chips: ["Plan Islamic branch: Al Nahda", "Show competitor gaps", "Remittance corridor analysis", "Return to overview"],
        mapAction: { type: 'highlight', location: 'alNahda' }
    },

    "show competitor gaps": {
        content: `<p>Here are the highest-value catchments where competitor coverage is thin relative to expat density and remittance flow.</p>
            <div class="viz-roi-cards">
                <div class="roi-card"><div class="roi-label">Gap Catchments</div><div class="roi-value">12</div></div>
                <div class="roi-card"><div class="roi-label">Revenue Upside (12-mo)</div><div class="roi-value gold">AED 22M–31M</div></div>
                <div class="roi-card"><div class="roi-label">Fastest Wins</div><div class="roi-value">Int'l City • Al Nahda</div></div>
                <div class="roi-card"><div class="roi-label">Action Priority</div><div class="roi-value green">High</div></div>
            </div>
            <div class="viz-risk-matrix">
                <div class="risk-matrix-header">📍 Coverage Gaps (Competitor Underserved)</div>
                <div class="risk-item"><div class="risk-level critical"></div><div class="risk-info"><div class="risk-name">International City</div><div class="risk-detail">High remittance density, limited in-catchment physical service</div></div><div class="risk-value green">PRIORITY</div></div>
                <div class="risk-item"><div class="risk-level high"></div><div class="risk-info"><div class="risk-name">Discovery Gardens</div><div class="risk-detail">Family expats underserved by nearby full-service branch</div></div><div class="risk-value green">PRIORITY</div></div>
                <div class="risk-item"><div class="risk-level medium"></div><div class="risk-info"><div class="risk-name">Mussafah</div><div class="risk-detail">Workforce corridor with long drive-times to current network</div></div><div class="risk-value cyan">OPPORTUNITY</div></div>
            </div>
            <p><strong>CBUAE alignment:</strong> Expands access in under-served zones aligned to the <strong>NFIS 2026–2030</strong>.</p>
            ${createProvenance(['Competitor POI Footprints', 'Drive-Time Modeling', 'Esri Enrichment', 'Bank Network'], 90)}`,
        chips: ["Deep dive: Dubai South", "Remittance corridor analysis", "Islamic banking potential", "Return to overview"],
        mapAction: { type: 'showCompetitors', area: 'dubai' }
    },

    // ========== FLOW 2: SITE SELECTION (ChatGPT Enhanced) ==========
    "best location for new branch?": {
        content: `<p>Where would you like to expand? I can analyze opportunities across the UAE.</p>
            <div class="viz-roi-cards">
                <div class="roi-card"><div class="roi-label">Abu Dhabi</div><div class="roi-value gold">3 sites</div></div>
                <div class="roi-card"><div class="roi-label">Dubai</div><div class="roi-value gold">5 sites</div></div>
                <div class="roi-card"><div class="roi-label">Sharjah</div><div class="roi-value cyan">2 sites</div></div>
                <div class="roi-card"><div class="roi-label">Northern Emirates</div><div class="roi-value cyan">2 sites</div></div>
            </div>
            <p>Based on current market gaps and your network positioning, <strong>Abu Dhabi</strong> shows the highest ROI potential for conventional branches, while <strong>Sharjah</strong> leads for Islamic banking expansion.</p>
            ${createProvenance(['Esri Network Analytics', 'Demographic Enrichment', 'Competitor POIs', 'Bank Network (demo)'], 88)}`,
        chips: ["Next branch in Abu Dhabi", "Next branch in Dubai", "Islamic branch in Sharjah", "ATM-only strategy"],
        mapAction: { type: 'showUAE' }
    },

    "next branch in abu dhabi": {
        content: `<p>Based on deposit potential and payback under 24 months, here are the top recommendations.</p>
            <div class="viz-roi-cards">
                <div class="roi-card"><div class="roi-label">#1 Al Reem Island</div><div class="roi-value"><span class="text-green">${BASELINE.alReemDeposits}</span> • <span class="text-green">${BASELINE.alReemPayback}</span></div></div>
                <div class="roi-card"><div class="roi-label">#2 Yas Island</div><div class="roi-value"><span class="text-green">${BASELINE.yasDeposits}</span> • <span class="text-amber">${BASELINE.yasPayback}</span></div></div>
                <div class="roi-card"><div class="roi-label">#3 Khalifa City</div><div class="roi-value"><span class="text-amber">${BASELINE.khalifaDeposits}</span> • <span class="text-red">${BASELINE.khalifaPayback}</span></div></div>
                <div class="roi-card"><div class="roi-label">Target Payback</div><div class="roi-value green">< 24 months</div></div>
            </div>
            <p><strong>Why Al Reem wins:</strong> ${BASELINE.alReemCatchment} residents in catchment, strong accessibility, and only ${BASELINE.alReemCannibalization} cannibalization relative to expected uplift.</p>
            <div class="viz-risk-matrix">
                <div class="risk-matrix-header">📍 Site Comparison Summary</div>
                <div class="risk-item"><div class="risk-level critical"></div><div class="risk-info"><div class="risk-name">Al Reem Island</div><div class="risk-detail">HNW segment • Low competitor saturation • Strong accessibility</div></div><div class="risk-value green">RECOMMENDED</div></div>
                <div class="risk-item"><div class="risk-level high"></div><div class="risk-info"><div class="risk-name">Yas Island</div><div class="risk-detail">Tourism + residential • Higher premium mix potential</div></div><div class="risk-value cyan">ALTERNATIVE</div></div>
                <div class="risk-item"><div class="risk-level medium"></div><div class="risk-info"><div class="risk-name">Khalifa City</div><div class="risk-detail">Family segment • Higher cannibalization with Al Raha</div></div><div class="risk-value amber">CONSIDER</div></div>
            </div>
            ${createProvenance(['Esri Catchment Modeling', 'DLD Transactions', 'Drive-Time Analysis', 'Competitor POIs'], 92)}`,
        chips: ["Compare Al Reem vs Yas", "Show drive-time analysis", "Cannibalization deep dive", "Simulate Al Reem opening"],
        mapAction: { type: 'flyTo', location: 'alReem', zoom: 13 }
    },

    "compare al reem vs yas": {
        content: `<p><strong>Side-by-side comparison using the same modeling assumptions:</strong></p>
            <div class="viz-risk-matrix">
                <div class="risk-matrix-header">📊 Head-to-Head Comparison</div>
                <div class="risk-item"><div class="risk-level critical"></div><div class="risk-info"><div class="risk-name">Deposit Potential (Year 1)</div><div class="risk-detail">Al Reem: <strong>${BASELINE.alReemDeposits}</strong> | Yas: <strong>${BASELINE.yasDeposits}</strong></div></div><div class="risk-value green">Al Reem +11%</div></div>
                <div class="risk-item"><div class="risk-level high"></div><div class="risk-info"><div class="risk-name">Payback Period</div><div class="risk-detail">Al Reem: <strong>${BASELINE.alReemPayback}</strong> | Yas: <strong>${BASELINE.yasPayback}</strong></div></div><div class="risk-value green">Al Reem</div></div>
                <div class="risk-item"><div class="risk-level medium"></div><div class="risk-info"><div class="risk-name">Cannibalization Risk</div><div class="risk-detail">Al Reem: <strong>${BASELINE.alReemCannibalization}</strong> | Yas: <strong>12%</strong></div></div><div class="risk-value green">Al Reem</div></div>
                <div class="risk-item"><div class="risk-level medium"></div><div class="risk-info"><div class="risk-name">Catchment Residents</div><div class="risk-detail">Al Reem: <strong>${BASELINE.alReemCatchment}</strong> | Yas: <strong>71,000</strong></div></div><div class="risk-value green">Al Reem</div></div>
                <div class="risk-item"><div class="risk-level low"></div><div class="risk-info"><div class="risk-name">Competitor Density</div><div class="risk-detail">Al Reem: 2 branches | Yas: 1 branch</div></div><div class="risk-value cyan">Yas</div></div>
            </div>
            <p><strong>Recommendation:</strong> Choose <strong>Al Reem</strong> for faster payback and stronger resident density; choose <strong>Yas</strong> for higher premium segment mix or tourism banking strategy.</p>
            ${createProvenance(['Esri Drive-Time/Catchment', 'Demographic Enrichment', 'Competitor POIs', 'Bank Network'], 90)}`,
        chips: ["Show drive-time analysis", "Cannibalization deep dive", "Simulate Al Reem opening", "Return to overview"],
        mapAction: { type: 'showComparison', locations: ['alReem', 'yasIsland'] }
    },

    "show drive-time analysis": {
        content: `<p>Drive-time analysis visualizes who can reach a branch within defined travel thresholds.</p>
            <div class="viz-timeline">
                <div class="timeline-item"><div class="timeline-marker green"></div><div class="timeline-content"><div class="timeline-title">Step 1: Generate Isochrones</div><div class="timeline-desc">5/10/15-minute drive-time polygons from candidate site</div></div></div>
                <div class="timeline-item"><div class="timeline-marker cyan"></div><div class="timeline-content"><div class="timeline-title">Step 2: Overlay Demographics</div><div class="timeline-desc">Population + income proxies + competitor access</div></div></div>
                <div class="timeline-item"><div class="timeline-marker gold"></div><div class="timeline-content"><div class="timeline-title">Step 3: Calculate Potential</div><div class="timeline-desc">Estimate reachable deposits and service gaps</div></div></div>
            </div>
            <div class="viz-roi-cards">
                <div class="roi-card"><div class="roi-label">5-min Residents</div><div class="roi-value">31K</div></div>
                <div class="roi-card"><div class="roi-label">10-min Residents</div><div class="roi-value">62K</div></div>
                <div class="roi-card"><div class="roi-label">15-min Residents</div><div class="roi-value">${BASELINE.alReemCatchment}</div></div>
                <div class="roi-card"><div class="roi-label">Network Overlap</div><div class="roi-value green">${BASELINE.alReemCannibalization}</div></div>
            </div>
            <p><strong>Interpretation:</strong> A dense 10-minute catchment is the best predictor of early deposit capture. Al Reem shows 62,000 residents within 10 minutes with minimal competitor presence.</p>
            <p><strong>Peak Traffic Note:</strong> Evening rush (5-7 PM) extends drive times by ~40%. Branch should offer extended hours.</p>
            ${createProvenance(['Esri Network Analyst', 'Road Network', 'Demographic Enrichment', 'Branch Network'], 94)}`,
        chips: ["Cannibalization deep dive", "Simulate Al Reem opening", "Compare Al Reem vs Yas", "Return to overview"],
        mapAction: { type: 'showDriveTime', location: 'alReem', minutes: 15 }
    },

    "cannibalization deep dive": {
        content: `<p>Cannibalization measures overlap between the new site's catchment and your existing network.</p>
            <div class="viz-risk-matrix">
                <div class="risk-matrix-header">🔄 Overlap Diagnostics (Al Reem Candidate)</div>
                <div class="risk-item"><div class="risk-level medium"></div><div class="risk-info"><div class="risk-name">10-min Overlap</div><div class="risk-detail">Overlap with nearest branch catchments</div></div><div class="risk-value amber">23%</div></div>
                <div class="risk-item"><div class="risk-level low"></div><div class="risk-info"><div class="risk-name">High-Value Segment</div><div class="risk-detail">HNW customer overlap specifically</div></div><div class="risk-value green">14%</div></div>
                <div class="risk-item"><div class="risk-level low"></div><div class="risk-info"><div class="risk-name">Net Incremental</div><div class="risk-detail">New deposits after cannibalization adjustment</div></div><div class="risk-value green">AED 30M–34M</div></div>
            </div>
            <div class="viz-roi-cards">
                <div class="roi-card"><div class="roi-label">Gross Potential</div><div class="roi-value">${BASELINE.alReemDeposits}</div></div>
                <div class="roi-card"><div class="roi-label">Cannibalized</div><div class="roi-value amber">AED 8M–12M</div></div>
                <div class="roi-card"><div class="roi-label">Net New</div><div class="roi-value green">AED 30M–34M</div></div>
                <div class="roi-card"><div class="roi-label">Cannib. Rate</div><div class="roi-value green">${BASELINE.alReemCannibalization}</div></div>
            </div>
            <p><strong>Recommendation:</strong> Proceed with Al Reem if you pair it with micro-relocation of one ATM and targeted outreach to avoid internal substitution.</p>
            ${createProvenance(['Branch Network', 'Esri Catchment Overlap', 'Customer Density', 'Competitor POIs'], 91)}`,
        chips: ["Simulate Al Reem opening", "Show drive-time analysis", "Next branch in Abu Dhabi", "Return to overview"],
        mapAction: { type: 'flyTo', location: 'alReem', zoom: 13 }
    },

    "simulate al reem opening": {
        content: `<p><strong>Simulating a full-service branch at Al Reem with a 3-year horizon:</strong></p>
            <div class="viz-timeline">
                <div class="timeline-item"><div class="timeline-marker green"></div><div class="timeline-content"><div class="timeline-title">Year 1</div><div class="timeline-desc">Capture core deposits + migrate nearby high-friction customers</div></div></div>
                <div class="timeline-item"><div class="timeline-marker cyan"></div><div class="timeline-content"><div class="timeline-title">Year 2</div><div class="timeline-desc">Expand SME and premium segment mix</div></div></div>
                <div class="timeline-item"><div class="timeline-marker gold"></div><div class="timeline-content"><div class="timeline-title">Year 3</div><div class="timeline-desc">Optimize footprint; add digital-first assisted services</div></div></div>
            </div>
            <div class="viz-roi-cards">
                <div class="roi-card"><div class="roi-label">Deposit Potential</div><div class="roi-value gold">${BASELINE.alReemDeposits}</div></div>
                <div class="roi-card"><div class="roi-label">Payback</div><div class="roi-value green">${BASELINE.alReemPayback}</div></div>
                <div class="roi-card"><div class="roi-label">3-Yr Net Benefit</div><div class="roi-value gold">AED 64M–79M</div></div>
                <div class="roi-card"><div class="roi-label">Cannibalization</div><div class="roi-value amber">23%</div></div>
            </div>
            <p><strong>Decision:</strong> This meets the &lt;24-month payback requirement with strong catchment fundamentals (${BASELINE.alReemCatchment} residents).</p>
            <p><strong>Next Steps:</strong> Site survey, landlord negotiation, CBUAE branch license application (typically 60-90 days).</p>
            ${createProvenance(['Esri Site Suitability', 'Drive-Time Catchments', 'Branch Network', 'Demographic Enrichment'], 93)}`,
        chips: ["Cannibalization deep dive", "Compare Al Reem vs Yas", "Return to site selection", "Return to overview"],
        mapAction: { type: 'flyTo', location: 'alReem', zoom: 14 }
    },

    // ========== FLOW 3: FLOOD/CLIMATE RISK (ChatGPT Enhanced with K&A) ==========
    "show flood risk exposure": {
        content: `<p>Overlaying the mortgage portfolio against flood hazard zones to quantify concentration risk.</p>
            <p><span class="text-cyan"><strong>April 2024 context:</strong></span> Worst floods in ~75 years; ~100mm rain in ~12 hours. Insurance losses estimated at ~AED 10.7–12.5B. CBUAE mandated 6-month loan deferrals.</p>
            <div class="viz-roi-cards">
                <div class="roi-card warning"><div class="roi-label">High-Risk Exposure</div><div class="roi-value red">${BASELINE.floodExposureTotal}</div></div>
                <div class="roi-card"><div class="roi-label">Properties at Risk</div><div class="roi-value amber">2,145</div></div>
                <div class="roi-card"><div class="roi-label">% of Portfolio</div><div class="roi-value">12%</div></div>
                <div class="roi-card"><div class="roi-label">CBUAE Deadline</div><div class="roi-value amber">Q2 2025</div></div>
            </div>
            <div class="viz-risk-matrix">
                <div class="risk-matrix-header">⚠️ High-Risk Zones (Based on April 2024 Flood Event)</div>
                <div class="risk-item"><div class="risk-level critical"></div><div class="risk-info"><div class="risk-name">Al Quoz Industrial</div><div class="risk-detail">${BASELINE.alQuozProperties} properties • FLOODED April 2024</div></div><div class="risk-value red">${BASELINE.alQuozExposure}</div></div>
                <div class="risk-item"><div class="risk-level critical"></div><div class="risk-info"><div class="risk-name">Business Bay (Low Areas)</div><div class="risk-detail">${BASELINE.businessBayProperties} properties • FLOODED April 2024</div></div><div class="risk-value red">${BASELINE.businessBayExposure}</div></div>
                <div class="risk-item"><div class="risk-level high"></div><div class="risk-info"><div class="risk-name">JVC (Ground Floor)</div><div class="risk-detail">${BASELINE.jvcProperties} properties • PARTIAL flooding</div></div><div class="risk-value amber">${BASELINE.jvcExposure}</div></div>
                <div class="risk-item"><div class="risk-level medium"></div><div class="risk-info"><div class="risk-name">Discovery Gardens</div><div class="risk-detail">263 properties • FLOODED April 2024</div></div><div class="risk-value cyan">AED 140M</div></div>
            </div>
            <p><strong>Flood modeling powered by Khatib & Alami (K&A) partner integration.</strong></p>
            ${createProvenance(['K&A Flood Modeling', 'NCM Historical Data', 'Esri Climate Layers', 'Loan Portfolio'], 93)}`,
        chips: ["Deep dive: Al Quoz", "New origination guidelines", "CBUAE reporting format", "K&A methodology"],
        mapAction: { type: 'showFloodRisk' }
    },

    "deep dive: al quoz": {
        content: `<p>Al Quoz Industrial shows the highest modeled flood concentration and operational disruption exposure.</p>
            <div class="viz-roi-cards">
                <div class="roi-card warning"><div class="roi-label">Properties</div><div class="roi-value">${BASELINE.alQuozProperties}</div></div>
                <div class="roi-card warning"><div class="roi-label">Exposure</div><div class="roi-value red">${BASELINE.alQuozExposure}</div></div>
                <div class="roi-card"><div class="roi-label">Avg Loan Size</div><div class="roi-value">AED 496K</div></div>
                <div class="roi-card"><div class="roi-label">Flood Insurance</div><div class="roi-value red">23%</div></div>
            </div>
            <div class="viz-timeline">
                <div class="timeline-item"><div class="timeline-marker red"></div><div class="timeline-content"><div class="timeline-time">April 16, 2024</div><div class="timeline-title">Major Flooding Event</div><div class="timeline-desc">100mm rainfall in 12 hours. Al Quoz roads impassable for 48 hours. 312 properties reported damage.</div></div></div>
                <div class="timeline-item"><div class="timeline-marker amber"></div><div class="timeline-content"><div class="timeline-time">April 23, 2024</div><div class="timeline-title">CBUAE Directive</div><div class="timeline-desc">6-month loan deferral mandate. No penalties or additional interest.</div></div></div>
                <div class="timeline-item"><div class="timeline-marker cyan"></div><div class="timeline-content"><div class="timeline-time">Q4 2024</div><div class="timeline-title">Dubai Drainage Project</div><div class="timeline-desc">AED 30B "Tasreef" project announced. Al Quoz improvements expected by 2027.</div></div></div>
            </div>
            <p><strong>What Nexus recommends:</strong></p>
            <ul style="margin: 10px 0 10px 20px; color: var(--text-secondary);">
                <li>Prioritize borrower outreach for ground-level parcels</li>
                <li>Geo-tag collateral inspections to highest hazard zones</li>
                <li>Stage continuity plans for branch/ATM servicing</li>
            </ul>
            <p><strong>Flood modeling powered by Khatib & Alami (K&A).</strong></p>
            ${createProvenance(['K&A Flood Depth/Extent', 'Elevation Data', 'Bank Mortgage Book', 'Esri Basemaps'], 91)}`,
        chips: ["New origination guidelines", "CBUAE reporting format", "Show flood risk exposure", "Return to overview"],
        mapAction: { type: 'flyTo', location: 'alQuoz', zoom: 14 }
    },

    "new origination guidelines": {
        content: `<p>Recommended underwriting guardrails for new originations in modeled flood-sensitive zones:</p>
            <div class="viz-timeline">
                <div class="timeline-item"><div class="timeline-marker red"></div><div class="timeline-content"><div class="timeline-title">1. Pre-screen</div><div class="timeline-desc">Flag properties intersecting high-risk polygons automatically</div></div></div>
                <div class="timeline-item"><div class="timeline-marker amber"></div><div class="timeline-content"><div class="timeline-title">2. Risk Tier</div><div class="timeline-desc">Apply collateral tiering (Red/Amber/Green zones)</div></div></div>
                <div class="timeline-item"><div class="timeline-marker cyan"></div><div class="timeline-content"><div class="timeline-title">3. Conditions</div><div class="timeline-desc">Adjust LTV/tenor; require mitigation evidence where applicable</div></div></div>
                <div class="timeline-item"><div class="timeline-marker green"></div><div class="timeline-content"><div class="timeline-title">4. Monitor</div><div class="timeline-desc">Add location-based early-warning triggers post-origination</div></div></div>
            </div>
            <div class="viz-risk-matrix">
                <div class="risk-matrix-header">📋 Proposed Underwriting by Zone</div>
                <div class="risk-item"><div class="risk-level critical"></div><div class="risk-info"><div class="risk-name">Red Zones (Al Quoz, Business Bay)</div><div class="risk-detail">Require flood insurance • Max LTV 70% • +25bps premium</div></div><div class="risk-value red">MANDATORY</div></div>
                <div class="risk-item"><div class="risk-level high"></div><div class="risk-info"><div class="risk-name">Amber Zones (JVC, Discovery)</div><div class="risk-detail">Recommend flood insurance • Max LTV 75% • +15bps premium</div></div><div class="risk-value amber">RECOMMENDED</div></div>
                <div class="risk-item"><div class="risk-level low"></div><div class="risk-info"><div class="risk-name">Green Zones (Elevated Areas)</div><div class="risk-detail">Standard underwriting • No additional requirements</div></div><div class="risk-value green">STANDARD</div></div>
            </div>
            <p><strong>Portfolio Impact:</strong> ~8% of new originations affected. Estimated revenue: +AED 2.1M annually from risk premiums.</p>
            <p><strong>Flood modeling powered by K&A.</strong></p>
            ${createProvenance(['Risk Committee Analysis', 'K&A Risk Zones', 'CBUAE Guidelines', 'Peer Benchmarking'], 88)}`,
        chips: ["CBUAE reporting format", "Deep dive: Al Quoz", "Show flood risk exposure", "Return to overview"],
        mapAction: null
    },

    "cbuae reporting format": {
        content: `<p>Regulatory-ready framing for CRO reporting and board packs:</p>
            <div class="viz-risk-matrix">
                <div class="risk-matrix-header">📋 Suggested CBUAE Reporting Sections</div>
                <div class="risk-item"><div class="risk-level critical"></div><div class="risk-info"><div class="risk-name">1. Exposure Summary</div><div class="risk-detail">Total mortgage exposure in high-risk zones</div></div><div class="risk-value red">${BASELINE.floodExposureTotal}</div></div>
                <div class="risk-item"><div class="risk-level high"></div><div class="risk-info"><div class="risk-name">2. Concentration Analysis</div><div class="risk-detail">Al Quoz (${BASELINE.alQuozExposure}), Business Bay (${BASELINE.businessBayExposure}), JVC (${BASELINE.jvcExposure})</div></div><div class="risk-value amber">3 Hotspots</div></div>
                <div class="risk-item"><div class="risk-level medium"></div><div class="risk-info"><div class="risk-name">3. Customer Impact Readiness</div><div class="risk-detail">Operational plan aligned to CBUAE 6-month deferral expectations</div></div><div class="risk-value cyan">Compliant</div></div>
                <div class="risk-item"><div class="risk-level low"></div><div class="risk-info"><div class="risk-name">4. Controls</div><div class="risk-detail">Origination guardrails + monitoring triggers + periodic model refresh</div></div><div class="risk-value green">In Place</div></div>
            </div>
            <p><strong>Compliance Status:</strong> CBUAE Climate Risk Assessment mandate requires submission by Q2 2025. These materials demonstrate proactive risk management.</p>
            <p><strong>Flood modeling powered by Khatib & Alami (K&A).</strong></p>
            ${createProvenance(['K&A Flood Model Outputs', 'Bank Portfolio', 'Esri Mapping', 'CBUAE Guidance'], 90)}`,
        chips: ["New origination guidelines", "Deep dive: Al Quoz", "Show flood risk exposure", "Show pilot deliverables"],
        mapAction: null
    },

    // ========== FLOW 4: TRADE CORRIDOR (ChatGPT Enhanced) ==========
    "trade corridor risks": {
        content: `<p>Scanning trade finance portfolio for dependency on Red Sea / Suez routes...</p>
            <p><span class="text-cyan"><strong>Current disruption:</strong></span> Reroutes around Cape of Good Hope add ~10–14 days; marine insurance premiums have risen by ~300% on affected lanes.</p>
            <div class="viz-roi-cards">
                <div class="roi-card"><div class="roi-label">Clients Scanned</div><div class="roi-value">${BASELINE.tradeClientsTotal}</div></div>
                <div class="roi-card warning"><div class="roi-label">High Dependency</div><div class="roi-value red">${BASELINE.highExposureClients}</div></div>
                <div class="roi-card warning"><div class="roi-label">Red Sea Exposure</div><div class="roi-value amber">${BASELINE.redSeaExposure}</div></div>
                <div class="roi-card"><div class="roi-label">Transit Delay</div><div class="roi-value amber">+10–14 days</div></div>
            </div>
            <div class="viz-risk-matrix">
                <div class="risk-matrix-header">🚢 High-Exposure Clients (Red Sea Corridor)</div>
                <div class="risk-item"><div class="risk-level critical"></div><div class="risk-info"><div class="risk-name">Gulf Trading Co</div><div class="risk-detail">78% shipments via Suez • 3 single-source suppliers</div></div><div class="risk-value red">AED 45M</div></div>
                <div class="risk-item"><div class="risk-level critical"></div><div class="risk-info"><div class="risk-name">Emirates Logistics LLC</div><div class="risk-detail">65% via Suez • European textile imports</div></div><div class="risk-value red">AED 32M</div></div>
                <div class="risk-item"><div class="risk-level high"></div><div class="risk-info"><div class="risk-name">Dubai Textiles Group</div><div class="risk-detail">52% via Suez • Chinese manufacturing dependency</div></div><div class="risk-value amber">AED 28M</div></div>
                <div class="risk-item"><div class="risk-level medium"></div><div class="risk-info"><div class="risk-name">12 Additional Clients</div><div class="risk-detail">Various corridor dependencies</div></div><div class="risk-value cyan">AED 89M</div></div>
            </div>
            <p><strong>Powered by ArcGIS Knowledge</strong> (spatial knowledge graphs) to connect clients, corridors, ports, and suppliers.</p>
            ${createProvenance(['DP World CARGOES', 'MarineTraffic AIS', 'Trade Finance Records', 'Panjiva'], 86)}`,
        chips: ["Show supplier network: Gulf Trading", "Stress test: 90-day disruption", "Alternative corridors", "Covenant recommendations"],
        mapAction: { type: 'showTradeCorridor', corridor: 'redSea' }
    },

    "show supplier network: gulf trading": {
        content: `<p>Building the supplier and route dependency graph for <strong>Gulf Trading Co</strong>:</p>
            <div class="viz-roi-cards">
                <div class="roi-card"><div class="roi-label">Total Exposure</div><div class="roi-value red">AED 45M</div></div>
                <div class="roi-card"><div class="roi-label">Route via Suez</div><div class="roi-value red">78%</div></div>
                <div class="roi-card warning"><div class="roi-label">Single-Source Suppliers</div><div class="roi-value amber">3</div></div>
                <div class="roi-card"><div class="roi-label">Mitigation Readiness</div><div class="roi-value amber">Medium</div></div>
            </div>
            <div class="viz-risk-matrix">
                <div class="risk-matrix-header">⚠️ Single-Source Dependencies (Critical Risk)</div>
                <div class="risk-item"><div class="risk-level critical"></div><div class="risk-info"><div class="risk-name">Shanghai Metals Co (China)</div><div class="risk-detail">100% of aluminum supply • No alternate supplier</div></div><div class="risk-value red">CRITICAL</div></div>
                <div class="risk-item"><div class="risk-level critical"></div><div class="risk-info"><div class="risk-name">Rotterdam Chemicals BV</div><div class="risk-detail">100% of industrial solvents • Red Sea route only</div></div><div class="risk-value red">CRITICAL</div></div>
                <div class="risk-item"><div class="risk-level high"></div><div class="risk-info"><div class="risk-name">Mumbai Textiles Ltd</div><div class="risk-detail">85% of fabric supply • Partial air freight possible</div></div><div class="risk-value amber">HIGH</div></div>
            </div>
            <p><strong>Knowledge Graph Summary:</strong> Client → 3 single-source suppliers → 2 critical ports → Suez corridor. Concentration risk highest on top supplier node.</p>
            <p><strong>Recommendation:</strong> Proactive covenant review. Consider requiring supplier diversification plan.</p>
            <p><strong>Powered by ArcGIS Knowledge (spatial knowledge graphs).</strong></p>
            ${createProvenance(['ArcGIS Knowledge', 'Trade Finance Records', 'Panjiva Shipments', 'Company Filings'], 84)}`,
        chips: ["Stress test: 90-day disruption", "Alternative corridors", "Draft covenant letter", "Return to corridor overview"],
        mapAction: { type: 'showSupplierNetwork', client: 'gulfTrading' }
    },

    "stress test: 90-day disruption": {
        content: `<p>Running a 90-day disruption scenario for Red Sea/Suez constraints:</p>
            <div class="viz-timeline">
                <div class="timeline-item"><div class="timeline-marker red"></div><div class="timeline-content"><div class="timeline-title">Day 0–14</div><div class="timeline-desc">Transit time shock (+10–14 days) and insurance repricing (~+300%)</div></div></div>
                <div class="timeline-item"><div class="timeline-marker amber"></div><div class="timeline-content"><div class="timeline-title">Day 15–45</div><div class="timeline-desc">Cash conversion cycle strain; inventory buffer drawdown</div></div></div>
                <div class="timeline-item"><div class="timeline-marker red"></div><div class="timeline-content"><div class="timeline-title">Day 46–90</div><div class="timeline-desc">Supplier failures emerge; covenant pressure and margin erosion</div></div></div>
            </div>
            <div class="viz-roi-cards">
                <div class="roi-card"><div class="roi-label">High-Dependency Clients</div><div class="roi-value red">${BASELINE.highExposureClients}</div></div>
                <div class="roi-card"><div class="roi-label">Exposure at Risk</div><div class="roi-value red">${BASELINE.redSeaExposure}</div></div>
                <div class="roi-card"><div class="roi-label">Expected Defaults</div><div class="roi-value amber">2–4 clients</div></div>
                <div class="roi-card"><div class="roi-label">Mitigation Window</div><div class="roi-value">30 days</div></div>
            </div>
            <p><strong>Top mitigations:</strong> Route diversification, inventory financing adjustments, supplier qualification.</p>
            <p><strong>Powered by ArcGIS Knowledge</strong> to propagate dependency effects across the network.</p>
            ${createProvenance(['Trade Finance Book', 'Lane Disruption Intel', 'ArcGIS Knowledge', 'Insurance Signals'], 85)}`,
        chips: ["Alternative corridors", "Show supplier network: Gulf Trading", "Trade corridor risks", "Return to overview"],
        mapAction: null
    },

    "alternative corridors": {
        content: `<p>Identifying corridor alternatives and mitigation packages for high-dependency clients:</p>
            <div class="viz-risk-matrix">
                <div class="risk-matrix-header">🔄 Mitigation Options</div>
                <div class="risk-item"><div class="risk-level high"></div><div class="risk-info"><div class="risk-name">Reroute via Cape</div><div class="risk-detail">+10–14 days transit • Staged inventory financing</div></div><div class="risk-value amber">+35% cost</div></div>
                <div class="risk-item"><div class="risk-level medium"></div><div class="risk-info"><div class="risk-name">Port Diversification</div><div class="risk-detail">Diversify between UAE gateways and destination ports</div></div><div class="risk-value cyan">RECOMMENDED</div></div>
                <div class="risk-item"><div class="risk-level medium"></div><div class="risk-info"><div class="risk-name">Supplier Diversification</div><div class="risk-detail">Approve alternates for single-source nodes</div></div><div class="risk-value green">CRITICAL</div></div>
                <div class="risk-item"><div class="risk-level low"></div><div class="risk-info"><div class="risk-name">Incoterms Renegotiation</div><div class="risk-detail">Shift shipping responsibilities to reduce bank exposure</div></div><div class="risk-value green">LOW COST</div></div>
            </div>
            <div class="viz-roi-cards">
                <div class="roi-card"><div class="roi-label">Clients to Prioritize</div><div class="roi-value">${BASELINE.highExposureClients}</div></div>
                <div class="roi-card"><div class="roi-label">Exposure Covered</div><div class="roi-value">${BASELINE.redSeaExposure}</div></div>
                <div class="roi-card"><div class="roi-label">Stabilization</div><div class="roi-value amber">30–60 days</div></div>
            </div>
            <p><strong>Powered by ArcGIS Knowledge (spatial knowledge graphs).</strong></p>
            ${createProvenance(['ArcGIS Knowledge', 'Port/Lane Intelligence', 'Supplier Registry', 'Trade Finance Book'], 83)}`,
        chips: ["Stress test: 90-day disruption", "Trade corridor risks", "Show supplier network: Gulf Trading", "Show pilot deliverables"],
        mapAction: null
    },

    // ========== FLOW 5: CONSOLIDATION (ChatGPT Enhanced) ==========
    "which branches should we consolidate?": {
        content: `<p>Let me analyze network overlap and customer migration patterns to identify consolidation opportunities...</p>
            <p><strong>Key Question:</strong> Rather than "which branches underperform," we should ask "where would customers go if we close a branch?"</p>
            <div class="viz-risk-matrix">
                <div class="risk-matrix-header">📊 Consolidation Candidates (High Overlap)</div>
                <div class="risk-item"><div class="risk-level high"></div><div class="risk-info"><div class="risk-name">Deira Branch</div><div class="risk-detail">${BASELINE.deiraCustomers} customers • ${BASELINE.deiraMigrationRate} can migrate • 11% at risk</div></div><div class="risk-value amber">${BASELINE.deiraAtRiskValue} at risk</div></div>
                <div class="risk-item"><div class="risk-level medium"></div><div class="risk-info"><div class="risk-name">Al Karama Branch</div><div class="risk-detail">${BASELINE.alKaramaCustomers} customers • ${BASELINE.alKaramaMigrationRate} can migrate • 5% at risk</div></div><div class="risk-value green">${BASELINE.alKaramaAtRiskValue} at risk</div></div>
                <div class="risk-item"><div class="risk-level low"></div><div class="risk-info"><div class="risk-name">Discovery Gardens</div><div class="risk-detail">1,456 customers • 71% can migrate • 8% at risk</div></div><div class="risk-value cyan">AED 6M at risk</div></div>
            </div>
            <p><strong>Recommendation:</strong> Al Karama shows highest migration rate (${BASELINE.alKaramaMigrationRate}) with lowest at-risk value. Safer consolidation candidate than Deira.</p>
            ${createProvenance(['Branch Customer Lists (demo)', 'Drive-Time Migration', 'Competitor POIs', 'Esri Location Intelligence'], 91)}`,
        chips: ["If we close Deira?", "If we close Al Karama?", "Compare: Deira vs Al Karama", "Show customer migration map"],
        mapAction: { type: 'showNetwork' }
    },

    "if we close deira": {
        content: `<p><strong>Consolidation Impact Analysis: Deira Branch</strong></p>
            <div class="viz-roi-cards">
                <div class="roi-card"><div class="roi-label">Customers Affected</div><div class="roi-value">${BASELINE.deiraCustomers}</div></div>
                <div class="roi-card"><div class="roi-label">Can Migrate</div><div class="roi-value green">${BASELINE.deiraMigrationRate}</div></div>
                <div class="roi-card warning"><div class="roi-label">At Risk</div><div class="roi-value red">${BASELINE.deiraAtRisk}</div></div>
                <div class="roi-card warning"><div class="roi-label">Value at Risk</div><div class="roi-value red">${BASELINE.deiraAtRiskValue}</div></div>
            </div>
            <div class="viz-risk-matrix">
                <div class="risk-matrix-header">🔄 Customer Migration Paths</div>
                <div class="risk-item"><div class="risk-level low"></div><div class="risk-info"><div class="risk-name">→ Bur Dubai Branch</div><div class="risk-detail">8-minute drive • Full service</div></div><div class="risk-value green">1,908 (67%)</div></div>
                <div class="risk-item"><div class="risk-level medium"></div><div class="risk-info"><div class="risk-name">→ Oud Metha Branch</div><div class="risk-detail">12-minute drive • Full service</div></div><div class="risk-value cyan">627 (22%)</div></div>
                <div class="risk-item"><div class="risk-level critical"></div><div class="risk-info"><div class="risk-name">→ NO CONVENIENT OPTION</div><div class="risk-detail">15+ minute drive • Competitor territory</div></div><div class="risk-value red">${BASELINE.deiraAtRisk} (11%)</div></div>
            </div>
            <p><strong>⚠️ At-Risk Analysis:</strong> The ${BASELINE.deiraAtRisk} at-risk customers live <strong>NORTH</strong> of Deira where:</p>
            <ul style="margin: 10px 0 10px 20px; color: var(--text-secondary);">
                <li>No branch within 15-minute drive</li>
                <li>Emirates NBD has 2 branches in the gap</li>
                <li>Total relationship value: ${BASELINE.deiraAtRiskValue}</li>
            </ul>
            <p><strong>Recommendation:</strong> If closing Deira, deploy migration plan + reinforce Bur Dubai capacity.</p>
            ${createProvenance(['Drive-Time Analysis', 'Customer Addresses', 'Competitor Locations', 'Transaction History'], 91)}`,
        chips: ["Compare: Deira vs Al Karama", "Show customer migration map", "Competitor response risk", "Show pilot deliverables"],
        mapAction: { type: 'showMigration', branch: 'deira' }
    },

    "if we close al karama": {
        content: `<p><strong>Consolidation Impact Analysis: Al Karama Branch</strong></p>
            <div class="viz-roi-cards">
                <div class="roi-card"><div class="roi-label">Customers Affected</div><div class="roi-value">${BASELINE.alKaramaCustomers}</div></div>
                <div class="roi-card positive"><div class="roi-label">Can Migrate</div><div class="roi-value green">${BASELINE.alKaramaMigrationRate}</div></div>
                <div class="roi-card"><div class="roi-label">At Risk</div><div class="roi-value green">${BASELINE.alKaramaAtRisk}</div></div>
                <div class="roi-card"><div class="roi-label">Value at Risk</div><div class="roi-value green">${BASELINE.alKaramaAtRiskValue}</div></div>
            </div>
            <div class="viz-risk-matrix">
                <div class="risk-matrix-header">🔄 Customer Migration Paths</div>
                <div class="risk-item"><div class="risk-level low"></div><div class="risk-info"><div class="risk-name">→ Bur Dubai Branch</div><div class="risk-detail">6-minute drive • Full service</div></div><div class="risk-value green">1,245 (65%)</div></div>
                <div class="risk-item"><div class="risk-level low"></div><div class="risk-info"><div class="risk-name">→ Oud Metha Branch</div><div class="risk-detail">7-minute drive • Full service</div></div><div class="risk-value green">328 (17%)</div></div>
                <div class="risk-item"><div class="risk-level low"></div><div class="risk-info"><div class="risk-name">→ DIFC Branch</div><div class="risk-detail">10-minute drive • Premium service</div></div><div class="risk-value cyan">261 (14%)</div></div>
                <div class="risk-item"><div class="risk-level medium"></div><div class="risk-info"><div class="risk-name">→ NO CONVENIENT OPTION</div><div class="risk-detail">Gap smaller than Deira</div></div><div class="risk-value amber">${BASELINE.alKaramaAtRisk} (5%)</div></div>
            </div>
            <p><strong>✓ Better Consolidation Candidate:</strong> Al Karama shows ${BASELINE.alKaramaMigrationRate} safe migration (vs ${BASELINE.deiraMigrationRate} for Deira) and only ${BASELINE.alKaramaAtRiskValue} at risk (vs ${BASELINE.deiraAtRiskValue}).</p>
            <p><strong>Annual Savings:</strong> AED 3.2M (rent, staff, operations)</p>
            ${createProvenance(['Drive-Time Analysis', 'Customer Addresses', 'Branch P&L', 'Competitor Locations'], 93)}`,
        chips: ["Implement Al Karama closure", "Retention strategy for 89", "Cost savings breakdown", "Return to overview"],
        mapAction: { type: 'showMigration', branch: 'alKarama' }
    },

    "compare: deira vs al karama": {
        content: `<p><strong>Comparing closures by customer loss risk and value at risk:</strong></p>
            <div class="viz-risk-matrix">
                <div class="risk-matrix-header">📊 Side-by-Side Comparison</div>
                <div class="risk-item"><div class="risk-level high"></div><div class="risk-info"><div class="risk-name">Deira</div><div class="risk-detail">${BASELINE.deiraCustomers} customers • ${BASELINE.deiraMigrationRate} migrate • ${BASELINE.deiraAtRisk} at risk</div></div><div class="risk-value red">${BASELINE.deiraAtRiskValue}</div></div>
                <div class="risk-item"><div class="risk-level medium"></div><div class="risk-info"><div class="risk-name">Al Karama</div><div class="risk-detail">${BASELINE.alKaramaCustomers} customers • ${BASELINE.alKaramaMigrationRate} migrate • ${BASELINE.alKaramaAtRisk} at risk</div></div><div class="risk-value green">${BASELINE.alKaramaAtRiskValue}</div></div>
            </div>
            <div class="viz-roi-cards">
                <div class="roi-card positive"><div class="roi-label">Better Candidate</div><div class="roi-value green">Al Karama</div></div>
                <div class="roi-card"><div class="roi-label">Risk Delta</div><div class="roi-value red">Deira 3.5x higher</div></div>
                <div class="roi-card"><div class="roi-label">Migration Rate</div><div class="roi-value green">+15% for Karama</div></div>
                <div class="roi-card"><div class="roi-label">Annual Savings</div><div class="roi-value gold">AED 3.2M</div></div>
            </div>
            <p><strong>Recommendation:</strong> Close <strong>Al Karama</strong> first to minimize churn risk. Treat Deira as second-phase with enhanced mitigation.</p>
            ${createProvenance(['Branch Customer Lists', 'Drive-Time Migration', 'Competitor POIs', 'Esri Mapping'], 92)}`,
        chips: ["If we close Al Karama?", "Show customer migration map", "Competitor response risk", "Return to overview"],
        mapAction: { type: 'showComparison', locations: ['deira', 'alKarama'] }
    },

    "show customer migration map": {
        content: `<p>The migration map highlights where customers go after a closure and where friction creates churn risk:</p>
            <div class="viz-timeline">
                <div class="timeline-item"><div class="timeline-marker green"></div><div class="timeline-content"><div class="timeline-title">1. Assign</div><div class="timeline-desc">Each customer to nearest viable branch/ATM by travel time</div></div></div>
                <div class="timeline-item"><div class="timeline-marker amber"></div><div class="timeline-content"><div class="timeline-title">2. Score Friction</div><div class="timeline-desc">Time, mode, service needs, competitor proximity</div></div></div>
                <div class="timeline-item"><div class="timeline-marker red"></div><div class="timeline-content"><div class="timeline-title">3. Flag Risk</div><div class="timeline-desc">Customers above friction threshold</div></div></div>
            </div>
            <div class="viz-risk-matrix">
                <div class="risk-matrix-header">🗺️ What You'll See on the Map</div>
                <div class="risk-item"><div class="risk-level low"></div><div class="risk-info"><div class="risk-name">Green Flows</div><div class="risk-detail">Customers migrating smoothly (low friction)</div></div><div class="risk-value green">SAFE</div></div>
                <div class="risk-item"><div class="risk-level medium"></div><div class="risk-info"><div class="risk-name">Amber Flows</div><div class="risk-detail">Moderate friction (needs outreach)</div></div><div class="risk-value amber">WATCH</div></div>
                <div class="risk-item"><div class="risk-level critical"></div><div class="risk-info"><div class="risk-name">Red Clusters</div><div class="risk-detail">Churn risk (competitor capture zones)</div></div><div class="risk-value red">ACTION</div></div>
            </div>
            <p><strong>Tip:</strong> Use this to plan staffing, signage, outreach, and pop-up assisted service in red clusters.</p>
            ${createProvenance(['Drive-Time Routing', 'Branch/ATM Network', 'Competitor POIs', 'Customer Clusters'], 89)}`,
        chips: ["Competitor response risk", "Compare: Deira vs Al Karama", "If we close Deira?", "Return to overview"],
        mapAction: { type: 'showMigration', branch: 'deira' }
    },

    "competitor response risk": {
        content: `<p>Competitors are most likely to target customers in high-friction clusters immediately after a closure:</p>
            <div class="viz-timeline">
                <div class="timeline-item"><div class="timeline-marker red"></div><div class="timeline-content"><div class="timeline-title">Week 1–2</div><div class="timeline-desc">Localized offers near transport nodes and malls</div></div></div>
                <div class="timeline-item"><div class="timeline-marker amber"></div><div class="timeline-content"><div class="timeline-title">Week 3–6</div><div class="timeline-desc">Outreach to SME customers with in-person reliance</div></div></div>
                <div class="timeline-item"><div class="timeline-marker cyan"></div><div class="timeline-content"><div class="timeline-title">Week 6+</div><div class="timeline-desc">Permanent footprint reinforcement (kiosks/ATMs)</div></div></div>
            </div>
            <div class="viz-roi-cards">
                <div class="roi-card"><div class="roi-label">Deira Value at Risk</div><div class="roi-value red">${BASELINE.deiraAtRiskValue}</div></div>
                <div class="roi-card"><div class="roi-label">Mitigation Window</div><div class="roi-value amber">30 days</div></div>
                <div class="roi-card"><div class="roi-label">Recommended Action</div><div class="roi-value green">Targeted outreach</div></div>
            </div>
            <p><strong>Mitigation:</strong> Pre-announce migration support, strengthen Bur Dubai capacity, deploy pop-up assisted service in red clusters for 6–8 weeks.</p>
            ${createProvenance(['Competitor POIs/Promotions', 'Migration/Friction Model', 'Branch Performance', 'Esri Basemaps'], 87)}`,
        chips: ["Show customer migration map", "Compare: Deira vs Al Karama", "If we close Deira?", "Return to overview"],
        mapAction: null
    },


    // ========== CHIP EXPANSIONS (Fix dead-ends) ==========

    "next branch in dubai": {
        content: `<p><strong>Dubai expansion short-list (indicative):</strong> fastest ROI comes from expat-density + low competitor saturation.</p>
            <div class="viz-roi-cards">
                <div class="roi-card"><div class="roi-label">#1 Dubai South</div><div class="roi-value green">Payback 20 mo</div></div>
                <div class="roi-card"><div class="roi-label">#2 International City</div><div class="roi-value amber">Payback 24 mo</div></div>
                <div class="roi-card"><div class="roi-label">#3 Bur Dubai (upgrade)</div><div class="roi-value cyan">Payback 22 mo</div></div>
                <div class="roi-card"><div class="roi-label">Best Strategy</div><div class="roi-value green">Branch + kiosks</div></div>
            </div>
            <div class="viz-risk-matrix">
                <div class="risk-matrix-header">📍 Why these locations</div>
                <div class="risk-item"><div class="risk-level high"></div><div class="risk-info"><div class="risk-name">Dubai South</div><div class="risk-detail">High workforce growth + payroll partnership potential</div></div><div class="risk-value green">TOP ROI</div></div>
                <div class="risk-item"><div class="risk-level medium"></div><div class="risk-info"><div class="risk-name">International City</div><div class="risk-detail">High remittance density + competitor service gap</div></div><div class="risk-value cyan">GAP</div></div>
                <div class="risk-item"><div class="risk-level low"></div><div class="risk-info"><div class="risk-name">Bur Dubai</div><div class="risk-detail">Upgrade / capacity expansion to absorb migrations</div></div><div class="risk-value amber">ENABLES CONSOLIDATION</div></div>
            </div>
            ${createProvenance(['Esri Drive-Time/Catchment', 'Mobility Signals', 'Competitor POIs', 'Bank Network (demo)'], 86)}`,
        chips: ["Deep dive: Dubai South", "Remittance corridor analysis", "Show competitor gaps", "Return to site selection"],
        mapAction: { type: 'flyTo', location: 'dubaiDowntown', zoom: 11 }
    },

    "islamic branch in sharjah": {
        content: `<p><strong>Sharjah Islamic expansion:</strong> Al Nahda is the best first wedge because of cross-emirate commuters and family expat density.</p>
            <div class="viz-roi-cards">
                <div class="roi-card"><div class="roi-label">Primary Zone</div><div class="roi-value green">Al Nahda</div></div>
                <div class="roi-card"><div class="roi-label">12-mo Deposit Uplift</div><div class="roi-value gold">AED 28M–36M</div></div>
                <div class="roi-card"><div class="roi-label">Remittance Attach</div><div class="roi-value cyan">High</div></div>
                <div class="roi-card"><div class="roi-label">Time-to-Launch</div><div class="roi-value amber">10–14 weeks</div></div>
            </div>
            <p><strong>CBUAE alignment:</strong> Expands access and product choice consistent with the <strong>National Financial Inclusion Strategy 2026–2030</strong>.</p>
            ${createProvenance(['Esri Demographics', 'Mobility/Commuter Flows', 'Competitor POIs', 'Bank Product Uptake (demo)'], 87)}`,
        chips: ["Plan Islamic branch: Al Nahda", "Remittance corridor analysis", "Show competitor gaps", "Return to site selection"],
        mapAction: { type: 'flyTo', location: 'alNahda', zoom: 13 }
    },

    "plan islamic branch: al nahda": {
        content: `<p><strong>Plan (Al Nahda):</strong> launch as a “light branch” with assisted digital + Sharia-compliant bundles.</p>
            <div class="viz-timeline">
                <div class="timeline-item"><div class="timeline-marker green"></div><div class="timeline-content"><div class="timeline-title">Weeks 0–2</div><div class="timeline-desc">Finalize site + staffing model + service menu</div></div></div>
                <div class="timeline-item"><div class="timeline-marker cyan"></div><div class="timeline-content"><div class="timeline-title">Weeks 3–6</div><div class="timeline-desc">Community outreach + employer activation + onboarding workflow</div></div></div>
                <div class="timeline-item"><div class="timeline-marker amber"></div><div class="timeline-content"><div class="timeline-title">Weeks 7–12</div><div class="timeline-desc">Scale to full service based on demand signals</div></div></div>
            </div>
            ${createProvenance(['Esri Catchments', 'Mobility Signals', 'Bank Operations (demo)'], 84)}`,
        chips: ["Remittance corridor analysis", "Show competitor gaps", "Return to overview"],
        mapAction: { type: 'flyTo', location: 'alNahda', zoom: 14 }
    },

    "atm-only strategy": {
        content: `<p><strong>ATM / kiosk-first strategy:</strong> fastest way to expand access while controlling cost—ideal for under-served expat corridors.</p>
            <div class="viz-roi-cards">
                <div class="roi-card"><div class="roi-label">Typical Payback</div><div class="roi-value green">8–12 months</div></div>
                <div class="roi-card"><div class="roi-label">Best Use</div><div class="roi-value cyan">Remittance + cash services</div></div>
                <div class="roi-card"><div class="roi-label">Risk</div><div class="roi-value amber">Competitor proximity</div></div>
                <div class="roi-card"><div class="roi-label">Where to Deploy</div><div class="roi-value green">Dubai South • Deira • Mussafah</div></div>
            </div>
            <div class="viz-risk-matrix">
                <div class="risk-matrix-header">✅ What to deploy</div>
                <div class="risk-item"><div class="risk-level low"></div><div class="risk-info"><div class="risk-name">Assisted kiosk</div><div class="risk-detail">Account opening + remittance + card servicing</div></div><div class="risk-value green">TOP</div></div>
                <div class="risk-item"><div class="risk-level medium"></div><div class="risk-info"><div class="risk-name">Smart ATM</div><div class="risk-detail">Cash deposit + bill pay + multilingual flows</div></div><div class="risk-value cyan">FAST</div></div>
            </div>
            ${createProvenance(['Esri Footfall/POI', 'Drive-Time', 'ATM Transaction Signals (demo)'], 82)}`,
        chips: ["Target high-remittance areas", "Show competitor gaps", "Return to site selection"],
        mapAction: null
    },

    "employer partnership strategy": {
        content: `<p><strong>Dubai South employer partnerships:</strong> fastest path to scale underbanked expat acquisition.</p>
            <div class="viz-roi-cards">
                <div class="roi-card"><div class="roi-label">Target Employers</div><div class="roi-value cyan">Logistics • aviation • warehousing</div></div>
                <div class="roi-card"><div class="roi-label">New Payroll Accounts</div><div class="roi-value green">10K–12K</div></div>
                <div class="roi-card"><div class="roi-label">12-mo Deposit Uplift</div><div class="roi-value gold">AED 38M–52M</div></div>
                <div class="roi-card"><div class="roi-label">Time-to-Impact</div><div class="roi-value green">6–10 weeks</div></div>
            </div>
            <div class="viz-timeline">
                <div class="timeline-item"><div class="timeline-marker cyan"></div><div class="timeline-content"><div class="timeline-title">Step 1</div><div class="timeline-desc">Rank employers by headcount + commute density</div></div></div>
                <div class="timeline-item"><div class="timeline-marker green"></div><div class="timeline-content"><div class="timeline-title">Step 2</div><div class="timeline-desc">Onsite onboarding days + multilingual support</div></div></div>
                <div class="timeline-item"><div class="timeline-marker amber"></div><div class="timeline-content"><div class="timeline-title">Step 3</div><div class="timeline-desc">Attach remittance + savings bundles</div></div></div>
            </div>
            ${createProvenance(['DED Registry', 'Mobility/Commuter Flows', 'Esri Demographics', 'Bank Onboarding (demo)'], 88)}`,
        chips: ["Remittance corridor analysis", "Target high-remittance areas", "Return to overview"],
        mapAction: { type: 'flyTo', location: 'dubaiSouth', zoom: 13 }
    },

    "compare to al nahda": {
        content: `<p><strong>Dubai South vs Al Nahda:</strong> both are high-value—but they win for different reasons.</p>
            <div class="viz-risk-matrix">
                <div class="risk-matrix-header">📊 Comparison</div>
                <div class="risk-item"><div class="risk-level high"></div><div class="risk-info"><div class="risk-name">Dubai South</div><div class="risk-detail">Workforce growth + payroll-led acquisition</div></div><div class="risk-value green">GROWTH</div></div>
                <div class="risk-item"><div class="risk-level high"></div><div class="risk-info"><div class="risk-name">Al Nahda</div><div class="risk-detail">Remittance density + commuter catchment</div></div><div class="risk-value cyan">VOLUME</div></div>
            </div>
            <div class="viz-roi-cards">
                <div class="roi-card"><div class="roi-label">Best Play (Dubai South)</div><div class="roi-value green">Payroll + family savings</div></div>
                <div class="roi-card"><div class="roi-label">Best Play (Al Nahda)</div><div class="roi-value cyan">Remittance + Islamic bundles</div></div>
                <div class="roi-card"><div class="roi-label">Inclusion Alignment</div><div class="roi-value green">High</div></div>
            </div>
            ${createProvenance(['Esri Demographics', 'Mobility Signals', 'Competitor POIs'], 83)}`,
        chips: ["Employer partnership strategy", "Remittance corridor analysis", "Islamic banking potential", "Return to overview"],
        mapAction: { type: 'showComparison', locations: ['dubaiSouth', 'alNahda'] }
    },

    "target high-remittance areas": {
        content: `<p><strong>High-remittance targeting:</strong> deploy kiosks + local onboarding in the corridors below to capture fee and deposit uplift.</p>
            <div class="viz-risk-matrix">
                <div class="risk-matrix-header">💸 Priority micro-areas</div>
                <div class="risk-item"><div class="risk-level high"></div><div class="risk-info"><div class="risk-name">International City</div><div class="risk-detail">India corridor concentration</div></div><div class="risk-value green">TOP</div></div>
                <div class="risk-item"><div class="risk-level high"></div><div class="risk-info"><div class="risk-name">Al Nahda</div><div class="risk-detail">Pakistan + Philippines commuters</div></div><div class="risk-value green">TOP</div></div>
                <div class="risk-item"><div class="risk-level medium"></div><div class="risk-info"><div class="risk-name">Deira / Bur Dubai</div><div class="risk-detail">Mixed corridors + cash services</div></div><div class="risk-value cyan">FAST</div></div>
            </div>
            <div class="viz-roi-cards">
                <div class="roi-card"><div class="roi-label">12-mo Fee Upside</div><div class="roi-value gold">AED 18M–26M</div></div>
                <div class="roi-card"><div class="roi-label">Customer Acquisition</div><div class="roi-value green">High</div></div>
                <div class="roi-card"><div class="roi-label">Deployment</div><div class="roi-value cyan">Kiosks + pop-ups</div></div>
            </div>
            ${createProvenance(['Aggregated Corridor Signals (licensed)', 'Mobility Signals', 'Esri Location Intelligence'], 84)}`,
        chips: ["FX product strategy", "Show competitor gaps", "Return to overview"],
        mapAction: { type: 'highlight', location: 'internationalCity' }
    },

    "fx product strategy": {
        content: `<p><strong>FX / remittance product strategy:</strong> win on transparency + convenience, not just headline FX rate.</p>
            <div class="viz-risk-matrix">
                <div class="risk-matrix-header">✅ Recommended bundle</div>
                <div class="risk-item"><div class="risk-level low"></div><div class="risk-info"><div class="risk-name">Salary account</div><div class="risk-detail">Instant onboarding + multilingual flows</div></div><div class="risk-value green">BASE</div></div>
                <div class="risk-item"><div class="risk-level low"></div><div class="risk-info"><div class="risk-name">Remit subscription</div><div class="risk-detail">Flat monthly fee + better FX tiers</div></div><div class="risk-value cyan">RETENTION</div></div>
                <div class="risk-item"><div class="risk-level medium"></div><div class="risk-info"><div class="risk-name">Family savings</div><div class="risk-detail">Goal-based savings + rewards</div></div><div class="risk-value green">DEPOSITS</div></div>
            </div>
            ${createProvenance(['Bank Product Catalog (demo)', 'Corridor Analytics (licensed)', 'Esri Catchments'], 80)}`,
        chips: ["Target high-remittance areas", "Remittance corridor analysis", "Return to overview"],
        mapAction: null
    },

    "k&a methodology": {
        content: `<p><strong>Khatib &amp; Alami (K&amp;A) flood methodology:</strong> location-based modeling that quantifies hazard, exposure, and portfolio concentration.</p>
            <div class="viz-timeline">
                <div class="timeline-item"><div class="timeline-marker cyan"></div><div class="timeline-content"><div class="timeline-title">1) Hazard</div><div class="timeline-desc">Flood extent / depth modeling using event + terrain inputs</div></div></div>
                <div class="timeline-item"><div class="timeline-marker amber"></div><div class="timeline-content"><div class="timeline-title">2) Exposure</div><div class="timeline-desc">Intersect mortgage collateral with hazard polygons</div></div></div>
                <div class="timeline-item"><div class="timeline-marker red"></div><div class="timeline-content"><div class="timeline-title">3) Concentration</div><div class="timeline-desc">Rank hotspots (Al Quoz, Business Bay, JVC)</div></div></div>
            </div>
            <div class="viz-roi-cards">
                <div class="roi-card"><div class="roi-label">High-Risk Exposure</div><div class="roi-value red">${BASELINE.floodExposureTotal}</div></div>
                <div class="roi-card"><div class="roi-label">Refresh Cadence</div><div class="roi-value amber">Quarterly</div></div>
                <div class="roi-card"><div class="roi-label">Output</div><div class="roi-value cyan">CBUAE-ready</div></div>
            </div>
            ${createProvenance(['K&A Flood Modeling', 'Esri Terrain/Drainage', 'NCM Weather', 'Loan Portfolio (demo)'], 92)}`,
        chips: ["Deep dive: Al Quoz", "New origination guidelines", "CBUAE reporting format", "Return to overview"],
        mapAction: { type: 'showFloodRisk' }
    },

    "covenant recommendations": {
        content: `<p><strong>Trade corridor covenant recommendations (for high dependency clients):</strong></p>
            <div class="viz-risk-matrix">
                <div class="risk-matrix-header">📄 Recommended controls</div>
                <div class="risk-item"><div class="risk-level high"></div><div class="risk-info"><div class="risk-name">Shipment visibility</div><div class="risk-detail">Require route declarations + exception reporting</div></div><div class="risk-value cyan">IMMEDIATE</div></div>
                <div class="risk-item"><div class="risk-level high"></div><div class="risk-info"><div class="risk-name">Supplier diversification</div><div class="risk-detail">Mitigate single-source nodes within 60–90 days</div></div><div class="risk-value green">REQUIRED</div></div>
                <div class="risk-item"><div class="risk-level medium"></div><div class="risk-info"><div class="risk-name">Working capital guardrails</div><div class="risk-detail">Adjust limits based on transit time + insurance cost shocks</div></div><div class="risk-value amber">CONDITIONAL</div></div>
            </div>
            ${createProvenance(['ArcGIS Knowledge', 'Lane Intelligence (licensed)', 'Trade Finance Book (demo)'], 85)}`,
        chips: ["Draft covenant letter", "Stress test: 90-day disruption", "Return to corridor overview"],
        mapAction: { type: 'showTradeCorridor' }
    },

    "draft covenant letter": {
        content: `<p><strong>Draft covenant language (summary):</strong></p>
            <ul>
                <li><strong>Route disclosure:</strong> Borrower to notify bank of route changes impacting transit &gt; 7 days</li>
                <li><strong>Supplier concentration:</strong> No single supplier &gt; 50% of critical inputs without approved alternate</li>
                <li><strong>Insurance cost shock:</strong> Borrower to maintain coverage and provide proof of premium changes quarterly</li>
                <li><strong>Reporting:</strong> Monthly corridor risk summary until disruption normalizes</li>
            </ul>
            ${createProvenance(['Legal Templates (demo)', 'ArcGIS Knowledge', 'Lane Intelligence (licensed)'], 78)}`,
        chips: ["Return to corridor overview", "Show supplier network: Gulf Trading", "Return to overview"],
        mapAction: null
    },

    "return to corridor overview": {
        content: `<p><strong>Trade corridor overview:</strong> scanning portfolio for Red Sea / Suez dependency and knock-on risk.</p>
            <div class="viz-roi-cards">
                <div class="roi-card"><div class="roi-label">Clients Scanned</div><div class="roi-value">${BASELINE.tradeClientsTotal}</div></div>
                <div class="roi-card"><div class="roi-label">High Dependency</div><div class="roi-value red">${BASELINE.highExposureClients}</div></div>
                <div class="roi-card"><div class="roi-label">Total Exposure</div><div class="roi-value red">${BASELINE.redSeaExposure}</div></div>
                <div class="roi-card"><div class="roi-label">Powered By</div><div class="roi-value cyan">ArcGIS Knowledge</div></div>
            </div>
            ${createProvenance(['ArcGIS Knowledge', 'Shipping Lane Intelligence (licensed)', 'Trade Finance Book (demo)'], 88)}`,
        chips: ["Trade corridor risks", "Show supplier network: Gulf Trading", "Stress test: 90-day disruption", "Alternative corridors"],
        mapAction: { type: 'showTradeCorridor' }
    },

    "return to site selection": {
        content: `<p><strong>Site selection overview:</strong> choose an emirate and I’ll rank candidate sites by payback, catchment, and cannibalization risk.</p>
            <div class="viz-roi-cards">
                <div class="roi-card"><div class="roi-label">Abu Dhabi</div><div class="roi-value gold">3 sites</div></div>
                <div class="roi-card"><div class="roi-label">Dubai</div><div class="roi-value gold">5 sites</div></div>
                <div class="roi-card"><div class="roi-label">Sharjah</div><div class="roi-value cyan">2 sites</div></div>
                <div class="roi-card"><div class="roi-label">Strategy</div><div class="roi-value green">Payback &lt; 24 mo</div></div>
            </div>
            ${createProvenance(['Esri Catchment Modeling', 'Drive-Time Analysis', 'Competitor POIs', 'Bank Network (demo)'], 88)}`,
        chips: ["Next branch in Abu Dhabi", "Next branch in Dubai", "Islamic branch in Sharjah", "ATM-only strategy"],
        mapAction: { type: 'showUAE' }
    },

    "customer migration map": {
        content: `<p>Opening the customer migration map…</p>
            ${createProvenance(['Drive-Time Routing', 'Branch/ATM Network', 'Customer Clusters'], 85)}`,
        chips: ["Show customer migration map", "Competitor response risk", "Return to overview"],
        mapAction: { type: 'showMigration', branch: 'deira' }
    },

    "implement al karama closure": {
        content: `<p><strong>Implementation plan: Al Karama closure</strong> (optimize cost without losing customers).</p>
            <div class="viz-timeline">
                <div class="timeline-item"><div class="timeline-marker cyan"></div><div class="timeline-content"><div class="timeline-title">Week 0–2</div><div class="timeline-desc">Customer notification + staff plan + signage + routing updates</div></div></div>
                <div class="timeline-item"><div class="timeline-marker amber"></div><div class="timeline-content"><div class="timeline-title">Week 3–6</div><div class="timeline-desc">Pop-up assisted service in red clusters + hotline + appointment slots</div></div></div>
                <div class="timeline-item"><div class="timeline-marker green"></div><div class="timeline-content"><div class="timeline-title">Week 7–10</div><div class="timeline-desc">Finalize closure; monitor churn and competitor capture</div></div></div>
            </div>
            <div class="viz-roi-cards">
                <div class="roi-card"><div class="roi-label">Annual Savings</div><div class="roi-value gold">AED 3.2M</div></div>
                <div class="roi-card"><div class="roi-label">Customers at Risk</div><div class="roi-value amber">${BASELINE.alKaramaAtRisk}</div></div>
                <div class="roi-card"><div class="roi-label">Value at Risk</div><div class="roi-value amber">${BASELINE.alKaramaAtRiskValue}</div></div>
            </div>
            ${createProvenance(['Branch P&L', 'Migration Model', 'Competitor POIs', 'Esri Basemaps'], 90)}`,
        chips: ["Retention strategy for 89", "Cost savings breakdown", "Show customer migration map", "Return to overview"],
        mapAction: { type: 'showMigration', branch: 'alKarama' }
    },

    "retention strategy for 89": {
        content: `<p><strong>Retention strategy for the 89 at-risk customers (Al Karama):</strong> prevent competitor capture with targeted outreach and service guarantees.</p>
            <div class="viz-risk-matrix">
                <div class="risk-matrix-header">🎯 Actions</div>
                <div class="risk-item"><div class="risk-level high"></div><div class="risk-info"><div class="risk-name">Dedicated outreach</div><div class="risk-detail">Call list + appointment slots + migration concierge</div></div><div class="risk-value green">HIGH</div></div>
                <div class="risk-item"><div class="risk-level medium"></div><div class="risk-info"><div class="risk-name">Fee waivers</div><div class="risk-detail">Waive transfer/usage fees for 60 days</div></div><div class="risk-value cyan">FAST</div></div>
                <div class="risk-item"><div class="risk-level medium"></div><div class="risk-info"><div class="risk-name">Pop-up assisted service</div><div class="risk-detail">2 days/week for 6 weeks near the red cluster</div></div><div class="risk-value amber">TARGET</div></div>
            </div>
            ${createProvenance(['Customer Segmentation (demo)', 'Migration Model', 'Competitor POIs'], 86)}`,
        chips: ["Implement Al Karama closure", "Show customer migration map", "Competitor response risk", "Return to overview"],
        mapAction: { type: 'showMigration', branch: 'alKarama' }
    },

    "cost savings breakdown": {
        content: `<p><strong>Cost savings breakdown (Al Karama):</strong></p>
            <div class="viz-risk-matrix">
                <div class="risk-matrix-header">💰 Annual savings (illustrative)</div>
                <div class="risk-item"><div class="risk-level low"></div><div class="risk-info"><div class="risk-name">Rent & facilities</div><div class="risk-detail">Lease + utilities + maintenance</div></div><div class="risk-value green">AED 1.4M</div></div>
                <div class="risk-item"><div class="risk-level low"></div><div class="risk-info"><div class="risk-name">Staffing</div><div class="risk-detail">Reallocation / attrition plan</div></div><div class="risk-value green">AED 1.2M</div></div>
                <div class="risk-item"><div class="risk-level low"></div><div class="risk-info"><div class="risk-name">Security + cash ops</div><div class="risk-detail">Cash handling, guards, transport</div></div><div class="risk-value green">AED 0.6M</div></div>
            </div>
            <div class="viz-roi-cards">
                <div class="roi-card"><div class="roi-label">Total Savings</div><div class="roi-value gold">AED 3.2M</div></div>
                <div class="roi-card"><div class="roi-label">Churn Risk</div><div class="roi-value green">Low</div></div>
            </div>
            ${createProvenance(['Branch P&L (demo)', 'Ops Cost Model (demo)'], 82)}`,
        chips: ["Implement Al Karama closure", "Compare: Deira vs Al Karama", "Return to overview"],
        mapAction: null
    },

    // ========== UTILITY RESPONSES ==========
    "return to overview": {
        content: `<p>Returning to strategic overview...</p>
            <div class="viz-roi-cards">
                <div class="roi-card"><div class="roi-label">Deposits at Risk</div><div class="roi-value red">${BASELINE.depositsAtRisk}</div></div>
                <div class="roi-card"><div class="roi-label">Growth Opportunity</div><div class="roi-value green">${BASELINE.growthOpportunity}</div></div>
                <div class="roi-card"><div class="roi-label">Underbanked</div><div class="roi-value gold">${BASELINE.underbankedPercent}</div></div>
                <div class="roi-card"><div class="roi-label">Climate Exposure</div><div class="roi-value amber">${BASELINE.floodExposureTotal}</div></div>
            </div>
            <p>What would you like to explore next?</p>
            ${createProvenance(['Moro Hub (licensed feeds)', 'Esri ArcGIS', 'Portfolio KPIs (demo)'], 90)}`,
        chips: INITIAL_CHIPS,
        mapAction: { type: 'showUAE' }
    },

    // ========== PILOT DELIVERABLES (ChatGPT Suggestion) ==========
    "show pilot deliverables": {
        content: `<p><strong>6-Week Pilot Deliverables</strong> — what your team will receive:</p>
            <div class="viz-timeline">
                <div class="timeline-item"><div class="timeline-marker green"></div><div class="timeline-content"><div class="timeline-title">Week 1–2: Discovery + Data Integration</div><div class="timeline-desc">Connect to bank data lake via Moro Hub secure infrastructure. Map portfolio to Esri layers.</div></div></div>
                <div class="timeline-item"><div class="timeline-marker cyan"></div><div class="timeline-content"><div class="timeline-title">Week 3–4: Use Case Execution</div><div class="timeline-desc">Run 3–5 strategic queries using real data. Validate outputs with business stakeholders.</div></div></div>
                <div class="timeline-item"><div class="timeline-marker gold"></div><div class="timeline-content"><div class="timeline-title">Week 5–6: Board-Ready Outputs</div><div class="timeline-desc">Package findings into presentation-ready formats for executive review.</div></div></div>
            </div>
            <div class="viz-risk-matrix">
                <div class="risk-matrix-header">📦 Pilot Outputs</div>
                <div class="risk-item"><div class="risk-level low"></div><div class="risk-info"><div class="risk-name">3 Board-Ready Maps</div><div class="risk-detail">Network optimization, expat opportunity, climate exposure</div></div><div class="risk-value green">VISUAL</div></div>
                <div class="risk-item"><div class="risk-level low"></div><div class="risk-info"><div class="risk-name">1 Branch/ATM ROI Memo</div><div class="risk-detail">Site recommendation with AED impact quantification</div></div><div class="risk-value green">ACTIONABLE</div></div>
                <div class="risk-item"><div class="risk-level low"></div><div class="risk-info"><div class="risk-name">1 Flood Concentration Report</div><div class="risk-detail">CBUAE-ready framing with K&A modeling</div></div><div class="risk-value green">COMPLIANT</div></div>
                <div class="risk-item"><div class="risk-level low"></div><div class="risk-info"><div class="risk-name">1 Trade Corridor Exposure List</div><div class="risk-detail">Client-level Red Sea risk + mitigation recommendations</div></div><div class="risk-value green">PROACTIVE</div></div>
            </div>
            <div class="viz-roi-cards">
                <div class="roi-card"><div class="roi-label">Timeline</div><div class="roi-value green">6 weeks</div></div>
                <div class="roi-card"><div class="roi-label">Infrastructure</div><div class="roi-value cyan">Moro Hub</div></div>
                <div class="roi-card"><div class="roi-label">GIS Team Required</div><div class="roi-value green">None</div></div>
                <div class="roi-card"><div class="roi-label">Data Stays</div><div class="roi-value green">In UAE</div></div>
            </div>
            <p><strong>Next Step:</strong> 30-minute technical scoping call to map your data sources and prioritize use cases.</p>
            ${createProvenance(['Moro Hub (infrastructure)', 'Esri ArcGIS (platform)', 'K&A (flood modeling)', 'Rebirth Nexus (integration)'], 95)}`,
        chips: ["Where should we target expat customers?", "Show flood risk exposure", "Return to overview"],
        mapAction: null
    }
};

// ============================================
// HELPER FUNCTIONS
// ============================================

function createProvenance(sources, confidence) {
    const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    return `
        <div class="provenance">
            <span class="prov-label">Data Sources</span>
            <div class="prov-sources">
                ${sources.map(s => `<span class="prov-badge">${s}</span>`).join('')}
            </div>
            <div class="prov-meta">
                <span>Confidence: ${confidence}%</span>
                <span>Updated: ${time}</span>
            </div>
            <div class="prov-disclaimer">Indicative figures • Calibrated to bank data during pilot</div>
        </div>
    `;
}

function normalizeQuery(text) {
    return text.toLowerCase().trim()
        .replace(/['']/g, "'")  // Normalize smart quotes
        .replace(/[""]/g, '"')  // Normalize smart double quotes
        .replace(/[?!.,]/g, '')
        .replace(/\s+/g, ' ');
}

function findResponse(query) {
    const normalized = normalizeQuery(query);
    
    // Direct match
    if (scriptedResponses[normalized]) {
        return scriptedResponses[normalized];
    }
    
    // Keyword matching
    const keywords = {
        'expat': 'where should we target expat customers?',
        'population': 'where should we target expat customers?',
        'dubai south': 'deep dive: dubai south',
        'remittance': 'remittance corridor analysis',
        'islamic': 'islamic banking potential',
        'branch': 'best location for new branch?',
        'abu dhabi': 'next branch in abu dhabi',
        'al reem': 'next branch in abu dhabi',
        'yas': 'compare al reem vs yas',
        'drive time': 'show drive-time analysis',
        'flood': 'show flood risk exposure',
        'climate': 'show flood risk exposure',
        'risk': 'show flood risk exposure',
        'al quoz': 'deep dive: al quoz',
        'origination': 'new origination guidelines',
        'trade': 'trade corridor risks',
        'red sea': 'trade corridor risks',
        'corridor': 'trade corridor risks',
        'supplier': 'show supplier network: gulf trading',
        'gulf trading': 'show supplier network: gulf trading',
        'consolidat': 'which branches should we consolidate?',
        'close': 'which branches should we consolidate?',
        'deira': 'if we close deira',
        'karama': 'if we close al karama',
        'overview': 'return to overview',
        'back': 'return to overview',
        'migration': 'show customer migration map',
        'atm': 'atm-only strategy',
        'payroll': 'employer partnership strategy',
        'employer': 'employer partnership strategy',
        'fx': 'fx product strategy',
        'covenant': 'covenant recommendations',
        'site selection': 'return to site selection',
        'corridor overview': 'return to corridor overview'
    };
    
    for (const [keyword, responseKey] of Object.entries(keywords)) {
        if (normalized.includes(keyword)) {
            return scriptedResponses[responseKey];
        }
    }
    
    // Fallback to initial
    return scriptedResponses['initial'];
}

// ============================================
// CHAT HANDLING
// ============================================

let conversationHistory = [];
let isProcessing = false;

function addMessage(content, isUser, chips = []) {
    const container = document.getElementById('chatMessages');
    const div = document.createElement('div');
    div.className = `message ${isUser ? 'user' : 'assistant'}`;
    
    const sanitized = typeof DOMPurify !== 'undefined' 
        ? DOMPurify.sanitize(content, {
            ALLOWED_TAGS: ['div', 'p', 'strong', 'b', 'br', 'ul', 'li', 'span'],
            ALLOWED_ATTR: ['class', 'style']
          })
        : content;
    
    div.innerHTML = `<div class="message-content">${sanitized}</div>`;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
    
    // Update chips
    if (!isUser) {
        updateChips(chips);
    }
}

function addTypingIndicator() {
    const container = document.getElementById('chatMessages');
    const div = document.createElement('div');
    div.className = 'message assistant';
    div.id = 'typingIndicator';
    div.innerHTML = `
        <div class="typing-indicator">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>
    `;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

function removeTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) indicator.remove();
}

function updateChips(chips) {
    const container = document.getElementById('chipContainer');
    container.innerHTML = '';
    chips.forEach(chip => {
        const btn = document.createElement('button');
        btn.className = 'chip';
        btn.textContent = chip;
        btn.onclick = () => handleInput(chip);
        container.appendChild(btn);
    });
}

function handleInput(overrideText) {
    if (isProcessing) return;
    
    const input = document.getElementById('chatInput');
    const text = overrideText || input.value.trim();
    if (!text) return;
    
    input.value = '';
    isProcessing = true;
    document.getElementById('sendBtn').disabled = true;
    
    // Add user message
    addMessage(text, true);
    
    // Show typing
    addTypingIndicator();
    
    // Find and display response
    setTimeout(() => {
        removeTypingIndicator();
        const response = findResponse(text);
        addMessage(response.content, false, response.chips || INITIAL_CHIPS);
        
        // Trigger map action if specified
        if (response.mapAction && window.handleMapAction) {
            window.handleMapAction(response.mapAction);
        }
        
        isProcessing = false;
        document.getElementById('sendBtn').disabled = false;
    }, 800 + Math.random() * 400);
}

// ============================================
// FEED HANDLING
// ============================================

function initFeed() {
    const container = document.getElementById('feedItems');
    
    FEED_EVENTS.forEach(event => {
        // Add randomization to feel more "live" (Gemini suggestion)
        const randomizedDelay = event.delay + (Math.random() * 2000 - 1000); // ±1 second variance
        
        setTimeout(() => {
            const div = document.createElement('div');
            div.className = `feed-item ${event.type}`;
            div.innerHTML = `
                <div class="feed-meta">
                    <span>${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
                    <span class="feed-type ${event.type}">${event.type.toUpperCase()}</span>
                </div>
                <div class="feed-headline">${event.title}</div>
                <div class="feed-body">${event.detail}</div>
                ${event.metric ? `<div class="feed-metric">${event.metric}</div>` : ''}
            `;
            
            // Add entrance animation
            div.style.opacity = '0';
            div.style.transform = 'translateX(-10px)';
            
            div.onclick = () => {
                // Map feed event to a question
                const queries = {
                    'expat': 'Where should we target expat customers?',
                    'siteSelection': 'Best location for new branch?',
                    'floodRisk': 'Show flood risk exposure',
                    'tradeCorridor': 'Trade corridor risks',
                    'consolidation': 'Which branches should we consolidate?'
                };
                handleInput(queries[event.relatedFlow] || event.title);
            };
            container.prepend(div);
            
            // Trigger entrance animation
            requestAnimationFrame(() => {
                div.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                div.style.opacity = '1';
                div.style.transform = 'translateX(0)';
            });
        }, Math.max(500, randomizedDelay)); // Ensure minimum 500ms delay
    });
}

// ============================================
// TOUR
// ============================================

const tourSteps = [
    {
        subtitle: "Welcome",
        title: "Nexus Banking Intelligence",
        content: `<p>This is <strong>Nexus</strong> — a conversational intelligence platform that gives UAE banks <span class="highlight">Esri-grade location intelligence</span> without requiring a GIS team.</p>
            <p>Powered by <strong>Moro Hub</strong> (UAE infrastructure) and <strong>Esri ArcGIS</strong> (global standard).</p>`,
        target: null
    },
    {
        subtitle: "Real-Time Signals",
        title: "Market Intelligence Feed",
        content: `<p>The left panel shows <strong>live market signals</strong> — population shifts, competitor moves, risk alerts, and regulatory updates.</p>
            <p>Click any signal to explore it in conversation.</p>`,
        target: '.intel-feed'
    },
    {
        subtitle: "Geospatial View",
        title: "Network Visualization",
        content: `<p>The map shows your <strong>branch network</strong>, competitor positions, and opportunity zones across the UAE.</p>
            <p>As you ask questions, the map updates to show relevant data layers.</p>`,
        target: '.center-panel'
    },
    {
        subtitle: "Natural Conversation",
        title: "Ask Questions, Get Answers",
        content: `<p>This is where you interact with Nexus. Ask questions in <strong>plain English</strong> about:</p>
            <p>• Where to open new branches<br>• Expat population opportunities<br>• Flood/climate risk exposure<br>• Trade corridor dependencies</p>`,
        target: '.chat-panel'
    },
    {
        subtitle: "Try It Yourself",
        title: "Ready to Explore",
        content: `<p>Click any <strong>suggested question</strong> to start, or type your own.</p>
            <p>The system will show you quantified insights with full data provenance — no black boxes.</p>`,
        target: null
    }
];

let currentTourStep = 0;

function initTour() {
    const stepsContainer = document.getElementById('tourSteps');
    stepsContainer.innerHTML = tourSteps.map((_, i) => 
        `<div class="tour-step-dot" data-step="${i}"></div>`
    ).join('');
    
    document.getElementById('tourNext').addEventListener('click', nextTourStep);
    document.getElementById('tourPrev').addEventListener('click', prevTourStep);
    document.getElementById('tourSkip').addEventListener('click', endTour);
}

function renderTourStep(step) {
    const data = tourSteps[step];
    document.getElementById('tourSubtitle').textContent = data.subtitle;
    document.getElementById('tourTitle').textContent = data.title;
    document.getElementById('tourContent').innerHTML = data.content;
    
    document.querySelectorAll('.tour-step-dot').forEach((dot, i) => {
        dot.classList.remove('active', 'completed');
        if (i < step) dot.classList.add('completed');
        if (i === step) dot.classList.add('active');
    });
    
    document.getElementById('tourPrev').style.visibility = step === 0 ? 'hidden' : 'visible';
    document.getElementById('tourNext').textContent = step === tourSteps.length - 1 ? "Start Exploring →" : "Next →";
    
    const spotlight = document.getElementById('tourSpotlight');
    if (data.target) {
        const el = document.querySelector(data.target);
        if (el) {
            const rect = el.getBoundingClientRect();
            spotlight.style.display = 'block';
            spotlight.style.top = rect.top - 4 + 'px';
            spotlight.style.left = rect.left - 4 + 'px';
            spotlight.style.width = rect.width + 8 + 'px';
            spotlight.style.height = rect.height + 8 + 'px';
        }
    } else {
        spotlight.style.display = 'none';
    }
}

function nextTourStep() {
    if (currentTourStep < tourSteps.length - 1) {
        currentTourStep++;
        renderTourStep(currentTourStep);
    } else {
        endTour();
    }
}

function prevTourStep() {
    if (currentTourStep > 0) {
        currentTourStep--;
        renderTourStep(currentTourStep);
    }
}

function endTour() {
    document.getElementById('tourOverlay').classList.remove('active');
    document.getElementById('tourSpotlight').style.display = 'none';
    sessionStorage.setItem('nexusBankingTourShown', 'true');
}

window.startTour = function() {
    currentTourStep = 0;
    document.getElementById('tourOverlay').classList.add('active');
    renderTourStep(0);
};

// ============================================
// MAP INITIALIZATION (Gemini Enhanced)
// ============================================

function initMap() {
    require([
        "esri/Map",
        "esri/views/MapView",
        "esri/Graphic",
        "esri/layers/GraphicsLayer",
        "esri/geometry/Point",
        "esri/geometry/Polygon",
        "esri/geometry/Polyline",
        "esri/geometry/geometryEngine",
        "esri/symbols/SimpleMarkerSymbol",
        "esri/symbols/SimpleFillSymbol",
        "esri/symbols/SimpleLineSymbol"
    ], function(Map, MapView, Graphic, GraphicsLayer, Point, Polygon, Polyline, geometryEngine, SimpleMarkerSymbol, SimpleFillSymbol, SimpleLineSymbol) {
        
        const map = new Map({ basemap: "dark-gray-vector" });
        
        // UAE center coordinates
        const UAE_CENTER = [54.5, 24.8]; // [longitude, latitude]
        
        const view = new MapView({
            container: "mapView",
            map: map,
            center: UAE_CENTER,
            zoom: 7,
            constraints: {
                minZoom: 4,
                maxZoom: 18
            }
        });
        
        // Store view globally for map interactions
        window.mapView = view;
        
        // Layers
        const branchLayer = new GraphicsLayer();
        const competitorLayer = new GraphicsLayer();
        const overlayLayer = new GraphicsLayer();
        
        // Store overlay layer globally
        window.overlayLayer = overlayLayer;
        
        map.addMany([branchLayer, competitorLayer, overlayLayer]);
        
        // IMPORTANT: Wait for view to be ready, then force center on UAE
        view.when(function() {
            console.log("Map view ready - centering on UAE");
            view.goTo({
                center: UAE_CENTER,
                zoom: 7
            }, { duration: 0 }); // Instant, no animation
            
            // Add sample branches after view is ready
            const branches = [
                { ...UAE_LOCATIONS.abuDhabiMain, status: 'good' },
                { ...UAE_LOCATIONS.dubaiDowntown, status: 'good' },
                { ...UAE_LOCATIONS.deira, status: 'risk' },
                { ...UAE_LOCATIONS.burDubai, status: 'good' },
                { ...UAE_LOCATIONS.difc, status: 'good' },
                { ...UAE_LOCATIONS.jvc, status: 'warning' },
                { ...UAE_LOCATIONS.alQuoz, status: 'risk' },
                { ...UAE_LOCATIONS.businessBay, status: 'warning' }
            ];
            
            branches.forEach(b => {
                const color = b.status === 'good' ? '#10b981' : b.status === 'risk' ? '#ef4444' : '#f59e0b';
                branchLayer.add(new Graphic({
                    geometry: new Point({ longitude: b.lng, latitude: b.lat }),
                    symbol: new SimpleMarkerSymbol({
                        color: color,
                        size: 12,
                        outline: { color: 'white', width: 2 }
                    }),
                    attributes: { name: b.name, status: b.status },
                    popupTemplate: { title: b.name, content: `Status: ${b.status.toUpperCase()}` }
                }));
            });
            
            // Add sample competitors
            const competitors = [
                { lat: 24.4942, lng: 54.4069, name: "FAB - Al Reem" },
                { lat: 25.2697, lng: 55.3195, name: "ENBD - Deira" },
                { lat: 25.0657, lng: 55.2294, name: "ADCB - JVC" },
                { lat: 24.4899, lng: 54.6010, name: "Mashreq - Yas" },
                { lat: 25.1851, lng: 55.2819, name: "DIB - Business Bay" }
            ];
            
            competitors.forEach(c => {
                competitorLayer.add(new Graphic({
                    geometry: new Point({ longitude: c.lng, latitude: c.lat }),
                    symbol: new SimpleMarkerSymbol({
                        color: '#64748b',
                        size: 8,
                        style: 'square',
                        outline: { color: 'white', width: 1 }
                    }),
                    attributes: { name: c.name },
                    popupTemplate: { title: c.name, content: "Competitor Branch" }
                }));
            });
            
            console.log("Nexus Banking Map Initialized - UAE View");
            
            // Remove default Esri UI elements
            view.ui.components = [];
            
        }).catch(function(error) {
            console.error("Map failed to load:", error);
        });
        
        // ============================================
        // MAP ACTION HANDLER (Gemini Enhanced)
        // ============================================
        
        window.handleMapAction = function(action) {
            if (!action) return;
            
            overlayLayer.removeAll();
            
            switch (action.type) {
                case 'flyTo':
                    const loc = UAE_LOCATIONS[action.location];
                    if (loc) {
                        view.goTo({
                            center: [loc.lng, loc.lat],
                            zoom: action.zoom || 13,
                            tilt: 0
                        }, { duration: 1500 });
                        
                        // Add pulsing highlight marker
                        const point = new Point({ longitude: loc.lng, latitude: loc.lat });
                        
                        // Center marker (static)
                        const centerMarker = new Graphic({
                            geometry: point,
                            symbol: new SimpleMarkerSymbol({
                                color: '#d4af37',
                                size: 14,
                                outline: { color: 'white', width: 2 }
                            }),
                            popupTemplate: { title: loc.name, content: "Strategic Focus Area" }
                        });
                        overlayLayer.add(centerMarker);
                        
                        // Animated pulse ring (Gemini suggestion)
                        let pulseSize = 40;
                        let growing = true;
                        let pulseGraphic = new Graphic({
                            geometry: point,
                            symbol: new SimpleMarkerSymbol({
                                color: [212, 175, 55, 0.15],
                                size: pulseSize,
                                outline: { color: [212, 175, 55, 0.6], width: 1 }
                            })
                        });
                        overlayLayer.add(pulseGraphic, 0); // Add at bottom
                        
                        const pulseAnim = setInterval(() => {
                            if (pulseSize > 55) growing = false;
                            if (pulseSize < 40) growing = true;
                            pulseSize += growing ? 0.8 : -0.8;
                            
                            // Update the pulse graphic
                            overlayLayer.remove(pulseGraphic);
                            pulseGraphic = new Graphic({
                                geometry: point,
                                symbol: new SimpleMarkerSymbol({
                                    color: [212, 175, 55, 0.15],
                                    size: pulseSize,
                                    outline: { color: [212, 175, 55, 0.6], width: 1 }
                                })
                            });
                            overlayLayer.add(pulseGraphic, 0);
                        }, 50);
                        
                        // Stop animation after 5 seconds to save resources
                        setTimeout(() => clearInterval(pulseAnim), 5000);
                        
                        view.openPopup({ title: loc.name, content: "Strategic Focus Area", location: point });
                    }
                    break;
                    
                case 'highlight':
                    const hloc = UAE_LOCATIONS[action.location];
                    if (hloc) {
                        overlayLayer.add(new Graphic({
                            geometry: new Point({ longitude: hloc.lng, latitude: hloc.lat }),
                            symbol: new SimpleMarkerSymbol({
                                color: '#d4af37',
                                size: 16,
                                outline: { color: 'white', width: 2 }
                            })
                        }));
                    }
                    break;
                    
                case 'showUAE':
                    view.goTo({
                        center: [54.5, 24.8],
                        zoom: 7
                    }, { duration: 1000 });
                    break;
                    
                case 'showDriveTime':
                    const dtLoc = UAE_LOCATIONS[action.location];
                    if (dtLoc) {
                        view.goTo({ center: [dtLoc.lng, dtLoc.lat], zoom: 12 }, { duration: 1500 });
                        
                        const centerPoint = new Point({ longitude: dtLoc.lng, latitude: dtLoc.lat });
                        const minutes = action.minutes || 15;
                        
                        // Simulate drive-time with geodesic buffers (1 min ≈ 600m in city)
                        const distances = [minutes * 600, minutes * 400, minutes * 200];
                        const colors = [
                            [16, 185, 129, 0.1],
                            [16, 185, 129, 0.2],
                            [16, 185, 129, 0.3]
                        ];
                        
                        distances.forEach((dist, i) => {
                            const bufferGeom = geometryEngine.geodesicBuffer(centerPoint, dist, "meters");
                            overlayLayer.add(new Graphic({
                                geometry: bufferGeom,
                                symbol: new SimpleFillSymbol({
                                    color: colors[i],
                                    outline: { color: [16, 185, 129, 0.8], width: 1 }
                                })
                            }));
                        });
                        
                        // Add center marker
                        overlayLayer.add(new Graphic({
                            geometry: centerPoint,
                            symbol: new SimpleMarkerSymbol({
                                color: '#d4af37',
                                size: 14,
                                outline: { color: 'white', width: 2 }
                            })
                        }));
                    }
                    break;
                    
                case 'showFloodRisk':
                    view.goTo({ center: [55.2, 25.1], zoom: 11 }, { duration: 1500 });
                    
                    // Flood zone polygons (approximate)
                    const floodZones = [
                        // Al Quoz
                        [[55.22, 25.13], [55.24, 25.13], [55.24, 25.15], [55.22, 25.15], [55.22, 25.13]],
                        // Business Bay low area
                        [[55.26, 25.18], [55.28, 25.18], [55.28, 25.20], [55.26, 25.20], [55.26, 25.18]],
                        // JVC
                        [[55.20, 25.05], [55.22, 25.05], [55.22, 25.08], [55.20, 25.08], [55.20, 25.05]],
                        // Discovery Gardens
                        [[55.13, 25.03], [55.15, 25.03], [55.15, 25.05], [55.13, 25.05], [55.13, 25.03]]
                    ];
                    
                    floodZones.forEach((rings, i) => {
                        overlayLayer.add(new Graphic({
                            geometry: new Polygon({ rings: [rings] }),
                            symbol: new SimpleFillSymbol({
                                color: [239, 68, 68, 0.35],
                                style: 'diagonal-cross',
                                outline: { color: [239, 68, 68, 1], width: 2 }
                            }),
                            popupTemplate: {
                                title: ['Al Quoz', 'Business Bay', 'JVC', 'Discovery Gardens'][i],
                                content: "High Flood Risk Zone | April 2024 Event"
                            }
                        }));
                    });
                    break;
                    
                case 'showTradeCorridor':
                    view.goTo({ center: [50.0, 20.0], zoom: 4 }, { duration: 2000 });
                    
                    // Red Sea corridor path
                    const corridorPath = [[43.0, 13.0], [45.0, 15.0], [50.0, 22.0], [55.0, 25.0]];
                    
                    // Halo effect
                    overlayLayer.add(new Graphic({
                        geometry: new Polyline({ paths: [corridorPath] }),
                        symbol: new SimpleLineSymbol({
                            color: [239, 68, 68, 0.2],
                            width: 12,
                            style: 'solid'
                        })
                    }));
                    
                    // Main line
                    overlayLayer.add(new Graphic({
                        geometry: new Polyline({ paths: [corridorPath] }),
                        symbol: new SimpleLineSymbol({
                            color: [239, 68, 68, 0.8],
                            width: 3,
                            style: 'dash'
                        })
                    }));
                    
                    // Add warning markers
                    const warningPoints = [[45.0, 15.0], [50.0, 22.0]];
                    warningPoints.forEach(p => {
                        overlayLayer.add(new Graphic({
                            geometry: new Point({ longitude: p[0], latitude: p[1] }),
                            symbol: new SimpleMarkerSymbol({
                                color: '#ef4444',
                                size: 12,
                                outline: { color: 'white', width: 2 }
                            })
                        }));
                    });
                    break;
                    
                case 'showCompetitors':
                    const areaCenter = UAE_LOCATIONS[action.area] || UAE_LOCATIONS.deira;
                    view.goTo({ center: [areaCenter.lng, areaCenter.lat], zoom: 12 }, { duration: 1000 });
                    
                    // Add competitor markers around the area
                    for (let i = 0; i < 6; i++) {
                        const latOffset = (Math.random() - 0.5) * 0.04;
                        const lngOffset = (Math.random() - 0.5) * 0.04;
                        overlayLayer.add(new Graphic({
                            geometry: new Point({
                                longitude: areaCenter.lng + lngOffset,
                                latitude: areaCenter.lat + latOffset
                            }),
                            symbol: new SimpleMarkerSymbol({
                                color: '#64748b',
                                size: 10,
                                style: 'square',
                                outline: { color: 'white', width: 1 }
                            }),
                            popupTemplate: { title: 'Competitor Branch', content: 'Branch ID: COMP-' + i }
                        }));
                    }
                    break;
                    
                case 'showMigration':
                case 'showComparison':
                case 'showNetwork':
                    // For these, just fly to Dubai and show network
                    view.goTo({ center: [55.27, 25.2], zoom: 11 }, { duration: 1500 });
                    break;
            }
        };
        
    });
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize map
    initMap();
    
    // Initialize tour
    initTour();
    
    // Start tour for new visitors
    if (!sessionStorage.getItem('nexusBankingTourShown')) {
        setTimeout(() => {
            document.getElementById('tourOverlay').classList.add('active');
            renderTourStep(0);
        }, 1500);
    }
    
    // Initialize chat with greeting
    setTimeout(() => {
        addMessage(scriptedResponses['initial'].content, false, scriptedResponses['initial'].chips);
    }, 2000);
    
    // Initialize feed
    initFeed();
    
    // Event listeners
    document.getElementById('sendBtn').addEventListener('click', () => handleInput());
    document.getElementById('chatInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleInput();
    });
});
