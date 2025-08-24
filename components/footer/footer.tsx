export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white py-6 mt-12 shadow-md shadow-neutral-900/30">
      <div className="container mx-auto px-4 text-center text-neutral-400">
        <p className="text-sm">
          © {currentYear} Auro Neto. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
