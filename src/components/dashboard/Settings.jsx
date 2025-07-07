// components/settings.jsx
import { LogOut } from 'lucide-react';

function Settings({ userInfo, onLogout }) {
    return (
        <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Settings</h2>

            <div className="space-y-6">
            {/* User Info */}
            <div className="flex items-center justify-between py-4 border-b border-gray-200">
                <div>
                <h3 className="text-lg font-medium text-gray-900">Logged in as</h3>
                <p className="text-gray-600">
                    {userInfo?.name || userInfo?.email || 'Loading...'}
                </p>
                {userInfo?.email && userInfo?.name && (
                    <p className="text-sm text-gray-500">{userInfo.email}</p>
                )}
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-xl font-bold">
                    {userInfo?.name
                    ? userInfo.name.charAt(0).toUpperCase()
                    : userInfo?.email
                    ? userInfo.email.charAt(0).toUpperCase()
                    : '?'}
                </span>
                </div>
            </div>

            {/* Logout Button */}
            <div className="pt-4">
                <button
                onClick={onLogout}
                className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors font-medium"
                >
                <LogOut size={20} />
                Logout
                </button>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Settings;
