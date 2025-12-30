# Deployment to Vercel

## Quick Deploy (Recommended)

### Option 1: Deploy via Vercel CLI

1. Make sure you're logged into Vercel:
```bash
vercel login
```

2. Deploy to Vercel:
```bash
cd ~/Trinityinv
vercel
```

3. Follow the prompts:
   - Link to existing project? No (first time)
   - Project name: trinityinv (or your preferred name)
   - Directory: ./
   - Override settings? No

4. For production deployment:
```bash
vercel --prod
```

### Option 2: Deploy via Vercel Dashboard (GitHub Integration)

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your repository: `MattVogelsang/Trinityinv`
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

## Connecting Your Domain

After deployment:

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Domains
4. Add your domain (e.g., `yourdomain.com`)
5. Vercel will show you DNS records to add

### DNS Configuration

You'll need to add these DNS records to your domain provider:

**For Root Domain (yourdomain.com):**
- Type: A
- Name: @
- Value: 76.76.21.21

**For WWW (www.yourdomain.com):**
- Type: CNAME
- Name: www
- Value: cname.vercel-dns.com

### Steps:

1. **Go to your domain registrar** (where you bought the domain)
2. **Remove Webflow DNS records** (A records, CNAME records pointing to Webflow)
3. **Add Vercel DNS records** as shown above
4. **Wait for DNS propagation** (can take a few minutes to 48 hours)

### Alternative: Use Vercel Nameservers

1. In Vercel dashboard → Settings → Domains → Your domain
2. Switch to "Nameservers" tab
3. Update nameservers at your registrar to use Vercel's nameservers

## After Deployment

Your site will be available at:
- Production: `https://your-project-name.vercel.app`
- Custom domain: `https://yourdomain.com` (after DNS setup)

## Environment Variables

If you need to add environment variables:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add any required variables (API keys, etc.)

