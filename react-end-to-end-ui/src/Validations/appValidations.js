
import { appRegExp } from "./appRegEx";

export const hanldeFieldValidation=(eve,inputControls)=>{
    const {id,value}=eve.target;
    const clonedInputControls=JSON.parse(JSON.stringify(inputControls))/* why should we convert into the json format*/
    const inputControlsObj=clonedInputControls.find((obj)=>{
     return  obj.model===id;
    });
  
    if(inputControlsObj.type==='checkbox'){
         const checkedValues=inputControlsObj.value?inputControlsObj.value.split(","):[];
        if(eve.target.checked){
           checkedValues.push(value);
        }else{
          const index=checkedValues.indexOf(value);
          checkedValues.splice(index,1);
        }
        console.log(checkedValues);
        inputControlsObj.value=checkedValues.join();
    }else{
      inputControlsObj.value=value;
    }
    inputControlsObj.errorMessage="";
    const criteria=inputControlsObj.Criteria;
    for(let i=0;i<criteria.length;i++){
      const {pattern,errorMessage}=appRegExp[criteria[i]];
      if(!pattern.test(inputControlsObj.value)){
        inputControlsObj.errorMessage=errorMessage;
        break;
      }
    }
    return clonedInputControls;
}

export const hadleFormSubmit=(inputControls)=>{
  const clonedInputControls=JSON.parse(JSON.stringify(inputControls))/* why should we convert into the json format*/
  const modelData={};
  let isValid=true;
  clonedInputControls.forEach((inputControlsObj)=>{
    const{Criteria,model,value,errorMessage}=inputControlsObj;
    for(let i=0;i<Criteria.length;i++){
      const {pattern,errorMessage}=appRegExp[Criteria[i]];
      modelData[model]=value;
      if(!pattern.test(value)){
        inputControlsObj.errorMessage=errorMessage;
        isValid=false;
        break;
      }
    }
  })
  return [isValid,clonedInputControls,modelData];
}