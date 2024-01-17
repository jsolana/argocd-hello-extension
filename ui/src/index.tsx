((window: any) => {
  const component = () => {
    return React.createElement("div", {}, "Hello World");
  };
  window?.extensionsAPI?.registerResourceExtension(
   component,
   "argoproj.io/Application",
   "argoproj.io/Application",
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
window?.extensionsAPI?.registerResourceExtension(component, '*', 'Application', 'Metrics3', { icon: "fa fa-chart-area" });
window?.extensionsAPI?.registerResourceExtension(component, 'Application', 'Application', 'Metrics4', { icon: "fa fa-chart-area" });


const flyoutComponent = (props: {
  openFlyout: () => any
}) => {
return React.createElement(
  "div",
  { 
    style: { padding: "10px" },
    onClick: () => props.openFlyout()
  },
  "Hello World"
);
};
const flyout = () => {
return React.createElement(
  "div",
  { style: { padding: "10px" } },
  "This is a flyout"
);
};
window.extensionsAPI.registerStatusPanelExtension(
  flyoutComponent,
"My Extension",
"my_extension",
flyout
);


})(window);

