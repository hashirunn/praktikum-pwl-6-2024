void main(){
  var nil = 5;
  print("Nilai faktorial dari $nil = ${faktorial(nil)}");
}

var faktorial(var nil){
  if(nil > 0){
    nil = nil * faktorial(nil-1);
  }else{
    return 1;
  }
  return nil;
}