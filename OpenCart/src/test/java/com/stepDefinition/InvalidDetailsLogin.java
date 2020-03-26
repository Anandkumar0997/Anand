package com.stepDefinition;



import com.Pages.LoginPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class InvalidDetailsLogin {
	LoginPage l=new LoginPage();

	@Given("^the user launch the app$")
	public void the_user_launch_the_app() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		l.url("chrome");
	}

	@When("^the user opens the login page$")
	public void the_user_opens_the_login_page() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		l.Login();
	}

	@Then("^the user giving invalid details \"([^\"]*)\" and \"([^\"]*)\"$")
	public void the_user_giving_invalid_details_and(String username, String password) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		l.LoginDetails(username, password);
	}

	@Then("^click on \"([^\"]*)\" appropriate error message is displayed$")
	public void click_on_appropriate_error_message_is_displayed(String source) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		l.submit(source);
		System.out.println("Invalid Details found");
	}
}