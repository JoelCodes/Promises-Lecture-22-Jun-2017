const express = require('express');
const bodyParser = require('body-parser');
const { averagePromise } = require('./average');

const app = express();
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { nums: '', success: 'Success', error: 'Error' });
});

app.post('/', (req, res) => {
  averagePromise(req.body.nums.split(','))
    .then((thatsJustMean) => {
      res.render('index', {
        nums: req.body.nums,
        success: `Your Average is ${thatsJustMean}`,
      });
    })
    .catch((err) => {
      res.status(400).render('index', {
        nums: req.body.nums,
        error: `Error: ${err.message}`,
      });
    });
  // averageCB(req.body.nums.split(','), (err, result) => {
  //   if (err) {
  //     res.status(400).render('index', {
  //       nums: req.body.nums,
  //       error: `Error: ${err.message}`,
  //     });
  //   } else {
  //     res.render('index', {
  //       nums: req.body.nums,
  //       success: `Your Average is ${result}`,
  //     });
  //   }
  // });
  // try {
  //   const thatsJustMean = average(req.body.nums.split(','));
  //   res.render('index', {
  //     nums: req.body.nums,
  //     success: `Your Average is ${thatsJustMean}`,
  //   });
  // } catch (e) {
  //   res.status(400).render('index', {
  //     nums: req.body.nums,
  //     error: `Error: ${e.message}`,
  //   });
  // }
});

// app.use((err, req, res, next) => {
//   res.status(500).render('error');
// });

app.listen(3000, () => {
  console.log('listening on 3000');
});
