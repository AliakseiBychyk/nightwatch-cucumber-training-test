@positive @negative

Feature: Gmail test

Background:
  Given I enter to Google mail page

@positive
Scenario: Gmail login positive test
  When I input login "aleks.brestertester"
  Then opens google mail service for "aleks.brestertester"
  And letter to address with subject and content is sent:
| address             | subject      | content                             |
| aleks.brestertester | test message | Hi there! \nHere is a test message. |
  And letter is received

@negative  
Scenario Outline: Gmail login negative test
  When I input login "<login>"
  Then the Alert occurs and enter is suspended
Examples:
| login        |
| John.Doe     |
| Jane:Doe     |
| Vasia:Pupkin |