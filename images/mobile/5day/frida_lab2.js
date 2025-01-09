setImmediate(function() {
  Java.perform(function() {
    // Challenge 01
    var chall_01 = Java.use("uk.rossmarks.fridalab.challenge_01");
    chall_01.chall01.value = 1;
    console.log("\nchallenge_01 solved!");

    // Challenge 02
    Java.choose("uk.rossmarks.fridalab.MainActivity", {
      "onMatch": function(chall_02) {
        chall_02.chall02();
      },
      "onComplete": function() {
        console.log("\nchallenge_02 solved!");
      }
    })
  });
});