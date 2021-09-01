/**
 * JP BEHRENS - (jpbehrens.de@gmail.com)
 * Javascript Clock
 */

 const secondHand = document.querySelector('.sec-hand');
 const minsHand = document.querySelector('.min-hand');
 const hourHand = document.querySelector('.hour-hand');

 const digital = [document.querySelector('.dhour'), document.querySelector('.dmin'), document.querySelector('.dsec')]

 /**
  * 
  * @param {Number} number 
  * @returns the number with a leading Zearo
  */
 
 function leadingZero(number){
  return number <=9 ? `0${number}`: number;
 }

/**
 *  
 */
 function setDate() {
   const now = new Date();

   const startDegree = 90;
   const maxDegree = 360;

   const seconds = now.getSeconds();
   digital[2].innerHTML = leadingZero(seconds);
   const secondsDegrees = ((seconds / 60) * maxDegree) + startDegree;

   if(secondsDegrees === 90){
    secondHand.style.transition = `none`;
  }
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; 

   const mins = now.getMinutes();
   digital[1].innerHTML = leadingZero(mins);
   const minsDegrees = ((mins / 60) * maxDegree) + ((seconds/60)*6) + startDegree;
   minsHand.style.transform = `rotate(${minsDegrees}deg)`;

   const hour = now.getHours();
   digital[0].innerHTML = leadingZero(hour);
   const hourDegrees = ((hour / 12) * maxDegree) + ((mins/60)*30) + startDegree;
   hourHand.style.transform = `rotate(${hourDegrees}deg)`;
 }

 
 setInterval(setDate, 1000);
 setDate();

