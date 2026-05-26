1. **Import Requirements in `NetworkGraph.tsx`**
   - Import `useState` from `'react'`.
   - Import `Maximize` and `Minimize` icons from `'lucide-react'`.

2. **Add Fullscreen State and Body Scroll Lock**
   - Add `const [isFullscreen, setIsFullscreen] = useState(false);`
   - Add a `useEffect` hook to toggle `document.body.style.overflow = 'hidden'` when fullscreen is active, to prevent background scrolling.

3. **Update Container Classes**
   - Modify the main wrapper div to switch between its default classes (`w-full h-[400px] ... relative`) and fullscreen classes (`fixed inset-0 z-50 parchment overflow-hidden`).

4. **Add Fullscreen Toggle Button**
   - Add a `<button>` element inside the wrapper div, positioned at `absolute bottom-4 right-4` with a high z-index (`z-20`).
   - The button should display the `Maximize` icon when not in fullscreen and `Minimize` icon when in fullscreen.

5. **Pre-commit Steps**
   - Run tests and types checks to ensure no regressions.
