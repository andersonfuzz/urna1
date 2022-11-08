import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  inputOne:string=''
  inputTwo:string=''
  lula_img:boolean=false
  bolsonaro_img:boolean=false
  display01:boolean=true
  display02:boolean=false
  display03:boolean=false
  display04:boolean=false
  setTime:boolean=true
  setTimeDiv:boolean=false
  btn_green:boolean=false
  
 /* lula={
    name:'Lula',
    number:13,
    image:'lula'
  }
  bolsonaro={
    name:'Bolsonaro',
    number:22,
    image:'bolsonaro'
  }*/
  white=()=>{
    
    this.inputOne='0'
    this.inputTwo='0'
    this.display01=false
    this.display02=true
    this.display03=false
    this.cron()
  }
  correct=()=>{
    this.inputOne=''
    this.inputTwo=''
    this.display01=true
    this.display02=false
    this.display03=false
    this.display04=false
    this.btn_green=false
  }
  green=()=>{
    if((this.inputOne==='1'&&this.inputTwo==='3')||(this.inputOne==='2'&&this.inputTwo==='2')){

      this.btn_green=true
      this.display01=false
      this.display02=false
      this.display03=false
      this.display04=false
    }else if(this.inputOne==='0'&&this.inputTwo==='0'){
      this.btn_green=true
      this.display01=false
      this.display02=false
      this.display03=false
      this.display04=false
    }else return
  }
  cron=()=>{
    setTimeout(()=>{
      this.setTime=false
      this.setTimeDiv=true
    },3000)
    
  }
  checkCandidate=(item1:string,item2:string)=>{
    if(item1==='1'&&item2==='3'){
      this.display01=false
      this.display02=false
      this.display03=false
      this.display04=true
      this.lula_img=true
      this.bolsonaro_img=false
    }else if(item1==='2'&&item2==='2'){
      this.display01=false
      this.display02=false
      this.display03=false
      this.display04=true
      this.lula_img=false
      this.bolsonaro_img=true
    }else {
      this.display01=false
      this.display02=false
      this.display03=true
      this.cron()
    }
  }
  getImputNumber=(item:string)=>{
    if(this.inputOne===''){
        this.inputOne=item
    }else if (this.inputTwo===''){
        this.inputTwo=item
        this.checkCandidate(this.inputOne,this.inputTwo)
    }else return
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
