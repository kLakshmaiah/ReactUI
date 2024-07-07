export const appRegExp={
    required:{
    pattern:/./,
    errorMessage:"please enter value"
             },
             Min5Chars:{
       pattern:/[a-zA-Z0-9]{5,}/,
       errorMessage:"min 5 chars are required"
     },
     emailFormat:{
      pattern:/^[a-zA-Z]{1}[a-zA-Z0-9]{0,}@[a-zA-Z]{4,}\.[a-zA-Z]{2,3}$/,
       errorMessage:"enter valid emial address"
     }
}
