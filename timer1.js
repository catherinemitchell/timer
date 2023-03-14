const args = process.argv;
const arr = args.slice(2);


if (arr.length === 0) {
console.log("did not give number")
} else {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 || arr[i] === NaN) {
      console.log(arr[i])
      setTimeout(() => {
    
    process.stdout.write('\x07')
  }, arr[i] * 1000);
}
  } 
}

