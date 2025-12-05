import Link from "next/link";
export default function AdminSidebar() {
    return (
        <div className="fixed w-100 py-8 h-screen dark:bg-zinc-900 bg-zinc-100" aria-label="Admin Sidebar">
            <p className="text-center text-lg font-semibold">
                Role Name
            </p>
            <nav className="mt-8">
                <ul className="flex flex-col ">
                    <li>
                        <Link href="#"  className="block text-center p-4 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-[5]">
                            test 1
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="block text-center p-4 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-[5]">
                            test 2
                        </Link>
                    </li>
                </ul>
            </nav> 
        </div>
         
    );
}