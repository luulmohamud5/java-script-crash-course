
let balance = 1;
let myPhone = "612345678";
let correctPin = "1234";
let FEE_RATE = 0.01;     
let MAX_SEND = 500;       

let shortcode = prompt("Fadlan geli code-ka (*127#)");

if (shortcode === "*127#") {
    let loggedIn = false;

    let pin1 = prompt("Geli PIN-kaaga");

    if (pin1 === correctPin) {
        loggedIn = true;
    }
    else {
     let pin2 = prompt("PIN khaldan. 2 isku day ayaa kuu hadhay.\nGeli PIN-kaaga");

     if (pin2 === correctPin) {
            loggedIn = true;
        }
     else {
            let pin3 = prompt("PIN khaldan. 1 isku day ayaa kuu hadhay.\nGeli PIN-kaaga");

            if (pin3 === correctPin) {
                loggedIn = true;
            }
            else {
                console.log("PIN khaldan 3 jeer. Akoonka waa la xiray.");
            }
        }
    }

    if (loggedIn) {

        let main = Number(prompt(
            "ANFAC\n" +
            "1. Adeegga Anfac\n" +
            "2. Dir lacag\n" +
            "3. Hubi haraaga"
        ));
        if (main === 1) {

            let option = Number(prompt(
                "ANFAC\n" +
                "1. ANFAC Gudaha\n" +
                "2. ANFAC Gudaha iyo Dibadda\n" +
                "3. Anfac Dibadda 31 Dal\n" +
                "4. ANFAC SMS\n" +
                "0. Back"
            ));

            let packName = "";  
            let price = 0;      

            if (option === 1) {

                let pack = Number(prompt(
                    "ANFAC Gudaha\n" +
                    "1. $0.25 - 50 daqiiqo\n" +
                    "2. $0.50 - 120 daqiiqo\n" +
                    "3. $1.00 - 300 daqiiqo\n" +
                    "0. Back"
                ));

                if (pack === 1) {
                    packName = "ANFAC Gudaha 50 daqiiqo";
                    price = 0.25;
                }
                else if (pack === 2) {
                    packName = "ANFAC Gudaha 120 daqiiqo";
                    price = 0.50;
                }
                else if (pack === 3) {
                    packName = "ANFAC Gudaha 300 daqiiqo";
                    price = 1.00;
                }
                else if (pack === 0) {
                    console.log("Back");
                }
                else {
                    console.log("Doorasho khaldan");
                }
            }

            else if (option === 2) {

                let pack = Number(prompt(
                    "ANFAC Gudaha iyo Dibadda\n" +
                    "1. $0.50 - 30 daqiiqo\n" +
                    "2. $1.00 - 80 daqiiqo\n" +
                    "3. $2.00 - 200 daqiiqo\n" +
                    "0. Back"
                ));

                if (pack === 1) {
                    packName = "ANFAC Gudaha iyo Dibadda 30 daqiiqo";
                    price = 0.50;
                }
                else if (pack === 2) {
                    packName = "ANFAC Gudaha iyo Dibadda 80 daqiiqo";
                    price = 1.00;
                }
                else if (pack === 3) {
                    packName = "ANFAC Gudaha iyo Dibadda 200 daqiiqo";
                    price = 2.00;
                }
                else if (pack === 0) {
                    console.log("Back");
                }
                else {
                    console.log("Doorasho khaldan");
                }
            }

            else if (option === 3) {

                let pack = Number(prompt(
                    "Anfac Dibadda 31 Dal\n" +
                    "1. $1.00 - 20 daqiiqo\n" +
                    "2. $2.00 - 50 daqiiqo\n" +
                    "3. $5.00 - 150 daqiiqo\n" +
                    "0. Back"
                ));

                if (pack === 1) {
                    packName = "Anfac Dibadda 31 Dal 20 daqiiqo";
                    price = 1.00;
                }
                else if (pack === 2) {
                    packName = "Anfac Dibadda 31 Dal 50 daqiiqo";
                    price = 2.00;
                }
                else if (pack === 3) {
                    packName = "Anfac Dibadda 31 Dal 150 daqiiqo";
                    price = 5.00;
                }
                else if (pack === 0) {
                    console.log("Back");
                }
                else {
                    console.log("Doorasho khaldan");
                }
            }

            else if (option === 4) {

                let pack = Number(prompt(
                    "ANFAC SMS\n" +
                    "1. $0.10 - 50 SMS\n" +
                    "2. $0.25 - 150 SMS\n" +
                    "3. $0.50 - 400 SMS\n" +
                    "0. Back"
                ));

                if (pack === 1) {
                    packName = "ANFAC SMS 50";
                    price = 0.10;
                }
                else if (pack === 2) {
                    packName = "ANFAC SMS 150";
                    price = 0.25;
                }
                else if (pack === 3) {
                    packName = "ANFAC SMS 400";
                    price = 0.50;
                }
                else if (pack === 0) {
                    console.log("Back");
                }
                else {
                    console.log("Doorasho khaldan");
                }
            }

            else if (option === 0) {
                console.log("Back");
            }

            else {
                console.log("Doorasho khaldan");
            }

            if (price > 0) {

                let confirm = Number(prompt(
                    "Xaqiiji\n" +
                    packName + "\n" +
                    "Qiimaha: $" + price.toFixed(2) + "\n" +
                    "1. Haa\n" +
                    "2. Maya"
                ));

                if (confirm === 1) {
                    if (balance >= price) {
                        balance = balance - price;
                        console.log("Waad iibsatay " + packName + ". Haraagaaga cusub: $" + balance.toFixed(2));
                    }
                    else {
                        console.log("Haraagagu kuma filna. Haraagaaga: $" + balance.toFixed(2));
                    }
                }
                else if (confirm === 2) {
                    console.log("Waa la joojiyay");
                }
                else {
                    console.log("Doorasho khaldan");
                }
            }
        }

else if (main === 2) {

 let toPhone = prompt("Dir lacag\nGeli lambarka qofka (9 lambar)");

 if (toPhone === null) {
      console.log("Waa la joojiyay");
    }
   else if (toPhone === myPhone) {
     console.log("Naftaada lacag kuma diri kartid.");
  }
   else if (toPhone.length !== 9) {
     console.log("Lambar khaldan. Waa inuu ahaadaa 9 lambar.");
  }
  else {

 let amount = Number(prompt("Geli qadarka lacagta ($)"));

 if (amount > 0) {

   if (amount > MAX_SEND) {
       console.log("Xadka ugu badan ee la diri karo waa $" + MAX_SEND);
     }
     else {
 let fee = amount * FEE_RATE;
  let total = amount + fee;

 let confirm = Number(prompt(
     "Xaqiiji\n" +
     "U dir $" + amount.toFixed(2) + " lambarka " + toPhone + "\n" +
    "Khidmad: $" + fee.toFixed(2) + "\n" +
     "Wadarta: $" + total.toFixed(2) + "\n" +
     "1. Haa\n" +
     "2. Maya"
  ));

 if (confirm === 1) {
     if (balance >= total) {
     balance = balance - total;
     console.log("Waad dirtay $" + amount.toFixed(2) + " lambarka " + toPhone +
         ". Khidmad: $" + fee.toFixed(2) +
          ". Haraagaaga cusub: $" + balance.toFixed(2));
    }
      else {
       console.log("Haraagagu kuma filna. Waxaad u baahan tahay $" + total.toFixed(2));
     }
 }
    else if (confirm === 2) {
     console.log("Waa la joojiyay");
 }
   else {
     console.log("Doorasho khaldan");
 }
   }
      }
    else {
       console.log("Qadarka lacagta waa khalad.");
    }
  }
   }

     else if (main === 3) {
         console.log("Haraagagu waa $" + balance.toFixed(2));
     }

     else {
      console.log("Doorasho khaldan");
   }
 }
}

else {
    console.log("Code khaldan");
}