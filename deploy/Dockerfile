FROM oven/bun

WORKDIR /app

COPY ./public ./public 
COPY ./src ./src 
COPY package.json vite.config.ts tailwind.config.js postcss.config.js bun.lockb tsconfig.json tsconfig.app.json tsconfig.node.json index.html .env ./

RUN bun install

RUN bun run build

EXPOSE 3000

CMD ["bun", "run", "preview"]