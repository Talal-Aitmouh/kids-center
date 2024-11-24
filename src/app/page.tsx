import { TopBar } from '../components/top-bar'

export default function Home() {
  return (
    <div>
      <TopBar />
      <main className="container mx-auto mt-8 px-4">
        <h1 className="text-2xl font-bold">Welcome to Our Website</h1>
        <p className="mt-4">This is the main content of the page.</p>
      </main>
    </div>
  )
}

