Feature: Filter jobs
  In order to find a job
  As a user
  I want to be able to filter jobs

Scenario: Filter subcategory
  Given I am on the main page
  And select the React filter
  Then I should see the React jobs
  Then I should not see the JQuery jobs

Scenario: Filter parent category
  Given I am on the main page
  And select the JS filter
  Then I should see the React jobs

Scenario: Filter from dropdown
  Given I am on the main page
  And I hover over dropdown
  And select the other filter
  Then I should see the other jobs

#TODO:
#Scenario: Filter salary
#  Given I am on the main page
#  And I move the bottom salary slider to 100k
#  Then I should only see the jobs over 100k
