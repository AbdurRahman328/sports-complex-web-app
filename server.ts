var express = require('express');
var app = express();
var routes = require('./route/route.ts');
var mongoose = require('mongoose');
const cors = require('cors');
const paypal = require('paypal-rest-sdk');

mongoose.connect("mongodb://localhost:27017/SportsComplex",{useNewUrlParser: true,  useUnifiedTopology: true },function checkDB(error)
{
    if(error)
    {
        console.log("Error")
    }
    else
    {
        console.log("DB Connected")
    }
});

app.use(cors(
    {
        origin:"http://localhost:4200"
    }
));

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AS0eSnlJZ80wKR10lq-Z6te921EasmvWC1gcrHvIpqSfXzx1Y6mbrEtAyuRRJ6v4XrWqtPk_dzI4bCVb',
    'client_secret': 'EDi19XAmeGxzbY5vPlEEj7XsE9uM39SCpF1tUSBpQS8osqvvYHqiSrHdBefXpW23VKVg6MkPhHsDXpRL'
  });


app.use(express.json());
app.use(routes);

app.listen(8000,function check(error)
{
    if(error)
    {
        console.log("Error")
    }
    else
    {
        console.log("Server Started")
    }
});

app.get('/', (req, res) => res.sendFile(__dirname + "/index.html"));

app.post('/pay', (req, res) => {
    const create_payment_json = {
      "intent": "sale",
      "payer": {
          "payment_method": "paypal"
      },
      "redirect_urls": {
          "return_url": "http://localhost:8000/success",
          "cancel_url": "http://localhost:8000/cancel"
      },
      "transactions": [{
          "item_list": {
              "items": [{
                  "name": "Red Sox Hat",
                  "sku": "001",
                  "price": "25.00",
                  "currency": "USD",
                  "quantity": 1
              }]
          },
          "amount": {
              "currency": "USD",
              "total": "25.00"
          },
          "description": "Hat for the best team ever"
      }]
  };
  app.get('/success', (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;
  
    const execute_payment_json = {
      "payer_id": payerId,
      "transactions": [{
          "amount": {
              "currency": "USD",
              "total": "25.00"
          }
      }]
    };
  
    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
      if (error) {
          console.log(error.response);
          throw error;
      } else {
          console.log(JSON.stringify(payment));
          res.send('Success');
      }
  });
  });
    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            for(let i = 0;i < payment.links.length;i++){
              if(payment.links[i].rel === 'approval_url'){
                res.redirect(payment.links[i].href);
              }
            }
        }
      });
      
      });
  app.get('/cancel', (req, res) => res.send('Cancelled'));