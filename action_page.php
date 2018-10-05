<html>
<head>
	<title>Idiv Times test - Signing Up</title>

	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="./index.css" rel="stylesheet">
</head>
<body>

<nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <a class="navbar-brand text-light" href="/index.html">The Idiv Times</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link text-light" href="/catalog.html">Catalog <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-light" href="/staff.html">Staff</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-light" href="/contact.html">Contact</a>
      </li>
    </ul>
  </div>
</nav>

Welcome <?php echo $_POST["name"]; ?><br>
Your email address is: <?php echo $_POST["email"]; ?>

</body>
</html>