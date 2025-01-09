setImmediate(function() {
  Java.perform(function() {
    // Challenge 01
    var chall_01 = Java.use("uk.rossmarks.fridalab.challenge_01");
    chall_01.chall01.value = 1;
    console.log("\nchallenge_01 solved!");
  });
});