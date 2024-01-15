((window: any) => {
  const component = () => {
    return React.createElement("div", {}, "Hello World");
  };
  window?.extensionsAPI?.registerResourceExtension(
   component,
   "argoproj.io'/'Application",
   "argoproj.io'/'Application",
   "Hello World",
   { icon: "fa-solid fa-not-equal" }
 );
})(window);