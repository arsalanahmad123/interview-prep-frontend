import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ChatHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
      <h1 className="text-xl font-semibold">Mock Chat</h1>
      <Link href={"/dashboard"}>
        <Button
          variant="outline"
          size="sm"
          className="ml-auto gap-1.5 text-sm"
        >
          Dashboard
        </Button>
      </Link>
    </header>
  )
}
