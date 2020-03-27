@OpenCart
Feature: OpenCart Website
@TC_01_Register
Scenario Outline: To Register in the opencart
Given the user Opens the opencart webpage
When the user opens the registration webpage
Then the user fiils the "<first>" and "<last>"and "<email>"and"<telephone>"and"<address>"and"<city>"and"<post>"and"<country>"and"<region>"and"<password>"
Then the user clicks on "<register>" to create a new account
    
Examples: 
|first  |last  |email             |telephone |address      |city    |post   |country |region |password |register  |
|akil   |kumar |akil@gmail.com    |23456789  |ganhi street |chennai |600002 |India   |Tamil  |password |register1 |
|jothi  |kumar |jk98@gmail.com    |23458796  |nehru street |chennai |600065 |India   |Tamil  |paswords |register2 |
|mangal |pandi |mp2@gmail.com     |23905678  |bose street  |chennai |600078 |India   |Tamil  |passwopd |register3 |
|john   |kevin |john1998@gmail.com|25646789  |gundu street |mumbai  |654378 |India   |Maha   |opencart1|register4 |
|kanna  |suresh|ks987@gmail.com   |24680876  |Kongu street |pune    |543789 |India   |Maha   |opencart2|register5 |
|suresh |Pillai|han765@gmail.com  |23456789  |Jothi street |chennai |609876 |India   |Tamil  |openc@rt3|register6 |
|mukil  |gnaesh|mge98@gmail.com   |24365789  |Rahl street  |chennai |600034 |India   |Tamil  |openc@rt4|register7 |
|Surya  |kumarr|sk1998@gmail.com  |23098475  |mei street   |chennai |654890 |India   |Tamil  |opencart6|register8 |
|karthi |keyan |kk90@gmail.com    |23456755  |ruba street  |chennai |987069 |India   |Tamil  |openca#t5|register9 |
|maneesh|erat  |man1@gmail.com    |23434556  |Palaka street|kerala  |767987 |India   |ker    |opencart0|register10|

@TC_02_LoginDetails
Scenario Outline: To Login in the Opencart
Given the user launch the chrome application
When the user opens the opencart webpage
Then the user login using "<username>" and "<password>"
Then click on the "<login>" button user nagivate to the next page

Examples: 
|username          |password |login  |
|akil@gmail.com    |password |login1 |
|jk98@gmail.com    |paswords |login2 |
|mp2@gmail.com     |passwopd |login3 |
|john1998@gmail.com|opencart1|login4 |
|ks987@gmail.com   |opencart2|login5 |
|han765@gmail.com  |openc@rt3|login6 |
|mge98@gmail.com   |openc@rt4|login7 |
|sk1998@gmail.com  |opencart6|login8 |
|kk90@gmail.com    |openca#t5|login9 |
|man1@gmail.com    |opencart0|login10|

@TC_03_InvalidDetails
Scenario Outline: To Login with invalid details
Given the user launch the app
When the user opens the login page
Then the user giving invalid details "<user>" and "<pass>"
Then click on "<login>" appropriate error message is displayed

Examples: 
|user    |pass     |login     |
|ak      |1234     |testcase1 |
|jk98    |paswords |testcase2 |
|mp2     |passwopd |testcase3 |
|john1998|opencart1|testcase4 |
|ks987   |opencart2|testcase5 |
|han765  |openc@rt3|testcase6 |
|mge98   |openc@rt4|testcase7 |
|sk1998  |opencart6|testcase8 |
|kk90    |openca#t5|testcase9 |
|man1    |opencart0|testcase10|

@TC_04_InvalidEmail
Scenario Outline: To Register with invalid email details
Given the user open the opencart webpage
When the user open the registration webpage
Then the user gives the "<first>" and "<last>"and "<email>"and"<telephone>"and"<address>"and"<city>"and"<post>"and"<country>"and"<region>"and"<password>"
Then the user click on "<register>" to create a new account

Examples: 
|first  |last  |email             |telephone |address      |city    |post   |country |region |password |register   |
|akil   |kumar |akil.gmail.com    |23456789  |ganhi street |chennai |600002 |India   |Tamil  |password |testcase11 |
|jothi  |kumar |jk98%gmail.com    |23458796  |nehru street |chennai |600065 |India   |Tamil  |paswords |testcase12 |
|mangal |pandi |mp2*gmail.com     |23905678  |bose street  |chennai |600078 |India   |Tamil  |passwopd |testcase13 |
|john   |kevin |john1998=gmail.com|25646789  |gundu street |mumbai  |654378 |India   |Maha   |opencart1|testcase14 |
|kanna  |suresh|ks987-gmail.com   |24680876  |Kongu street |pune    |543789 |India   |Maha   |opencart2|testcase15 |
|suresh |Pillai|han765'gmail.com  |23456789  |Jothi street |chennai |609876 |India   |Tamil  |openc@rt3|testcase16 |
|mukil  |gnaesh|mge98[gmail.com   |24365789  |Rahl street  |chennai |600034 |India   |Tamil  |openc@rt4|testcase17 |
|Surya  |kumarr|sk1998/gmail.com  |23098475  |mei street   |chennai |654890 |India   |Tamil  |opencart6|testcase18 |
|karthi |keyan |kk90.gmail.com    |23456755  |ruba street  |chennai |987069 |India   |Tamil  |openca#t5|testcase19 |
|maneesh|erat  |man1.gmail.com    |23434556  |Palaka street|kerala  |767987 |India   |ker    |opencart0|testcase20 |

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
