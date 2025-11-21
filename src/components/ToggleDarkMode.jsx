import React from 'react'

function ToggleDarkMode({ darkMode, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="
        inline-flex items-center gap-2
        rounded-full border
        border-[#d9d0ba] dark:border-[#222]
        bg-beige dark:bg-darkCard
        px-3 py-1.5 text-xs font-medium
        text-textDark dark:text-textLight
        shadow-sm transition-colors
        hover:border-black dark:hover:border-beige
      "
    >
      <span
        className={
          'inline-flex h-4 w-4 items-center justify-center rounded-full text-[10px] transition-colors ' +
          (darkMode
            ? 'bg-darkBg text-textLight'   // ícone no modo escuro
            : 'bg-textDark text-beige'     // ícone no modo claro
          )
        }
      >
        {darkMode ? '☾' : '☼'}
      </span>

      <span>{darkMode ? 'Modo escuro' : 'Modo claro'}</span>
    </button>
  )
}

export default ToggleDarkMode
