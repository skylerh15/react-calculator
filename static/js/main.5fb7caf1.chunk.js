(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,_,t){"use strict";t.d(_,"c",function(){return u}),t.d(_,"b",function(){return o}),t.d(_,"a",function(){return i});var n=t(9),a=t(8);function r(){var e=Object(n.a)(["\n    padding-top: 8px;\n"]);return r=function(){return e},e}function l(){var e=Object(n.a)(["\n    display: flex;\n"]);return l=function(){return e},e}function c(){var e=Object(n.a)([""]);return c=function(){return e},e}var u=a.b.div(c()),o=a.b.div(l()),i=a.b.div(r())},27:function(module,__webpack_exports__,__webpack_require__){"use strict";var R_Git_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(14),R_Git_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(15),R_Git_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(17),R_Git_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(16),R_Git_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(18),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),enums__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(6),app_widgets_calculator_button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(34),_styles__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(11),Calculator=function(_React$Component){function Calculator(props){var _this;return Object(R_Git_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator),_this=Object(R_Git_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(R_Git_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator).call(this,props)),_this._onKeyUp=function(e){switch(e.key){case enums__WEBPACK_IMPORTED_MODULE_6__.b.ENTER:return _this.calculateInput();case enums__WEBPACK_IMPORTED_MODULE_6__.b.BACKSPACE:return _this.handleDelete();case enums__WEBPACK_IMPORTED_MODULE_6__.b.ESCAPE:return _this.handleClear();default:return}},_this.setInputValue=function(e){return _this.setState({inputValue:e})},_this.setResult=function(e){return _this.setState({result:e})},_this.handleClick=function(e){return _this.setInputValue(_this.state.inputValue.concat(e))},_this.handleDelete=function(){var e=_this.state.inputValue;_this.setInputValue(e.substring(0,e.length-1))},_this.handleClear=function(){return _this.setInputValue("")},_this.renderButton=function(e){return react__WEBPACK_IMPORTED_MODULE_5__.createElement(app_widgets_calculator_button__WEBPACK_IMPORTED_MODULE_7__.a,{buttonValue:e,onClick:_this.handleClick})},_this.calculateInput=function(){try{var evalResult=eval(_this.state.inputValue.toString());evalResult&&(_this.setResult(evalResult),_this.handleClear())}catch(e){}},_this.state={inputValue:"",result:0},_this}return Object(R_Git_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator,_React$Component),Object(R_Git_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"componentDidMount",value:function(){window.addEventListener("keyup",this._onKeyUp)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keyup",this._onKeyUp)}},{key:"render",value:function(){var e=this.state,_=e.inputValue,t=e.result;return react__WEBPACK_IMPORTED_MODULE_5__.createElement(_styles__WEBPACK_IMPORTED_MODULE_8__.c,null,react__WEBPACK_IMPORTED_MODULE_5__.createElement("input",{readOnly:!0,value:_}),react__WEBPACK_IMPORTED_MODULE_5__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_5__.createElement("input",{readOnly:!0,value:t}),react__WEBPACK_IMPORTED_MODULE_5__.createElement(_styles__WEBPACK_IMPORTED_MODULE_8__.a,null,react__WEBPACK_IMPORTED_MODULE_5__.createElement(_styles__WEBPACK_IMPORTED_MODULE_8__.b,null,this.renderButton(enums__WEBPACK_IMPORTED_MODULE_6__.a.Divide),this.renderButton(enums__WEBPACK_IMPORTED_MODULE_6__.a.Multiply),this.renderButton(enums__WEBPACK_IMPORTED_MODULE_6__.a.Subtract),this.renderButton(enums__WEBPACK_IMPORTED_MODULE_6__.a.Add)),react__WEBPACK_IMPORTED_MODULE_5__.createElement(_styles__WEBPACK_IMPORTED_MODULE_8__.b,null,this.renderButton(enums__WEBPACK_IMPORTED_MODULE_6__.a.Seven),this.renderButton(enums__WEBPACK_IMPORTED_MODULE_6__.a.Eight),this.renderButton(enums__WEBPACK_IMPORTED_MODULE_6__.a.Nine)),react__WEBPACK_IMPORTED_MODULE_5__.createElement(_styles__WEBPACK_IMPORTED_MODULE_8__.b,null,this.renderButton(enums__WEBPACK_IMPORTED_MODULE_6__.a.Four),this.renderButton(enums__WEBPACK_IMPORTED_MODULE_6__.a.Five),this.renderButton(enums__WEBPACK_IMPORTED_MODULE_6__.a.Six)),react__WEBPACK_IMPORTED_MODULE_5__.createElement(_styles__WEBPACK_IMPORTED_MODULE_8__.b,null,this.renderButton(enums__WEBPACK_IMPORTED_MODULE_6__.a.One),this.renderButton(enums__WEBPACK_IMPORTED_MODULE_6__.a.Two),this.renderButton(enums__WEBPACK_IMPORTED_MODULE_6__.a.Three)),react__WEBPACK_IMPORTED_MODULE_5__.createElement(_styles__WEBPACK_IMPORTED_MODULE_8__.b,null,this.renderButton(enums__WEBPACK_IMPORTED_MODULE_6__.a.Zero),this.renderButton(enums__WEBPACK_IMPORTED_MODULE_6__.a.Decimal))))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=Calculator},34:function(e,_,t){"use strict";var n=t(14),a=t(15),r=t(17),l=t(16),c=t(18),u=t(2),o=t(9);function i(){var e=Object(o.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40px;\n    width: 40px;\n    outline: 1px solid;\n    margin-top: 1px;\n    user-select: none;\n    margin-left: 1px;\n    ","\n    :hover {\n        background-color: ",";\n    }\n"]);return i=function(){return e},e}var s=t(8).b.div(i(),function(e){return e.active&&"background-color: ".concat(e.theme.color.$mBlue_l4,";")},function(e){return e.theme.color.$mBlue_l4}),d=function(e){function _(e){var t;return Object(n.a)(this,_),(t=Object(r.a)(this,Object(l.a)(_).call(this,e)))._onKeyDown=function(e){e.key===t.props.buttonValue&&t.setActive(!0)},t._onKeyUp=function(e){e.key===t.props.buttonValue&&(t.setActive(!1),t.handleClick())},t.handleClick=function(){var e=t.props,_=e.buttonValue;(0,e.onClick)(_)},t.setActive=function(e){return t.setState({active:e})},t.state={active:!1},t}return Object(c.a)(_,e),Object(a.a)(_,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp)}},{key:"render",value:function(){var e=this.props.buttonValue,_=this.state.active;return u.createElement(s,{onClick:this.handleClick,active:_},e)}}]),_}(u.Component);t.d(_,"a",function(){return d})},37:function(e,_,t){e.exports=t(48)},42:function(e,_,t){},48:function(e,_,t){"use strict";t.r(_);var n=t(2),a=t.n(n),r=t(28),l=t.n(r),c=(t(42),t(33)),u=t(31),o=t(26),i=t(1),s={setUserVariables:Object(i.b)({userVariables:function(e,_){return _.data}}),logError:function(e,_){return console.log(_.data)}},d=Object(o.a)({id:"app",initial:"main",context:{userVariables:[],pastResults:[]},states:{main:{on:{NEXT:"second"}},second:{on:{NEXT:"main"}}}},{actions:s,services:{machineTest:function(e){return e}},guards:{hasData:function(e,_){return _.data.length>0}}}),E=t(27),f=function(){return n.createElement(E.a,null)},b=t(9),p=t(8);function O(){var e=Object(b.a)(["\n    margin-left: auto;\n    margin-right: auto;\n    width: 400px;\n    display: flex;\n    justify-content: center;\n"]);return O=function(){return e},e}function m(){var e=Object(b.a)(["\n    display: table-cell;\n    vertical-align: middle;\n"]);return m=function(){return e},e}function P(){var e=Object(b.a)(["\n    display: table;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n"]);return P=function(){return e},e}var $=p.b.div(P()),D=p.b.div(m()),h=p.b.div(O()),M=n.createContext(null),C=function(){var e=Object(u.useMachine)(d),_=Object(c.a)(e,3),t=(_[0],_[1],_[2]);return n.createElement(M.Provider,{value:t},n.createElement($,null,n.createElement(D,null,n.createElement(h,null,n.createElement(f,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B={color:{$Black:"#282729",$mBoxShadowGray:"rgba(34, 37, 41, 0.24)",$White:"white",$mBlue_d1:"#0044AB",$mBlue:"#0052cc",$mBlue_l1:"#3d7bd8",$mBlue_l2:"#6697e0",$mBlue_l3:"#a3c0ec",$mBlue_l4:"#ccdcf4",$mBlue_l5:"#dfe9f7",$mBlue_l6:"#f0f5fc",$Blue_t1:"#02accd",$mPink_d1:"#9e4580",$mPink:"#bd5399",$mPink_l1:"#cc7cb1",$mPink_l2:"#d696c1",$mPink_l3:"#e7c0da",$mPink_l4:"#f1dcea",$mPink_l5:"#f6eaf2",$mPink_l6:"#faf2f7",$Orange_d1:"#c55127",$Orange:"#eb612f",$Orange_l1:"#ef8660",$Orange_l2:"#f3a082",$Orange_l3:"#f7c5b3",$Orange_l4:"#fbdfd5",$Orange_l5:"#fcebe5",$Orange_l6:"#fdf5f2",$Green_d1:"#298858",$Green:"#31a36a",$Green_l1:"#62b98d",$Green_l2:"#83c7a5",$Green_l3:"#b4dec9",$Green_l4:"#d5ede1",$Green_l5:"#e5f3ec",$Green_l6:"#f2faf6",$Green_l7:"#f7fbf9",$Cyan_d1:"#0d96ab",$Cyan:"#10b3cc",$Cyan_l1:"#49c5d8",$Cyan_l2:"#6fd1e0",$Cyan_l3:"#a8e3ec",$Cyan_l4:"#cfeff4",$Cyan_l5:"#e1f5f8",$Cyan_l6:"#f0fbfc",$Cyan_l7:"#1bacb9",$Cyan_l8:"#1BACB980",$Purple:"#742e89",$Purple_dark:"#582268",$Purple_l1:"#955fa5",$Purple_l2:"#ab81b8",$Purple_l3:"#ccb3d4",$Purple_l4:"#e3d5e7",$Purple_l5:"#eee5f0",$Purple_l6:"#f6f2f8",$Purple_l7:"#742d8980",$Purple_l8:"#f9f2fb",$Purple_t1:"#742e89",$Purple_d1:"#67287a",$Purple_d2:"#6a2a7e",$Purple_d3:"#6a2a7d",$Purple_d4:"#6b2a7e",$Purple_BoxShadow:"rgba(116, 46, 137, 0.4)",$Grey:"#666666",$Grey_dark:"#3a3a3a",$Grey_l1:"#8a8a8a",$Grey_l2:"#a3a3a3",$Grey_l3:"#c7c7c7",$Grey_l4:"#e0e0e0",$Grey_l4_5:"#e1e5e6",$Grey_l11:"#e8e8e8",$Grey_l5:"#ececec",$Grey_l6:"#f6f6f6",$Grey_l7:"#4d4d4d",$Grey_l8:"#595959",$Grey_19:"#eff9f9",$Grey_110:"#efefef",$mGray:"#c8cacc",$mGray1:"#acb4bf",$mGray2:"#c7c7c7",$mGray3:"#f6f6f6",$mGray4:"#d8d8d8",$mGray5:"#31325F",$mGray6:"#d3d3d3",$mGray7:"#bbbbbb",$Gray_t1:"#666666",$Navy:"#172c4d",$Navy_dark:"#11223b",$Navy_dark2:"#222529",$Navy_l1:"#4f5f78",$Navy_l2:"#738094",$Navy_l3:"#acb4bf",$Navy_l4:"#d0d5db",$Navy_l5:"#e1e4e8",$Navy_l6:"#f2f3f5",$Teal:"#1bacba",$Teal_dark:"#16909c",$Teal_l1:"#51bfca",$Teal_l2:"#76cdd5",$Teal_l3:"#ace1e6",$Teal_l4:"#d1eef1",$Teal_l5:"#e3f4f6",$Teal_l6:"#f1fafa",$Teal_l7:"#f6fcfc",$Yellow:"#e9a827",$Yellow_dark:"#c38c20",$Yellow_l1:"#eebc5a",$Yellow_l2:"#f1ca7d",$Yellow_l3:"#f7dfb1",$Yellow_l4:"#faedd3",$Yellow_l5:"#fcf4e4",$Yellow_l6:"#fdf9f2",$Yellow_l7:"#fefbf6",$Yellow_t1:"#e9a827",$Red:"#cc0033",$Red_dark:"#ab002a",$Red_l1:"#d83d63",$Red_l2:"#e06684",$Red_l3:"#eca3b5",$Red_l4:"#f4ccd6",$Red_l5:"#f8e0e6",$Red_l6:"#fcf0f3",$Red_t1:"#cc0033"}};l.a.render(a.a.createElement(p.a,{theme:B},a.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,_,t){"use strict";var n,a;t.d(_,"a",function(){return n}),t.d(_,"b",function(){return a}),function(e){e.Zero="0",e.One="1",e.Two="2",e.Three="3",e.Four="4",e.Five="5",e.Six="6",e.Seven="7",e.Eight="8",e.Nine="9",e.Divide="/",e.Multiply="*",e.Subtract="-",e.Add="+",e.Decimal=".",e.ParensOpen="(",e.ParensClose=")"}(n||(n={})),function(e){e.ENTER="Enter",e.BACKSPACE="Backspace",e.ESCAPE="Escape"}(a||(a={}))}},[[37,1,2]]]);
//# sourceMappingURL=main.5fb7caf1.chunk.js.map