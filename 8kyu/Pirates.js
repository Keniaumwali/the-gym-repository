const cannonsReady = (gunners) => {
  const saying = Object.values(gunners);
  if  (saying.includes('nay')){
    return 'Shiver me timbers!';
  }
  else{
    return 'Fire!';
  }
}
