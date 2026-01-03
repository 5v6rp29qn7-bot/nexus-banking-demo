# Nexus Banking Demo - Final Version
## Merged: Claude + ChatGPT Fixes + Gemini Visual Improvements

---

## Quick Local Test

```bash
cd banking-demo
python -m http.server 8000
# Open http://localhost:8000
```

**⚠️ Do NOT open index.html directly as file:// - the map won't load correctly.**

---

## What's In This Version

### ChatGPT Fixes (Critical)
| Issue | Fix |
|-------|-----|
| 17 dead-end chips | All chips now resolve to scripted responses |
| Missing provenance | Every response includes data sources |
| SOF regulatory event | Replaced with CBUAE Deferral Reporting |
| Currency inconsistency | All values in AED only |
| Moro framing | Added "Licensed + hosted via Moro Hub" to provenance |

### Gemini Visual Improvements
| Improvement | Description |
|-------------|-------------|
| Data Sovereignty badge | Green pulsing "🔒 Moro Hub Secure Cloud (Dubai)" |
| Animated pulse markers | Gold markers pulse for 5 seconds |
| Feed randomization | ±1 second variance + slide-in animation |
| CBUAE validation | All regulatory references confirmed accurate |

### New Feature: Pilot Deliverables
Click "Show pilot deliverables" to see:
- 3 board-ready maps
- 1 Branch/ATM ROI memo (AED impact)
- 1 Flood concentration report (CBUAE-ready)
- 1 Trade corridor exposure list + mitigation plan

---

## Testing Checklist

### 1. Map Loads on UAE
- [ ] Shows Arabian Gulf region (not USA)
- [ ] Green/amber/red branch markers visible
- [ ] Grey squares for competitors

### 2. Security Badge (Gemini)
- [ ] Bottom-right shows green "🔒 Data Sovereign" badge
- [ ] Subtle pulsing glow animation

### 3. All Chips Work (ChatGPT Fix)
Test these - NONE should return to initial:
- [ ] "Deep dive: Dubai South" → demographic breakdown
- [ ] "Employer partnership strategy" → logistics partnerships
- [ ] "ATM-only strategy" → kiosk deployment plan
- [ ] "Islamic branch in Sharjah" → Al Nahda analysis
- [ ] "If we close Deira?" → Deira closure analysis ← **CRITICAL FIX**
- [ ] "If we close Al Karama?" → Al Karama closure analysis ← **CRITICAL FIX**
- [ ] "Return to overview" → back to KPI cards

### 4. Pilot Deliverables (New)
- [ ] "Show pilot deliverables" → 6-week plan with outputs

### 5. Map Animations (Gemini)
- [ ] Gold markers pulse when flying to location
- [ ] Animation runs ~5 seconds then stops

### 6. Feed Events
- [ ] Events slide in with smooth animation
- [ ] Timing feels natural (not robotic)
- [ ] 4 types: Opportunity/Risk/Market/Regulatory

---

## Demo Script for Sunday (8-10 min)

| Time | Action | Key Point |
|------|--------|-----------|
| 0:00 | Tour plays | "Esri intelligence through conversation" |
| 1:00 | "Where should we target expat customers?" | Point to security badge |
| 2:00 | "Deep dive: Dubai South" | "34% growth, 1 branch for 45K residents" |
| 3:30 | "Best location for new branch?" → Abu Dhabi | "Al Reem: 18mo payback" |
| 5:00 | "Show flood risk exposure" | "April 2024 context, AED 1.24B exposure" |
| 6:30 | "Trade corridor risks" | "15 clients, AED 194M Red Sea exposure" |
| 7:30 | **"Show pilot deliverables"** | **"6 weeks, 3 board-ready maps, no GIS team"** |
| 8:00 | Close | "What questions do you have?" |

---

## Deployment

```bash
# 1. Create new GitHub repo: nexus-banking-demo
git init
git add .
git commit -m "Banking demo v1.0"
git remote add origin https://github.com/YOUR_USERNAME/nexus-banking-demo.git
git push -u origin main

# 2. Import to Vercel (NEW project - don't affect logistics demo)
# 3. Add env var: ANTHROPIC_API_KEY
# 4. Deploy
```

---

## File Structure
```
banking-demo/
├── index.html          # UI with security badge
├── demo-logic.js       # 1728 lines - all responses + map logic
├── package.json        
├── vercel.json         
└── api/
    └── chat.js         # Backend API
```
