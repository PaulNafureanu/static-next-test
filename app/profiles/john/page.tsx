import Link from "next/link";

export default function John() {
  return (
    <div>
      <p>This is John</p>
      <div>
        <Link href="/profiles">Back to profiles</Link>
      </div>
      <div>
        <Link href="/">Back to home</Link>
      </div>
    </div>
  );
}
