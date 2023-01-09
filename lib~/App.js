"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true,
});
exports.default = void 0;
var _logo = _interopRequireDefault(require("./logo.svg"));
require("./App.css");
function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}
function App() {
	return dom(
		"div",
		{
			className: "App",
		},
		dom(
			"header",
			{
				className: "App-header",
			},
			dom("img", {
				src: _logo.default,
				className: "App-logo",
				alt: "logo",
			}),
			dom("p", null, "Edit ", dom("code", null, "src/App.js"), " and save to reload."),
			dom(
				"a",
				{
					className: "App-link",
					href: "https://reactjs.org",
					target: "_blank",
					rel: "noopener noreferrer",
				},
				"Learn React"
			)
		)
	);
}
var _default = App;
exports.default = _default;
