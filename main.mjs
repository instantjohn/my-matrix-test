
console.log("hello");

import sdk from 'matrix-js-sdk';

const client = sdk.createClient("https://matrix.org");

await client.login("m.login.password", {
  "password": "", // <- ここにパスワード
  "user": "" // <- ここにユーザーネーム
}).then((response) => {
    console.log(response.access_token);
});

var testRoomId = ""; // room id

var content = {
    "body": "Hello world"
    "msgtype": "m.text"
};

client.sendEvent(testRoomId, "m.room.message", content, "").then((res) => {
  // message sent successfully
  console.log("message sent successfully");
}).catch((err) => {
    console.log(err);
})

