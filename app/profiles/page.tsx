import Link from "next/link";

export default function Profiles() {
  const profiles = ["john", "josh"];
  return (
    <ul>
      {profiles.map((profile, index) => (
        <li key={index}>
          <Link href={"/profiles/" + profile}>{profile.toUpperCase()}</Link>
        </li>
      ))}
    </ul>
  );
}
