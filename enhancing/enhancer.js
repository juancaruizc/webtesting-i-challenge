module.exports = {
  success,
  fail,
  repair,
  // get,
};

function repair(item) {
  return { ...item, durability: 100 };
}

function success(item) {
  let successfulEnhancement = item.enhancement;
  if (successfulEnhancement === 20) {
    successfulEnhancement = item.enhancement;
  } else {
    successfulEnhancement += 1;
  }
  return { ...item, enhancement: successfulEnhancement };
}

function fail(item) {
  let failedDurability = item.durability;
  let failedEnhancement = item.enhancement;
  if (item.enhancement < 15) {
    failedDurability = failedDurability - 5;
  } else if (item.enhancement >= 15) {
    failedDurability = failedDurability - 10;
  } else if (item.enhancement > 16) {
    failedDurability = failedDurability - 1;
  } else if (item.durability === 0) {
    failedDurability = item.durability;
  }
  return {
    ...item,
    durability: failedDurability,
    enhancement: failedEnhancement,
  };
}

// function get(item) {
//   return { ...item };
// }
