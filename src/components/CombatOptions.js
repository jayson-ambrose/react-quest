import React from "react";

function CombatOptions({ optionText }) {
  return (
    <div>
      <ul className="list-unstyled list-group list-group-horizontal">
        <li className="combat-options p-2 my-1 border rounded w-100">
          {optionText.optText}
        </li>
      </ul>
    </div>
  );
}

export default CombatOptions;
