package com.stepDefinition;


import com.Pages.LoginPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginPageSteps {
	LoginPage lp=new LoginPage();

	@Given("^the user launch the chrome application$")
	public void the_user_launch_the_chrome_application() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		lp.url("chrome");
	}

	@When("^the user opens the opencart webpage$")
	public void the_user_opens_the_opencart_webpage() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		lp.Login();
	}

	@Then("^the user login using \"([^\"]*)\" and \"([^\"]*)\"$")
	public void the_user_login_using_and(String username, String password) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		lp.LoginDetails(username,password);
	}

	@Then("^click on the \"([^\"]*)\" button user nagivate to the next page$")
	public void click_on_the_button_user_nagivate_to_the_next_page(String source) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		lp.submit(source);
	}

}
