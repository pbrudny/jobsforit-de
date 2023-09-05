Feature: Apply for a job
  In order to get a new job
  As a user
  I want to be able to apply

Scenario: Coming from all jobs
  Given I am on the main page
  When I click on the job item
  And I click apply button
  Then I should see success modal

Scenario: Coming from filtered jobs
  Given I am on the main page
  And jobs are filtered by tech and city
  When I click on the job item
  And I click apply button
  Then I should see success modal

Scenario: Coming from comparison list
  Given I am on the comparison view
  And jobs are filtered by tech and city
  When I click on the job item
  And I click apply button
  Then I should see success modal

Scenario: Coming from url
  When I try to load job from url
  And I click apply button
  Then I should see success modal