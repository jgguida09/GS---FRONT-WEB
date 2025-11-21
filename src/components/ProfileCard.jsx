import React from 'react'

function ProfileCard({ profile, onClick }) {
  return (
    <article
      onClick={onClick}
      className="group cursor-pointer rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-4 flex flex-col gap-3 shadow-sm hover:shadow-md hover:border-indigo-400/80 transition-all"
    >
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400 flex items-center justify-center text-sm font-semibold text-white shrink-0">
          {profile.avatarInitials}
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
            {profile.name}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
            {profile.role}
          </p>
          <p className="text-[11px] text-slate-400 dark:text-slate-500">
            {profile.city} • {profile.area}
          </p>
        </div>
      </div>

      <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3">
        {profile.summary}
      </p>

      <div className="mt-auto flex flex-wrap gap-1.5">
        {profile.skills.slice(0, 4).map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center rounded-full bg-indigo-50 dark:bg-slate-800/80 border border-indigo-100 dark:border-slate-700 px-2 py-0.5 text-[10px] font-medium text-indigo-600 dark:text-indigo-300"
          >
            {skill}
          </span>
        ))}
        {profile.skills.length > 4 && (
          <span className="text-[10px] text-slate-400 dark:text-slate-500">
            +{profile.skills.length - 4}
          </span>
        )}
      </div>
    </article>
  )
}

export default ProfileCard
