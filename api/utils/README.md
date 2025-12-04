# Servidor IPTV – Node.js + Vercel

Servidor para ler playlist IPTV (M3U), organizar os dados e retornar em formato JSON,
permitindo uso em aplicativos Android estilo Netflix.

---

## 🚀 Recursos do servidor

- Evita CORS (o app consome sua API, não a URL IPTV direta)
- Baixa e parseia playlist M3U
- Separa automaticamente:
  - Canais (Live)
  - Filmes (VOD)
  - Séries
- Busca informações detalhadas via Xtream API
- Rotas limpas e organizadas para frontend

---

## 📁 Estrutura

---

## 🌐 Rotas da API

| Rota | Função |
|------|--------|
| `/api/live` | Lista canais ao vivo |
| `/api/vod` | Lista filmes |
| `/api/series` | Lista séries |
| `/api/vod/info?id=123` | Info de um filme |
| `/api/series/info?id=123` | Info de série |
| `/api/raw` | Retorna playlist original |

---

## 🚀 Deploy na Vercel

Instalar CLI:
