const nodeCCAvenue = require('node-ccavenue');
const ccav = new nodeCCAvenue.Configure({
  merchant_id: 2689710,
  working_key: BD2073A4CCC680068469F33913A6BA1B,
});
const routes = {};

routes.create = async(req,res)=>{
    const { encResp } = req.body;
    const output = ccav.redirectResponseToJson(encResp);
  
    const orderParams = {
        order_id: 123456,
        currency: 'INR',
        amount: '100',
        redirect_url: encodeURIComponent(`URL`),
        billing_name: 'John Doe',
        // etc etc
      };
       
      const encryptedOrderData = ccav.getEncryptedOrder(orderParams);

      console.log(encryptedOrderData);

    // logger.log(output);
    // // The 'output' variable is the CCAvenue Response in JSON Format
  
    // if(output.order_status === 'Failure') {
    //    // DO YOUR STUFF
    //   res.writeHead(301,
    //     {Location: 'https://yoururlgoeshere.com/client-side-failureroute'}
    //   );
    //   res.end();
    // } else if (output.order_status === 'Success') {
    //     // DO YOUR STUFF
    //     res.writeHead(301,
    //       {Location: 'https://yoururlgoeshere.com/client-side-successroute'}
    //     );
    //     res.end();
    //   }
}

const routes = {};