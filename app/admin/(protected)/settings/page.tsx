import { Settings, Construction } from "lucide-react";

export default function SettingsPage() {
    return (
        <div className="flex min-h-[80vh] items-center justify-center">
            <div className="max-w-2xl text-center">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-yellow-100">
                    <Construction
                        size={48}
                        className="text-yellow-600"
                    />
                </div>

                <div className="mb-4 flex items-center justify-center gap-3">
                    <Settings
                        size={32}
                        className="text-slate-700"
                    />

                    <h1 className="text-4xl font-bold text-slate-900">
                        Settings
                    </h1>
                </div>

                <h2 className="mb-4 text-2xl font-semibold text-slate-700">
                    Under Development
                </h2>

                <p className="text-lg leading-8 text-slate-500">
                    The Settings module is currently being
                    developed and will be available soon.
                    Future updates will allow administrators
                    to manage website settings, account
                    preferences, contact information, and
                    other CMS configurations from this panel.
                </p>

                <div className="mt-10 inline-flex rounded-full border border-yellow-200 bg-yellow-50 px-6 py-3 text-sm font-medium text-yellow-700">
                    🚧 Coming Soon
                </div>
            </div>
        </div>
    );
}