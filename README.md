# POCKET-MONEY-MANAGER-APPLICATION
# 

TABLE OF CONTENT
	PROBLEM STATEMENT
	REQUIREMENTS
	TECHNOLOGIES USED
	PROJECT DESCRIPTION
	SCOPE
	CHALLENGES FACED
	CONCLUSION.

GITHUB LINK OF PROJECT-https://github.com/vishwakant07/POCKET-MONEY-MANAGER-APPLICATION
WORD DOCUMENT LINK OF PROJECT-https://github.com/vishwakant07/WORD-FILE-OF-POCKET-MONEY-MANAGER-APP/blob/main/POCKET%20MONEY%20MANAGER%20APP.docx

PROBLEM STATEMENT
A lot of us usually have problem in saving money. This is where We receive our pocket money/salaries/allowances and we spent it without paying attention on it. It is often very hard to keep savings of all of us.
Everyone faces a problem of money management as it happens many time that our pockets are empty at the specific time when we need money for something very important.
Why is this a problem that needs to be addressed?
Everyone who receives pocket money wants to manage money. In the current society, schools don’t teach every kid accounting or explain to them how money functions, which makes it extremely difficult to manage their money, let alone strategically save it. A money manager is a necessity in the world where there is no way of managing money.
Idea to solve the problem

So, we have idea to set a target of spending money and when user reached to limit then this app will notify user and give remainder to stop spending money so in this way user can save money and later on use this money according to his/her requirements as we are taking part in Code Fellas so in user can reserve some specific amount of money for these types of events.

CUSTOMERS ADDRESSING
College Student
Age Group: 18 to 22 years old
1.	Does not have a lot of money
2.	Want to buy things by saving some money
3.	Spends more on weekends than weekdays
4.	They are lazy when it comes to logging their expenses every time they make one.
5.	Faced empty pockets at the time of requirement.

 

Age Group: 23 to 30 years old
1.	Saving for retirement/big events
2.	Just started earning by themselves, want to be responsible when it comes to expenses
3.	Spends more on weekends
4.	Might get too busy to log every expense they make.
5.	Most users would be from tier 1 and tier 2 cities.
6.	As they are just starting out, they probably live in a shared space.


Used Case
The major purpose of this app is to be able to notify user when user reached to the limit set by the user itself. Every time the user opens the app, it ask question to user to set target of spending money and it will notify user by becoming red.


REQUIREMENTS

Hardware
	We recommend at least a 15 MBit/sec Internet connection for your school.
	The smallest screen size we support is 1024 x 728 px.
	You will need a desktop or laptop computer with a mouse (or touchpad) and keyboard for our middle and high school-level courses: CS Discoveries, CS Principles or App Lab. Most tablets and mobile devices are supported for it.
	All other content, such as K-5 courses (Computer Science Fundamentals) and Hour of Code activities are compatible on iPads and Chromebooks in addition to all other modern tablets and laptop or desktop computers.

SOFTWARE
Browser	Operating System
Chrome 33.x and higher	Windows 7 and higher macOS 10.6 and higher Android 4.1.2 and higher Chromeo’s (Chromebooks)
Safari 7.0.x and higher	macOS 10.6 and higher iOS 7.x and higher Internet Explorer 11 and higher	Windows 7 and higher macOS 10.6 and higher Microsoft Edge	Windows 10 and higher
Firefox 25.x and higher	Windows 7 and higher


 
TECHNOLOGIES USED

	App lab/applab.js` - This file contains the app lab library, which has all the JavaScript that app lab uses to run your app.
	App lab/applab.css` - This file contains some default CSS styling for your app.
	index.html` - This is the html file that you designed in applab using the Design tab. It contains all the buttons, text inputs, and other controls for your app. Go here to add additional controls to your app.
	style.css` - This file defines the custom styling for each control in you app that you specified under the Design tab. Go here to change the colours, positions, dimensions, and other properties of your app's controls.
	code.js` - This file has all the code you wrote for your app. Go here to add new behaviour to your app.
	assets` - This is a directory with all the asset files (pictures and sounds) that you uploaded in applab.


PROJECT DESCRIPTION
We use app lab to create this application. Our driving purpose that is how it help user is to manage pocket money a very common problem faced by every student during his graduation.
So basically, we have idea to set a target of spending money and when user reached to limit then this app will notify user by turning its background color to red.
So, in this app in design section, we used images, labels, buttons and background screen. Firstly, we created three global variables 1st is x to ask user ‘how much money user have’ then 2nd variable is pocket money and give it the value of x and 3rd one is saving target to set a target of saving money by user, then we create 5 buttons and named them charity, stationary, food, recharge and last one is rent. Then we set the price for each button to be deducted on clicking it from pocket money and we created a function I which we use if statement to sizing up that if saving target >pocket money then background color will be changed to red.
Then we create a new button to start for next month. If user click on it then it will ask how much money do you want to add and it will take user value and add this to variable of pocket money and again it will ask question of setting target to user and again whole code will run.

 
SCOPE
Features & Solutions
i.	Firstly, it asks user that how much money user have so user can willing put any amount of money in his/her wallet.
ii.	It allows user to set target of spending money for a specific month.
iii.	For next month it allows you to set new target for saving money.
iv.	Money of previous month will be automatically added to new money in next month.
CHALLENGES FACED
	since we have no background of C.S.  in our previous studies is biggest challenge faced by us.
	We got some error in our project regarding global and local variables declaration and implementation at initial phase.
	for each and every task we did more research as compared to CS student to do it correctly and we give our best in it.
	CONCLUSION
	Holding hold of our well-deserved resources is imperative. With the pocket money manager application, you can find opportunities to grasp your day by day effectively. Using this application allows you to save your money in a specific month and could be used for specific purpose.

Thankyou.

OUR CODE
	var x = promptNum("How much money do you have?");
	var pocketMoney = x;
	setNumber("wallet", pocketMoney);
	var savingsTarget = promptNum("How much money you want to save this month?");
	function myFunction() {  
	if (pocketMoney < savingsTarget) {   
	 setProperty("screen1", "background-color", "#e85b0e");
	     }
	 }
	onEvent("charity", "click", function( ) { 
	pocketMoney = pocketMoney - 20;
	setNumber("wallet", pocketMoney);  
	myFunction();
	} );
	onEvent("stationary", "click", function( ) {  
	pocketMoney = pocketMoney - 50;  
	setNumber("wallet", pocketMoney);  
	myFunction();
	} );
	onEvent("food", "click", function( ) {  
	pocketMoney = pocketMoney - 80;  
	setNumber("wallet", pocketMoney); 
	 myFunction();
	} );
	onEvent("recharge", "click", function( ) { 
	pocketMoney = pocketMoney - 100; 
	 setNumber("wallet", pocketMoney);  
	myFunction();
	} );
	onEvent ("rent", "click", function( ) {  
	pocketMoney = pocketMoney - 50;  
	setNumber("wallet", pocketMoney);  
	myFunction();
	} );
	onEvent("new", "click", function( ) {  
	x = promptNum("How much more money do you want to add ?"); 
	 pocketMoney = pocketMoney + x;  
	setNumber("wallet", pocketMoney);  
	setProperty("screen1", "background-color", "rgb(239, 231, 231)");  
	savingsTarget = promptNum("How much money you want to save this month?");
	} );



  



