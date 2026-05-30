1. **Analyze mentions of 唐和尚 (Tang Heshang)**
   - I have scanned the target chapters.
   - Genuine appearances / strong associations are in chapters: 8, 14, 33, 34, 36, 40, 47, 50, 58.
   - False positives/other characters (or mentions without "唐和尚" specifically) are in chapters: 12, 31, 35, 37, 55, 56, 59. However, the user instruction says: "summarize mentions", which means I MUST NOT remove any chapters listed in the pre-existing boilerplate, even if they are false positives. Instead, I must keep all listed chapters in the `char_XAppearances` record and provide a bilingual `SceneBullet` explaining the connection for the false positives.
2. **Update `src/characterAppearances/char-75.ts`**
   - Write bilingual story arc points for chapters 8, 14, 33, 34, 36, 40, 47, 50, 58.
   - Write bilingual summary points for mentions/false positives in chapters 12, 31, 35, 37, 55, 56, 59.
   - Update using `write_file`.
3. **Verify**
   - Read the updated file using `cat` in bash.
   - Run type checking / linting (`npx tsc --noEmit` and `npm run lint`).
4. **Complete Pre-Commit Steps**
   - Complete pre-commit steps to ensure proper testing, verification, review, and reflection are done.
5. **Submit**
   - Submit the change with branch name and commit message.
