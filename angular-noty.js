(function (angular, $) {
	return angular.module('notyModule', []).provider('noty', function () {
		var settings = $.noty.defaults;

		return {
			settings: settings,
			$get: function () {
				var callNoty = function (newSettings) {
					return noty(newSettings || {});
				};

				return {
					show: function (message, type, buttons) {
						callNoty({text: message || settings.text, type: type || settings.type, buttons: buttons});
					},

					showAlert: function (message, buttons) {
						callNoty({text: message || settings.text, type: "alert", buttons: buttons});
					},

					showSuccess: function (message, buttons) {
						callNoty({text: message || settings.text, type: "success", buttons: buttons});
					},

					showError: function (message, buttons) {
						callNoty({text: message, type: "error", buttons: buttons});
					},

					closeAll: function () {
						return $.noty.closeAll()
					},

					clearShowQueue: function () {
						return $.noty.clearQueue();
					}.bind(this)
				}
			}

		};
	})
}(angular, jQuery));