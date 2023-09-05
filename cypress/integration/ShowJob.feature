Feature: Show job
  In order to find a job
  As a user
  I want to be able to see and compare job details

Scenario: Coming from all jobs
  Given I am on the main page
  When I click on the job item
  Then I should see the comparison view
  And I should see the job details on the right
  And I should see some jobs on the left

Scenario: Coming from filtered jobs
  Given I am on the main page
  And jobs are filtered by tech and city
  When I click on the job item
  Then I should see the comparison view
  And I should see tech and city filter selected
  And I should see the job details on the right
  And I should see filtered jobs on the left

Scenario: Coming from comparison list
  Given I am on the comparison view
  And jobs are filtered by tech and city
  When I click on the job item
  Then I should see the job details on the right
  And I should see filtered jobs on the left

Scenario: Coming from url
  When I try to load job from url
  Then I should see the comparison view
  And there should be no filters selected
  And I should see the job details on the right
  And I should see some jobs on the left

  #TODO:
#Scenario: Coming from broken url
#  When I try to load job from broken url
#  Then I should see the 'Page not found' message