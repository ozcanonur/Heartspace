let gtag;

if (typeof window !== `undefined`) {
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    window.dataLayer.push(arguments);
  }

  gtag('js', new Date());
  gtag('config', 'G-HH650H7WVM');
}

export default gtag;
