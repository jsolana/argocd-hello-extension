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
 window?.extensionsAPI?.registerResourceExtension(
  component,
  "*",
  "*",
  "Nice extension"
);
window?.extensionsAPI?.registerResourceExtension(component, '', 'Pod', 'Metrics1', { icon: "fa fa-chart-area" });
window?.extensionsAPI?.registerResourceExtension(component, '*', 'Deployment', 'Metrics2', { icon: "fa fa-chart-area" });
})(window);

