import fs from "fs";

class App {
  async run() {
    let str = fs.readFileSync(0, "utf-8").trim().split("");
    let arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let sum = 0
    let point = 0

    function isblanked() {
      if(str[0]!='"'&&str[1]!='"') {
        return true
      }
      console.log(0)
    }
    let cus = "" //구분자가 한개 나온다는 가정
    function isCustom() {
        for(let i = 2; i<str.length-1; i++) {
        if(str[i+1]=='\\'&&str[i+2]=='n'&&str[i-2]=='/' && str[i-1]=='/' )  {
            cus += str[i]
            point = i
            return true   
            }
        }
        return false
    }

    function customCalcul() {
        let num = ""
        for(let i = point+3; i<str.length; i++) {
            let isExit = arr.includes(str[i])
            if(isExit==true) {
                num += str[i]
                if(i==str.length-1) {
                    sum += Number(num)
                }
                if(str[i+1]==','||str[i+1]==':'||str[i+1]==cus) { //구분자가 한 개일 경우에만 작동
                    sum += Number(num)
                    num = ""
                }
            }
            if(isExit==false) {
                if(str[i]!=',' && str[i]!=':' && str[i]!=cus) {
                    return false
                }
            } 
        }
        return true
    }

    function noncustomCalcul() {
        let num = ""
        for(let i = 0; i<str.length; i++) {
            let isExit = arr.includes(str[i])
            if(isExit==true) {
                num += str[i]
                if(i==str.length-1) {
                    sum += Number(num)
                }
                if(str[i+1]==','||str[i+1]==':') { //구분자가 한 개일 경우에만 작동
                    sum += Number(num)
                    num = ""
                }
            }
            if(isExit==false&&((str[i]!=','&&str[i]!=':'))) {
                return false
            }      
        }
        return true
    }

   
    if(isblanked() ) {
      if(isCustom()) {
          if(!customCalcul()) {
            console.log("ERROR")
          }
          else {
            console.log("덧셈할 문자열을 입력해 주세요.")
            console.log(str.join(""))
            console.log(sum)
          }
      }
      else {
          if(!noncustomCalcul()) {
            console.log("ERROR")
          }
          else {
            console.log("덧셈할 문자열을 입력해 주세요.")
            console.log(str.join(""))
            console.log(sum)
          } 
        }
      }
  }
}

export default App;
