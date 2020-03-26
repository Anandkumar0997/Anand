package com.stepDefinition;



import com.Pages.addToCart;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class addToCartstepDefinition {
	
	addToCart cart=new addToCart();
	
	@Given("^the user launch the web$")
	public void the_user_launch_the_web() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		cart.Opencart_addTocart_browser(null);
		  cart.url("chrome");
	}

	@When("^the user launches the application$")
	public void the_user_launches_the_application() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		 cart.homepage();
	}

	@Then("^the user search for the products$")
	public void the_user_search_for_the_products() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		 cart.actions();
	}

	@Then("^click on add to cart$")
	public void click_on_add_to_cart() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    cart.addcart();
	}
}
