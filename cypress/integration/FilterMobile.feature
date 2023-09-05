Feature: Filter jobs
  In order to find a job
  As a user
  I want to be able to filter jobs

Scenario: Filter parent
  Given I am on the filter page
  When I select the React filter
  And I press filter jobs button
  Then I should see the React jobs
  And I should not see the JQuery jobs

Scenario: Filter subcategory
  Given I am on the filter page
  When I select the JS filter
  And I press filter jobs button
  Then I should see the React jobs