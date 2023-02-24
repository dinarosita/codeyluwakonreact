import React from "react";

export default function ListKey() {
  const todoId = String.raw`const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);`;

const todoNoId = String.raw`const todoItems = todos.map((todo, index) =>
<li key={index}>
  {todo.text}
</li>
);`
  return (
    <>
      <h2>Listing's Key Property</h2>
      <div>
        <p>
          Each child in a list should have a unique "key" prop. You will see a
          warning on this in the console if you generate a list without key.
          Keys Have a very important role in React listing. It helps React
          identify which items have changed, are added, or are removed. It's
          important to give the elements inside array a stable identity.
        </p>
      </div>

      <div>
        <h3>Unique key values</h3>
        <p>
          Keys need to be unique among the list elements. Where do we get hese
          keys?
        </p>
        <ul>
          <li>
            If the dataList comes with unique and stable id for each element, use that.
            <br />
            <pre>{todoId}</pre>
          </li>
          <li>
            If no such thing, generate using index. However this is not a very safe way because the order of data might change.<br/>
            <pre>{todoNoId}</pre>
          </li>
        </ul>
      </div>
    </>
  );
}
