// function outer() {
//   function inner() {
//     return 0;
//     console.log('Inner Stuff Happened');
//   }

//   inner();
//   console.log('Outer Stuff Happened');
// }

function outer() {
  function inner() {
    throw new Error('Grenade');
    console.log('Inner Stuff Happened');
  }
  inner();
  console.log('Outer Stuff Happened');
}
try {
  outer();
} catch (error) {
  console.log('There Was A Problem', error.message);
}
