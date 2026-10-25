# SparkLab Rwanda

This project is a full-stack MVP for a Rwanda innovation platform connecting students, startups, mentors, and companies.

## Stack
- Next.js
- Tailwind CSS
- Prisma
- PostgreSQL
- NextAuth

## Local development

```bash
npm install
cp .env.example .env
npx prisma generate
npx prisma db push
npm run dev
```

Then open http://localhost:3000

## Key features
- Student/innovator idea submissions
- Company discovery and review flow
- Mentor collaboration board
- Competition and opportunity listing
- Admin moderation dashboard
