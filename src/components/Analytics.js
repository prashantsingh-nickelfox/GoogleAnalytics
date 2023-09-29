export const myEvent = (event, params = {}) => {
  let param = { event: event, ...params };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(param);
  console.log(window.dataLayer);
};

export const getProduct = (id, name, item) => {
  if (typeof window != "undefined") {
    myEvent("add_items", {
      id: id,
      [name]: item,
    });
  }
};

export const homePage = () => {
  myEvent("homepage_view", {
    url: window.location.href,
  });
};

// export const myEvent = (event, params = {}) => {
//   if (window && window.gtag) {
//     window.gtag("event", event, params);
//   }
// };

// export const getProduct = (id, name, item) => {
//   myEvent("add_to_cart", { itemId: id, [name]: item });
// };
