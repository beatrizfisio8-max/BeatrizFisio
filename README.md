# Beatriz | Fisioterapia & Pilates

Base local do portfólio, construída com React, TypeScript e Vite. O conteúdo segue `docs/copywriting_beatriz_fisioterapia.md` e a identidade visual segue `docs/DESIGN.md`.

## Desenvolvimento

Requer Node.js 20.19+ ou 22.12+.

```powershell
cd apps/frontend
npm.cmd install
npm.cmd run dev
```

Abra o endereço exibido pelo Vite. No Windows, `npm.cmd` funciona mesmo quando a política do PowerShell impede a execução de `npm.ps1`.

```powershell
npm.cmd run build
npm.cmd run preview
```

O build de produção é gerado em `apps/frontend/dist`.

## Estrutura preservada

- `src/components`: navegação, seções e elementos reutilizáveis.
- `src/pages`: página inicial e conteúdo estruturado.
- `src/services`: integração com WhatsApp.
- `src/types`: contratos de conteúdo.
- `src/utils`: evento de conversão opcional.
- `public/images`: reservada para fotografias reais autorizadas.

## WhatsApp

Copie `apps/frontend/.env.example` para `apps/frontend/.env.local` e preencha `VITE_WHATSAPP_NUMBER` com o telefone profissional, incluindo 55 e DDD, somente dígitos. Reinicie o servidor após alterar a configuração.

Sem um número válido, os CTAs apontam para a seção de contato, que informa que o agendamento estará disponível em breve. Nenhum telefone fictício é utilizado. Com o número configurado, os links abrem o WhatsApp com mensagens específicas para cada atendimento e plano.

Os cliques com WhatsApp configurado emitem `beatriz:contact` em `window`, com `detail.source`. Não há ferramenta de analytics instalada nem envio de dados pessoais.

## Antes da publicação

Esta é uma base para revisão local, sem publicação. A página inclui `noindex, nofollow` enquanto houver dados pendentes.

- Validar nome profissional completo, formação, CREFITO, capacitação e modalidade de Pilates.
- Aprovar os textos em primeira pessoa com a Beatriz.
- Confirmar os serviços, cobertura, horários e deslocamentos.
- Validar os planos e definir frequência, sessões, preços e condições. A interface os apresenta como propostas sujeitas à confirmação.
- Configurar o WhatsApp real.
- Inserir fotografia real autorizada se desejado. Nenhuma imagem de outra pessoa é apresentada como Beatriz.
- Seguir o checklist completo do documento de copywriting e remover `noindex, nofollow` após aprovação para publicação.

As fontes EB Garamond e Red Hat Mono são carregadas pelo Google Fonts, com alternativas locais para uso sem conexão. A navegação móvel e as perguntas frequentes são acessíveis por teclado; o layout respeita a preferência por movimento reduzido.

## Hero e animação

O Hero segue a gravação de referência em `docs`: fundo rosado e pêssego, sombras de folhagem desfocadas, navegação em papel claro e tipografia centralizada. O conteúdo continua sendo o da Beatriz.

- `src/components/SunlightScene.tsx`: fundo em Canvas com quatro camadas independentes de formas orgânicas difusas: sombras distantes, intermediárias e próximas, além de reflexos de luz. Cada camada tem profundidade, direção e inércia próprias; o movimento ambiente é sutil. As formas e o desfoque são calculados no redimensionamento e reutilizados a cada quadro. O mouse afeta apenas o fundo, sem alterar textos ou botões. Não depende de vídeo, imagem externa ou biblioteca de animação.
- `src/components/HeroExperience.tsx`: saída gradual do título e expansão da próxima seção conforme a rolagem, reversíveis ao voltar ao topo.
- `src/components/hero.css`: composição, navegação e ajustes móveis da abertura.

As animações respeitam `prefers-reduced-motion`; o efeito do mouse é habilitado apenas em dispositivos com apontador preciso. O Canvas pausa fora da área visível ou com a aba oculta e limita a resolução para reduzir o custo de renderização.
