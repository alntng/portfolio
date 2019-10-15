import React from "react";

export default function interests() {
  return (
    <div>
      <h5>
        <i>
          I'm also into a wide range of music. Here's a bit of what I've been
          jamming to recently. Feel free to{" "}
          <a
            href="mailto:atang8013@gmail.com?subject=Check out this song"
            target="_blank"
          >
            share some new tunes!
          </a>
        </i>
      </h5>
      <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1EpyxjexYAD9iN"
        width="300"
        height="380"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}
