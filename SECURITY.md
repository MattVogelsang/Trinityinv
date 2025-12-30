# Security & Privacy Guidelines

## 🔒 Private Information

The following information is **PRIVATE** and should **NEVER** be committed to Git:

### Server-Side Only (Environment Variables):
- `GMAIL_USER` - Your Gmail address for sending emails
- `GMAIL_APP_PASSWORD` - Gmail App Password (NOT your regular password)
- `CONTACT_EMAIL` - Where to send contact form submissions

**These are stored in `.env.local` which is in `.gitignore`**

## 📢 Public Information

The following information is **PUBLIC** and appears on the website:
- Office address, phone numbers, and public contact email
- These are stored in environment variables with `NEXT_PUBLIC_` prefix for configurability

## ✅ Best Practices

1. **Never commit `.env.local`** - It contains private credentials
2. **Use `NEXT_PUBLIC_` prefix** only for truly public information
3. **All server-side secrets** must use regular environment variables (no prefix)
4. **Review all commits** before pushing to ensure no secrets are included

## 🔐 Environment Variables Setup

1. Copy `.env.local.example` to `.env.local`
2. Fill in your private credentials
3. Update public contact info if needed
4. **Never commit `.env.local` to Git**

## Vercel Deployment

Set these environment variables in Vercel dashboard:
- `GMAIL_USER` (Private)
- `GMAIL_APP_PASSWORD` (Private)
- `CONTACT_EMAIL` (Private)
- `NEXT_PUBLIC_*` variables (Public, optional if using defaults)

