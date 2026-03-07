import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend, RadarChart, Radar, PolarGrid, PolarAngleAxis } from "recharts";

const COLORS = {
  churn: "#FF4D6D",
  retain: "#06D6A0",
  accent: "#FFD166",
  blue: "#118AB2",
  dark: "#073B4C",
  mid: "#1A6B84",
};

const KPICard = ({ label, value, sub, color, icon }) => (
  <div style={{
    background: "rgba(255,255,255,0.04)",
    border: `1px solid rgba(255,255,255,0.08)`,
    borderRadius: 16,
    padding: "24px 28px",
    borderLeft: `4px solid ${color}`,
    transition: "transform 0.2s",
    cursor: "default",
  }}
  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
  >
    <div style={{ fontSize: 28, marginBottom: 4 }}>{icon}</div>
    <div style={{ color: "#aac8d8", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 6, fontFamily: "'DM Mono', monospace" }}>{label}</div>
    <div style={{ color, fontSize: 36, fontWeight: 700, lineHeight: 1, fontFamily: "'Space Grotesk', sans-serif" }}>{value}</div>
    {sub && <div style={{ color: "#607080", fontSize: 12, marginTop: 6 }}>{sub}</div>}
  </div>
);

const Section = ({ title, children }) => (
  <div style={{ marginBottom: 40 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
      <div style={{ width: 4, height: 24, background: COLORS.accent, borderRadius: 2 }} />
      <h2 style={{ color: "#e0f0f8", fontSize: 15, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", margin: 0, fontFamily: "'DM Mono', monospace" }}>{title}</h2>
    </div>
    {children}
  </div>
);

const ChartBox = ({ title, children, span = 1 }) => (
  <div style={{
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 16,
    padding: 24,
    gridColumn: `span ${span}`,
  }}>
    <div style={{ color: "#7a9faf", fontSize: 12, fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 20 }}>{title}</div>
    {children}
  </div>
);

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: "#0d2333", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 10, padding: "10px 16px", fontSize: 13 }}>
        {label && <div style={{ color: "#aac8d8", marginBottom: 4 }}>{label}</div>}
        {payload.map((p, i) => (
          <div key={i} style={{ color: p.color || "#fff", fontWeight: 600 }}>
            {p.name}: {typeof p.value === "number" && p.value < 1 ? `${(p.value * 100).toFixed(1)}%` : p.value}
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  // ─── DATA ───────────────────────────────────────────────
  const intlPlanData = [
    { plan: "No Intl Plan", customers: 3854, churned: 431, churnRate: 11.18 },
    { plan: "Has Intl Plan", customers: 396, churned: 167, churnRate: 42.17 },
  ];

  const vmailPlanData = [
    { plan: "No Voicemail", customers: 1112, churned: 82, churnRate: 7.37 },
    { plan: "Has Voicemail", customers: 3138, churned: 516, churnRate: 16.44 },
  ];

  const csCallsData = [
    { calls: "0", total: 886, churned: 97, churnRate: 10.95 },
    { calls: "1", total: 1524, churned: 166, churnRate: 10.89 },
    { calls: "2", total: 947, churned: 102, churnRate: 10.77 },
    { calls: "3", total: 558, churned: 63, churnRate: 11.29 },
    { calls: "4+", total: 335, churned: 170, churnRate: 50.75 },
  ];

  const areaData = [
    { area: "510", total: 1056, churned: 159, churnRate: 15.06 },
    { area: "408", total: 1086, churned: 152, churnRate: 14.00 },
    { area: "415", total: 2108, churned: 287, churnRate: 13.61 },
  ];

  const dayMinsSegData = [
    { seg: "Low\n<143m", total: 1063, churned: 129, churnRate: 12.14 },
    { seg: "Mid-Low\n143-180m", total: 1062, churned: 97, churnRate: 9.13 },
    { seg: "Mid-High\n180-216m", total: 1060, churned: 66, churnRate: 6.23 },
    { seg: "High\n>216m", total: 1065, churned: 306, churnRate: 28.73 },
  ];

  const riskData = [
    { tier: "Low Risk", scoreRange: "0–2", customers: 2689, churnRate: 2.42 },
    { tier: "Medium Risk", scoreRange: "3–6", customers: 1338, churnRate: 32.21 },
    { tier: "High Risk", scoreRange: "7+", customers: 223, churnRate: 45.74 },
  ];

  const clusterData = [
    { cluster: "C0", dayMins: 228.31, eveMins: 221.83, nightMins: 174.63, intlMins: 11.11, churnRate: 22.22 },
    { cluster: "C1", dayMins: 181.12, eveMins: 164.78, nightMins: 240.54, intlMins: 11.86, churnRate: 11.95 },
    { cluster: "C2", dayMins: 126.04, eveMins: 221.56, nightMins: 179.78, intlMins: 10.88, churnRate: 10.94 },
    { cluster: "C3", dayMins: 186.66, eveMins: 190.20, nightMins: 209.54, intlMins: 6.86, churnRate: 10.78 },
  ];

  const avgMetrics = [
    { metric: "Acct Length (days)", nonChurn: 99.92, churn: 102.14 },
    { metric: "CS Calls", nonChurn: 1.44, churn: 2.28 },
    { metric: "Day Mins", nonChurn: 175.56, churn: 208.99 },
    { metric: "Day Charge ($)", nonChurn: 29.84, churn: 35.53 },
    { metric: "Eve Charge ($)", nonChurn: 16.88, churn: 17.85 },
    { metric: "Night Charge ($)", nonChurn: 8.98, churn: 9.29 },
    { metric: "Intl Charge ($)", nonChurn: 2.75, churn: 2.87 },
  ];

  const pieData = [
    { name: "Retained", value: 3652 },
    { name: "Churned", value: 598 },
  ];

  const planCsData = [
    { plan: "With Intl Plan", nonChurn: 4.92, churn: 3.88 },
    { plan: "Without Intl Plan", nonChurn: 4.43, churn: 4.35 },
  ];

  const tabs = ["overview", "plans & usage", "risk segments", "clusters"];

  return (
    <div style={{
      background: "#071b26",
      minHeight: "100vh",
      fontFamily: "'Space Grotesk', 'Segoe UI', sans-serif",
      color: "#d0e8f2",
      padding: "0 0 60px 0",
    }}>
      {/* HEADER */}
      <div style={{
        background: "linear-gradient(135deg, #0a2535 0%, #0d3347 50%, #092030 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: "32px 40px 24px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: -60, right: -60, width: 300, height: 300,
          background: "radial-gradient(circle, rgba(6,214,160,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -80, left: 200, width: 400, height: 200,
          background: "radial-gradient(circle, rgba(255,77,109,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ fontSize: 11, color: "#4a7a8a", fontFamily: "'DM Mono', monospace", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>
          TELECOM ANALYTICS · 4,250 CUSTOMERS
        </div>
        <h1 style={{
          margin: 0, fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em",
          background: "linear-gradient(90deg, #e0f4ff, #06D6A0)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>
          Customer Churn Intelligence
        </h1>
        <div style={{ color: "#4a7a8a", fontSize: 13, marginTop: 6 }}>
          Identifying churn drivers, risk tiers, and behavioral clusters
        </div>
      </div>

      {/* TABS */}
      <div style={{ padding: "0 40px", background: "rgba(0,0,0,0.2)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", gap: 0 }}>
          {tabs.map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{
              background: "none", border: "none", padding: "16px 24px",
              fontSize: 13, fontWeight: 500, cursor: "pointer", textTransform: "capitalize",
              color: activeTab === tab ? COLORS.accent : "#4a7a8a",
              borderBottom: activeTab === tab ? `2px solid ${COLORS.accent}` : "2px solid transparent",
              letterSpacing: "0.04em", transition: "color 0.2s",
            }}>{tab}</button>
          ))}
        </div>
      </div>

      <div style={{ padding: "32px 40px" }}>

        {/* ═══════════════════════ OVERVIEW ═══════════════════════ */}
        {activeTab === "overview" && (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginBottom: 32 }}>
              <KPICard label="Total Customers" value="4,250" sub="Full dataset" color={COLORS.blue} icon="👥" />
              <KPICard label="Churned" value="598" sub="Lost customers" color={COLORS.churn} icon="📉" />
              <KPICard label="Churn Rate" value="14.1%" sub="Overall rate" color={COLORS.churn} icon="⚠️" />
              <KPICard label="Retained" value="3,652" sub="86% retention" color={COLORS.retain} icon="✅" />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 20, marginBottom: 20 }}>
              <ChartBox title="Churn Split">
                <PieChart width={220} height={200}>
                  <Pie data={pieData} cx={110} cy={90} innerRadius={55} outerRadius={85} dataKey="value" paddingAngle={3}>
                    <Cell fill={COLORS.retain} />
                    <Cell fill={COLORS.churn} />
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
                <div style={{ display: "flex", gap: 20, justifyContent: "center", fontSize: 12 }}>
                  <span style={{ color: COLORS.retain }}>● Retained 86%</span>
                  <span style={{ color: COLORS.churn }}>● Churned 14%</span>
                </div>
              </ChartBox>

              <ChartBox title="Avg Metrics: Churned vs Non-Churned (Normalized for comparison)">
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={avgMetrics} barSize={12} barGap={4}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="metric" tick={{ fill: "#4a7a8a", fontSize: 10 }} tickLine={false} axisLine={false} />
                    <YAxis tick={{ fill: "#4a7a8a", fontSize: 10 }} tickLine={false} axisLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ fontSize: 12, color: "#7a9faf" }} />
                    <Bar dataKey="nonChurn" name="Non-Churned" fill={COLORS.retain} radius={[3, 3, 0, 0]} />
                    <Bar dataKey="churn" name="Churned" fill={COLORS.churn} radius={[3, 3, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartBox>
            </div>

            <Section title="Customer Service Calls vs Churn">
              <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 20 }}>
                <ChartBox title="Churn Rate by CS Call Count">
                  <ResponsiveContainer width="100%" height={220}>
                    <BarChart data={csCallsData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                      <XAxis dataKey="calls" tick={{ fill: "#4a7a8a", fontSize: 11 }} tickLine={false} axisLine={false} label={{ value: "CS Calls Made", position: "insideBottom", offset: -5, fill: "#4a7a8a", fontSize: 11 }} />
                      <YAxis tick={{ fill: "#4a7a8a", fontSize: 11 }} tickLine={false} axisLine={false} unit="%" />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="churnRate" name="Churn Rate %" fill={COLORS.accent} radius={[4, 4, 0, 0]}>
                        {csCallsData.map((entry, i) => (
                          <Cell key={i} fill={entry.churnRate > 30 ? COLORS.churn : COLORS.accent} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </ChartBox>
                <ChartBox title="Key Insight">
                  <div style={{ display: "flex", flexDirection: "column", gap: 12, paddingTop: 8 }}>
                    <div style={{ background: "rgba(255,77,109,0.1)", border: "1px solid rgba(255,77,109,0.2)", borderRadius: 10, padding: 16 }}>
                      <div style={{ color: COLORS.churn, fontWeight: 700, fontSize: 28 }}>50.75%</div>
                      <div style={{ color: "#aac8d8", fontSize: 12, marginTop: 4 }}>churn rate for customers with 4+ CS calls</div>
                    </div>
                    <div style={{ background: "rgba(6,214,160,0.08)", border: "1px solid rgba(6,214,160,0.15)", borderRadius: 10, padding: 16 }}>
                      <div style={{ color: COLORS.retain, fontWeight: 700, fontSize: 28 }}>~11%</div>
                      <div style={{ color: "#aac8d8", fontSize: 12, marginTop: 4 }}>stable churn rate for 0–3 CS calls</div>
                    </div>
                    <div style={{ color: "#607080", fontSize: 12, lineHeight: 1.6 }}>
                      🔑 4+ CS calls is a critical churn trigger — 4.6× higher than baseline
                    </div>
                  </div>
                </ChartBox>
              </div>
            </Section>
          </>
        )}

        {/* ═══════════════════════ PLANS & USAGE ═══════════════════════ */}
        {activeTab === "plans & usage" && (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 32 }}>
              <KPICard label="Intl Plan Churn Rate" value="42.2%" sub="vs 11.2% without" color={COLORS.churn} icon="🌐" />
              <KPICard label="Voicemail Plan Churn" value="16.4%" sub="vs 7.4% without" color={COLORS.accent} icon="📬" />
              <KPICard label="High Usage Churn" value="28.7%" sub=">216 min/day" color={COLORS.churn} icon="📊" />
            </div>

            <Section title="Plan Impact on Churn">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                <ChartBox title="International Plan — Churn Rate Comparison">
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={intlPlanData} barSize={40}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                      <XAxis dataKey="plan" tick={{ fill: "#4a7a8a", fontSize: 11 }} tickLine={false} axisLine={false} />
                      <YAxis tick={{ fill: "#4a7a8a", fontSize: 11 }} tickLine={false} axisLine={false} unit="%" domain={[0, 50]} />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="churnRate" name="Churn Rate %" radius={[6, 6, 0, 0]}>
                        <Cell fill={COLORS.retain} />
                        <Cell fill={COLORS.churn} />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </ChartBox>

                <ChartBox title="Voicemail Plan — Churn Rate Comparison">
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={vmailPlanData} barSize={40}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                      <XAxis dataKey="plan" tick={{ fill: "#4a7a8a", fontSize: 11 }} tickLine={false} axisLine={false} />
                      <YAxis tick={{ fill: "#4a7a8a", fontSize: 11 }} tickLine={false} axisLine={false} unit="%" domain={[0, 20]} />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="churnRate" name="Churn Rate %" radius={[6, 6, 0, 0]}>
                        <Cell fill={COLORS.retain} />
                        <Cell fill={COLORS.churn} />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </ChartBox>
              </div>
            </Section>

            <Section title="Day Minutes Usage Segments">
              <ChartBox title="Churn Rate by Daily Call Minutes" span={2}>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={dayMinsSegData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="seg" tick={{ fill: "#4a7a8a", fontSize: 10 }} tickLine={false} axisLine={false} />
                    <YAxis tick={{ fill: "#4a7a8a", fontSize: 11 }} tickLine={false} axisLine={false} unit="%" />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="churnRate" name="Churn Rate %" radius={[6, 6, 0, 0]}>
                      {dayMinsSegData.map((entry, i) => (
                        <Cell key={i} fill={entry.churnRate > 20 ? COLORS.churn : entry.churnRate > 12 ? COLORS.accent : COLORS.retain} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                <div style={{ display: "flex", gap: 16, marginTop: 12, fontSize: 12, color: "#607080" }}>
                  <span style={{ color: COLORS.churn }}>● High churn (&gt;20%)</span>
                  <span style={{ color: COLORS.accent }}>● Moderate (12–20%)</span>
                  <span style={{ color: COLORS.retain }}>● Low (&lt;12%)</span>
                </div>
              </ChartBox>
            </Section>

            <Section title="Area Code Breakdown">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                {areaData.map(a => (
                  <div key={a.area} style={{
                    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 14, padding: "20px 24px",
                  }}>
                    <div style={{ color: "#4a7a8a", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "monospace" }}>Area Code</div>
                    <div style={{ fontSize: 36, fontWeight: 700, color: COLORS.blue, marginTop: 4 }}>{a.area}</div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12 }}>
                      <div>
                        <div style={{ color: "#4a7a8a", fontSize: 11 }}>Customers</div>
                        <div style={{ fontWeight: 600, fontSize: 20 }}>{a.total.toLocaleString()}</div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ color: "#4a7a8a", fontSize: 11 }}>Churn Rate</div>
                        <div style={{ fontWeight: 700, fontSize: 20, color: COLORS.accent }}>{a.churnRate}%</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </>
        )}

        {/* ═══════════════════════ RISK SEGMENTS ═══════════════════════ */}
        {activeTab === "risk segments" && (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 32 }}>
              <KPICard label="Low Risk (0–2)" value="2,689" sub="2.4% churn rate" color={COLORS.retain} icon="🟢" />
              <KPICard label="Medium Risk (3–6)" value="1,338" sub="32.2% churn rate" color={COLORS.accent} icon="🟡" />
              <KPICard label="High Risk (7+)" value="223" sub="45.7% churn rate" color={COLORS.churn} icon="🔴" />
            </div>

            <Section title="Risk Tier Analysis">
              <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 20, marginBottom: 20 }}>
                <ChartBox title="Churn Rate by Risk Tier">
                  <ResponsiveContainer width="100%" height={240}>
                    <BarChart data={riskData} barSize={50}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                      <XAxis dataKey="tier" tick={{ fill: "#4a7a8a", fontSize: 11 }} tickLine={false} axisLine={false} />
                      <YAxis tick={{ fill: "#4a7a8a", fontSize: 11 }} tickLine={false} axisLine={false} unit="%" />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="churnRate" name="Churn Rate %" radius={[8, 8, 0, 0]}>
                        <Cell fill={COLORS.retain} />
                        <Cell fill={COLORS.accent} />
                        <Cell fill={COLORS.churn} />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </ChartBox>
                <ChartBox title="Customer Distribution by Risk">
                  <PieChart width={200} height={200}>
                    <Pie data={riskData} cx={100} cy={90} innerRadius={50} outerRadius={80} dataKey="customers" paddingAngle={4}>
                      <Cell fill={COLORS.retain} />
                      <Cell fill={COLORS.accent} />
                      <Cell fill={COLORS.churn} />
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 12 }}>
                    <span style={{ color: COLORS.retain }}>● Low Risk — 63%</span>
                    <span style={{ color: COLORS.accent }}>● Medium Risk — 31%</span>
                    <span style={{ color: COLORS.churn }}>● High Risk — 5%</span>
                  </div>
                </ChartBox>
              </div>
            </Section>

            <Section title="CS Calls by Plan (Churned vs Non-Churned)">
              <ChartBox title="Avg Customer Service Calls by Plan Status">
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={planCsData} barSize={30} barGap={8}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="plan" tick={{ fill: "#4a7a8a", fontSize: 11 }} tickLine={false} axisLine={false} />
                    <YAxis tick={{ fill: "#4a7a8a", fontSize: 11 }} tickLine={false} axisLine={false} domain={[0, 6]} label={{ value: "Avg Calls", angle: -90, position: "insideLeft", fill: "#4a7a8a", fontSize: 11 }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ fontSize: 12, color: "#7a9faf" }} />
                    <Bar dataKey="nonChurn" name="Non-Churned" fill={COLORS.retain} radius={[4, 4, 0, 0]} />
                    <Bar dataKey="churn" name="Churned" fill={COLORS.churn} radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartBox>
            </Section>
          </>
        )}

        {/* ═══════════════════════ CLUSTERS ═══════════════════════ */}
        {activeTab === "clusters" && (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 32 }}>
              {clusterData.map((c, i) => (
                <div key={c.cluster} style={{
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 14, padding: "20px 22px",
                  borderTop: `3px solid ${[COLORS.churn, COLORS.retain, COLORS.blue, COLORS.accent][i]}`,
                }}>
                  <div style={{ color: "#4a7a8a", fontSize: 11, fontFamily: "monospace", textTransform: "uppercase" }}>Cluster {c.cluster}</div>
                  <div style={{ color: [COLORS.churn, COLORS.retain, COLORS.blue, COLORS.accent][i], fontSize: 28, fontWeight: 700, marginTop: 4 }}>{c.churnRate}%</div>
                  <div style={{ color: "#607080", fontSize: 11, marginBottom: 12 }}>churn rate</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: "#4a7a8a" }}>Day</span><span>{c.dayMins} min</span></div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: "#4a7a8a" }}>Evening</span><span>{c.eveMins} min</span></div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: "#4a7a8a" }}>Night</span><span>{c.nightMins} min</span></div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: "#4a7a8a" }}>Intl</span><span>{c.intlMins} min</span></div>
                  </div>
                </div>
              ))}
            </div>

            <Section title="Usage Radar by Cluster">
              <ChartBox title="Avg Minutes Profile per Cluster (Radar View)">
                <ResponsiveContainer width="100%" height={320}>
                  <RadarChart data={[
                    { metric: "Day Mins", C0: 228, C1: 181, C2: 126, C3: 187 },
                    { metric: "Eve Mins", C0: 222, C1: 165, C2: 222, C3: 190 },
                    { metric: "Night Mins", C0: 175, C1: 241, C2: 180, C3: 210 },
                    { metric: "Intl Mins", C0: 111, C1: 119, C2: 109, C3: 69 },
                  ]}>
                    <PolarGrid stroke="rgba(255,255,255,0.08)" />
                    <PolarAngleAxis dataKey="metric" tick={{ fill: "#7a9faf", fontSize: 12 }} />
                    <Radar name="C0 (22% churn)" dataKey="C0" stroke={COLORS.churn} fill={COLORS.churn} fillOpacity={0.12} />
                    <Radar name="C1 (12% churn)" dataKey="C1" stroke={COLORS.retain} fill={COLORS.retain} fillOpacity={0.12} />
                    <Radar name="C2 (11% churn)" dataKey="C2" stroke={COLORS.blue} fill={COLORS.blue} fillOpacity={0.12} />
                    <Radar name="C3 (11% churn)" dataKey="C3" stroke={COLORS.accent} fill={COLORS.accent} fillOpacity={0.12} />
                    <Legend wrapperStyle={{ fontSize: 12, color: "#7a9faf" }} />
                    <Tooltip content={<CustomTooltip />} />
                  </RadarChart>
                </ResponsiveContainer>
              </ChartBox>
            </Section>

            <Section title="Cluster 0 — Highest Risk">
              <div style={{ background: "rgba(255,77,109,0.07)", border: "1px solid rgba(255,77,109,0.2)", borderRadius: 14, padding: 24 }}>
                <div style={{ color: COLORS.churn, fontWeight: 700, fontSize: 18, marginBottom: 8 }}>⚠️ Cluster 0 — Heavy Daytime Callers (22.2% Churn)</div>
                <p style={{ color: "#aac8d8", fontSize: 13, lineHeight: 1.8, margin: 0 }}>
                  Cluster 0 customers make significantly more daytime calls (228 min avg vs 126–187 in other clusters). 
                  They have the highest churn at 22.2%, nearly double the next cluster. These are likely high-usage 
                  business users who may be hitting plan limits or getting unexpected charges. <strong style={{ color: COLORS.accent }}>Priority retention target.</strong>
                </p>
              </div>
            </Section>
          </>
        )}

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=DM+Mono:wght@400;500&display=swap');
      `}</style>
    </div>
  );
}
