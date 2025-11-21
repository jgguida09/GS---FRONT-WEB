import React, { useState } from 'react'

function ProfileModal({ profile, onClose }) {
  const [recommended, setRecommended] = useState(false)
  const [message, setMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  if (!profile) return null

  const handleRecommend = () => {
    setRecommended(true)
    setSuccessMessage('Recomendação registrada! 🎉 Obrigado por apoiar este talento.')
    setTimeout(() => setSuccessMessage(''), 2500)
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!message.trim()) return
    setMessage('')
    setSuccessMessage('Mensagem enviada com sucesso! 🚀')
    setTimeout(() => setSuccessMessage(''), 2500)
  }

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/50 backdrop-blur-sm px-3">
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full bg-slate-100 dark:bg-slate-800 p-1.5 text-xs text-slate-500 hover:text-slate-900 dark:hover:text-slate-100"
        >
          ✕
        </button>

        <header className="border-b border-slate-100 dark:border-slate-800 px-5 py-4 flex items-center gap-3">
          <div className="h-14 w-14 rounded-2xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400 flex items-center justify-center text-base font-semibold text-white">
            {profile.avatarInitials}
          </div>
          <div className="min-w-0">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
              {profile.name}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {profile.role}
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              {profile.city} • {profile.area}
            </p>
          </div>
        </header>

        <div className="grid md:grid-cols-[1.6fr,1.1fr] gap-0">
          <section className="max-h-[70vh] overflow-y-auto px-5 py-4 space-y-4 scrollbar-thin">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1.5">
                Sobre
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-200">
                {profile.summary}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1.5">
                  Informações pessoais & acadêmicas
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-200">
                  <li><span className="font-medium">Idade:</span> {profile.personal.age} anos</li>
                  <li><span className="font-medium">Formação:</span> {profile.personal.education}</li>
                  <li><span className="font-medium">Instituição:</span> {profile.personal.institution}</li>
                  <li><span className="font-medium">Foco de carreira:</span> {profile.personal.careerGoal}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1.5">
                  Experiência & tecnologias
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-200">
                  <li><span className="font-medium">Experiência:</span> {profile.experience.years} anos</li>
                  <li><span className="font-medium">Última atuação:</span> {profile.experience.lastRole}</li>
                  <li><span className="font-medium">Segmento:</span> {profile.experience.sector}</li>
                </ul>
                <div className="mt-2">
                  <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mb-1">
                    Tecnologias principais:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {profile.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[10px] text-slate-800 dark:text-slate-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1.5">
                  Soft skills
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {profile.softSkills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-900 px-2 py-0.5 text-[10px] font-medium text-emerald-700 dark:text-emerald-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1.5">
                  Hobbies & interesses
                </h3>
                <p className="text-xs text-slate-700 dark:text-slate-200">
                  {profile.hobbies.join(' · ')}
                </p>
              </div>
            </div>
          </section>

          <aside className="border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-800 px-5 py-4 flex flex-col gap-4 bg-slate-50/70 dark:bg-slate-950/40">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1.5">
                Ações
              </h3>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={handleRecommend}
                  className={
                    'flex-1 inline-flex items-center justify-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium shadow-sm transition-colors ' +
                    (recommended
                      ? 'bg-emerald-100 text-emerald-700 border border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-200 dark:border-emerald-800'
                      : 'bg-indigo-600 text-white border border-indigo-500 hover:bg-indigo-500')
                  }
                >
                   Recomendar profissional
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('message-box')
                    if (el) el.focus()
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-100 hover:border-indigo-400 hover:text-indigo-500 dark:hover:border-indigo-400 dark:hover:text-indigo-300 transition-colors"
                >
                   Enviar mensagem
                </button>
              </div>
            </div>

            <form onSubmit={handleSendMessage} className="flex flex-col gap-2">
              <label
                htmlFor="message-box"
                className="text-xs font-medium text-slate-600 dark:text-slate-300"
              >
                Mensagem rápida
              </label>
              <textarea
                id="message-box"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Apresente-se, conte como podem colaborar e por que se interessou pelo perfil..."
                className="w-full resize-none rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-xs text-slate-800 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 text-xs font-medium text-white shadow-sm transition-colors"
              >
                Enviar mensagem
              </button>
            </form>

            <div className="mt-1">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1.5">
                Foco no futuro do trabalho
              </h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-300">
                {profile.futureWorkFocus}
              </p>
            </div>

            {successMessage && (
              <div className="mt-1 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-2 text-[11px] text-emerald-800 dark:text-emerald-200">
                {successMessage}
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  )
}

export default ProfileModal
