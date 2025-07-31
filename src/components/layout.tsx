import type { PropsWithChildren } from "react";
import { Header } from "./header";
import { FaGithub } from "react-icons/fa";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className=" bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 py-12">
        <div className="container mx-auto px-4 text-center text-gray-200 mt-6">
          <p className="mb-4">Forged by: 🥃Lamar</p>
              <a
  href="https://github.com/Lamar-Glass"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white font-semibold rounded hover:bg-gray-700 transition duration-300"
>
  <FaGithub size={20} />
  GitHub
</a>
      
        </div>
      </footer>
    </div>
  );
}
