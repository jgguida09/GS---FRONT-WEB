FutureWork Network – Plataforma React (GS 2025)
integrantes: 
Victor Oliveira Alves - 565723 
Joao Guilherme Guida - 565244


Aplicação desenvolvida para a Global Solution – Front-End Design / Web Development (2º semestre 2025), alinhada ao tema O Futuro do Trabalho.
A proposta simula uma plataforma estilo rede profissional, permitindo explorar perfis, filtrar talentos e visualizar informações completas de profissionais preparados para o futuro do trabalho.

# 1. Objetivo do Projeto

Criar uma SPA (Single Page Application) moderna, responsiva e intuitiva, capaz de:
listar profissionais fictícios com foco em habilidades do futuro
permitir busca e filtros inteligentes
apresentar perfis completos em modal
demonstrar interface profissional, design limpo e uso de tecnologias atuais (React + Tailwind + Vite)
A aplicação representa um ambiente digital que conecta pessoas, competências e propósito — exatamente a essência proposta pelo tema da GS.

# 2. Tecnologias Utilizadas

Com base nos arquivos enviados:

React 18 — componentes, estados e interação

Vite — build rápido e ambiente moderno 

vite.config

Tailwind CSS — estilização utilitária e suporte a dark mode 

index

JavaScript ES2023

JSON local contendo os perfis

Dark Mode por classe, definido diretamente no estado do App

# 3. Funcionalidades Implementadas
Listagem de Profissionais

Exibição em cards com nome, área, cargo e habilidades.

Busca Inteligente

Busca por nome, cargo e descrição.

Filtros Combinados

Área de atuação

Cidade

Tecnologias

Combinação de filtros + busca

Modal de Perfil Completo

Ao clicar em um card, o usuário abre um modal com:

descrição detalhada

formação

tecnologias

competências

soft skills

resumo profissional

Dark Mode

Ativado pelo botão ToggleDarkMode

Layout Responsivo

Filters otimizados

Aplicação testada em mobile, tablet e desktop


# 5. Como Rodar o Projeto
1. Instalar dependências
npm install

2. Rodar o ambiente de desenvolvimento
npm run dev

3. Build para produção
npm run build

4. Visualizar build
npm run preview

# 6. Explicação Técnica das Principais Partes
App.jsx

Gerencia todo o estado global de filtros, busca, modal e dark mode.
Aplica a classe dark na tag root dinamicamente.
Filtragem é calculada via useMemo, garantindo performance.
Modal é exibido via selectedProfile.

main.jsx

Responsável por renderizar a aplicação React no DOM via ReactDOM.createRoot 

main
index.css

Carrega Tailwind e customizações base, incluindo tipografia e scrollbar minimalista. 

index

Estrutura de Filtros
Geração automática de listas únicas (área, cidade, tecnologias) usando Set + useMemo.

Dark Mode

Habilitado via classe global dark abordagem recomendada no Tailwind.

# 7. Como Isso Se Conecta ao Tema “Futuro do Trabalho”

A aplicação simula uma plataforma que:
incentiva conexões profissionais relevantes
destaca competências do futuro (tecnologia, inovação, ESG, soft skills)
organiza talentos por áreas estratégicas
acompanha tendências de transformação digital
Representa de forma prática como interfaces digitais conectam pessoas e oportunidades num mundo em constante mudança.
