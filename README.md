# Telecom Customer Churn Analysis & Dashboard Data (2024)

## Project Overview

Customer churn is one of the most costly challenges in the telecommunications industry — retaining an existing customer is far cheaper than acquiring a new one. This project presents a comprehensive **aggregated analytical dataset** purpose-built to power a business intelligence dashboard for telecom churn management. The dataset (`train_for_dashboard.xlsx`) consolidates pre-computed summary statistics, segmentation breakdowns, cluster profiles, and risk tier classifications derived from 4,250 telecom customer records.

As a **Business and Data Analyst**, the objective was to structure raw churn data into a clean, dashboard-ready format that equips product managers, customer success teams, and operations leaders with the insights needed to proactively identify at-risk customers and design targeted retention interventions.

---

## Business & Retention Strategy Objectives

The dataset is structured to provide data-backed answers to the following critical questions:

1. **Churn Baseline:** What is the overall churn rate across the customer base, and how many customers are actively at risk?
2. **Plan-Based Risk:** Do customers on International or Voice Mail plans churn at higher or lower rates — and which plan configurations correlate most strongly with retention?
3. **Behavioural Triggers:** How does the number of customer service calls escalate churn risk, and at what threshold does churn become critical?
4. **Usage Profiling:** Which day-minute usage bands carry the highest churn rates — and are high-usage customers the most likely to leave?
5. **Geographic Patterns:** Does churn vary meaningfully across area codes, and should retention campaigns be geographically targeted?
6. **Customer Segmentation:** What distinct behavioral clusters exist within the customer base, and which cluster carries the highest churn risk?
7. **Risk Stratification:** How are customers distributed across Low, Medium, and High risk tiers based on composite churn scores?

---

## Dataset Description

The file contains **one structured worksheet** (`Sheet1`) with **91 columns** representing multiple side-by-side summary tables, each covering a distinct dimension of churn analysis. Key data sections include:

| Table / Section | Description |
| --- | --- |
| **Overall KPIs** | Top-line metrics: Total Customers (4,250), Churned Customers (598), Churn Rate (14.07%). |
| **Churn by International Plan** | Churn rates split by International Plan enrollment (Yes/No). |
| **Churn by Voice Mail Plan** | Churn rates split by Voice Mail Plan subscription status. |
| **Churn by Area Code** | Customer counts and churn rates broken down by 3 area codes (408, 415, 510). |
| **Churn by Customer Service Calls** | Churn rate by number of customer service calls made (0, 1, 2, 3, 4+). |
| **Average Metrics by Churn Status** | Mean values of Account Length (Days), Customer Service Calls, Day Minutes, Day Calls, Evening Charge, and International Charge — split by churned vs. non-churned. |
| **Usage Segments** | Customers bucketed into 4 day-minute usage tiers (Low, Mid-Low, Mid-High, High) with churn rates per segment. |
| **Plan Status vs. CS Calls** | Average customer service call counts for churned vs. non-churned customers, further split by International Plan status. |
| **Cluster Analysis** | 4 behavioral clusters (0–3) profiled by Avg Day/Evening/Night/International Minutes and Churn Rate. |
| **Cluster Profiles (Extended)** | Detailed cluster view including Avg Account Length, International Plan proportion, Voicemail Plan proportion, Avg Day Minutes, Avg CS Calls, and Churn Rate. |
| **Risk Tiers** | Three risk bands — Low (Score 0–2), Medium (Score 3–6), High (Score 7+) — with customer counts and churn rates per tier. |
| **Charge Comparisons** | Average Evening and International Charges contrasted across churned and non-churned cohorts. |

---

## Methodology & Analytical Framework

### Technologies & Tools Used

- **Python (Pandas):** Data aggregation, groupby operations, segmentation logic, and cluster assignment.
- **NumPy:** Numerical binning for usage segments and score calculations.
- **Scikit-learn (KMeans):** Unsupervised clustering to segment customers into 4 behavioral groups based on usage patterns.
- **Microsoft Excel / Dashboard Tool:** Final output structured for direct ingestion into a BI dashboard (Power BI, Tableau, or Excel-native charts).

### Analytical Workflow

1. **Data Loading & Cleaning:** Loaded raw telecom customer records. Handled missing values in key fields and standardised categorical variables (e.g., `yes`/`no` for plan subscriptions).
2. **Overall KPI Computation:** Calculated top-level figures — total customers, churned customers, and the overall churn rate of **14.07%**.
3. **Plan-Based Segmentation:** Grouped customers by International Plan and Voice Mail Plan status and computed churn rates for each group.
4. **Area Code Breakdown:** Aggregated bookings and churn by geographic area code to assess regional variation.
5. **Customer Service Call Analysis:** Binned customers by number of service calls (0, 1, 2, 3, 4+) to identify the escalation point at which churn risk spikes.
6. **Usage Segmentation:** Divided customers into 4 day-minute usage quartiles (Low <143.3 min, Mid-Low 143.3–180.4 min, Mid-High 180.4–216.2 min, High >216.2 min) and computed churn per band.
7. **Average Metric Profiling:** Computed mean values of all key behavioural metrics (account length, day minutes, CS calls, charges) split by churned vs. non-churned status.
8. **KMeans Clustering:** Applied a 4-cluster KMeans model on usage features (Day, Evening, Night, International Minutes) to group customers by calling behaviour. Each cluster was profiled by usage pattern and churn rate.
9. **Risk Scoring & Tier Assignment:** Assigned composite risk scores (0–7+) based on churn indicators and classified customers into Low Risk (0–2), Medium Risk (3–6), and High Risk (7+) tiers.
10. **Dashboard Table Assembly:** Compiled all aggregated outputs into a single multi-table Excel sheet structured for direct use in dashboard visualizations.

---

## Key Insights (Executive Summary)

- **Overall Churn Rate is 14.07%** — 598 out of 4,250 customers churned, representing a significant revenue retention opportunity.
- **International Plan is a Major Churn Driver:** Customers with an International Plan churn at **42.2%** versus only **11.2%** for those without — nearly 4× the risk. This is the single strongest plan-level churn predictor.
- **Voice Mail Plan is Protective:** Customers with a Voice Mail Plan churn at only **7.4%**, compared to **16.4%** for those without — suggesting higher-engagement, stickier customers.
- **Customer Service Calls are a Critical Escalation Signal:** Churn rates remain stable (~10–11%) for customers with 0–3 service calls, but **spike to 50.8%** for customers making 4 or more calls — a clear intervention threshold for retention teams.
- **High-Usage Customers Churn Most:** Customers in the top day-minute usage quartile (>216.2 minutes/day) churn at **28.7%**, more than double the rate of Mid-High users (6.2%) — indicating that the most active customers are also the most at-risk.
- **Low-Usage Customers also Show Elevated Churn (12.1%):** The churn pattern is U-shaped across usage segments, meaning both ends of the usage spectrum require attention.
- **Geographic Churn is Relatively Uniform:** Churn rates across area codes 408 (14.0%), 415 (13.6%), and 510 (15.1%) are broadly similar, suggesting churn is driven by behavioural rather than geographic factors.
- **Cluster 0 Carries the Highest Churn Risk (42.2%):** This cluster is characterised by customers enrolled in the International Plan (100%), high average day minutes (187 min), and a relatively long account tenure (103.6 days) — likely heavy international callers dissatisfied with costs.
- **Cluster 2 is the Safest Segment (4.8% Churn):** These customers have a Voice Mail plan, moderate usage, and the lowest churn rate — the profile of a highly retained, satisfied subscriber.
- **High Risk Tier (Score 7+) Has 45.7% Churn** across just 223 customers — a small but extremely high-risk cohort that should be prioritised for immediate outreach.
- **Low Risk Tier (Score 0–2) Has Only 2.4% Churn** across 2,689 customers — the bulk of the stable customer base requiring only standard engagement.
- **Churned Customers Average 2.28 Service Calls vs. 1.44 for Retained Customers**, confirming that unresolved service issues are a top driver of voluntary departure.
- **Churned customers use 19% more day minutes on average** (208.99 vs. 175.56 min), suggesting heavy daytime users may feel underserved by their current plan pricing.

---

## How to Use This Dataset

This file is designed as a **dashboard data source**. To connect it to your BI tool:

1. **Power BI / Tableau:** Import `train_for_dashboard.xlsx` → `Sheet1` as a flat data source. Use the column group headers to identify individual summary tables and build visuals from each section.
2. **Excel Dashboard:** Each side-by-side table can be referenced directly in chart series or PivotTable data ranges using the column headers as identifiers.
3. **Python/Pandas:** Load the sheet and slice relevant column groups per analysis table for further transformation or model input.

```bash
# Install required dependencies
pip install pandas openpyxl

# Load in Python
import pandas as pd
df = pd.read_excel('train_for_dashboard.xlsx', sheet_name='Sheet1')
```

---

## Author

**[Mohd Faiz]**

- **Role:** Business and Data Analyst
- **GitHub:** [https://github.com/faizikbal01-lab](https://github.com/your-github-handle)

---

*Disclaimer: This dataset is based on a telecom customer churn training dataset and is intended for analytical and dashboard development purposes only. All customer records are anonymised and not attributable to any real individual.*

