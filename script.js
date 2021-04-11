require("chromedriver")

let wd= require("selenium-webdriver");
let obj={};
const fs=require("fs")

async function main(browser)
{
      await browser.get("https://careers.google.com/jobs/results/");
        await browser.wait(wd.until.elementLocated(wd.By.css(".gc-search-input__input.gc-traditional-input")));
        let roles=  await  browser.findElements(wd.By.css(".gc-search-input__input.gc-traditional-input"));
       await roles[0].sendKeys("SDE\n");
       
  await browser.wait(wd.until.elementLocated(wd.By.css(".gc-pop-over .gc-pop-over__trigger.gc-h-larger-tap-target.gc-h-unstyled-button")))
   let btns=await   browser.findElements(wd.By.css(".gc-pop-over .gc-pop-over__trigger.gc-h-larger-tap-target.gc-h-unstyled-button"));
        
          btns[1].click();

        await browser.wait(wd.until.elementLocated(wd.By.css(".gc-drop-down__options.gc-h-unstyled-list")));
          let k=await browser.findElement(wd.By.css(".gc-drop-down__options.gc-h-unstyled-list"));
         await  k.click();

            await browser.wait(wd.until.elementsLocated(wd.By.css(".gc-h-unstyled-list.gc-p-results__results-list li .gc-card"))) 
          let Atags=await  browser.findElements(wd.By.css(".gc-h-unstyled-list.gc-p-results__results-list li .gc-card"))
      
           await mid("google",Atags);
        
           
}

async function mid(value, Atags) 
{

  
  let arr={};
  for(let i in Atags)
  {
        let val=await Atags[i].getAttribute("href");
        
          arr[i]=val;
  } 
  obj[value]=arr;


}

async function main1(browser){

  await main(browser);
  await browser.get("https://www.amazon.jobs/en/");
  await browser.wait(wd.until.elementLocated(wd.By.css("#search_typeahead"))) ;
   let role=await browser.findElements(wd.By.css("#search_typeahead"));

  await browser.wait(wd.until.elementLocated(wd.By.css(".undefined.form-control.tt-input"))) ;
   let location=await browser.findElement(wd.By.css(".undefined.form-control.tt-input"));
  
   
   role[1].sendKeys("SDE")
    location.sendKeys("india\n");
    
    await browser.wait(wd.until.elementLocated(wd.By.css(".dropdown .btn")))
    let btn=await browser.findElement(wd.By.css(".dropdown .btn"));
    btn.click();
    await browser.findElement(wd.By.css("#recent")).click();
    await browser.wait(wd.until.elementLocated(wd.By.css(".job-tile-lists.col-12 a")))
    let Atags=await browser.findElements(wd.By.css(".job-tile-lists.col-12 a"))
   ///////////////////
      await mid("amazoan",Atags);


     await fs.promises.writeFile("abc.json",JSON.stringify(obj));
     await browser.get("http://localhost:4443/abc/") 
     await browser.wait(wd.until.elementLocated(wd.By.css(".form-control")))
   let name=await browser.findElements(wd.By.css(".form-control"))
   console.log(name.length)
    name[0].sendKeys("rupesh"); 
    name[1].sendKeys("rs88517561@gmail.com")
    name[2].sendKeys("to me");
    let data = await fs.promises.readFile("abc.json",'utf8')       
    name[3].sendKeys(`${data}`);
    
    await browser.findElement(wd.By.css(".btn.btn-contact")).click();

    
}

 main1(new wd.Builder().forBrowser('chrome').build()) 

 


