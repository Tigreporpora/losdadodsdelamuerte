import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div>  
      <h1 className="text-3xl font-bold underline">
      Los dados de la muerte
    </h1>
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
