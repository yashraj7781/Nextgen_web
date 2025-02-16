import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      <img 
        src="/logo1.png" 
        alt="logo" 
        width="120" 
        height="auto" 
      />
    </Link>
  );
}
