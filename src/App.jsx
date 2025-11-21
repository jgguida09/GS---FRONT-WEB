import React, { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import Filters from './components/Filters'
import ProfileCard from './components/ProfileCard'
import ProfileModal from './components/ProfileModal'
import ToggleDarkMode from './components/ToggleDarkMode'
import professionalsData from './data/professionals.json'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false
    return (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    )
  })

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [darkMode])

  const [search, setSearch] = useState('')
  const [areaFilter, setAreaFilter] = useState('todos')
  const [cityFilter, setCityFilter] = useState('todas')
  const [techFilter, setTechFilter] = useState('todas')
  const [selectedProfile, setSelectedProfile] = useState(null)

  const areas = useMemo(() => {
    const set = new Set(professionalsData.map((p) => p.area))
    return ['todos', ...Array.from(set)]
  }, [])

  const cities = useMemo(() => {
    const set = new Set(professionalsData.map((p) => p.city))
    return ['todas', ...Array.from(set)]
  }, [])

  const technologies = useMemo(() => {
    const set = new Set(
      professionalsData.flatMap((p) => p.technologies || [])
    )
    return ['todas', ...Array.from(set)]
  }, [])

  const filteredProfessionals = useMemo(() => {
    return professionalsData.filter((p) => {
      const matchesSearch =
        search.trim().length === 0 ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.role.toLowerCase().includes(search.toLowerCase()) ||
        (p.summary &&
          p.summary.toLowerCase().includes(search.toLowerCase()))

      const matchesArea = areaFilter === 'todos' || p.area === areaFilter
      const matchesCity = cityFilter === 'todas' || p.city === cityFilter
      const matchesTech =
        techFilter === 'todas' ||
        (p.technologies && p.technologies.includes(techFilter))

      return (
        matchesSearch &&
        matchesArea &&
        matchesCity &&
        matchesTech
      )
    })
  }, [search, areaFilter, cityFilter, techFilter])

  return (
    <div className="min-h-screen bg-beige dark:bg-darkBg text-textDark dark:text-textLight transition-colors duration-300">
      <Header />

      <main className="max-w-6xl mx-auto px-4 pb-10">
        <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-textDark dark:text-textLight">
              Conecte talentos ao futuro do trabalho
            </h2>
            <p className="text-sm md:text-base text-textDark/70 dark:text-textLight/70 mt-1 max-w-2xl">
              Explore profissionais alinhados à inovação, impacto social e tecnologia.
              Busque por Área, cidade ou tecnologia e descubra novas conexões.
            </p>
          </div>

          <ToggleDarkMode
            darkMode={darkMode}
            onToggle={() => setDarkMode((d) => !d)}
          />
        </section>

        <Filters
          search={search}
          onSearchChange={setSearch}
          areas={areas}
          areaFilter={areaFilter}
          onAreaChange={setAreaFilter}
          cities={cities}
          cityFilter={cityFilter}
          onCityChange={setCityFilter}
          technologies={technologies}
          techFilter={techFilter}
          onTechChange={setTechFilter}
        />

        <section className="mt-6">
          <p className="text-sm text-textDark/60 dark:text-textLight/60 mb-3">
            Exibindo {filteredProfessionals.length} de{' '}
            {professionalsData.length} profissionais
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProfessionals.map((p) => (
              <ProfileCard
                key={p.id}
                profile={p}
                onClick={() => setSelectedProfile(p)}
              />
            ))}
          </div>

          {filteredProfessionals.length === 0 && (
            <div className="mt-10 text-center text-textDark/60 dark:text-textLight/60">
              Nenhum profissional encontrado com os filtros atuais.
              <button
                onClick={() => {
                  setSearch('')
                  setAreaFilter('todos')
                  setCityFilter('todas')
                  setTechFilter('todas')
                }}
                className="ml-2 underline underline-offset-4 text-textDark dark:text-textLight hover:text-black dark:hover:text-beige"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </section>
      </main>

      <ProfileModal
        profile={selectedProfile}
        onClose={() => setSelectedProfile(null)}
      />
    </div>
  )
}

export default App
