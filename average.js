function average(nums) {
  if (nums.length === 0) {
    throw new Error('Empty Input');
  }
  const sum = nums.reduce((runningTotal, num) => {
    if (isNaN(num)) throw new Error(`Invalid Input: ${num}`);
    return runningTotal + Number(num);
  }, 0);
  return sum / nums.length;
}

function averageCB(nums, callback) {
  setTimeout(() => {
    try {
      callback(undefined, average(nums));
    } catch (error) {
      callback(error);
    }
  }, 1000);
}

function averagePromise(nums) {
  try {
    return Promise.resolve(average(nums));
  } catch (error) {
    return Promise.reject(error);
  }
}

module.exports = {
  average,
  averageCB,
  averagePromise,
};
