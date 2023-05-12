/* exported titleCase */
function titleCase(title) {
  const lowerCased = title.toLowerCase();
  const words = lowerCased.split(' ');
  let subtitle = false;
  let fixedString = '';

  for (let i = 0; i < words.length; i++) {
    const chars = words[i].split('');

    // Checks if 'javascript' and capitalizes J and S
    if (words[i].toLowerCase().includes('javascript')) {
      chars[0] = chars[0].toUpperCase();
      chars[4] = chars[4].toUpperCase();
    }

    // Checks if 'api' and capitalizes all letters
    if (words[i].toLowerCase().includes('api')) {
      chars[0] = chars[0].toUpperCase();
      chars[1] = chars[1].toUpperCase();
      chars[2] = chars[2].toUpperCase();
    }

    // Checks if first word and capitalizes
    if (i === 0) {
      chars[0] = chars[0].toUpperCase();
    }

    // Checks if word is longer than 3 and capitalizes
    if (chars.length > 3) {
      chars[0] = chars[0].toUpperCase();
    }

    // For words 3 characters or less it checks if it is minor word and if not, capitalizes it
    switch (words[i]) {
      case 'and':
      case 'or':
      case 'nor':
      case 'but':
      case 'a':
      case 'an':
      case 'the':
      case 'as':
      case 'at':
      case 'by':
      case 'for':
      case 'in':
      case 'of':
      case 'on':
      case 'per':
      case 'to':
        break;
      default:
        chars[0] = chars[0].toUpperCase();
        break;
    }

    // If subtitle is true it capitalizes word directly after ':'
    if (subtitle) {
      chars[0] = chars[0].toUpperCase();
      subtitle = false;
    }

    // Checks if ':' exists for subtitle and sets subtitle to 'true'
    if (words[i].includes(':')) {
      subtitle = true;
    }

    // Checks if '-' exists and capitalizes first letter of second half of word
    if (words[i].includes('-')) {
      chars[chars.indexOf('-') + 1] =
        chars[chars.indexOf('-') + 1].toUpperCase();
    }

    // Combines all charcters back into capitalized word
    for (let j = 0; j < chars.length; j++) {
      fixedString += chars[j];
    }

    // If not last word, adds a space after each word
    if (i !== words.length - 1) {
      fixedString += ' ';
    }
  }
  return fixedString;
}
