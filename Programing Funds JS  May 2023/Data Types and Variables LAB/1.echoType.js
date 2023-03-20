function echo(ninenizin) {
  if (typeof ninenizin == "string" || typeof ninenizin == "number") {
    console.log(typeof ninenizin);
    console.log(ninenizin);
  } else {
    console.log(typeof ninenizin);
    console.log("Parameter is not suitable for printing");
  }
}

echo("Hello, JavaScript!");
echo(18);
echo(null);
