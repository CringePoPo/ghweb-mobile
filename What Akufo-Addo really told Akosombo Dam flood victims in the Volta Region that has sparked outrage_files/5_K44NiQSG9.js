;/*FB_PKG_DELIM*/

__d("MAbstractButton.react",["cx","DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE","joinClasses","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.handleLinkClick=function(a){c.props.disabled?a.preventDefault():c.props.onClick&&c.props.onClick(a)},b)||babelHelpers.assertThisInitialized(c)}var d=b.prototype;d.render=function(){var a="_2c65"+(this.props.disabled?" _2c66":"")+(this.props.depressed?" _2c67":""),b,d=this.props.image;d&&(b={},this.props.label&&!this.props.labelIsHidden&&(b.alt="",b.className=c("joinClasses")(c("DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE")(d).props.className,"_3-90")),d=j.cloneElement(d,b));var e=this.props.imageRight;e&&(b={},this.props.label&&!this.props.labelIsHidden&&(b.alt="",b.className=c("joinClasses")(c("DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE")(e).props.className,"_3-9a")),e=j.cloneElement(e,b));this.props.href?b=j.jsxs("a",babelHelpers["extends"]({},this.props,{className:c("joinClasses")(this.props.className,a),label:null,href:this.props.href,onClick:this.handleLinkClick,children:[d,this.props.labelIsHidden?j.jsx("span",{className:"accessible_elem",children:this.props.label}):this.props.label,e]})):this.props.type&&this.props.type!=="submit"?b=j.jsxs("button",babelHelpers["extends"]({},this.props,{className:c("joinClasses")(this.props.className,a),label:null,type:this.props.type,children:[d,this.props.labelIsHidden?j.jsx("span",{className:"accessible_elem",children:this.props.label}):this.props.label,e]})):b=j.jsxs("button",babelHelpers["extends"]({},this.props,{className:c("joinClasses")(this.props.className,a),type:"submit",label:null,value:"1",children:[d,this.props.labelIsHidden?j.jsx("span",{className:"accessible_elem",children:this.props.label}):this.props.label,e]}));return b};return b}(j.Component);g["default"]=a}),98);