import React from "react";

export default function index() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white rounded-pill">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="/#">
                HOME
              </a>
              <a class="nav-link" href="/#">
                ABOUT ME
              </a>
              <a class="nav-link" href="/#">
                EXPERIENCE
              </a>
              <a class="nav-link" href="/#">
                PROJECT
              </a>
              <a class="nav-link" href="/#">
                CONTACT ME
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
