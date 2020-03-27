package com.Pages;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;


public class Registration  {
	
protected WebDriver wb;
	//To initiate driver
public void Opencart_Registration_browser(WebDriver driver)
{
	this.wb=driver;
}
//Registration task locators
	By MyAccount= By.xpath("//a[@class='dropdown-toggle']");
	By Register= By.linkText("Register");
	By First= By.id("input-firstname");
	By Last=By.id("input-lastname");
	By Email=By.id("input-email");
	By Telephone=By.id("input-telephone");
	By Fax=By.id("input-fax");
	By Company=By.id("input-company");
	By Add1=By.id("input-address-1");
	By Add2=By.id("input-address-1");
	By City=By.id("input-city");
	By Postcode=By.id("input-postcode");
	By Country=By.id("input-country");
	By Region=By.id("input-zone");
	By Password=By.id("input-password");
	By confirm=By.id("input-confirm");
	By yes=By.xpath("(//input[@name='newsletter'])[1]");
	By checkbox=By.xpath("//input[@type='checkbox']");
	By submit=By.xpath("//input[@type='submit']");

 
//To launch the browser
	public void web(String browserName) throws InterruptedException, IOException
	{
		//for chrome
		if(browserName.equals("chrome")){

			System.setProperty("webdriver.chrome.driver", "src\\test\\resources\\Driver\\chromedriver_80.exe");
			wb = new ChromeDriver();
		}
//for firefox
		else if(browserName.equals("firefox")){
			System.setProperty("webdriver.gecko.driver", "src\\test\\resources\\Driver\\geckodriver7.exe");
			wb = new FirefoxDriver();
		}
		wb.manage().window().maximize();
		wb.manage().deleteAllCookies();
		wb.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);
		wb.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}
	
	//To launch the browser
	public void Registrationbrowse()
	{
		wb.get("http://opencart.abstracta.us/");
		System.out.println(wb.getTitle());
	}
	
	//To give Registration details
	public void RegistrationDetails(String first,String last,String email,String telephone,String address,String city,String post,String country,String region,String password) throws InterruptedException
	{
		wb.findElement(MyAccount).click();
		wb.findElement(Register).click();
		wb.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		wb.findElement(By.xpath("//button[@id='details-button']")).click();
		wb.findElement(By.xpath("//a[@class='small-link']")).click();
		wb.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		wb.findElement(First).sendKeys(first);
		wb.findElement(Last).sendKeys(last);
		wb.findElement(Email).sendKeys(email);
		wb.findElement(Telephone).sendKeys(telephone);
		wb.findElement(Add1).sendKeys(address);
		wb.findElement(City).sendKeys(city);
		wb.findElement(Postcode).sendKeys(post);
		wb.findElement(Country).click();
		wb.findElement(Country).sendKeys(country);
		wb.findElement(Country).click();
		Thread.sleep(5000);//To wait for the page to load
		wb.findElement(Region).click();
		wb.findElement(Region).sendKeys(region);
		wb.findElement(Region).click();
		Thread.sleep(5000);
		wb.findElement(Password).sendKeys(password);
		wb.findElement(confirm).sendKeys(password);
		wb.findElement(checkbox).click();
		wb.findElement(yes).click();

	}
	
	//To take the screenshot and to close the browser
	public void submit(String source) throws InterruptedException, IOException
	{
		WebElement l5=wb.findElement(submit);
		Actions a=new Actions(wb);//To move the mouse using actions
		a.moveToElement(l5).click().perform();
		wb.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);//To wait for the webpage
		TakesScreenshot ts=(TakesScreenshot)wb;
		File f=ts.getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(f, new File("src\\test\\resources\\Screenshot\\"+source+".png"));
		Thread.sleep(3000);
		wb.close();
	}
	
}
