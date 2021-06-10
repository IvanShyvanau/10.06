/*const test = new Set();
const obj = {
  name: "test"
}
test.add(obj);
test.add(obj);
test.add(obj);
console.log(test);

const testMap = new Map();

const keyobj = {
  key: "value"
};
testMap.set('text', 123);

testMap.set(keyobj, false);
testMap.set(keyobj, true);

const keyobj = {
  key: "value"
};

for (let item of testMap) {
  console.log(item);
}

function first() {
  this.name = 'testName';
  this.lastName = 'LastName';
  second.apply(this);
}

function second() {
  console.log(this.name);
  console.log(this.lastName);
}
first();


function first() {
  this.name = 'testName';
  this.lastName = 'LastName';
  second.apply(this, ['testEmail', 'newArg']);
}

function second(email) {
  console.log(email);
  console.log(arguments);
}
first();

let waitCall = new Promise(
  (resolve, reject) => {
    setTimeout(() => {
      reject();
    }, 1000);
  });

waitCall.then(() => {
  console.log('Привет');
}).catch(() => {
  console.log('Eror');

});

//.then().than().than().catch().than()    //бывает спрашивают на собесах
waitCall.then(() => {
  console.log('Привет');
}).catch(() => {
  console.log('Eror');

});
*/

async function dothem() {
  let waitPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('text');
    }, 5000);
  });

  let result = await waitPromise;
  console.log(result);

}
dothem();

try {
  let user;
  console.log(user.name);
} catch (e) {
  console.log('У вас ошибка');
}