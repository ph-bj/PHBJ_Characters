1. **Define Location Colors:** Add a color mapping for `LocationType` in `src/locations.ts` or directly within `src/components/HometownMap.tsx`.
2. **Update HometownMap Props:** Allow passing `novelLocations` to `HometownMap.tsx` and process them alongside character hometowns.
3. **Modify Map Rendering:** Adjust the map to render all `novelLocations` based on `coordinates.json`, color-coded by their type, instead of just displaying character origins. Add a legend to differentiate the types.
4. **Pre-commit Checks:** Run `npm install`, `npm run lint`, and `npx tsc --noEmit`. Follow the pre-commit instructions.
5. **Submit:** Submit changes.
