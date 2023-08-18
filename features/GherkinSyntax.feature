# features/ - where your .feature files will be placed. Gherkin syntax.
# npx cucumber-js
# When you run the tests, Cucumber reads the .feature file, goes step by step, finds the corresponding function in the step definition files, and executes it. This way, the behavior described in the .feature file is turned into real actions on your application, allowing you to automate and verify that the application works as intended.


    Scenario: Navigate and interact with various elements on Google

    Given I navigate to Google's homepage
    When I accept the disclaimer or cookies notification
    And I click on the "I'm Feeling Lucky" button
    And I click on an item from the archive list
    Then I should be able to return to the previous page

    Scenario: Searching a term on Google

    Given I am on the Google homepage
    When I type in "Cucumber"
    And I press Enter
    Then I should see results related to "Cucumber"

