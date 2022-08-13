const navigation = `
       <div class="container-fluid">
        <a class="navbar-brand ms-4 me-5" href="/" title="Return to homepage"
          ><i class="fa-solid fa-bug-slash"></i> Jane-Mar</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                href="/"
                title="Return to homepage"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="/about.html"
                title="Go to about Evheniia page"
                >About</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="/work.html"
                title="Go to Evheniia's projects"
                >Projects</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact.html" title="Contact Evheniia"
                >Contacts</a
              >
            </li>
          </ul>
        </div>
      </div>
`;

let element = document.createElement("nav");
element.classList.add(
  "navbar",
  "navbar-expand-lg",
  "navbar-dark",
  "sticky-top"
);
element.setAttribute("style", "background-color: #4b4a5a");
element.innerHTML = navigation;
document.querySelector("body").prepend(element);
