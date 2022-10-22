Feature: Minesweeper - Edge cases specifics

Background: 
  Given the player opens the game

Scenario: Tagging as mined a revelaed cell - No tagging allowed
  Given the player loads the following mock data:
  """
  | * | o |
  | o | o |
  """
  And the player uncovers the cell (2,2)
  When the player tags as "mined" the cell (2,2)
  Then the cell (2,2) should show: 1

Scenario: Tagging as mined a disabled cell - No tagging allowed
  Given the player loads the following mock data:
  """
  | * | o |
  | o | o |
  """
  And the player uncovers the cell (1,1)
  When the player tags as "mined" the cell (1,2)
  Then the cell (1,2) should not show: mined

  Scenario: Tagging as uncertain a revelaed cell - No tagging allowed
  Given the player loads the following mock data:
  """
  | * | o |
  | o | o |
  """
  And the player uncovers the cell (2,2)
  When the player tags as "uncertain" the cell (2,2)
  Then the cell (2,2) should show: 1

Scenario: Tagging as uncertain a disabled cell - No tagging allowed
  Given the player loads the following mock data:
  """
  | * | o |
  | o | o |
  """
  And the player uncovers the cell (1,1)
  When the player tags as "uncertain" the cell (1,2)
  Then the cell (1,2) should not show: uncertain

Scenario: Tagging a cell as uncertain - Left mines counter does not change
  Given the player loads the following mock data:
  """
  | * | o |
  """
  When the player tags as "uncertain" the cell (1,1)
  Then the left mines counter should be 1

Scenario: Untagging an uncertain cell - Left mines counter does not change
  Given the player loads the following mock data:
  """
  | * | o |
  """
  And the player tags as "uncertain" the cell (1,1)
  When the player untags the cell (1,1)
  Then the left mines counter should be 1

Scenario: Detecting the absence of mines - Winning the game
  Given the player loads the following mock data:
  """
  | o | o |
  """
  Then the player should win the game

Scenario: Detecting the absence of mines - Disabling all the cells
  Given the player loads the following mock data:
  """
  | o | o |
  """
  Then all the cells should be disabled