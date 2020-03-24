function to_initial(name) {
	let breaks = name.split(' ');
	let init = [];
	breaks.forEach((element) => {
		init.push(element[0]);
	});
	console.log(init.join(''));
}

// to_initial('Brittney Hasel');

function first_in_array(arr, ele1, ele2) {
	if (arr.indexOf(ele1) > arr.indexOf(ele2)) {
		console.log(ele2);
	} else {
		console.log(ele1);
	}
}

// let list = ['mom', 'dad', 'james', 'jacob', 'brittney'];
// first_in_array(list, 'jacob', 'james');

function abbriviate_sentence(sent) {
	let arr = sent.split(' ');
	let final = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length > 4) {
			let new_word = cut_vowel(arr[i]);
			// console.log(new_word);
			final.push(new_word);
		} else {
			final.push(arr[i]);
		}
	}

	console.log(final.join(' '));
}

// cut_vowel('bak');
// abbriviate_sentence('Wow this problem was fucking hell');

function cut_vowel(word) {
	let vowels = 'aeiou';
	let cropped = '';
	for (i = 0; i < word.length; i++) {
		if (!vowels.includes(word[i])) {
			cropped = cropped + word[i];
		}
	}
	return cropped;
}

function format_name(name) {
	let arr = name.split(' ');
	let capital = [];
	for (i = 0; i < arr.length; i++) {
		capital.push(
			arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1).toLowerCase()
		);
	}
	console.log(capital.join(' '));
}

function is_valid_name(name) {
	let arr = name.split(' ');
	for (i = 0; i < arr.length; i++)
		if (
			arr[i].slice(0, 1) == arr[i].slice(0, 1).toUpperCase &&
			arr[i].slice(1) == arr[i].slice(1).toLowerCase
		) {
			console.log(true);
		} else {
			console.log(false);
		}
}

is_valid_name('Britntey Haselmayer');
