# Adriano Andrade — React e TypeScript

Portfólio de engenharia de software com foco em React e TypeScript. Reúne minha experiência profissional, projetos e decisões técnicas aplicadas ao desenvolvimento de interfaces.

[Site em produção](https://adriandrade.vercel.app)

## Funcionalidades

- Conteúdo em português e inglês, com alternância de idioma.
- Temas claro e escuro.
- Navegação lateral adaptada para desktop, tablets e celulares.
- Projetos apresentados por contexto, contribuição e decisões técnicas, com resultados expansíveis.
- Experiências profissionais com filtro por tecnologia.
- Controles com nomes acessíveis e foco visível, filtro com rótulo e detalhes de projetos operáveis pelo teclado.

## Tecnologias e decisões

- **React, TypeScript e Next.js App Router:** interface organizada em componentes por seção e propriedades tipadas.
- **shadcn/ui e Radix UI:** composição de componentes como Button, Card e Input. O menu móvel utiliza Dialog para gerenciar foco, fechamento com Escape e retorno ao acionador.
- **Tailwind CSS e next-themes:** estilos compartilhados, tokens de cor e alternância entre temas.
- **class-variance-authority:** variantes de aparência e tamanho centralizadas no componente Button.
- **Context API e JSON:** tradução própria com conteúdo separado da interface e sincronização do atributo `lang` do documento.
- **HTML semântico:** uso de `main`, navegação nomeada e `details`/`summary` para expansão dos projetos.

## Organização

- `app/`: página principal, layout e estilos globais.
- `app/components/`: seções do portfólio e controles de navegação, tema e idioma.
- `app/context/`: contexto de tradução.
- `ui/`: componentes de interface reutilizáveis.
- `messages/`: conteúdo em português e inglês.
- `public/`: imagens e arquivos estáticos.

## Execução local

Use Node.js 20 ou 22 e npm.

### Instalação e desenvolvimento

```sh
npm ci
npm run dev
```

Acesse [localhost:3000](http://localhost:3000).

### Lint e TypeScript

```sh
npm run lint
npx tsc --noEmit --incremental false
```

### Build de produção

```sh
npm run build
npm start
```
