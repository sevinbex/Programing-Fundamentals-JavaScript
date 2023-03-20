function uniquePinCode(input) {
  let nums1 = Number(input[0]);
  let nums2 = Number(input[1]);
  let nums3 = Number(input[2]);

  for (let a = 2; a <= nums1; a += 2) {
    for (let b = 2; b <= nums2; b++) {
      for (let c = 2; c <= nums3; c += 2) {
        if (b === 2 || b === 3 || b === 5 || b === 7)
          console.log(`${a} ${b} ${c}`);
      }
    }
  }
}

// uniquePinCode(["3", "5", "5"]);
uniquePinCode(["8", "2", "8"]);
