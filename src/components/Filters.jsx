import React from 'react'

function Filters({
  search,
  onSearchChange,
  areas,
  areaFilter,
  onAreaChange,
  cities,
  cityFilter,
  onCityChange,
  technologies,
  techFilter,
  onTechChange,
}) {
  return (
    <section className="bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 rounded-2xl px-4 py-4 md:px-5 md:py-5 shadow-sm">
      <div className="grid gap-3 md:grid-cols-4 items-end">
        <div className="md:col-span-2">
          <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1.5">
            Buscar por nome, cargo ou palavra-chave
          </label>
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Ex: frontend, dados, diversidade, impacto social..."
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/60 pl-9 pr-3 py-2 text-xs md:text-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1.5">
            Área de atuação
          </label>
          <select
            value={areaFilter}
            onChange={(e) => onAreaChange(e.target.value)}
            className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/60 px-3 py-2 text-xs md:text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            {areas.map((area) => (
              <option key={area} value={area}>
                {area === 'todos' ? 'Todas as áreas' : area}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1.5">
              Cidade
            </label>
            <select
              value={cityFilter}
              onChange={(e) => onCityChange(e.target.value)}
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/60 px-3 py-2 text-[11px] md:text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city === 'todas' ? 'Todas' : city}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1.5">
              Tecnologia
            </label>
            <select
              value={techFilter}
              onChange={(e) => onTechChange(e.target.value)}
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/60 px-3 py-2 text-[11px] md:text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              {technologies.map((tech) => (
                <option key={tech} value={tech}>
                  {tech === 'todas' ? 'Todas' : tech}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Filters
