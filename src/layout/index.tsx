import { Outlet } from '@tanstack/react-router'

// COMPONENTS
import { Navbar } from './navbar'
import { Footer } from './footer'

export const Layout = () => {
    return (
        <div className="min-h-screen bg-background font-sans text-foreground antialiased">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
