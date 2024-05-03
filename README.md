# SISTEM INFORMASI GEOGRAFIS: PERSEBARAN PERGURUAN TINGGI LAMPUNG (SIG-PTL)

Sistem penyedia data untuk aplikasi [SIG-PPTL](https://github.com/limnwhyy/SIG-PPTL-FE) (Server Side).

## Instalasi

> [!IMPORTANT]
> Pastikan sudah menginstall [Node.js](https://nodejs.org/en/download/), [pnpm](https://pnpm.io/installation), dan [PostgreSQL](https://www.postgresql.org/download/). Selain itu, pastikan untuk menginstall [PostGIS](https://postgis.net/install/) pada PostgreSQL.

1. Clone repository ini.

```bash
git clone https://github.com/limnwhyy/SIG-PPTL-BE.git
```

2. Masuk ke direktori repository.

```bash
cd SIG-PPTL-BE
```

3. Install dependencies.

```bash
pnpm install
```

4. Jalankan aplikasi.

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Tech Stack

- [NestJS](https://nestjs.com/)
- [PrismaORM](https://prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [PostGIS](https://postgis.net/)

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
  <p align="center">
  Nest is
    <a href="">MIT LICENSE</a>
  </p>
</p>
