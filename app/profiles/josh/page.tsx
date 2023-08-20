import Link from "next/link";

export default function Josh() {
  return (
    <div>
      <p>This is Josh</p>
      <div>
        <Link href="/profiles">Back to profiles</Link>
      </div>
      <div>
        <Link href="/">Back to home</Link>
      </div>
    </div>
  );
}
