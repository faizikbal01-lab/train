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
## Recommendations for GitHub Upload

Before publishing this project to GitHub, the following improvements are recommended to maximise usability, reproducibility, and professional quality.

### 1. Data Quality & Cleaning

- **Standardise boolean columns:** Plan subscription columns (e.g. `international_plan`, `voice_mail_plan`) should be stored as boolean `True`/`False` or integer `1`/`0` rather than string `yes`/`no`, which can cause type errors in downstream tools.
- **Validate KPI totals:** Confirm that summed customer counts across all segmentation tables (by plan, area code, usage tier, cluster, risk tier) each add up to 4,250. Inconsistencies suggest filtering or sampling artefacts that should be documented.
- **Clarify the 91-column structure:** The single wide sheet with side-by-side tables is hard to parse programmatically. Either add a header row that clearly labels each table's start column, or split tables into separate sheets or CSV files (see Section 2).
- **Document the risk scoring formula:** The composite risk score (0–7+) used for tier classification is not defined in the current README. Add the exact formula or decision logic so users can reproduce or validate the tiers independently.
- **Check for rounding consistency:** Verify that churn rates reported across sections are computed consistently (e.g. churned / total, not churned / non-churned). The International Plan figure (42.2%) and Cluster 0 figure (42.2%) being identical warrants a double-check.

### 2. Repository Structure

- **Split tables into separate files or sheets:** The current 91-column single-sheet layout is not dashboard-friendly for all tools. Consider exporting each summary table as its own CSV (e.g. `churn_by_plan.csv`, `cluster_profiles.csv`, `risk_tiers.csv`) inside a `data/processed/` folder.
- **Adopt a standard folder layout:**

  ```
  ├── data/
  │   ├── raw/              # Original 4,250-record source dataset
  │   └── processed/        # Pre-computed summary tables (one CSV per section)
  ├── notebooks/            # Python scripts or Jupyter notebooks used to generate the dashboard data
  ├── dashboard/            # Power BI (.pbix), Tableau (.twbx), or Excel dashboard file
  └── docs/                 # README, data dictionary, methodology notes
  ```

- **Include the raw source data (if permissible):** The current repo only contains aggregated outputs. If the original 4,250-record dataset is shareable, include it under `data/raw/` so others can reproduce the analysis end-to-end.
- **Add a `.gitignore`:** Exclude tool-specific temporary files (`.~lock.*`, `__pycache__/`, `.ipynb_checkpoints/`, `*.pyc`) to keep the repo clean.
- **Enable Git LFS if needed:** If the Excel dashboard file (`.pbix` or `.xlsx`) exceeds 50 MB, enable Git LFS before the first commit with `git lfs track "*.xlsx" "*.pbix"`.

### 3. Documentation

- **Add a `data_dictionary.csv`:** Document every column in `Sheet1` — including the column group it belongs to, the metric name, data type, and description. This is critical given the wide 91-column layout where column context is not self-evident.
- **Add a `requirements.txt`:** Specify the exact Python package versions used (`pandas`, `numpy`, `scikit-learn`, `openpyxl`) so others can reproduce the environment:

  ```
  pandas==2.x.x
  numpy==1.x.x
  scikit-learn==1.x.x
  openpyxl==3.x.x
  ```

- **Document KMeans configuration:** Include the number of clusters (4), the features used (Day, Evening, Night, International Minutes), whether features were scaled, the random seed, and the inertia or silhouette score. This makes the clustering reproducible.
- **Explain usage segment thresholds:** The day-minute quartile cut points (<143.3, 143.3–180.4, 180.4–216.2, >216.2) should be documented as derived from the training set, with a note on whether they should be recalculated for new data.
- **Add dashboard setup instructions:** If a Power BI or Tableau file is included, add step-by-step instructions for connecting it to the data source in the README.

### 4. Ethics, Privacy & Attribution

- **Cite the original dataset source:** If this is derived from the well-known KDD Cup / UCI Telecom Churn dataset, add a citation:
  > Orange Telecom Churn Dataset. Available via Kaggle and UCI ML Repository. Originally sourced from the KDD Cup competition data.
- **Confirm anonymisation:** State explicitly that no real customer PII (names, phone numbers, account numbers) is present, and that area codes are used only as geographic aggregation bins.
- **Add a `LICENSE` file:** Without one, the repo is technically "all rights reserved." For an analytical/educational project, **MIT License** (for code) combined with **CC BY 4.0** (for data and documentation) is a common and permissive choice.
- **Add usage disclaimer to the dataset:** If `train_for_dashboard.xlsx` is published directly, embed a note in cell `A1` referencing the disclaimer already present in this README, so the file is self-describing when shared independently.

### 5. Analysis & Dashboard Quality Improvements

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

