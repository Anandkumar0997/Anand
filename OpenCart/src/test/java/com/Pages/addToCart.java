package com.Pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;

public class addToCart {
	
	protected WebDriver wb;
	public void Opencart_addTocart_browser(WebDriver driver)
	{
		this.wb=driver;
	}
            //Addtocart task locators
	By Myaccount=By.xpath("//*[@id=\"top-links\"]/ul/li[2]/a/span[1]");
	By login=By.xpath("//*[@id=\"top-links\"]/ul/li[2]/ul/li[2]/a");
	By Email=By.id("input-email");
	By password=By.id("input-password");
	By loginbtn=By.xpath("//*[@id=\"content\"]/div/div[2]/div/form/input");
	By phones=By.xpath("//*[@id=\"menu\"]/div[2]/ul/li[6]/a");
	By addtocart=By.xpath("//*[@id=\"content\"]/div[2]/div[1]/div/div[2]/div[2]/button[1]/span");
	By cart=By.xpath("//*[@id=\"top-links\"]/ul/li[4]/a/span");
	By item=By.xpath("//*[@id=\"content\"]/form/div/table/tbody/tr/td[2]/a");
	By product=By.xpath("//*[@id=\"content\"]/div[2]/div[1]/div/div[2]/div[1]/h4/a");
	By Quantity=By.xpath("//*[@id=\"content\"]/form/div/table/tbody/tr/td[4]/div/input");
	By button=By.xpath("//*[@id=\"content\"]/form/div/table/tbody/tr/td[4]/div/span/button[1]");

	// url for launch the chrome
	public void url(String browserName) { 
		

		if(browserName.equals("chrome")){

			System.setProperty("webdriver.chrome.driver", "src\\test\\resources\\Driver\\chromedriver_80.exe");
			wb = new ChromeDriver();
		}

		else if(browserName.equals("firefox")){
			System.setProperty("webdriver.gecko.driver", "src\\test\\resources\\Driver\\geckodriver7.exe");
			wb = new FirefoxDriver();
		}
		wb.manage().window().maximize();
		wb.manage().deleteAllCookies();
		wb.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);
		wb.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}
	
	 //using webdriver and to launch the opencart
	public void homepage()
	{
		wb.get("http://opencart.abstracta.us/");
		System.out.println(wb.getTitle());
	}
	//To add the product to the cart
	public void actions() throws InterruptedException 
	{
		wb.findElement(Myaccount).click();
		WebElement link =wb.findElement(Myaccount); 
		WebElement link2=wb.findElement(login);
		Actions action = new Actions(wb);
		action.moveToElement(link);
		action.moveToElement(link2).click().perform();
		wb.findElement(By.xpath("//button[@id='details-button']")).click();
		wb.findElement(By.xpath("//a[@class='small-link']")).click();
		wb.findElement(Email).sendKeys("akil@gmail.com");
		wb.findElement(password).sendKeys("password");
		Thread.sleep(5000);
		wb.findElement(loginbtn).click();
		Thread.sleep(5000);
		wb.findElement(phones).click();
		JavascriptExecutor js =(JavascriptExecutor) wb ;
		js.executeScript("window.scrollBy(0,5000)");

	}

//To finish and close the browser
	public void addcart() throws InterruptedException {
		wb.findElement(addtocart).click();
		Thread.sleep(2000);
		wb.close();
	}


}