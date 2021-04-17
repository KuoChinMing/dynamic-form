export default (camel) => {
  return camel.replace(/([A-Z])/g, (m) => " " + m.toLowerCase());
};
