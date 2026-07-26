import { characters } from '../src/data';
for (const id of ['char-39','char-41','char-66','char-76','char-78','char-144']) {
  const c = characters.find(ch => ch.id === id);
  console.log(id, c ? `${c.name} [${c.role}] - ${c.description}` : 'NOT FOUND (merged away)');
}
