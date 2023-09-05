Feature: Show job on mobile
  In order to find a job
  As a user
  I want to be able to see and compare job details

Scenario: Coming from all jobs
  Given I am on the main page
  When I click on the job item
  Then I should see the job details
  And I should see swipe info

Scenario: Coming from filtered jobs
  Given I am on the main page
  And jobs are filtered by tech and city
  When I click on the job item
  Then I should see the job details
  And I should see swipe info

Scenario: Coming from job details
  Given I am on the job details view
  When I swipe to the left
  Then I should see the next job details

Scenario: Coming from url
  When I try to load job from url
  Then I should see the job details
  And I should see swipe info

#TODO:
#Scenario: Coming from broken url
#  When I try to load job from broken url
#  Then I should see the 'Page not found' message