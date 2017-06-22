// const resolveWithTwo = Promise.resolve(2);

// resolveWithTwo.then((value) => {
//   console.log('I Resolved With', value);
//   resolveWithTwo.then((val2) => {
//     console.log('I am still Resolved With', val2);
//   });
// });

// const rejectWithThree = Promise.reject(3);

// rejectWithThree.catch((error) => {
//   console.log('There is a name for my pain: ', error);
// });

[0, 1, 2].forEach((num) => {
  console.log(num);
});

// [A].map(A => B) => [B]
console.log([0, 1, 2].map(num => num * num));

// Promise<A>.then(A => B) => Promise<B>
Promise.resolve(2)
  .then(num => num * num)
  .then(newNum => console.log('New Num', newNum));

// $.ajax('/url')
//   .then(jqXHR => jqXHR.data);

// Promise<A>.then(A => Promise<B>) => Promise<B>

Promise.resolve(2)
  .then(val => Promise.resolve(val * 2))
  .then(newNum => console.log('New Num from nested promise', newNum));

// function getFromCache(id) {} // => Promise<Recipe, Error>
// function getFromAPI(id) {} // => Promise<Recipe, Error>
// function saveToCache(id, recipe) {} // => Promise<undefined>

// // => Promise<Recipe, Error>
// function getFromCacheOrAPI(id){
//   return getFromCache(id)
//     .catch(() => {
//       return getFromAPI(id);
//     })
//     .then((recipe) => {
//       return saveToCache(id, recipe)
//         .then(() => recipe);
//     });
// }

// function getFromCacheOrAPI(id, cb) {
//   getFromCache(id, (cacheErr, cacheRecipe) => {
//     if (cacheErr) {
//       getFromAPI(id, (apiErr, apiRecipe) => {
//         if (apiErr) {
//           cb(apiErr);
//         } else {
//           saveToCache(id, apiRecipe, () => {
//             cb(undefined, apiRecipe);
//           });
//         }
//       });
//     } else {
//       cb(undefined, cacheRecipe);
//     }
//   });
// }

// Recipe 1: create a new promise from a callback

function russianRouletteCallback(cb) {
  const val = Math.floor(Math.random() * 6);
  if (val === 5) {
    cb('You\'re Dead.');
  } else {
    cb(`You are not dead: ${val}`);
  }
}

function russianRoulettePromise() {
  return new Promise((resolve, reject) => {
    russianRouletteCallback((err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

// Recipe 2: Waiting for two promises to finish

function waitForUserAndGroups(userId) {
  const userPromise = getUser(userId);
  const groupsPromise = getGroupsForUser(userId);

  const combinedPromise = Promise.all([userPromise, groupsPromise])
    .then((results) => {
      const user = results[0];
      const groups = results[1];
      user.groups = groups;
      return user;
    });
}

function getGroups(groupIds) {
  const groupPromises = groupIds.map(groupId => getGroupById(groupId));
  const groupsPromise = Promise.all(groupPromises);
  return groupsPromise;
}

function getGroupsSafely(groupIds) {
  const safeGroupPromises = groupIds.map(groupId => getGroupById(groupId)
      .catch(() => undefined));
  const groupsPromise = Promise.all(groupPromises);
  return groupsPromise
    .then(groupsSomeOfWhichMayBeUndefined => groupsSomeOfWhichMayBeUndefined
        .filter(group => group !== undefined));
}
