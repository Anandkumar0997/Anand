package com.TestRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src\\main\\resources\\Feature\\OpencartTestFile.feature",
		plugin = {"pretty", "html:reports/cucumber-html-report","json:reports/cucumber-html-report/jsonreport","com.cucumber.listener.ExtentCucumberFormatter:reports/Extentreports/Extentreport.html"},
		tags= {"@TC_01_Register,@TC_02_LoginDetails,@TC_03_InvalidDetails, @TC_04_InvalidEmail, @TC_05_DesktopDisplay,@TC_06_AddtoCart"},
		glue = {"com.stepDefinition"},
		monochrome = true
		)
public class OpencartRunner {
	
}