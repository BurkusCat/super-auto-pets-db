import React from "react";
import { Pet as PetType, Ability as AbilityType } from "../../database";

export function Pet(props: { pet: PetType }) {
  return (
    <div className="bg-white rounded-xl shadow-md flex flex-col items-stretch justify-start">
      <div className="p-3 flex flex-row justify-between">
        <div className="text-xl font-medium text-black">{props.pet.name}</div>
        <div className="">
          ⚔️ {props.pet.baseAttack} / 💖 {props.pet.baseHp}
        </div>
      </div>
      <div className="p-3">
        {(props.pet.packs || []).map((pack, index) => (
          <span
            key={index}
            className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
          >
            {pack}
          </span>
        ))}
      </div>
      {props.pet.level1Ability ? (
        <Ability level={1} ability={props.pet.level1Ability} />
      ) : null}
      {props.pet.level2Ability ? (
        <Ability level={2} ability={props.pet.level2Ability} />
      ) : null}
      {props.pet.level3Ability ? (
        <Ability level={3} ability={props.pet.level3Ability} />
      ) : null}
    </div>
  );
}

function Ability(props: { level: number; ability: AbilityType }) {
  return (
    <div className="text-gray-500 p-3 border-t">
      {LevelLabel(props.level)} {props.ability.description}
    </div>
  );
}

function LevelLabel(level: number) {
  switch (level) {
    case 1:
      return "1️⃣";
    case 2:
      return "2️⃣";
    case 3:
      return "3️⃣";
    default:
      return "❗";
  }
}
