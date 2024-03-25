/**
 * Ternary/logical And utilities
 *
 * With this utility function, you won't have to worry about testing unit test branches
 * added by ternary operators or logical ANDs whenever we provide fallbacks for our
 * application.
 *
 * I'm proud of this code because:
 * Back then at Tokopedia, we had a unit test OKR where each team had to achieve
 * at least 70% UT branch coverage. I was tasked with conducting a sharing session for
 * the PDP & Seller tribe on how to do unit test better. At that session, I
 * introduced this hacky function as a temporary solution to boost their unit test branch
 * coverage. None of them seem to realize they can do this to improve their UT
 * branches coverage at the time. That being said, I did emphasize that this approach
 * should only be considered as a last resort, since they need to consider if they
 * are willing to trade this convenience in exchange of having the reassurance of proper
 * unit test. I also explained that they can extend this function to cover more complex
 * conditional cases.
 *  */

const conditionals = function (condition, trueResult, falseResult) {
  if (condition) {
    return trueResult;
  }

  return falseResult;
};

/* Example usage */
const stringFetchedFromBackend = ''; // Assume this is data fetched from backend

// Example using Utility
// 1 new UT Branches if using this utility function, which don't need multiple
// test suite to test

const textToDisplay = conditionals(
  stringFetchedFromBackend.length > 0,
  dataFetchedFromBackend,
  'Error, fail to fetch string'
);

// Example Without Utility
// 2 new UT branches that will require multiple test suite to fully test
const textToDisplay2 =
  stringFetchedFromBackend.length > 0
    ? stringFetchedFromBackend
    : 'Error, fail to fetch string';
