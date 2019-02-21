array = process.argv;
sum = 0;
for (index = 2; index < array.length; index++) {
  sum = sum + Number(array[index]);
}

console.log(sum);
