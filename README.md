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

---
## Recommendations for GitHub Upload

###  Analysis & Dashboard Quality Improvements

- **Investigate the U-shaped churn pattern:** The README notes that both Low-usage (12.1%) and High-usage (28.7%) customers churn at elevated rates, while Mid-High users churn at only 6.2%. This non-linear pattern is a significant insight — consider adding a visualisation or deeper breakdown to explain it.
- **Add statistical significance tests:** Key comparisons (e.g. International Plan churn 42.2% vs. 11.2%, CS call threshold at 4+) would benefit from chi-square or z-test p-values to confirm the differences are not sampling artefacts given the 4,250-record base.
- **Expand the geographic analysis:** With only 3 area codes and near-uniform churn rates (13.6–15.1%), consider whether state-level data is available in the raw records to produce a more actionable regional breakdown.
- **Add a churn prediction model:** The risk scoring and clustering groundwork is already in place — consider adding a logistic regression or gradient boosting model trained on the 4,250 records to output individual-level churn probabilities, which would make the dashboard more actionable for retention teams.
- **Version the dashboard data:** If the dashboard is intended for ongoing use, add a `generated_date` or `data_as_of` column to the KPI table so stakeholders can tell when the figures were last refreshed.

---

## Author

**[Mohd Faiz]**

- **Role:** Business and Data Analyst
- **GitHub:** [https://github.com/faizikbal01-lab](https://github.com/your-github-handle)

---

*Disclaimer: This dataset is based on a telecom customer churn training dataset and is intended for analytical and dashboard development purposes only. All customer records are anonymised and not attributable to any real individual.*

