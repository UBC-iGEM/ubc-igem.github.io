import { NavLink } from "react-router-dom";

export default function Button({ text, link }) {
  return (
    <div>
      <a href={link} target="_blank">
        <p>{text}</p>
      </a>
    </div>
  );
}
