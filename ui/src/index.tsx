((window: any) => {
  const component = () => {
    return React.createElement("div", {}, "Hello World");
  };
  window?.extensionsAPI?.registerResourceExtension(
   component,
   "argoproj.io",
   "Rollout",
   "Rollout",
   { icon: "fa-sharp fa-light fa-bars-progress fa-lg" }
 );
})(window);