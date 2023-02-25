import React from "react";

export default function FormOnsubmit() {
  return (
    <>
      <h2>Form: onSubmit property</h2>
      <div>
        <p>
          By default, <code>onSubmit</code> is triggered when a button within form element is
          triggered. However we don't want the browser's default behaviour, that is  sending request
          to the server that is serving the page automatically. but we don't want that. We want to prevent this default behaviour and run our own logic. It might still involve sending http request later, but we want
          that to happen behind the scene without reloading the page. Which is
          what happened if the browser do its default thing.
        </p>
      </div>
    </>
  );
}
