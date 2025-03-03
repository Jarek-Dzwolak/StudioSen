import React from "react";

function Location() {
  return (
    <section
      id="Location"
      className="py-12"
      style={{ backgroundColor: "rgb(244, 244, 234)" }}
    >
      <div className="container mx-auto px-4">
        <div className="mt-12">
          <iframe
            className="w-full h-96 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1582.0641217647527!2d21.856429!3d49.675791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713ad3b70c9b803%3A0x7b56c4c8b36fe590!2sYour%20Location!5e0!3m2!1sen!2spl!4v1646154810337!5m2!1sen!2spl"
            allowFullScreen
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Location;
