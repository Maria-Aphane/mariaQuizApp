import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


 
  totPoints =0;
  //science
  totalPointsScience:number=0;

  sciencePoint1:number;
  sciencePoint2:number;
  sciencePoint3:number;
  sciencePoint4:number;
  sciencePoint5:number;
 
  scienceAnswer1:string;
  scienceAnswer2:string;
  scienceAnswer3:string;
  scienceAnswer4:string;
  scienceAnswer5:string;

  //sport

  totalPointsSports:number =0;
  sportsPoint1:number;
  sportsPoint2:number;
  sportsPoint3:number;
  sportsPoint4:number;
  sportsPoint5:number;
 
  sportsAnswer1:string;
  sportsAnswer2:string;
  sportsAnswer3:string;
  sportsAnswer4:string;
  sportsAnswer5:string;

  //Technology

  totalTechPoints:number =0;

  techAnswer1:string;
  techAnswer2:string;
  techAnswer3:string;
  techAnswer4:string;
  techAnswer5:string;
  
  techpoint1:number;
  techpoint2:number;
  techpoint3:number;
  techpoint4:number;
  techpoint5:number;



  



  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {

  }

  RegisterAlert() {
    const alert = this.alertCtrl.create({

      title: 'REGISTER ' ,
      message:'',
      inputs: [
        {
          name: 'name',
          type:'text',
          placeholder: 'Enter your name '
        },
        {
          name: 'email',
          type:'text',
          placeholder: 'Enter your username '
        },
        {
          name: 'password',
          type:'password',
          placeholder: 'Enter your password '
        },
        {
          name: 'password',
          type:'password',
          placeholder: 'Comfirm your password '
        },

        {
          name: 'mobilenumber',
          type:'number',
          placeholder: 'Enter your cellphone number '
        },
      ],
  
      buttons: [
        {
          text: 'REGISTER',
          handler: () => {
         this.LoginAlert();
  
          }
        },
      ],
      cssClass: 'alertCustomCss'

    });
    alert.present();
  }

  LoginAlert() {
    const alert = this.alertCtrl.create({

      title: 'Enter your details to login' ,
      message:'',
      inputs: [
        {
          name: 'username',
          type:'text',
          placeholder: 'Enter your username '
        },
    
        {
          name: 'password',
          type:'password',
          placeholder: 'Enter your password '
        },
      ],
  
      buttons: [
        {
          text: 'Login',
          handler: () => {
          
  
          }
        },
      ],
      cssClass: 'alertCustomCss'

    });
    alert.present();
  }

  

  //SCIENCE_ANSWERS

scienceAlertAnswer1() {


  const alert = this.alertCtrl.create();
  alert.setTitle('Select Answer');

  alert.addInput({
    type: 'radio',
    label: '53-59',
    value: '53-59',
    checked: false

 
   
  });
 alert.addInput({
    type: 'radio',
    label: '56-64',
    value: '56-64',
    checked:false
  });

  alert.addButton('Cancel');

  alert.addButton({
    text: 'Okay',
    handler: data => {
      this.scienceAnswer1 =data;
      this.checkS1(); 
    }


  });

 
  alert.present();
}
scA1='53-59';

checkS1():void{
  if(this.scienceAnswer1==this.scA1){
    this.sciencePoint1=5;
  }
  else{
    this.sciencePoint1=0;
  }
}

scienceAlertAnswer2() {


  const alert = this.alertCtrl.create();
  alert.setTitle('Select Answer');

  alert.addInput({
    type: 'radio',
    label: '89-52',
    value: '89-52',
    checked:false
  });
 alert.addInput({
    type: 'radio',
    label: '56-64',
    value: '56-64',
    checked:false
  });

  alert.addButton('Cancel');

  alert.addButton({
    text: 'Okay',
    handler: data => {
      this.scienceAnswer2 =data; 
      this.checkS2();
    }


  });

 
  alert.present();
}

scA2='56-64';

checkS2():void{
  if(this.scienceAnswer2==this.scA2){
    this.sciencePoint2=5;
  }
  else{
    this.sciencePoint2=0;
  }
}

scienceAlertAnswer3() {


  const alert = this.alertCtrl.create();
  alert.setTitle('Select Answer');

  alert.addInput({
    type: 'radio',
    label: '900C',
    value: '900C',
    checked:false
  });

 alert.addInput({
    type: 'radio',
    label: '800C',
    value: '800C',
    checked:false
  });

  alert.addButton('Cancel');

  alert.addButton({
    text: 'Okay',
    handler: data => {
      this.scienceAnswer3 =data; 
      this.checkS3();
    }


  });

 
  alert.present();
}

scA3='800C';

checkS3():void{
  if(this.scienceAnswer3==this.scA3){
    this.sciencePoint3=5;
  }
  else{
    this.sciencePoint3=0;
  }
}



scienceAlertAnswer4() {


  const alert = this.alertCtrl.create();
  alert.setTitle('Select Answer');

  alert.addInput({
    type: 'radio',
    label: 'BACTERIA',
    value: 'BACTERIA',
    checked: false
  });

 alert.addInput({
    type: 'radio',
    label: 'SUGAR',
    value: 'SUGAR',
    checked:false
  });


  alert.addButton('Cancel');

  alert.addButton({
    text: 'Okay',
    handler: data => {
      this.scienceAnswer4 =data; 
      this.checkS4();
    }


  });

 
  alert.present();
}

scA4='BACTERIA';

checkS4():void{
  if(this.scienceAnswer4==this.scA4){
    this.sciencePoint4=5;
  }
  else{
    this.sciencePoint4=0;
  }
}


 scienceAlertAnswer5() {


  const alert = this.alertCtrl.create();
  alert.setTitle('Select Answer');

  alert.addInput({
    type: 'radio',
    label: 'HYDROELECTRICITY',
    value: 'HYDROELECTRICITY',
    checked:false
  });

 alert.addInput({
    type: 'radio',
    label: 'HYDROPONICS',
    value: 'HYDROPONICS',
    checked:false
  });

  alert.addButton('Cancel');

  alert.addButton({
    text: 'Okay',
    handler: data => {
      this.scienceAnswer5=data; 
      this.checkS5();
    }


  });

 
  alert.present();
}

scA5='HYDROPONICS';

checkS5():void{
  if(this.scienceAnswer5==this.scA5){
    this.sciencePoint5=5;
  }
  else{
    this.sciencePoint5=0;
  }
}

calcSciencePoint():Number{

this.totalPointsScience = this.sciencePoint1 + this.sciencePoint2 + this.sciencePoint3 + this.sciencePoint4 + this.sciencePoint5;
return this.totalPointsScience;
}

  //SPORTS_ANSWERS_ALERT

  sportsAlertAnswer1() {


    const alert = this.alertCtrl.create();
    alert.setTitle('Select Answer');

    alert.addInput({
      type: 'radio',
      label: 'SHORTS',
      value: 'SHORTS',
      checked:false
    });
   alert.addInput({
      type: 'radio',
      label: 'TIGHTS',
      value: 'TIGHTS',
      checked:false
    });

    alert.addButton('Cancel');

    alert.addButton({
      text: 'Okay',
      handler: data => {
      this.sportsAnswer1=data; 
      this.checkSport1();
      }

  
    });

   
    alert.present();
  }

  
spA1='TIGHTS';

checkSport1():void{
  if(this.sportsAnswer1===this.spA1){
    this.sportsPoint1=5;
  }
  else{
    this.sportsPoint1=0;
  }
}

  sportsAlertAnswer2() {


    const alert = this.alertCtrl.create();
    alert.setTitle('Select Answer');

    alert.addInput({
      type: 'radio',
      label: '1.00',
      value: '1.00',
      checked:false
    });

   alert.addInput({
      type: 'radio',
      label: '2.00',
      value: '2.00',
      checked:false
      
    });

    alert.addButton('Cancel');

    alert.addButton({
      text: 'Okay',
      handler: data => {
        this.sportsAnswer2=data;
        this.checkSport2();
      }

  
    });

   
    alert.present();
  }

spA2='1.00';

checkSport2():void{
  if(this.sportsAnswer2===this.spA2){
    this.sportsPoint2=5;
  }
  else{
    this.sportsPoint2=0;
  }
}

  sportsAlertAnswer3() {


    const alert = this.alertCtrl.create();
    alert.setTitle('Select Answer');

    alert.addInput({
      type: 'radio',
      label: 'MEIRALOV KLOSE',
      value: 'MEIRALOV KLOSE',
      checked:false
    });

   alert.addInput({
      type: 'radio',
      label: 'DOC ADAMS',
      value: 'DOC ADAMS',
      checked:false
    });

    alert.addButton('Cancel');

    alert.addButton({
      text: 'Okay',
      handler: data => {
        this.sportsAnswer3=data;
        this.checkSport3();
      }

  
    });

   
    alert.present();
    
  }

  spA3='MEIRALOV KLOSE';

checkSport3():void{
  if(this.sportsAnswer3===this.spA3){
    this.sportsPoint3=5;
  }
  else{
    this.sportsPoint3=0;
  }
}



  sportsAlertAnswer4() {


    const alert = this.alertCtrl.create();
    alert.setTitle('Select Answer');

    alert.addInput({
      type: 'radio',
      label: 'BOB ADDY',
      value: 'BOB ADDY',
      checked:false
    });

   alert.addInput({
      type: 'radio',
      label: 'DREW HENSON',
      value: 'DREW HENSON',
      checked:false
    
    });


    alert.addButton('Cancel');

    alert.addButton({
      text: 'Okay',
      handler: data => {
    
      this.sportsAnswer4=data;
      this.checkSport4();
      
      }

  
    });

   
    alert.present();
  }

  spA4='DREW HENSON';

  checkSport4():void{
    if(this.sportsAnswer4===this.spA4){
      this.sportsPoint4=5;
    }
    else{
      this.sportsPoint4=0;
    }
  }

  sportsAlertAnswer5() {


    const alert = this.alertCtrl.create();
    alert.setTitle('Select Answer');

    alert.addInput({
      type: 'radio',
      label: '1998',
      value: '1998',
      checked:false
    });

   alert.addInput({
      type: 'radio',
      label: '1992',
      value: '1992',
      checked:false
    });
 

    alert.addButton('Cancel');

    alert.addButton({
      text: 'Okay',
      handler: data => {
   
        this.sportsAnswer5=data;
        this.checkSport5();
      }

  
    });

   
    alert.present();
  }

  
  spA5='DREW HENSON';

  checkSport5():void{
    if(this.sportsAnswer5===this.spA5){
      this.sportsPoint5=5;
    }
    else{
      this.sportsPoint5=0;
    }
  }

  calcSportPoint():Number{

    this.totalPointsSports = this.sportsPoint1 +this.sportsPoint2 + this.sportsPoint3 + this.sportsPoint4 + this.sportsPoint5;
    return this.totalPointsSports;
    }

//TECHNOLOGY_ANSWERS

techAlertAnswer1() {


  const alert = this.alertCtrl.create();
  alert.setTitle('Select Answer');

  alert.addInput({
    type: 'radio',
    label: 'TRIPLE',
    value: 'TRIPLE',
    checked:false
  });
 alert.addInput({
    type: 'radio',
    label: 'DOUBLE',
    value: 'DOUBLE',
    checked:false
  });

  alert.addButton('Cancel');

  alert.addButton({
    text: 'Okay',
    handler: data => {
      this.techAnswer1=data; 
      this.checkTechA1();
    }


  });

 
  alert.present();
}

techA1='DOUBLE';

checkTechA1():void{
  if(this.techAnswer1===this.techA1){
    this.techpoint1=5;
  }
  else{
    this.techpoint1=0;
  }
}

techAlertAnswer2() {


  const alert = this.alertCtrl.create();
  alert.setTitle('Select Answer');

  alert.addInput({
    type: 'radio',
    label: 'CENTRAL PROCESSING UNIT',
    value: 'CENTRAL PROCESSING UNIT',
    checked:false
  });
 alert.addInput({
    type: 'radio',
    label: 'CENTRAL PROGRAMMING UNIT',
    value: 'CENTRAL PROGRAMMING UNIT',
    checked:false
  });

  alert.addButton('Cancel');

  alert.addButton({
    text: 'Okay',
    handler: data => {
    
      this.techAnswer2=data; 
      this.checkTechA2();
    }


  });

 
  alert.present();
}
techA2='CENTRAL PROCESSING UNIT';

checkTechA2():void{
  if(this.techAnswer2===this.techA2){
    this.techpoint2=5;
  }
  else{
    this.techpoint2=0;
  }
}

techAlertAnswer3() {


  const alert = this.alertCtrl.create();
  alert.setTitle('Select Answer');

  alert.addInput({
    type: 'radio',
    label: 'WORLD WIDE WEB',
    value: 'WORLD WIDE WEB',
    checked:false
  });

 alert.addInput({
    type: 'radio',
    label: 'WORLD WIRE WEB',
    value: 'WORLD WIRE WEB',
    checked:false
  });

  alert.addButton('Cancel');

  alert.addButton({
    text: 'Okay',
    handler: data => {
    
      this.techAnswer3=data; 
      this.checkTechA3();
    }


  });

 
  alert.present();
}
techA3='WORLD WIDE WEB';

checkTechA3():void{
  if(this.techAnswer3===this.techA3){
    this.techpoint3=5;
  }
  else{
    this.techpoint3=0;
  }
}

techAlertAnswer4() {


  const alert = this.alertCtrl.create();
  alert.setTitle('Select Answer');

  alert.addInput({
    type: 'radio',
    label: 'JAVA FLASH',
    value: 'JAVA FLASH',
    checked:false
  });

 alert.addInput({
    type: 'radio',
    label: 'C FLASH',
    value: 'C FLASH',
    checked:false
  });


  alert.addButton('Cancel');

  alert.addButton({
    text: 'Okay',
    handler: data => {
  
      this.techAnswer4=data; 
      this.checkTechA4();
    }


  });

 
  alert.present();
}

techA4='JAVA FLASH';

checkTechA4():void{
  if(this.techAnswer4===this.techA4){
    this.techpoint4=5;
  }
  else{
    this.techpoint4=0;
  }
}

techAlertAnswer5() {


  const alert = this.alertCtrl.create();
  alert.setTitle('Select Answer');

  alert.addInput({
    type: 'radio',
    label: 'COHESION',
    value: 'COHESION',
    checked:false
  });

 alert.addInput({
    type: 'radio',
    label: 'MOULDING',
    value: 'MOULDING',
    checked:false
  });

  alert.addButton('Cancel');

  alert.addButton({
    text: 'Okay',
    handler: data => {
    
      this.techAnswer5=data; 
      this.checkTechA5();
    }


  });

 
  alert.present();
}

techA5='MOULDING';

checkTechA5():void{
  if(this.techAnswer5==this.techA5){
    this.techpoint5=5;
  }
  else{
    this.techpoint5=0;

  }
}

calcTechPoint():Number{

  this.totalTechPoints = this.techpoint1 + this.techpoint2 + this.techpoint3 + this.techpoint4 + this.techpoint5;
  return this.totalTechPoints;
  }



//
logoutAlet()
 {
  const confirm = this.alertCtrl.create({
    title: 'LOGOUT',
    message: 'Are sure you want to logout?',
    buttons: [
      {
        text: 'YES',
        handler: () => {
          console.log('Agree clicked');
        }
      },

    
    ],
    cssClass: 'alertCustomCss'

  });
  confirm.present();


}
ButtonNextScience():void
{
  this.calcSciencePoint();


}
ButtonNextSport():void
{
  this.calcSportPoint();


}

ButtonNextTech():void
{
  this.calcTechPoint();


}





}

          

 






