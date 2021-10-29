modules.exports = {
  secret : process.env.NODE_ENV === 'production' ? process.env.SECRET : "ODSPADIAOPIDIAODIIKVOCLVLKIOJFUN56S4FD456F4D454D748V48S",
  api: process.env.NODE_ENV === 'production' ? "https://api.loja-teste.ampliee.com" : "https://localhost:3000",
  loja: process.env.NODE_ENV === 'production' ? "http://api.loja-teste.ampliee.com" : "http://localhost:8000",
}