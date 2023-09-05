Feature: List jobs on mobile
  In order to select a job
  As a user
  I want to be able to see all jobs

Scenario: Coming from root url
  Given I am on the main page
  Then I should see all jobs

Scenario: Coming back from job details
  Given I am on the job details view
  When I swipe to the left
  Then I should see the next job details
  When I press 'go back' button
  And I should be redirected to the main page
  Then I should see all jobs

Scenario: Coming back from job url
  When I try to load job from url
  Then I should see the job details
  And I should see swipe info
  When I press 'go back' button
  And I should be redirected to the main page
  Then I should see all jobs
