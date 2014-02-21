// code using your service doesn't care
// how it's defined - so don't call Order OrderFactory

// The two ways we've defined Order
// below are exactly equivalent - there
// will be no difference in how the services work.
// therefore code using that service has no reason to be interested
// in the means of defining the service - save those keystrokes! 


app.factory("Order",function() {
    function Order(title) {
      this.title = title;
    }
    return Order;
})


function Order(title) {
    this.title = title;
}
app.value("Order",Order);
