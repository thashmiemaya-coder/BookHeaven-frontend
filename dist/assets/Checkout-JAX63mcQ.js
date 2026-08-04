import { e as createLucideIcon, C as getDefaultExportFromCjs, R as React, j as jsxRuntimeExports, l as useSelector, v as selectCartItems, w as selectCartSubtotal, s as selectUser, k as useDispatch, x as useNavigate, r as reactExports, D as useApplyCouponMutation, E as useCreateOrderMutation, F as useCreatePaymentIntentMutation, G as useConfirmPaymentMutation, L as Link, I as applyCouponState, z as zt, J as clearCart } from "./index-BtxuP7zD.js";
import { u as useForm } from "./index.esm-saVhEfjE.js";
import { S as Seo } from "./Seo-CTQV06H5.js";
import { T as Truck } from "./truck-DbU3V43c.js";
import { L as Lock } from "./lock-DBYoAH3C.js";
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CreditCard = createLucideIcon("CreditCard", [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tag = createLucideIcon("Tag", [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
]);
var V3_URL = "https://js.stripe.com/v3";
var V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
var EXISTING_SCRIPT_MESSAGE = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used";
var findScript = function findScript2() {
  var scripts = document.querySelectorAll('script[src^="'.concat(V3_URL, '"]'));
  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];
    if (!V3_URL_REGEX.test(script.src)) {
      continue;
    }
    return script;
  }
  return null;
};
var injectScript = function injectScript2(params) {
  var queryString = "";
  var script = document.createElement("script");
  script.src = "".concat(V3_URL).concat(queryString);
  var headOrBody = document.head || document.body;
  if (!headOrBody) {
    throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
  }
  headOrBody.appendChild(script);
  return script;
};
var registerWrapper = function registerWrapper2(stripe, startTime) {
  if (!stripe || !stripe._registerWrapper) {
    return;
  }
  stripe._registerWrapper({
    name: "stripe-js",
    version: "4.6.0",
    startTime
  });
};
var stripePromise$1 = null;
var onErrorListener = null;
var onLoadListener = null;
var onError = function onError2(reject) {
  return function() {
    reject(new Error("Failed to load Stripe.js"));
  };
};
var onLoad = function onLoad2(resolve, reject) {
  return function() {
    if (window.Stripe) {
      resolve(window.Stripe);
    } else {
      reject(new Error("Stripe.js not available"));
    }
  };
};
var loadScript = function loadScript2(params) {
  if (stripePromise$1 !== null) {
    return stripePromise$1;
  }
  stripePromise$1 = new Promise(function(resolve, reject) {
    if (typeof window === "undefined" || typeof document === "undefined") {
      resolve(null);
      return;
    }
    if (window.Stripe) {
      resolve(window.Stripe);
      return;
    }
    try {
      var script = findScript();
      if (script && params) ;
      else if (!script) {
        script = injectScript(params);
      } else if (script && onLoadListener !== null && onErrorListener !== null) {
        var _script$parentNode;
        script.removeEventListener("load", onLoadListener);
        script.removeEventListener("error", onErrorListener);
        (_script$parentNode = script.parentNode) === null || _script$parentNode === void 0 ? void 0 : _script$parentNode.removeChild(script);
        script = injectScript(params);
      }
      onLoadListener = onLoad(resolve, reject);
      onErrorListener = onError(reject);
      script.addEventListener("load", onLoadListener);
      script.addEventListener("error", onErrorListener);
    } catch (error) {
      reject(error);
      return;
    }
  });
  return stripePromise$1["catch"](function(error) {
    stripePromise$1 = null;
    return Promise.reject(error);
  });
};
var initStripe = function initStripe2(maybeStripe, args, startTime) {
  if (maybeStripe === null) {
    return null;
  }
  var stripe = maybeStripe.apply(void 0, args);
  registerWrapper(stripe, startTime);
  return stripe;
};
var stripePromise$1$1;
var loadCalled = false;
var getStripePromise = function getStripePromise2() {
  if (stripePromise$1$1) {
    return stripePromise$1$1;
  }
  stripePromise$1$1 = loadScript(null)["catch"](function(error) {
    stripePromise$1$1 = null;
    return Promise.reject(error);
  });
  return stripePromise$1$1;
};
Promise.resolve().then(function() {
  return getStripePromise();
})["catch"](function(error) {
  if (!loadCalled) {
    console.warn(error);
  }
});
var loadStripe = function loadStripe2() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  loadCalled = true;
  var startTime = Date.now();
  return getStripePromise().then(function(maybeStripe) {
    return initStripe(maybeStripe, args, startTime);
  });
};
var propTypes = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error(
      "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
    );
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  propTypes.exports = factoryWithThrowingShims();
}
var propTypesExports = propTypes.exports;
const PropTypes = /* @__PURE__ */ getDefaultExportFromCjs(propTypesExports);
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var useAttachEvent = function useAttachEvent2(element, event, cb) {
  var cbDefined = !!cb;
  var cbRef = React.useRef(cb);
  React.useEffect(function() {
    cbRef.current = cb;
  }, [cb]);
  React.useEffect(function() {
    if (!cbDefined || !element) {
      return function() {
      };
    }
    var decoratedCb = function decoratedCb2() {
      if (cbRef.current) {
        cbRef.current.apply(cbRef, arguments);
      }
    };
    element.on(event, decoratedCb);
    return function() {
      element.off(event, decoratedCb);
    };
  }, [cbDefined, event, element, cbRef]);
};
var usePrevious = function usePrevious2(value) {
  var ref = React.useRef(value);
  React.useEffect(function() {
    ref.current = value;
  }, [value]);
  return ref.current;
};
var isUnknownObject = function isUnknownObject2(raw) {
  return raw !== null && _typeof(raw) === "object";
};
var isPromise = function isPromise2(raw) {
  return isUnknownObject(raw) && typeof raw.then === "function";
};
var isStripe = function isStripe2(raw) {
  return isUnknownObject(raw) && typeof raw.elements === "function" && typeof raw.createToken === "function" && typeof raw.createPaymentMethod === "function" && typeof raw.confirmCardPayment === "function";
};
var PLAIN_OBJECT_STR = "[object Object]";
var isEqual = function isEqual2(left, right) {
  if (!isUnknownObject(left) || !isUnknownObject(right)) {
    return left === right;
  }
  var leftArray = Array.isArray(left);
  var rightArray = Array.isArray(right);
  if (leftArray !== rightArray) return false;
  var leftPlainObject = Object.prototype.toString.call(left) === PLAIN_OBJECT_STR;
  var rightPlainObject = Object.prototype.toString.call(right) === PLAIN_OBJECT_STR;
  if (leftPlainObject !== rightPlainObject) return false;
  if (!leftPlainObject && !leftArray) return left === right;
  var leftKeys = Object.keys(left);
  var rightKeys = Object.keys(right);
  if (leftKeys.length !== rightKeys.length) return false;
  var keySet = {};
  for (var i = 0; i < leftKeys.length; i += 1) {
    keySet[leftKeys[i]] = true;
  }
  for (var _i = 0; _i < rightKeys.length; _i += 1) {
    keySet[rightKeys[_i]] = true;
  }
  var allKeys = Object.keys(keySet);
  if (allKeys.length !== leftKeys.length) {
    return false;
  }
  var l = left;
  var r = right;
  var pred = function pred2(key) {
    return isEqual2(l[key], r[key]);
  };
  return allKeys.every(pred);
};
var extractAllowedOptionsUpdates = function extractAllowedOptionsUpdates2(options, prevOptions, immutableKeys) {
  if (!isUnknownObject(options)) {
    return null;
  }
  return Object.keys(options).reduce(function(newOptions, key) {
    var isUpdated = !isUnknownObject(prevOptions) || !isEqual(options[key], prevOptions[key]);
    if (immutableKeys.includes(key)) {
      if (isUpdated) {
        console.warn("Unsupported prop change: options.".concat(key, " is not a mutable property."));
      }
      return newOptions;
    }
    if (!isUpdated) {
      return newOptions;
    }
    return _objectSpread2(_objectSpread2({}, newOptions || {}), {}, _defineProperty({}, key, options[key]));
  }, null);
};
var INVALID_STRIPE_ERROR$2 = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.";
var validateStripe = function validateStripe2(maybeStripe) {
  var errorMsg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : INVALID_STRIPE_ERROR$2;
  if (maybeStripe === null || isStripe(maybeStripe)) {
    return maybeStripe;
  }
  throw new Error(errorMsg);
};
var parseStripeProp = function parseStripeProp2(raw) {
  var errorMsg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : INVALID_STRIPE_ERROR$2;
  if (isPromise(raw)) {
    return {
      tag: "async",
      stripePromise: Promise.resolve(raw).then(function(result) {
        return validateStripe(result, errorMsg);
      })
    };
  }
  var stripe = validateStripe(raw, errorMsg);
  if (stripe === null) {
    return {
      tag: "empty"
    };
  }
  return {
    tag: "sync",
    stripe
  };
};
var registerWithStripeJs = function registerWithStripeJs2(stripe) {
  if (!stripe || !stripe._registerWrapper || !stripe.registerAppInfo) {
    return;
  }
  stripe._registerWrapper({
    name: "react-stripe-js",
    version: "2.8.1"
  });
  stripe.registerAppInfo({
    name: "react-stripe-js",
    version: "2.8.1",
    url: "https://stripe.com/docs/stripe-js/react"
  });
};
var ElementsContext = /* @__PURE__ */ React.createContext(null);
ElementsContext.displayName = "ElementsContext";
var parseElementsContext = function parseElementsContext2(ctx, useCase) {
  if (!ctx) {
    throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(useCase, " in an <Elements> provider."));
  }
  return ctx;
};
var Elements = function Elements2(_ref) {
  var rawStripeProp = _ref.stripe, options = _ref.options, children = _ref.children;
  var parsed = React.useMemo(function() {
    return parseStripeProp(rawStripeProp);
  }, [rawStripeProp]);
  var _React$useState = React.useState(function() {
    return {
      stripe: parsed.tag === "sync" ? parsed.stripe : null,
      elements: parsed.tag === "sync" ? parsed.stripe.elements(options) : null
    };
  }), _React$useState2 = _slicedToArray(_React$useState, 2), ctx = _React$useState2[0], setContext = _React$useState2[1];
  React.useEffect(function() {
    var isMounted = true;
    var safeSetContext = function safeSetContext2(stripe) {
      setContext(function(ctx2) {
        if (ctx2.stripe) return ctx2;
        return {
          stripe,
          elements: stripe.elements(options)
        };
      });
    };
    if (parsed.tag === "async" && !ctx.stripe) {
      parsed.stripePromise.then(function(stripe) {
        if (stripe && isMounted) {
          safeSetContext(stripe);
        }
      });
    } else if (parsed.tag === "sync" && !ctx.stripe) {
      safeSetContext(parsed.stripe);
    }
    return function() {
      isMounted = false;
    };
  }, [parsed, ctx, options]);
  var prevStripe = usePrevious(rawStripeProp);
  React.useEffect(function() {
    if (prevStripe !== null && prevStripe !== rawStripeProp) {
      console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.");
    }
  }, [prevStripe, rawStripeProp]);
  var prevOptions = usePrevious(options);
  React.useEffect(function() {
    if (!ctx.elements) {
      return;
    }
    var updates = extractAllowedOptionsUpdates(options, prevOptions, ["clientSecret", "fonts"]);
    if (updates) {
      ctx.elements.update(updates);
    }
  }, [options, prevOptions, ctx.elements]);
  React.useEffect(function() {
    registerWithStripeJs(ctx.stripe);
  }, [ctx.stripe]);
  return /* @__PURE__ */ React.createElement(ElementsContext.Provider, {
    value: ctx
  }, children);
};
Elements.propTypes = {
  stripe: PropTypes.any,
  options: PropTypes.object
};
var useElementsContextWithUseCase = function useElementsContextWithUseCase2(useCaseMessage) {
  var ctx = React.useContext(ElementsContext);
  return parseElementsContext(ctx, useCaseMessage);
};
var useElements = function useElements2() {
  var _useElementsContextWi = useElementsContextWithUseCase("calls useElements()"), elements = _useElementsContextWi.elements;
  return elements;
};
({
  children: PropTypes.func.isRequired
});
var CustomCheckoutSdkContext = /* @__PURE__ */ React.createContext(null);
CustomCheckoutSdkContext.displayName = "CustomCheckoutSdkContext";
var parseCustomCheckoutSdkContext = function parseCustomCheckoutSdkContext2(ctx, useCase) {
  if (!ctx) {
    throw new Error("Could not find CustomCheckoutProvider context; You need to wrap the part of your app that ".concat(useCase, " in an <CustomCheckoutProvider> provider."));
  }
  return ctx;
};
var CustomCheckoutContext = /* @__PURE__ */ React.createContext(null);
CustomCheckoutContext.displayName = "CustomCheckoutContext";
({
  stripe: PropTypes.any,
  options: PropTypes.shape({
    clientSecret: PropTypes.string.isRequired,
    elementsOptions: PropTypes.object
  }).isRequired
});
var useElementsOrCustomCheckoutSdkContextWithUseCase = function useElementsOrCustomCheckoutSdkContextWithUseCase2(useCaseString) {
  var customCheckoutSdkContext = React.useContext(CustomCheckoutSdkContext);
  var elementsContext = React.useContext(ElementsContext);
  if (customCheckoutSdkContext && elementsContext) {
    throw new Error("You cannot wrap the part of your app that ".concat(useCaseString, " in both <CustomCheckoutProvider> and <Elements> providers."));
  }
  if (customCheckoutSdkContext) {
    return parseCustomCheckoutSdkContext(customCheckoutSdkContext, useCaseString);
  }
  return parseElementsContext(elementsContext, useCaseString);
};
var capitalized = function capitalized2(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
var createElementComponent = function createElementComponent2(type, isServer2) {
  var displayName = "".concat(capitalized(type), "Element");
  var ClientElement = function ClientElement2(_ref) {
    var id = _ref.id, className = _ref.className, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, onBlur = _ref.onBlur, onFocus = _ref.onFocus, onReady = _ref.onReady, onChange = _ref.onChange, onEscape = _ref.onEscape, onClick = _ref.onClick, onLoadError = _ref.onLoadError, onLoaderStart = _ref.onLoaderStart, onNetworksChange = _ref.onNetworksChange, onConfirm = _ref.onConfirm, onCancel = _ref.onCancel, onShippingAddressChange = _ref.onShippingAddressChange, onShippingRateChange = _ref.onShippingRateChange;
    var ctx = useElementsOrCustomCheckoutSdkContextWithUseCase("mounts <".concat(displayName, ">"));
    var elements = "elements" in ctx ? ctx.elements : null;
    var customCheckoutSdk = "customCheckoutSdk" in ctx ? ctx.customCheckoutSdk : null;
    var _React$useState = React.useState(null), _React$useState2 = _slicedToArray(_React$useState, 2), element = _React$useState2[0], setElement = _React$useState2[1];
    var elementRef = React.useRef(null);
    var domNode = React.useRef(null);
    useAttachEvent(element, "blur", onBlur);
    useAttachEvent(element, "focus", onFocus);
    useAttachEvent(element, "escape", onEscape);
    useAttachEvent(element, "click", onClick);
    useAttachEvent(element, "loaderror", onLoadError);
    useAttachEvent(element, "loaderstart", onLoaderStart);
    useAttachEvent(element, "networkschange", onNetworksChange);
    useAttachEvent(element, "confirm", onConfirm);
    useAttachEvent(element, "cancel", onCancel);
    useAttachEvent(element, "shippingaddresschange", onShippingAddressChange);
    useAttachEvent(element, "shippingratechange", onShippingRateChange);
    useAttachEvent(element, "change", onChange);
    var readyCallback;
    if (onReady) {
      if (type === "expressCheckout") {
        readyCallback = onReady;
      } else {
        readyCallback = function readyCallback2() {
          onReady(element);
        };
      }
    }
    useAttachEvent(element, "ready", readyCallback);
    React.useLayoutEffect(function() {
      if (elementRef.current === null && domNode.current !== null && (elements || customCheckoutSdk)) {
        var newElement = null;
        if (customCheckoutSdk) {
          newElement = customCheckoutSdk.createElement(type, options);
        } else if (elements) {
          newElement = elements.create(type, options);
        }
        elementRef.current = newElement;
        setElement(newElement);
        if (newElement) {
          newElement.mount(domNode.current);
        }
      }
    }, [elements, customCheckoutSdk, options]);
    var prevOptions = usePrevious(options);
    React.useEffect(function() {
      if (!elementRef.current) {
        return;
      }
      var updates = extractAllowedOptionsUpdates(options, prevOptions, ["paymentRequest"]);
      if (updates && "update" in elementRef.current) {
        elementRef.current.update(updates);
      }
    }, [options, prevOptions]);
    React.useLayoutEffect(function() {
      return function() {
        if (elementRef.current && typeof elementRef.current.destroy === "function") {
          try {
            elementRef.current.destroy();
            elementRef.current = null;
          } catch (error) {
          }
        }
      };
    }, []);
    return /* @__PURE__ */ React.createElement("div", {
      id,
      className,
      ref: domNode
    });
  };
  var ServerElement = function ServerElement2(props) {
    useElementsOrCustomCheckoutSdkContextWithUseCase("mounts <".concat(displayName, ">"));
    var id = props.id, className = props.className;
    return /* @__PURE__ */ React.createElement("div", {
      id,
      className
    });
  };
  var Element = isServer2 ? ServerElement : ClientElement;
  Element.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onReady: PropTypes.func,
    onEscape: PropTypes.func,
    onClick: PropTypes.func,
    onLoadError: PropTypes.func,
    onLoaderStart: PropTypes.func,
    onNetworksChange: PropTypes.func,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    onShippingAddressChange: PropTypes.func,
    onShippingRateChange: PropTypes.func,
    options: PropTypes.object
  };
  Element.displayName = displayName;
  Element.__elementType = type;
  return Element;
};
var isServer = typeof window === "undefined";
var EmbeddedCheckoutContext = /* @__PURE__ */ React.createContext(null);
EmbeddedCheckoutContext.displayName = "EmbeddedCheckoutProviderContext";
var useStripe = function useStripe2() {
  var _useElementsOrCustomC = useElementsOrCustomCheckoutSdkContextWithUseCase("calls useStripe()"), stripe = _useElementsOrCustomC.stripe;
  return stripe;
};
createElementComponent("auBankAccount", isServer);
var CardElement = createElementComponent("card", isServer);
createElementComponent("cardNumber", isServer);
createElementComponent("cardExpiry", isServer);
createElementComponent("cardCvc", isServer);
createElementComponent("fpxBank", isServer);
createElementComponent("iban", isServer);
createElementComponent("idealBank", isServer);
createElementComponent("p24Bank", isServer);
createElementComponent("epsBank", isServer);
createElementComponent("payment", isServer);
createElementComponent("expressCheckout", isServer);
createElementComponent("currencySelector", isServer);
createElementComponent("paymentRequestButton", isServer);
createElementComponent("linkAuthentication", isServer);
createElementComponent("address", isServer);
createElementComponent("shippingAddress", isServer);
createElementComponent("paymentMethodMessaging", isServer);
createElementComponent("affirmMessage", isServer);
createElementComponent("afterpayClearpayMessage", isServer);
const stripePromise = loadStripe("pk_test_xxx");
const SHIPPING_FLAT = 5;
const FREE_SHIPPING_THRESHOLD = 50;
function Checkout() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Elements, { stripe: stripePromise, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckoutInner, {}) });
}
function CheckoutInner() {
  const items = useSelector(selectCartItems);
  const subtotal = useSelector(selectCartSubtotal);
  const coupon = useSelector((s) => s.cart.coupon);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { name: (user == null ? void 0 : user.name) || "" }
  });
  const [paymentMethod, setPaymentMethod] = reactExports.useState("cod");
  const [couponCode, setCouponCode] = reactExports.useState("");
  const [processing, setProcessing] = reactExports.useState(false);
  const [applyCoupon, { isLoading: applying }] = useApplyCouponMutation();
  const [createOrder] = useCreateOrderMutation();
  const [createPaymentIntent] = useCreatePaymentIntentMutation();
  const [confirmPayment] = useConfirmPaymentMutation();
  const discount = (coupon == null ? void 0 : coupon.discount) || 0;
  const discounted = Math.max(subtotal - discount, 0);
  const shipping = discounted > FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : SHIPPING_FLAT;
  const tax = discounted * 0.05;
  const total = discounted + shipping + tax;
  if (!items.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-20 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-plum-500 dark:text-plum-400", children: "Your cart is empty." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/books", className: "btn-primary mt-6 inline-flex", children: "Browse Books" })
    ] });
  }
  const handleApplyCoupon = async () => {
    var _a;
    if (!couponCode.trim()) return;
    try {
      const res = await applyCoupon({ code: couponCode.trim(), subtotal }).unwrap();
      dispatch(applyCouponState({ code: couponCode.trim().toUpperCase(), discount: res.discount }));
      zt.success(`Coupon applied — you saved $${res.discount.toFixed(2)}`);
    } catch (err) {
      zt.error(((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || "Invalid coupon");
    }
  };
  const placeOrder = async (form) => {
    var _a;
    setProcessing(true);
    const orderPayload = {
      orderItems: items.map((i) => ({ book: i._id, quantity: i.quantity })),
      shippingAddress: {
        fullName: form.name,
        address: form.address,
        city: form.city,
        postalCode: form.postalCode,
        country: form.country,
        phone: form.phone
      },
      paymentMethod,
      couponCode: (coupon == null ? void 0 : coupon.code) || void 0
    };
    try {
      if (paymentMethod === "stripe") {
        if (!stripe || !elements) {
          zt.error("Payment not ready");
          setProcessing(false);
          return;
        }
        const order = await createOrder(orderPayload).unwrap();
        const orderId = order.order._id;
        const intent = await createPaymentIntent({ orderId }).unwrap();
        const result = await stripe.confirmCardPayment(intent.clientSecret, {
          payment_method: { card: elements.getElement(CardElement) }
        });
        if (result.error) {
          zt.error(result.error.message);
          setProcessing(false);
          return;
        }
        await confirmPayment({ orderId, paymentIntentId: result.paymentIntent.id }).unwrap().catch(() => {
        });
        finish(orderId);
      } else {
        const order = await createOrder(orderPayload).unwrap();
        finish(order.order._id);
      }
    } catch (err) {
      zt.error(((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || "Failed to place order");
      setProcessing(false);
    }
  };
  const finish = (orderId) => {
    dispatch(clearCart());
    zt.success("Order placed successfully!");
    navigate(`/orders/${orderId}`, { replace: true });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Seo, { title: "Checkout" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "section-title mb-8", children: "Checkout" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(placeOrder), className: "grid lg:grid-cols-[1fr_380px] gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-semibold text-lg text-plum-900 dark:text-plum-100 mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { size: 20 }),
              " Shipping Address"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full Name", error: errors.name, ...register("name", { required: "Required" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", error: errors.phone, ...register("phone", { required: "Required" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Address", error: errors.address, ...register("address", { required: "Required" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "City", error: errors.city, ...register("city", { required: "Required" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Postal Code", error: errors.postalCode, ...register("postalCode", { required: "Required" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Country", error: errors.country, ...register("country", { required: "Required" }) }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-semibold text-lg text-plum-900 dark:text-plum-100 mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { size: 20 }),
              " Payment Method"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                PayOption,
                {
                  active: paymentMethod === "cod",
                  onClick: () => setPaymentMethod("cod"),
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { size: 18 }),
                  title: "Cash on Delivery",
                  text: "Pay when your order arrives"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                PayOption,
                {
                  active: paymentMethod === "stripe",
                  onClick: () => setPaymentMethod("stripe"),
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { size: 18 }),
                  title: "Credit / Debit Card",
                  text: "Secure payment via Stripe"
                }
              )
            ] }),
            paymentMethod === "stripe" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-xl border border-plum-200 dark:border-plum-700 p-4", children: [
              stripePromise ? /* @__PURE__ */ jsxRuntimeExports.jsx(CardElement, { options: { style: { base: { fontSize: "16px", color: "#4a044e" } } } }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-plum-400", children: "Set VITE_STRIPE_PUBLISHABLE_KEY to enable card payments." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-plum-400 mt-3 flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 12 }),
                " Test card: 4242 4242 4242 4242 — any future date & CVC"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card p-6 h-fit lg:sticky lg:top-24", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-lg text-plum-900 dark:text-plum-100 mb-4", children: "Your Order" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 max-h-52 overflow-auto mb-4", children: items.map((i) => {
            const p = i.discountPrice > 0 ? i.discountPrice : i.price;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-plum-600 dark:text-plum-300 line-clamp-1 pr-2", children: [
                i.title,
                " × ",
                i.quantity
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-plum-800 dark:text-plum-200 shrink-0", children: [
                "$",
                (p * i.quantity).toFixed(2)
              ] })
            ] }, i._id);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { size: 16, className: "absolute left-3 top-1/2 -translate-y-1/2 text-plum-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  value: couponCode,
                  onChange: (e) => setCouponCode(e.target.value),
                  placeholder: "Coupon code",
                  className: "input pl-9"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: handleApplyCoupon, disabled: applying, className: "btn-ghost shrink-0", children: applying ? "..." : "Apply" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm border-t border-plum-100 dark:border-plum-800 pt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Subtotal", value: `$${subtotal.toFixed(2)}` }),
            discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: `Discount (${coupon.code})`, value: `-$${discount.toFixed(2)}`, accent: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Shipping", value: shipping === 0 ? "Free" : `$${shipping.toFixed(2)}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Tax", value: `$${tax.toFixed(2)}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-plum-100 dark:border-plum-800 pt-2 flex justify-between font-bold text-plum-900 dark:text-plum-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "$",
                total.toFixed(2)
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: processing, className: "btn-primary w-full mt-6", children: processing ? "Processing..." : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "Place Order ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 16 })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-plum-400 text-center mt-3", children: "Totals are re-verified securely on the server." })
        ] })
      ] })
    ] })
  ] });
}
const Field = reactExports.forwardRef(({ label, error, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5", children: label }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref, className: "input", ...props }),
  error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 mt-1", children: error.message })
] }));
Field.displayName = "Field";
const PayOption = ({ active, onClick, icon, title, text }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "button",
  {
    type: "button",
    onClick,
    className: `w-full flex items-center gap-3 rounded-xl border-2 p-4 text-left transition ${active ? "border-plum-700 bg-plum-50 dark:bg-plum-900/40" : "border-plum-200 dark:border-plum-700"}`,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-10 w-10 place-items-center rounded-full bg-plum-100 dark:bg-plum-800 text-plum-700 dark:text-blush-400", children: icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-plum-900 dark:text-plum-100", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-plum-500 dark:text-plum-400", children: text })
      ] })
    ]
  }
);
const Row = ({ label, value, accent }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-plum-600 dark:text-plum-300", children: label }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: accent ? "text-blush-500 font-medium" : "text-plum-800 dark:text-plum-200", children: value })
] });
export {
  Checkout as default
};
//# sourceMappingURL=Checkout-JAX63mcQ.js.map
