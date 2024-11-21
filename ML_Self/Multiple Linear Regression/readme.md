# Multiple Linear Regression 
![alt text](Multiple-Linear-Regression-.png)

# Assumptions of linear regression
You cannot blindly apply any linear regression. You have to make sure that your data is fit for using linear regression. <br>
Thats where "Assumptions of linear regression" comes into the picture.
![alt text](<Assumptions of Linear Regression.png>)

# Dummy variables
A dummy variable is a binary variable used in regression analysis to represent categorical data with two or more categories. Each dummy variable takes a value of 1 or 0 to indicate the presence or absence of a specific category or condition in the data.

When working with categorical variables in linear regression (or any linear model, including linear logistic models or linear latent models like in latent variable modeling), you only need to include k−1 dummy variables if you have categories. This is because including all dummy variables would create perfect multicollinearity, also known as the <b>dummy variable trap.</b>

# Statistical Significance
<ul>
<li>
Statistical significance means that the p-value is below the threshold (e.g., 0.05), indicating strong enough evidence to suggest the effect is not due to chance.
</li>
<li>
A p-value shows how consistent the data is with the null hypothesis.
</li>
<li>
Alpha (denoted as 𝛼) is the significance level we set before performing the test.
</li>
</ul>

# Building a model
### (1) All-in
<ul>
<li>
Prior knowledge OR
</li>
<li>
You have to OR
</li>
<li>
Preparing for backward elimination
</li>
</ul>

### (2) Backward elimination
<ul>
<li> Step 1:
Select significant level to stay in model (e.g. significant level of 0.5)
</li>
<li> Step 2:
Fit the full model with all possible predictors
</li>
<li> Step 3:
Consider predictor with highest p-value. <u>if P > SL, go to step 4 else finish.</u> (FINISH means your model is ready!)
</li>
<li> Step 4:
Remove the predictor 
</li>
<li> Step 5:
Fit model without this variable
</li>

After step 5, go back to step 3. <br> <br>Keep doing this, until you come to point that even the variable of highest p-value, that p-value is still less then your significant variable value.
</ul>
