function countAnagrams(text, pattern) {
    let k = pattern.length;
    let count = 0;

    let patternMap = {};
    for (let ch of pattern) {
        patternMap[ch] = (patternMap[ch] || 0) + 1;
    }

    let windowMap = {};
    let i = 0, j = 0;

    while (j < text.length) {
        windowMap[text[j]] = (windowMap[text[j]] || 0) + 1;

        if (j - i + 1 < k) {
            j++;
        }
        else if (j - i + 1 === k) {
            // Compare maps
            if (isEqual(windowMap, patternMap)) {
                count++;
            }

            windowMap[text[i]]--;
            if (windowMap[text[i]] === 0) {
                delete windowMap[text[i]];
            }

            i++;
            j++;
        }
    }

    return count;
}

function isEqual(map1, map2) {
    if (Object.keys(map1).length !== Object.keys(map2).length) return false;
    for (let key in map1) {
        if (map1[key] !== map2[key]) return false;
    }
    return true;
}

console.log(countAnagrams("forxxorfxdofr", "for"));
