;/*FB_PKG_DELIM*/

__d("SchedulerPostTask-dev.classic",[],(function(a,b,c,d,e,f){"use strict"}),null);
__d("SchedulerPostTask-profiling.classic",[],(function(a,b,c,d,e,f){"use strict";b=window.performance;var g=window.setTimeout,h=a.scheduler,i=b.now.bind(b),j=0,k=3;function l(a,b,c,d){j=i()+5;try{k=a;d=d(!1);if("function"===typeof d){var e=new TaskController({priority:b}),f={signal:e.signal};c._controller=e;e=l.bind(null,a,b,c,d);void 0!==h.yield?h.yield(f).then(e)["catch"](m):h.postTask(e,f)["catch"](m)}}catch(a){g(function(){throw a})}finally{k=3}}function m(){}f.unstable_IdlePriority=5;f.unstable_ImmediatePriority=1;f.unstable_LowPriority=4;f.unstable_NormalPriority=3;f.unstable_Profiling=null;f.unstable_UserBlockingPriority=2;f.unstable_cancelCallback=function(a){a._controller.abort()};f.unstable_continueExecution=function(){};f.unstable_forceFrameRate=function(){};f.unstable_getCurrentPriorityLevel=function(){return k};f.unstable_getFirstCallbackNode=function(){return null};f.unstable_next=function(a){switch(k){case 1:case 2:case 3:var b=3;break;default:b=k}var c=k;k=b;try{return a()}finally{k=c}};f.unstable_now=i;f.unstable_pauseExecution=function(){};f.unstable_requestPaint=function(){};f.unstable_runWithPriority=function(a,b){var c=k;k=a;try{return b()}finally{k=c}};f.unstable_scheduleCallback=function(a,b,c){switch(a){case 1:case 2:var d="user-blocking";break;case 4:case 3:d="user-visible";break;case 5:d="background";break;default:d="user-visible"}var e=new TaskController({priority:d});c={delay:"object"===typeof c&&null!==c?c.delay:0,signal:e.signal};e={_controller:e};h.postTask(l.bind(null,a,d,e,b),c)["catch"](m);return e};f.unstable_shouldYield=function(){return i()>=j};f.unstable_wrapCallback=function(a){var b=k;return function(){var c=k;k=b;try{return a()}finally{k=c}}}}),null);
__d("DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a}f["default"]=a}),66);