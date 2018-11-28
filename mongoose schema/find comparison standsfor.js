const findComparisonCondition = {
  "$eq": "equal to",
  "$ne": "not equal to",
  "$gt": "greater than",
  "$gte": "greater than and equal to",
  "$lt": "less than",
  "$lte": "less than and equal to",
  "$in": "match with one of",
  "$in": "except of"
}

for (key in findComparisonCondition) {
  console.log(`The ${key} stands for ${findComparisonCondition[key]}`)
}