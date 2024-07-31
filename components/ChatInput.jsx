import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CornerDownLeft } from "lucide-react"

export default function ChatInput({ value, onChange, onSubmit, disabled }) {
  return (
    <form
      onSubmit={onSubmit}
      className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
    >
      <Label htmlFor="message" className="sr-only">
        Message
      </Label>
      <Textarea
        id="message"
        placeholder="Type your message here..."
        className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
        value={value}
        onChange={onChange}
      />
      <div className="flex items-center p-3 pt-0">
        <Button type="submit" size="sm" className="ml-auto gap-1.5" disabled={disabled}>
          Send Message
          <CornerDownLeft className="size-3.5" />
        </Button>
      </div>
    </form>
  )
}
