function Footer() {
    return (
      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Dev.Teja. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <a className="text-xs text-gray-500 dark:text-gray-400 hover:underline underline-offset-4" href="#">
              Terms of Service
            </a>
            <a className="text-xs text-gray-500 dark:text-gray-400 hover:underline underline-offset-4" href="#">
              Privacy
            </a>
          </nav>
        </div>
      </footer>
    )
  }
  
  export default Footer
  
  