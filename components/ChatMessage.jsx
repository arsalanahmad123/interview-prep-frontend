export default function ChatMessage({ type, text,typing }) {
  return (
    <div className={`space-y-5 ${type === 'user' ? 'flex justify-end' : ''}`}>
      {type === 'question' && (
        <div className="flex gap-x-2 sm:gap-x-4">
          <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700">
            <h2 className="font-medium text-gray-800 dark:text-white">{typing ? 'Typing ....' : text}</h2>
          </div>
        </div>
      )}
      {type === 'user' && (
        <div className="max-w-2xl ms-auto flex justify-end gap-x-2 sm:gap-x-4">
          <div className="grow text-end space-y-3">
            <div className="inline-block bg-black rounded-lg p-4 shadow-sm">
              <p className="text-sm text-white">{text}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
