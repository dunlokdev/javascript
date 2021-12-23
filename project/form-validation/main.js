// Đối tượng Validator
function Validator(options) {
	// Hàm thực hiện validate
	function validate(inputElement, rule) {
		var errorMessage = rule.test(inputElement.value);
		var errorElement = inputElement.parentElement.querySelector(
			options.errorSelector,
		);

		if (errorMessage) {
			errorElement.innerText = errorMessage;
			inputElement.parentElement.classList.add('invalid');
		} else {
			errorElement.innerText = '';
			inputElement.parentElement.classList.remove('invalid');
		}
	}

	// Lấy element của form cần validate
	var formElement = document.querySelector(options.form);

	if (formElement) {
		options.rules.forEach(function (rule) {
			var inputElement = formElement.querySelector(rule.selector);

			if (inputElement) {
				// Xử lý trường hợp blur khỏi input
				inputElement.onblur = function () {
					validate(inputElement, rule);
				};

				// Xử lý mỗi khi người dùng nhập vào input
				inputElement.oninput = function () {
					var errorElement = inputElement.parentElement.querySelector(
						options.errorSelector,
					);
					errorElement.innerText = '';
					inputElement.parentElement.classList.remove('invalid');
				};
			}
		});
	}
}

// Định nghĩa rules
// Nguyên tưats của các rules
// 1. Khi có lỗi thì trả ra message lỗi
// 2. Khi hợp lệ thì trả ra undefined
Validator.isRequired = function (selector, message) {
	return {
		selector: selector,
		test: function (value) {
			return value.trim() ? undefined : message || 'Vui lòng nhập trường này';
		},
	};
};
Validator.isEmail = function (selector) {
	return {
		selector: selector,
		test: function (value) {
			var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			return regex.test(value) ? undefined : 'Trường này phải là email';
		},
	};
};
Validator.minLength = function (selector, min, message) {
	return {
		selector: selector,
		test: function (value) {
			return value.length >= min
				? undefined
				: message || `Vui lòng nhập tối thiểu ${min} kí tự`;
		},
	};
};
Validator.isConfirmed = function (selector, getConfirmValue, message) {
	return {
		selector: selector,
		test: function (value) {
			return value === getConfirmValue()
				? undefined
				: message || 'Giá trị nhập vào không chính xác';
		},
	};
};
