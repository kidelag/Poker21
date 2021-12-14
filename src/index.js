const render = (elem) => {
  const prevHtml = document.getElementById("app").innerHTML;
  document.getElementById("app").innerHTML = prevHtml + elem;
};

const App = async () => {
  render(
    `
      ${await Cards(3)}
    `
  );
};

App();
