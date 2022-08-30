function generateUrl() {
  //initialize values
  let charSet =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let url = "";
  const createdTime = String(Date.now());

  //generate 1st 3 random characters
  for (i = 0; i < 3; i++) {
    url = url.concat(charSet[Math.floor(Math.random() * 61)]);
  }

  //get next 4 characters based on following double digit numbers in createdTime
  for (i = 0; i < 4; i++) {
    let source = createdTime.slice(i * 2 + 1, i * 2 + 3);
    source = source * Math.floor(Math.random() * 9);
    url = url.concat(charSet[source % 61]);
  }

  //get last character based on last digits in createdTime
  let lastSource = createdTime.slice(11);
  url = url.concat(charSet[lastSource % 61]);
  return url;
}

export default generateUrl;
