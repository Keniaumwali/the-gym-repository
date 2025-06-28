function removeExclamationMarks(s) {
  let string = '';
  for (let i=0;i<s.length;i++){
    if(s[i]==='!'){
      continue;
    }
    
    string = string+s[i];
  }
  return string;
}