package com.Pages;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


public class DesktopPage {

 protected WebDriver wb;
	//To Driver is initiated here
	public void Opencart_Desktop_browser(WebDriver driver)
	{
		this.wb=driver;
	}
	//Desktop task locators
	By desktop=By.xpath("(//a[@class='dropdown-toggle'])[2]");
	By Alldesktop=By.xpath("//*[@id=\"menu\"]/div[2]/ul/li[1]/div/a");
	By Addtocart=By.xpath("(//button[@type='button'])[9]");
	
	//To launch the browser
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
	//To launch the opencart
	public void website()
	{
		wb.get("http://opencart.abstracta.us/");
		System.out.println(wb.getTitle());
	}
	//To add the product
	public void addtocart() throws InterruptedException
	{
		wb.findElement(desktop).click();
		Thread.sleep(3000);
		wb.findElement(Alldesktop).click();
		Thread.sleep(3000);
		wb.findElement(Addtocart).click();
	}
	//To close the browser
	public void close() throws IOException
	{
		TakesScreenshot ts=(TakesScreenshot)wb;
		File f=ts.getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(f, new File("src\\test\\resources\\Screenshot\\desktop.png"));
		wb.close();
	}
}
