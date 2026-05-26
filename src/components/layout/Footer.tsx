import { content } from "@/lib/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-stone-200/60 dark:border-stone-800/40 bg-stone-100/40 dark:bg-stone-900/10 backdrop-blur-md mt-auto transition-colors duration-500">
      <div className="container mx-auto px-4 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-4">
        <p className="text-sm text-stone-600 dark:text-stone-400 text-center sm:text-left antialiased tracking-wide leading-relaxed">
          © {currentYear} Heïdi Al Ihmid Jeremia.{" "}
          <span className="block sm:inline mt-1 sm:mt-0 opacity-80 sm:opacity-100">
            {content.footer.all_rights}
          </span>
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-6 sm:gap-8">
          <a
            href="https://github.com/Innovat1k"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors duration-300 py-2 sm:py-1 group/link"
          >
            {content.footer.github}
            <span className="absolute bottom-1 sm:bottom-0 left-0 w-full h-px bg-amber-500 scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
          </a>

          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors duration-300 py-2 sm:py-1 group/link"
          >
            {content.footer.linkedin}
            <span className="absolute bottom-1 sm:bottom-0 left-0 w-full h-px bg-amber-500 scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
        </div>
      </div>
    </footer>
  );
}
