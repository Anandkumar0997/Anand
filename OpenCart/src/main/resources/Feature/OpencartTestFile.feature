@OpenCart
Feature: OpenCart Website
@TC_01_Register
 Scenario Outline: To Register in the opencart
    Given the user Opens the opencart webpage
    When the user opens the registration webpage
    Then the user fiils the "<first>" and "<last>"and "<email>"and"<telephone>"and"<address>"and"<city>"and"<post>"and"<country>"and"<region>"and"<password>"
    Then the user clicks on "<register>" to create a new account
    
Examples: 
|first  |last  |email          |telephone |address      |city    |post   |country |region |password |register  |
|akil   |kumar |akil@gmail.com |23456789  |ganhi street |chennai |600002 |India   |Tamil  |password |register1 |
|jothi  |kumar |jk98@gmail.com |23458796  |nehru street |chennai |600065 |India   |Tamil  |paswords |register2 |
|mangal |pandi |mp2@gmail.com  |23905678  |bose street  |chennai |600078 |India   |Tamil  |passwopd |register3 |

@TC_02_LoginDetails
Scenario Outline: To Login in the Opencart
Given the user launch the chrome application
When the user opens the opencart webpage
Then the user login using "<username>" and "<password>"
Then click on the "<login>" button user nagivate to the next page

Examples: 
|username       |password |login  |
|akil@gmail.com |password |login1 |
|jk98@gmail.com |paswords |login2 |
|mp2@gmail.com  |passwopd |login3 |

@TC_03_InvalidDetails
Scenario Outline: To Login with invalid details
Given the user launch the app
When the user opens the login page
Then the user giving invalid details "<user>" and "<pass>"
Then click on "<login>" appropriate error message is displayed

Examples: 
|user |pass |login     |
|ak   |1234 |testcase1 |

@TC_04_InvalidEmail
Scenario Outline: To Register with invalid email details
Given the user open the opencart webpage
When the user open the registration webpage
Then the user gives the "<first>" and "<last>"and "<email>"and"<telephone>"and"<address>"and"<city>"and"<post>"and"<country>"and"<region>"and"<password>"
Then the user click on "<register>" to create a new account

Examples: 
|first |last  |email          |telephone |address      |city    |post   |country |region |password |register  |
|akil  |kumar |akil.gmail.com |23456789  |ganhi street |chennai |600002 |India   |Tamil  |password |testcase2 |

@TC_05_DesktopDisplay
Scenario: To Display all desktops and to add a desktop
Given user open the opencart
When the user clicks on desktop tab
Then the user clicks on all desktop
Then the user adds to cart

@TC_06_AddtoCart
Scenario: To Choose the product and add to cart
Given the user launch the web
When the user launches the application
Then the user search for the products
Then click on add to cart
