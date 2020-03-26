package com.stepDefinition;


import com.Pages.DesktopPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DesktopPageSteps  {
	DesktopPage dp=new DesktopPage();


	@Given("^user open the opencart$")
	public void user_open_the_opencart() throws Throwable {
		dp.Opencart_Desktop_browser(null);
		dp.url("chrome");
	}

	@When("^the user clicks on desktop tab$")
	public void the_user_clicks_on_desktop_tab() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		dp.website();
	}

	@Then("^the user clicks on all desktop$")
	public void the_user_clicks_on_all_desktop() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		dp.addtocart();
	}

	@Then("^the user adds to cart$")
	public void the_user_adds_to_cart() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		dp.close();
	}

}
