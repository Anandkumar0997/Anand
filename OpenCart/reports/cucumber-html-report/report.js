$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Feature/OpencartTestFile.feature");
formatter.feature({
  "line": 2,
  "name": "OpenCart Website",
  "description": "",
  "id": "opencart-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "To Register in the opencart",
  "description": "",
  "id": "opencart-website;to-register-in-the-opencart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC_01_Register"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user Opens the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user opens the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user fiils the \"\u003cfirst\u003e\" and \"\u003clast\u003e\"and \"\u003cemail\u003e\"and\"\u003ctelephone\u003e\"and\"\u003caddress\u003e\"and\"\u003ccity\u003e\"and\"\u003cpost\u003e\"and\"\u003ccountry\u003e\"and\"\u003cregion\u003e\"and\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the user clicks on \"\u003cregister\u003e\" to create a new account",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "opencart-website;to-register-in-the-opencart;",
  "rows": [
    {
      "cells": [
        "first",
        "last",
        "email",
        "telephone",
        "address",
        "city",
        "post",
        "country",
        "region",
        "password",
        "register"
      ],
      "line": 11,
      "id": "opencart-website;to-register-in-the-opencart;;1"
    },
    {
      "cells": [
        "akil",
        "kumar",
        "akil@gmail.com",
        "23456789",
        "ganhi street",
        "chennai",
        "600002",
        "India",
        "Tamil",
        "password",
        "register1"
      ],
      "line": 12,
      "id": "opencart-website;to-register-in-the-opencart;;2"
    },
    {
      "cells": [
        "jothi",
        "kumar",
        "jk98@gmail.com",
        "23458796",
        "nehru street",
        "chennai",
        "600065",
        "India",
        "Tamil",
        "paswords",
        "register2"
      ],
      "line": 13,
      "id": "opencart-website;to-register-in-the-opencart;;3"
    },
    {
      "cells": [
        "mangal",
        "pandi",
        "mp2@gmail.com",
        "23905678",
        "bose street",
        "chennai",
        "600078",
        "India",
        "Tamil",
        "passwopd",
        "register3"
      ],
      "line": 14,
      "id": "opencart-website;to-register-in-the-opencart;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "To Register in the opencart",
  "description": "",
  "id": "opencart-website;to-register-in-the-opencart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 3,
      "name": "@TC_01_Register"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user Opens the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user opens the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user fiils the \"akil\" and \"kumar\"and \"akil@gmail.com\"and\"23456789\"and\"ganhi street\"and\"chennai\"and\"600002\"and\"India\"and\"Tamil\"and\"password\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the user clicks on \"register1\" to create a new account",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.the_user_Opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 13007584091,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.the_user_opens_the_registration_webpage()"
});
formatter.result({
  "duration": 14206359869,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "akil",
      "offset": 20
    },
    {
      "val": "kumar",
      "offset": 31
    },
    {
      "val": "akil@gmail.com",
      "offset": 42
    },
    {
      "val": "23456789",
      "offset": 61
    },
    {
      "val": "ganhi street",
      "offset": 74
    },
    {
      "val": "chennai",
      "offset": 91
    },
    {
      "val": "600002",
      "offset": 103
    },
    {
      "val": "India",
      "offset": 114
    },
    {
      "val": "Tamil",
      "offset": 124
    },
    {
      "val": "password",
      "offset": 134
    }
  ],
  "location": "RegistrationSteps.the_user_fiils_the_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 90550187398,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register1",
      "offset": 20
    }
  ],
  "location": "RegistrationSteps.the_user_clicks_on_to_create_a_new_account(String)"
});
formatter.result({
  "duration": 13278843758,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "To Register in the opencart",
  "description": "",
  "id": "opencart-website;to-register-in-the-opencart;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 3,
      "name": "@TC_01_Register"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user Opens the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user opens the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user fiils the \"jothi\" and \"kumar\"and \"jk98@gmail.com\"and\"23458796\"and\"nehru street\"and\"chennai\"and\"600065\"and\"India\"and\"Tamil\"and\"paswords\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the user clicks on \"register2\" to create a new account",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.the_user_Opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 3750551184,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.the_user_opens_the_registration_webpage()"
});
formatter.result({
  "duration": 4483992562,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jothi",
      "offset": 20
    },
    {
      "val": "kumar",
      "offset": 32
    },
    {
      "val": "jk98@gmail.com",
      "offset": 43
    },
    {
      "val": "23458796",
      "offset": 62
    },
    {
      "val": "nehru street",
      "offset": 75
    },
    {
      "val": "chennai",
      "offset": 92
    },
    {
      "val": "600065",
      "offset": 104
    },
    {
      "val": "India",
      "offset": 115
    },
    {
      "val": "Tamil",
      "offset": 125
    },
    {
      "val": "paswords",
      "offset": 135
    }
  ],
  "location": "RegistrationSteps.the_user_fiils_the_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 24839340146,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register2",
      "offset": 20
    }
  ],
  "location": "RegistrationSteps.the_user_clicks_on_to_create_a_new_account(String)"
});
formatter.result({
  "duration": 7393023121,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "To Register in the opencart",
  "description": "",
  "id": "opencart-website;to-register-in-the-opencart;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 3,
      "name": "@TC_01_Register"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user Opens the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user opens the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user fiils the \"mangal\" and \"pandi\"and \"mp2@gmail.com\"and\"23905678\"and\"bose street\"and\"chennai\"and\"600078\"and\"India\"and\"Tamil\"and\"passwopd\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the user clicks on \"register3\" to create a new account",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.the_user_Opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 3973466644,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.the_user_opens_the_registration_webpage()"
});
formatter.result({
  "duration": 5172240556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mangal",
      "offset": 20
    },
    {
      "val": "pandi",
      "offset": 33
    },
    {
      "val": "mp2@gmail.com",
      "offset": 44
    },
    {
      "val": "23905678",
      "offset": 62
    },
    {
      "val": "bose street",
      "offset": 75
    },
    {
      "val": "chennai",
      "offset": 91
    },
    {
      "val": "600078",
      "offset": 103
    },
    {
      "val": "India",
      "offset": 114
    },
    {
      "val": "Tamil",
      "offset": 124
    },
    {
      "val": "passwopd",
      "offset": 134
    }
  ],
  "location": "RegistrationSteps.the_user_fiils_the_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 23521620515,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register3",
      "offset": 20
    }
  ],
  "location": "RegistrationSteps.the_user_clicks_on_to_create_a_new_account(String)"
});
formatter.result({
  "duration": 7258239308,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "To Login in the Opencart",
  "description": "",
  "id": "opencart-website;to-login-in-the-opencart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@TC_02_LoginDetails"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "the user opens the opencart webpage",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the user login using \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "click on the \"\u003clogin\u003e\" button user nagivate to the next page",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "opencart-website;to-login-in-the-opencart;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "login"
      ],
      "line": 24,
      "id": "opencart-website;to-login-in-the-opencart;;1"
    },
    {
      "cells": [
        "akil@gmail.com",
        "password",
        "login1"
      ],
      "line": 25,
      "id": "opencart-website;to-login-in-the-opencart;;2"
    },
    {
      "cells": [
        "jk98@gmail.com",
        "paswords",
        "login2"
      ],
      "line": 26,
      "id": "opencart-website;to-login-in-the-opencart;;3"
    },
    {
      "cells": [
        "mp2@gmail.com",
        "passwopd",
        "login3"
      ],
      "line": 27,
      "id": "opencart-website;to-login-in-the-opencart;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "To Login in the Opencart",
  "description": "",
  "id": "opencart-website;to-login-in-the-opencart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 16,
      "name": "@TC_02_LoginDetails"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "the user opens the opencart webpage",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the user login using \"akil@gmail.com\" and \"password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "click on the \"login1\" button user nagivate to the next page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 3697368777,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.the_user_opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 4297106318,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "akil@gmail.com",
      "offset": 22
    },
    {
      "val": "password",
      "offset": 43
    }
  ],
  "location": "LoginPageSteps.the_user_login_using_and(String,String)"
});
formatter.result({
  "duration": 8377753706,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login1",
      "offset": 14
    }
  ],
  "location": "LoginPageSteps.click_on_the_button_user_nagivate_to_the_next_page(String)"
});
formatter.result({
  "duration": 6340861909,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "To Login in the Opencart",
  "description": "",
  "id": "opencart-website;to-login-in-the-opencart;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 16,
      "name": "@TC_02_LoginDetails"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "the user opens the opencart webpage",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the user login using \"jk98@gmail.com\" and \"paswords\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "click on the \"login2\" button user nagivate to the next page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 3811487960,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.the_user_opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 3041097871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jk98@gmail.com",
      "offset": 22
    },
    {
      "val": "paswords",
      "offset": 43
    }
  ],
  "location": "LoginPageSteps.the_user_login_using_and(String,String)"
});
formatter.result({
  "duration": 7937043226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login2",
      "offset": 14
    }
  ],
  "location": "LoginPageSteps.click_on_the_button_user_nagivate_to_the_next_page(String)"
});
formatter.result({
  "duration": 5286616321,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "To Login in the Opencart",
  "description": "",
  "id": "opencart-website;to-login-in-the-opencart;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 16,
      "name": "@TC_02_LoginDetails"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "the user opens the opencart webpage",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the user login using \"mp2@gmail.com\" and \"passwopd\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "click on the \"login3\" button user nagivate to the next page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 4115946045,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.the_user_opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 5713216668,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mp2@gmail.com",
      "offset": 22
    },
    {
      "val": "passwopd",
      "offset": 42
    }
  ],
  "location": "LoginPageSteps.the_user_login_using_and(String,String)"
});
formatter.result({
  "duration": 6754754461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login3",
      "offset": 14
    }
  ],
  "location": "LoginPageSteps.click_on_the_button_user_nagivate_to_the_next_page(String)"
});
formatter.result({
  "duration": 5372857658,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "To Login with invalid details",
  "description": "",
  "id": "opencart-website;to-login-with-invalid-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@TC_03_InvalidDetails"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "the user launch the app",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "the user opens the login page",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "the user giving invalid details \"\u003cuser\u003e\" and \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "click on \"\u003clogin\u003e\" appropriate error message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "opencart-website;to-login-with-invalid-details;",
  "rows": [
    {
      "cells": [
        "user",
        "pass",
        "login"
      ],
      "line": 37,
      "id": "opencart-website;to-login-with-invalid-details;;1"
    },
    {
      "cells": [
        "ak",
        "1234",
        "testcase1"
      ],
      "line": 38,
      "id": "opencart-website;to-login-with-invalid-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 38,
  "name": "To Login with invalid details",
  "description": "",
  "id": "opencart-website;to-login-with-invalid-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 29,
      "name": "@TC_03_InvalidDetails"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "the user launch the app",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "the user opens the login page",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "the user giving invalid details \"ak\" and \"1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "click on \"testcase1\" appropriate error message is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidDetailsLogin.the_user_launch_the_app()"
});
formatter.result({
  "duration": 3818348491,
  "status": "passed"
});
formatter.match({
  "location": "InvalidDetailsLogin.the_user_opens_the_login_page()"
});
formatter.result({
  "duration": 3798741443,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ak",
      "offset": 33
    },
    {
      "val": "1234",
      "offset": 42
    }
  ],
  "location": "InvalidDetailsLogin.the_user_giving_invalid_details_and(String,String)"
});
formatter.result({
  "duration": 28005633603,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcase1",
      "offset": 10
    }
  ],
  "location": "InvalidDetailsLogin.click_on_appropriate_error_message_is_displayed(String)"
});
formatter.result({
  "duration": 11102660240,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 41,
  "name": "To Register with invalid email details",
  "description": "",
  "id": "opencart-website;to-register-with-invalid-email-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@TC_04_InvalidEmail"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "the user open the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "the user open the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "the user gives the \"\u003cfirst\u003e\" and \"\u003clast\u003e\"and \"\u003cemail\u003e\"and\"\u003ctelephone\u003e\"and\"\u003caddress\u003e\"and\"\u003ccity\u003e\"and\"\u003cpost\u003e\"and\"\u003ccountry\u003e\"and\"\u003cregion\u003e\"and\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "the user click on \"\u003cregister\u003e\" to create a new account",
  "keyword": "Then "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "opencart-website;to-register-with-invalid-email-details;",
  "rows": [
    {
      "cells": [
        "first",
        "last",
        "email",
        "telephone",
        "address",
        "city",
        "post",
        "country",
        "region",
        "password",
        "register"
      ],
      "line": 48,
      "id": "opencart-website;to-register-with-invalid-email-details;;1"
    },
    {
      "cells": [
        "akil",
        "kumar",
        "akil.gmail.com",
        "23456789",
        "ganhi street",
        "chennai",
        "600002",
        "India",
        "Tamil",
        "password",
        "testcase2"
      ],
      "line": 49,
      "id": "opencart-website;to-register-with-invalid-email-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 49,
  "name": "To Register with invalid email details",
  "description": "",
  "id": "opencart-website;to-register-with-invalid-email-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 40,
      "name": "@TC_04_InvalidEmail"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "the user open the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "the user open the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "the user gives the \"akil\" and \"kumar\"and \"akil.gmail.com\"and\"23456789\"and\"ganhi street\"and\"chennai\"and\"600002\"and\"India\"and\"Tamil\"and\"password\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "the user click on \"testcase2\" to create a new account",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterInvalidEmail.the_user_open_the_opencart_webpage()"
});
formatter.result({
  "duration": 3872280117,
  "status": "passed"
});
formatter.match({
  "location": "RegisterInvalidEmail.the_user_open_the_registration_webpage()"
});
formatter.result({
  "duration": 3235113357,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "akil",
      "offset": 20
    },
    {
      "val": "kumar",
      "offset": 31
    },
    {
      "val": "akil.gmail.com",
      "offset": 42
    },
    {
      "val": "23456789",
      "offset": 61
    },
    {
      "val": "ganhi street",
      "offset": 74
    },
    {
      "val": "chennai",
      "offset": 91
    },
    {
      "val": "600002",
      "offset": 103
    },
    {
      "val": "India",
      "offset": 114
    },
    {
      "val": "Tamil",
      "offset": 124
    },
    {
      "val": "password",
      "offset": 134
    }
  ],
  "location": "RegisterInvalidEmail.the_user_gives_the_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 22999955215,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcase2",
      "offset": 19
    }
  ],
  "location": "RegisterInvalidEmail.the_user_click_on_to_create_a_new_account(String)"
});
formatter.result({
  "duration": 5382907267,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "To Display all desktops and to add a desktop",
  "description": "",
  "id": "opencart-website;to-display-all-desktops-and-to-add-a-desktop",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 51,
      "name": "@TC_05_DesktopDisplay"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "user open the opencart",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "the user clicks on desktop tab",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "the user clicks on all desktop",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "the user adds to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopPageSteps.user_open_the_opencart()"
});
formatter.result({
  "duration": 3917547675,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.the_user_clicks_on_desktop_tab()"
});
formatter.result({
  "duration": 3108124499,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.the_user_clicks_on_all_desktop()"
});
formatter.result({
  "duration": 9628770469,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.the_user_adds_to_cart()"
});
formatter.result({
  "duration": 6345757024,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "To Choose the product and add to cart",
  "description": "",
  "id": "opencart-website;to-choose-the-product-and-add-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 58,
      "name": "@TC_06_AddtoCart"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "the user launch the web",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "the user launches the application",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "the user search for the products",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "click on add to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "addToCartstepDefinition.the_user_launch_the_web()"
});
formatter.result({
  "duration": 4098786321,
  "status": "passed"
});
formatter.match({
  "location": "addToCartstepDefinition.the_user_launches_the_application()"
});
formatter.result({
  "duration": 3019762862,
  "status": "passed"
});
formatter.match({
  "location": "addToCartstepDefinition.the_user_search_for_the_products()"
});
formatter.result({
  "duration": 23081172681,
  "status": "passed"
});
formatter.match({
  "location": "addToCartstepDefinition.click_on_add_to_cart()"
});
formatter.result({
  "duration": 2472911027,
  "status": "passed"
});
});