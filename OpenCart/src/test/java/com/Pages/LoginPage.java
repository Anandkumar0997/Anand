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


public class LoginPage {

	protected WebDriver wb;//To initiate driver here
	public void Opencart_Login_browser(WebDriver driver)
	{
		this.wb=driver;
	}
	//Login page locators

	By MyAccount= By.xpath("//a[@class='dropdown-toggle']");
	By Login=By.xpath("//*[@id='top-links']/ul/li[2]/ul/li[2]/a");
	By Email=By.name("email");
	By Password=By.name("password");
	By Submit=By.xpath("//*[@type='submit']");

	//To open the chrome browser

	public void url(String browserName) throws InterruptedException, IOException
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

	//To open the opencart webpage

	public void Login()
	{
		wb.get("http://opencart.abstracta.us/");
		System.out.println(wb.getTitle());
	}

	public void LoginDetails(String user, String pass) throws InterruptedException
	{
		wb.findElement(MyAccount).click();
		wb.findElement(Login).click();
		wb.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		wb.findElement(By.xpath("//button[@id='details-button']")).click();
		wb.findElement(By.xpath("//a[@class='small-link']")).click();
		wb.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		wb.findElement(Email).sendKeys(user);
		wb.findElement(Password).sendKeys(pass);
		wb.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	//To close the browser and to take the screenshot

	public void submit(String source) throws IOException, InterruptedException
	{
		WebElement l5=wb.findElement(Submit);
		Actions a=new Actions(wb);
		a.moveToElement(l5).click().perform();
		wb.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		TakesScreenshot ts=(TakesScreenshot)wb;
		File f=ts.getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(f, new File("src\\test\\resources\\Screenshot\\"+source+".png"));
		Thread.sleep(3000);
		wb.close();
	}
}
