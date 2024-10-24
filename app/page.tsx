import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Los datos de la muerte</h1>
      <div>
        <div>
          <Link href="/login">
            <button>Login</button>
          </Link>
        </div>
        <div>
          <Link href="/registrati">
            <button>Registrati</button>
          </Link>
        </div>
      </div>

    </div>
  );
}
