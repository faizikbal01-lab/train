# train
Telecom Customer Churn Analysis: An end-to-end data analytics project identifying key drivers of customer attrition. Includes exploratory data analysis (EDA), usage pattern segmentation, correlation studies, and predictive modeling (Logistic Regression) to improve customer retention and lifetime value.
In the highly competitive telecommunications industry, retaining customers is often more cost-effective than acquiring new ones. This project analyzes a dataset of customer usage patterns (call minutes, charges, service plans) to identify why customers leave (churn) and how to proactively prevent it.
Metric Averages: Comparison of averages for "Churned" vs. "Non-Churned" customers across several dimensions
Account Length: How long the customer has been with the provider.
Customer Service Calls: Analysis showing that churned customers generally have a higher average of calls (\approx 2.28) compared to non-churned (\approx 1.44).
Usage Minutes & Calls: Breakdown of day, evening, night, and international minutes and calls.
Revenue/Charges: Average charges for day, evening, and international services.
Bivariate & Segment AnalysisPlan Impact: Analysis of how International Plans and Voice Mail Plans affect churn. For instance, customers with an International Plan have a significantly higher churn rate (42.17\%) compared to those without (11.18\%).
Geographic Analysis: Churn rates broken down by Area Code (408, 415, and 510).
Behavioral Analysis: - Customer Service Calls: A granular breakdown showing that the churn rate spikes dramatically for customers who call 4 or more times. 
Usage Segments: Customers are categorized into usage tiers (Low, Mid-Low, Mid-High, High) based on their "Total Day Minutes," revealing that high-usage customers have a higher churn risk (28.73\%)
Advanced Analytics & ModelingClustering (K-Means/Segmentation): The data shows results from a clustering analysis where customers are grouped into four clusters (0 to 3). Each cluster has a profile based on usage (Day, Evening, Night, Intl) and an associated churn rate.Risk Tiering: A risk-scoring analysis that classifies customers into Low, Medium, and High Risk tiers.
High Risk customers (those with a high score range, likely related to service calls) show a churn rate of 45.74\%.
Cluster Profiles: A second clustering table details the proportion of plan types (International/Voice Mail) and average service calls per segment.
