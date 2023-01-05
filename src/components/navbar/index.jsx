import React from "react";
import "./style.css";

export default function index() {
  return (
    <div class="pt-0">
      <nav class="navbar navbar-expand-lg navbar-light bg-white rounded-bottom">
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
          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav">
              <a class="nav-link li" aria-current="page" href="/">
                <p class="nav-text text-dark">HOME</p>
              </a>
              <a class="nav-link li" href="/home">
                <p class="nav-text text-dark">ABOUT ME</p>
              </a>
              <a class="nav-link li" href="/experience">
                <p class="nav-text text-dark">EXPERIENCE</p>
              </a>
              <a class="nav-link li" href="/projects">
                <p class="nav-text text-dark">PROJECT</p>
              </a>
              <a class="nav-link li" href="/contact">
                <p class="nav-text text-dark">CONTACT ME</p>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
