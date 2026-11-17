import directory from '../content/otc-global-destinations.json' with {type:'json'};
const aliases=new Map();for(const d of directory.destinations)for(const name of [d.code,d.name,d.en,...d.aliases])aliases.set(name.trim().toLowerCase(),d);
export function destinationFor(value){return aliases.get(String(value||'').trim().toLowerCase())||null}
export function normalizeDestination(value){const text=String(value||'').trim();return destinationFor(text)?.name||text}
