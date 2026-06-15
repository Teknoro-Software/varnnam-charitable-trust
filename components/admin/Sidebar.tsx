"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    LayoutDashboard,
    Newspaper,
    Settings,
    LogOut,
} from "lucide-react";

export default function AdminSidebar() {
    const pathname = usePathname();
    const router = useRouter();

    async function handleLogout() {
        const res = await fetch(
            "/api/admin/logout",
            {
                method: "POST",
            }
        );

        if (res.ok) {
            router.push("/admin/login");
            router.refresh();
        }
    }

    const menuItems = [
        {
            name: "Dashboard",
            href: "/admin/dashboard",
            icon: LayoutDashboard,
        },
        {
            name: "Latest Works",
            href: "/admin/latest-works",
            icon: Newspaper,
        },
        {
            name: "Settings",
            href: "/admin/settings",
            icon: Settings,
        },
    ];

    return (
        <aside className="sticky top-0 flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-900 text-white">
            {/* Logo */}
            <div className="border-b border-slate-800 px-6 py-6">
                <div className="flex items-center gap-3">
                    <img
                        src="/logo.png"
                        alt="Varnam Logo"
                        className="h-12 w-12 rounded-full bg-white p-1 object-cover"
                    />

                    <div>
                        <h2 className="text-lg font-bold">
                            Varnam Admin
                        </h2>

                        <p className="text-xs text-slate-400">
                            Charitable Trust CMS
                        </p>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6">
                <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Main Menu
                </p>

                <div className="space-y-2">
                    {menuItems.map((item) => {
                        const Icon = item.icon;

                        const active =
                            pathname === item.href ||
                            pathname.startsWith(item.href);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${active
                                        ? "bg-red-600 text-white"
                                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                    }`}
                            >
                                <Icon size={20} />
                                <span>{item.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Footer */}
            <div className="border-t border-slate-800 p-4">
                <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-red-400"
                >
                    <LogOut size={20} />
                    <span>Logout</span>
                </button>

                <p className="mt-4 text-center text-xs text-slate-500">
                    © {new Date().getFullYear()} Varnam Trust
                </p>
            </div>
        </aside>
    );
}