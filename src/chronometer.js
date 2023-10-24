class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    if (!this.intervalId) {
      let secondsElapsed = 0;
      this.intervalId = setInterval(()=> {
        this.currentTime++;
        secondsElapsed++;
        if (printTimeCallback){
          printTimeCallback();
        }
        if(secondsElapsed === 3) {
          this.currentTime = 3;
          clearInterval(this.intervalId);
          this.intervalId = null;
        }
      }, 1000);
    }
    const myChronometer = new Chronometer();
    myChronometer.start(()=>{
      console.log('Current Time: ${myChronometer.currentTime}');
    });
  }
  
  
  

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  
    
const myChronometer = new Chronometer();
myChronometer.currentTime = 135; //randome time of 2 minutes and 15 sec.

const minutes = myChronometer.getMinutes();
console.log('Minutes: ${minutes}');
  }





  getSeconds() {
  return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // Serchinged online how to value (number) and return it as a string with two digits broth me this .padStart method.
    return String(value).padStart(2,'0');
    
    const myChronometer = new Chronometer();
    myChronometer.currentTime = 75; ////randome time of 1 minute and 15 sec.
  
  const seconds = myChronometer.getSeconds();
  console.log('Seconds: ${seconds}');
  }
 


  stop() {
   if (this.intervalId) {
    clearInterval(this.intervalId)
    this.intervalId = null;
   }
   }
  

  reset() {
    this.currentTime = 0;
  }
    


  split() {
const minutes = this.computeTwoDigitNumber(this.getMinutes());
const seonds = this.computeTwoDigitNumber(this.getSeconds());
return '${minutes}:${seconds}'
  }}