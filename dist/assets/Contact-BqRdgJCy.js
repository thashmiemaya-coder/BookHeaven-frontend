import { e as createLucideIcon, d as useSubmitContactMutation, j as jsxRuntimeExports, M as Mail, z as zt } from "./index-BtxuP7zD.js";
import { u as useForm } from "./index.esm-saVhEfjE.js";
import { S as Seo } from "./Seo-CTQV06H5.js";
import { M as MapPin } from "./map-pin-Xxv8PiCn.js";
import { S as Send } from "./send-DT5B-dD3.js";
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Phone = createLucideIcon("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);
function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [submitContact, { isLoading }] = useSubmitContactMutation();
  const onSubmit = async (data) => {
    var _a;
    try {
      await submitContact(data).unwrap();
      zt.success("Message sent! We'll get back to you soon.");
      reset();
    } catch (err) {
      zt.error(((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || "Failed to send message");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Seo, { title: "Contact Us", description: "Get in touch with the BookHaven team." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "section-title", children: "Get in Touch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-plum-500 dark:text-plum-400 mt-3", children: "Questions, feedback, or just want to talk books? We'd love to hear from you." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-5 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactInfo, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, {}), title: "Email", text: "hello@bookhaven.com" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactInfo, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, {}), title: "Phone", text: "+1 (555) 012-3456" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactInfo, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, {}), title: "Address", text: "221B Reader's Lane, Booktown, BK 10101" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "lg:col-span-3 card p-6 md:p-8 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5", children: "Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  className: "input",
                  placeholder: "Your name",
                  ...register("name", { required: "Name is required" })
                }
              ),
              errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 mt-1", children: errors.name.message })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  className: "input",
                  placeholder: "you@example.com",
                  ...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/, message: "Invalid email" } })
                }
              ),
              errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 mt-1", children: errors.email.message })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5", children: "Subject" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                className: "input",
                placeholder: "How can we help?",
                ...register("subject", { required: "Subject is required" })
              }
            ),
            errors.subject && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 mt-1", children: errors.subject.message })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-plum-700 dark:text-plum-300 mb-1.5", children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                rows: 5,
                className: "input resize-none",
                placeholder: "Your message...",
                ...register("message", { required: "Message is required", minLength: { value: 10, message: "Too short" } })
              }
            ),
            errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 mt-1", children: errors.message.message })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: isLoading, className: "btn-primary w-full", children: isLoading ? "Sending..." : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "Send Message ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 18 })
          ] }) })
        ] })
      ] })
    ] })
  ] });
}
const ContactInfo = ({ icon, title, text }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card p-5 flex items-start gap-4", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-11 w-11 shrink-0 place-items-center rounded-full bg-plum-100 dark:bg-plum-800 text-plum-700 dark:text-blush-400", children: icon }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-plum-900 dark:text-plum-100", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-plum-500 dark:text-plum-400 mt-0.5", children: text })
  ] })
] });
export {
  Contact as default
};
//# sourceMappingURL=Contact-BqRdgJCy.js.map
