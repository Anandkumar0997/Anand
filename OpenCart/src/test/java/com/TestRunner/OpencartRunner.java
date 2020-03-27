package com.TestRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)//To run with cucumber class
@CucumberOptions(
		features = "src\\main\\resources\\Feature\\OpencartTestFile.feature",//feature file location
		plugin = {"pretty", "html:reports/cucumber-html-report","json:reports/cucumber-html-report/jsonreport","com.cucumber.listener.ExtentCucumberFormatter:reports/Extentreports/Extentreport.html"},//To generate reports
		tags= {"@TC_01_Register,@TC_02_LoginDetails,@TC_03_InvalidDetails, @TC_04_InvalidEmail, @TC_05_DesktopDisplay,@TC_06_AddtoCart"},//To refer testcases
		glue = {"com.stepDefinition"},//name of step definition
		monochrome = true
		)
public class OpencartRunner {
	
}
