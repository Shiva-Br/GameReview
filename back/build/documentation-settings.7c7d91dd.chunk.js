"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[8503],{

/***/ 73972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ useDocumentation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23246);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88767);
/* harmony import */ var _pluginId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52809);
/* harmony import */ var _utils_getTrad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35326);





const useDocumentation = () => {
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useNotification */ .lm)();
  const { del, post, put, get } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useFetchClient */ .kY)();
  const { formatAPIError } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useAPIErrorHandler */ .So)();
  const { isLoading, isError, data, refetch, error } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(
    ["get-documentation", _pluginId__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z],
    async () => {
      const { data: data2 } = await get(`/${_pluginId__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z}/getInfos`);
      return data2;
    }
  );
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isError && error) {
      toggleNotification({
        type: "warning",
        message: error ? formatAPIError(error) : { id: "notification.error" }
      });
    }
  }, [isError, error, toggleNotification, formatAPIError]);
  const handleError = (err) => {
    toggleNotification({
      type: "warning",
      message: formatAPIError(err)
    });
  };
  const handleSuccess = (type, tradId, defaultMessage) => {
    refetch();
    toggleNotification({
      type,
      message: { id: (0,_utils_getTrad__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(tradId), defaultMessage }
    });
  };
  const deleteMutation = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(
    ({ prefix, version }) => del(`${prefix}/deleteDoc/${version}`),
    {
      onSuccess: () => handleSuccess("info", "notification.delete.success", "Successfully deleted documentation"),
      onError: handleError
    }
  );
  const submit = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(({ prefix, body }) => put(`${prefix}/updateSettings`, body), {
    onSuccess: () => handleSuccess("success", "notification.update.success", "Successfully updated settings"),
    onError: handleError
  });
  const regenerate = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(
    ({ prefix, version }) => post(`${prefix}/regenerateDoc`, { version }),
    {
      onSuccess: () => handleSuccess(
        "info",
        "notification.generate.success",
        "Successfully generated documentation"
      ),
      onError: handleError
    }
  );
  return { data, isLoading, isError, remove: deleteMutation, submit, regenerate };
};


/***/ }),

/***/ 50233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40720);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90731);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12473);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(34726);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(16607);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(96987);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(10574);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(31988);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6498);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(17705);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(38670);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(7659);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23246);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(18226);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(81851);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(92795);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41054);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86896);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(1565);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87561);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12966);
/* harmony import */ var _hooks_useDocumentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73972);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10104);











const schema = yup__WEBPACK_IMPORTED_MODULE_3__/* .object */ .Ry().shape({
  restrictedAccess: yup__WEBPACK_IMPORTED_MODULE_3__/* .boolean */ .O7(),
  password: yup__WEBPACK_IMPORTED_MODULE_3__/* .string */ .Z_().when("restrictedAccess", (value, initSchema) => {
    return value ? initSchema.required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .translatedErrors */ .I0.required) : initSchema;
  })
});
const SettingsPage = () => {
  (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useFocusWhenNavigate */ .go)();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
  const { submit, data, isLoading } = (0,_hooks_useDocumentation__WEBPACK_IMPORTED_MODULE_5__/* .useDocumentation */ .f)();
  const [passwordShown, setPasswordShown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const { allowedActions } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useRBAC */ .ss)(_constants__WEBPACK_IMPORTED_MODULE_4__/* .PERMISSIONS */ ._);
  const handleUpdateSettingsSubmit = (body) => {
    submit.mutate({
      prefix: data?.prefix,
      body
    });
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Main */ .o, null, isLoading ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .LoadingIndicatorPage */ .dO, null, "Plugin settings are loading") : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    formik__WEBPACK_IMPORTED_MODULE_2__/* .Formik */ .J9,
    {
      initialValues: {
        restrictedAccess: data?.documentationAccess.restrictedAccess || false,
        password: ""
      },
      onSubmit: handleUpdateSettingsSubmit,
      validationSchema: schema
    },
    ({
      handleSubmit,
      values,
      handleChange,
      errors,
      setFieldTouched,
      setFieldValue,
      dirty
    }) => {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .Form */ .l0, { noValidate: true, onSubmit: handleSubmit }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .HeaderLayout */ .T,
        {
          title: formatMessage({
            id: (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .getTrad */ .O)("plugin.name"),
            defaultMessage: "Documentation"
          }),
          subtitle: formatMessage({
            id: (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .getTrad */ .O)("pages.SettingsPage.header.description"),
            defaultMessage: "Configure the documentation plugin"
          }),
          primaryAction: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Button */ .z,
            {
              type: "submit",
              startIcon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, null),
              disabled: !dirty && allowedActions.canUpdate
            },
            formatMessage({
              id: (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .getTrad */ .O)("pages.SettingsPage.Button.save"),
              defaultMessage: "Save"
            })
          )
        }
      ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .ContentLayout */ .D, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .Box */ .x,
        {
          background: "neutral0",
          hasRadius: true,
          shadow: "filterShadow",
          paddingTop: 6,
          paddingBottom: 6,
          paddingLeft: 7,
          paddingRight: 7
        },
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .k, { direction: "column", alignItems: "stretch", gap: 4 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Typography */ .Z, { variant: "delta", as: "h2" }, formatMessage({
          id: "global.settings",
          defaultMessage: "Settings"
        })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_16__/* .Grid */ .r, { gap: 4 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_17__/* .GridItem */ .P, { col: 6, s: 12 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          _strapi_design_system__WEBPACK_IMPORTED_MODULE_18__/* .ToggleInput */ .s,
          {
            name: "restrictedAccess",
            label: formatMessage({
              id: (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .getTrad */ .O)("pages.SettingsPage.toggle.label"),
              defaultMessage: "Restricted Access"
            }),
            hint: formatMessage({
              id: (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .getTrad */ .O)("pages.SettingsPage.toggle.hint"),
              defaultMessage: "Make the documentation endpoint private"
            }),
            checked: values.restrictedAccess,
            onChange: () => {
              if (values.restrictedAccess === true) {
                setFieldValue("password", "", false);
                setFieldTouched("password", false, false);
              }
              setFieldValue("restrictedAccess", !values.restrictedAccess, false);
            },
            onLabel: "On",
            offLabel: "Off"
          }
        )), values.restrictedAccess && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_17__/* .GridItem */ .P, { col: 6, s: 12 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          _strapi_design_system__WEBPACK_IMPORTED_MODULE_19__/* .TextInput */ .o,
          {
            label: formatMessage({
              id: "global.password",
              defaultMessage: "Password"
            }),
            name: "password",
            placeholder: "**********",
            type: passwordShown ? "text" : "password",
            value: values.password,
            onChange: handleChange,
            error: errors.password ? formatMessage({
              id: errors.password,
              defaultMessage: "Invalid value"
            }) : null,
            endAction: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              FieldActionWrapper,
              {
                onClick: (e) => {
                  e.stopPropagation();
                  setPasswordShown((prev) => !prev);
                },
                label: formatMessage(
                  passwordShown ? {
                    id: "Auth.form.password.show-password",
                    defaultMessage: "Show password"
                  } : {
                    id: "Auth.form.password.hide-password",
                    defaultMessage: "Hide password"
                  }
                )
              },
              passwordShown ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, null) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, null)
            )
          }
        ))))
      )));
    }
  ));
};
const FieldActionWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .ZP)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_23__/* .FieldAction */ .E))`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({ theme }) => theme.colors.neutral600};
    }
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsPage);


/***/ }),

/***/ 35326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pluginId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52809);

const getTrad = (id) => `${_pluginId__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z}.${id}`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTrad);


/***/ }),

/***/ 10104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* reexport safe */ _getTrad__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _getTrad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35326);



/***/ }),

/***/ 34726:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ ContentLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16607);



const ContentLayout = ({ children }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .x, { paddingLeft: 10, paddingRight: 10, children: children }));
};




/***/ }),

/***/ 90731:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T: () => (/* binding */ HeaderLayout)
});

// UNUSED EXPORTS: BaseHeaderLayout

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(1565);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/hooks/useElementOnScreen.mjs


const useElementOnScreen = (options) => {
    const containerRef = (0,react.useRef)(null);
    const [isVisible, setIsVisible] = (0,react.useState)(true);
    const callback = ([entry]) => {
        setIsVisible(entry.isIntersecting);
    };
    (0,react.useEffect)(() => {
        const containerEl = containerRef.current;
        const observer = new IntersectionObserver(callback, options);
        if (containerEl) {
            observer.observe(containerRef.current);
        }
        return () => {
            if (containerEl) {
                observer.disconnect();
            }
        };
    }, [containerRef, options]);
    return [containerRef, isVisible];
};



// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var dist = __webpack_require__(79698);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/hooks/useResizeObserver.mjs



const useResizeObserver = (sources, onResize) => {
    const handleResize = (0,dist/* useCallbackRef */.W)(onResize);
    (0,react.useLayoutEffect)(() => {
        const resizeObs = new ResizeObserver(handleResize);
        if (Array.isArray(sources)) {
            sources.forEach((source) => {
                if (source.current) {
                    resizeObs.observe(source.current);
                }
            });
        }
        else if (sources.current) {
            resizeObs.observe(sources.current);
        }
        return () => {
            resizeObs.disconnect();
        };
    }, [sources, handleResize]);
};



// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(16607);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(96987);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(10574);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs









const HeaderLayout = (props) => {
    const baseHeaderLayoutRef = (0,react.useRef)(null);
    const [headerSize, setHeaderSize] = (0,react.useState)(null);
    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: 0,
    });
    useResizeObserver(containerRef, () => {
        if (containerRef.current) {
            setHeaderSize(containerRef.current.getBoundingClientRect());
        }
    });
    (0,react.useEffect)(() => {
        if (baseHeaderLayoutRef.current) {
            setHeaderSize(baseHeaderLayoutRef.current.getBoundingClientRect());
        }
    }, [baseHeaderLayoutRef]);
    return ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)("div", { style: { height: headerSize?.height }, ref: containerRef, children: isVisible && (0,jsx_runtime.jsx)(BaseHeaderLayout, { ref: baseHeaderLayoutRef, ...props }) }), !isVisible && (0,jsx_runtime.jsx)(BaseHeaderLayout, { ...props, sticky: true, width: headerSize?.width })] }));
};
HeaderLayout.displayName = 'HeaderLayout';
const StickyBox = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x)) `
  width: ${({ width }) => (width ? `${width / 16}rem` : undefined)};
  z-index: ${({ theme }) => theme.zIndices[1]};
`;
const BaseHeaderLayout = react.forwardRef(({ navigationAction, primaryAction, secondaryAction, subtitle, title, sticky, width, ...props }, ref) => {
    const isSubtitleString = typeof subtitle === 'string';
    if (sticky) {
        return ((0,jsx_runtime.jsx)(StickyBox, { paddingLeft: 6, paddingRight: 6, paddingTop: 3, paddingBottom: 3, position: "fixed", top: 0, right: 0, background: "neutral0", shadow: "tableShadow", width: width, "data-strapi-header-sticky": true, children: (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { justifyContent: "space-between", children: [(0,jsx_runtime.jsxs)(Flex/* Flex */.k, { children: [navigationAction && (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingRight: 3, children: navigationAction }), (0,jsx_runtime.jsxs)(Box/* Box */.x, { children: [(0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "beta", as: "h1", ...props, children: title }), isSubtitleString ? ((0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600", children: subtitle })) : (subtitle)] }), secondaryAction ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 4, children: secondaryAction }) : null] }), (0,jsx_runtime.jsx)(Flex/* Flex */.k, { children: primaryAction ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 2, children: primaryAction }) : undefined })] }) }));
    }
    return ((0,jsx_runtime.jsxs)(Box/* Box */.x, { ref: ref, paddingLeft: 10, paddingRight: 10, paddingBottom: 8, paddingTop: navigationAction ? 6 : 8, background: "neutral100", "data-strapi-header": true, children: [navigationAction ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingBottom: 2, children: navigationAction }) : null, (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { justifyContent: "space-between", children: [(0,jsx_runtime.jsxs)(Flex/* Flex */.k, { minWidth: 0, children: [(0,jsx_runtime.jsx)(Typography/* Typography */.Z, { as: "h1", variant: "alpha", ...props, children: title }), secondaryAction ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 4, children: secondaryAction }) : null] }), primaryAction] }), isSubtitleString ? ((0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "epsilon", textColor: "neutral600", as: "p", children: subtitle })) : (subtitle)] }));
});




/***/ }),

/***/ 40720:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1565);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16607);




const MainWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)((0,_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x)) `
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`;
const Main = ({ labelledBy = 'main-content-title', ...props }) => {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MainWrapper, { "aria-labelledby": labelledBy, as: "main", id: "main-content", tabIndex: -1, ...props });
};




/***/ })

}]);