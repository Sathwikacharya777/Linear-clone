// Notice: No "use client". This is a Server Component.
export default async function TeamPage() {
  // NEXT.JS SPECIAL BEHAVIOR: Direct fetch in the component!
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 3600 } // NEXT.JS BEHAVIOR: Incremental Static Regeneration (ISR)
  });
  const team = await res.json();

  return (
    <main className="max-w-[1200px] mx-auto px-6 pt-32 text-white">
      <h1 className="text-4xl font-bold tracking-tighter mb-10">Engineering Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {team.map((member: any) => (
          <div key={member.id} className="p-6 bg-zinc-900/50 border border-white/5 rounded-2xl">
            <h3 className="text-lg font-bold">{member.name}</h3>
            <p className="text-zinc-500 text-sm">{member.company.catchPhrase}</p>
          </div>
        ))}
      </div>
    </main>
  );
}