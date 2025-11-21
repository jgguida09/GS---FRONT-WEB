import React from 'react'

function Header() {
  return (
    <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200/70 dark:border-slate-800 sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400 flex items-center justify-center shadow">
            <span className="text-xs font-semibold text-white tracking-tight">
              FW
            </span>
          </div>
          <div>
            <h1 className="text-base md:text-lg font-semibold text-slate-900 dark:text-slate-100">
              FutureWork Network
            </h1>
            <p className="text-[11px] md:text-xs text-slate-500 dark:text-slate-400">
              O futuro do trabalho – conectando pessoas, competências e propósito
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400">
          <span className="px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
            GS 2º Sem/2025 – Front-End Design · FIAP
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
