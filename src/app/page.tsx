import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <Link href="/ticketpreview">
        <h1>Ticket Preview</h1>
      </Link>
    </div>
  );
}
