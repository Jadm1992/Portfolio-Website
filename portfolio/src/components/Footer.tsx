export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
      <div className="flex justify-center space-x-6">
        <a
          href="https://linkedin.com/in/devyonmiller"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-white transition"
        >
          <i className="fab fa-linkedin text-2xl" />
        </a>
        <a
          href="https://github.com/jadm1992"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-white transition"
        >
          <i className="fab fa-github text-2xl" />
        </a>
        <a
          href="mailto:devinmillertech@gmail.com"
          aria-label="Email"
          className="hover:text-white transition"
        >
          <i className="fas fa-envelope text-2xl" />
        </a>
      </div>
      <p className="mt-4">&copy; {new Date().getFullYear()} Devin Miller. All rights reserved.</p>
    </footer>
  );
}
