const userModel = require("../models/userModel");

// let data = {
//   admin_first_name: "Atif",
//   admin_last_name: "Bin ferdous",
//   admin_nickname: "wof",
//   admin_mobile: "01680793142",
//   admin_email: "lsampercot@gmail.com",
//   admin_address: "Mymensingh ,Bangladesh",
//   admin_password: "HumanityRules1234567890!",
// };

exports.getAdmin = async (req, res) => {
  try {
    const userData = await userModel.find();

    res.status("200").json({
      status: "success",
      length: userData.length,
      data: { userData },
    });
  } catch (error) {
    res.status("400").json({
      status: "failure",
    });
  }
};

exports.createAdmin = async (req, res) => {
  try {
    const newUser = await userModel.create(req.body);

    res.status("200").json({
      status: "success",
    });
  } catch (error) {
    res.status("400").json({
      status: "failure",
    });
  }
};

//test
// let timerQueues = new Map(); //to track active timers

// const magicFunction = (givenTime, user) => {
//   let curTime = new Date().toLocaleString();
//   let newDate = new Date(curTime).getTime() / 1000;
//   if (newDate >= givenTime) {
//     //timer logic
//     console.log("done", user);
//     clearInterval(timerQueues.get(user));
//     timerQueues.delete(user);
//     console.log(timerQueues.keys());
//   }
//   console.log(newDate, givenTime);
// };

// async function mainCall(sayData) {
//   let givenDate = new Date(sayData.date).toLocaleString();
//   let givenTime = new Date(givenDate).getTime() / 1000; //get local time in seconds (starting from jan 1 1970 in milis)

//   timerQueues.set(
//     sayData.user,
//     setInterval(() => {
//       magicFunction(givenTime, sayData.user);
//     }, 1000)
//   );
//   console.log(timerQueues.keys());
// }

// let sayData = [
//   { user: "user1", date: "8/26/2022 07:40:00 AM" }, //get input in this format or convert to this format
//   { user: "user2", date: "8/27/2022 07:41:00 PM" },
// ];
// mainCall(sayData[0]);
// mainCall(sayData[1]);
