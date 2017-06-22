# TOC
   - [#average(nums)](#averagenums)
   - [#averageCallback(nums, cb)](#averagecallbacknums-cb)
   - [#averagePromise(nums)](#averagepromisenums)
<a name=""></a>
 
<a name="averagenums"></a>
# #average(nums)
should return the average of an array of numbers.

```js
expect(average([])).to.eq(0);
expect(average([1, 2])).to.eq(1.5);
```

recognizes numeric strings.

```js
expect(average(['1', '2'])).to.eq(1.5);
```

throws an error if there is non-numeric data.

```js
const runImproperly = () => average(['asdf']);
expect(runImproperly).to.throw(/asdf/);
```

<a name="averagecallbacknums-cb"></a>
# #averageCallback(nums, cb)
calls the callback with valid data.

```js
averageCallback([1, '3'], (err, val) => {
  expect(err).to.not.exist;
  expect(val).to.eq(2);
  done();
});
```

calls the callback with the right error.

```js
averageCallback(['asdf'], (err, val) => {
  expect(val).to.not.exist;
  expect(err.message).to.match(/asdf/);
  done();
});
```

<a name="averagepromisenums"></a>
# #averagePromise(nums)
resolves with good data.

```js
const promise = averagePromise([0, '1', 2]);
promise.then((val) => {
  expect(val).to.eq(1);
  done();
});
```

rejects with an error.

```js
const promise = averagePromise(['asdf']);
promise.catch((err) => {
  expect(err.message).to.match(/asdf/);
  done();
});
```

