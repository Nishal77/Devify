# Client Delivery & Handover Guide

## How the Activation System Works

This project includes a transparent activation gate agreed upon in the project contract.

- **Without** `NEXT_PUBLIC_LICENSE_KEY` set → site shows "Awaiting Activation" screen
- **With** the correct key → site runs normally, no restrictions
- All logic is visible in `src/lib/license.ts` and `src/components/LicenseGate.tsx`
- There is no hidden code, no data deletion, no remote kill switches

---

## Delivery Stages

### Stage 1 — Staging Preview (before payment)
Client receives a hosted staging URL (e.g. Vercel preview).
No repo access. No env vars shared.

### Stage 2 — Repo Handover (after 50% milestone payment)
Client receives read access to the GitHub repo.
Repo ships **without** `.env.local` (gitignored).
Site will show "Awaiting Activation" screen on their own deploy.

### Stage 3 — Full Activation (after final payment)
You provide `NEXT_PUBLIC_LICENSE_KEY` value to the client.
Client sets it in their hosting environment (Vercel → Settings → Environment Variables).
Site goes live immediately.

### Stage 4 — Full Ownership Transfer (optional, post-payment)
Client can remove the gate entirely:
1. Delete `src/lib/license.ts`
2. Delete `src/components/LicenseGate.tsx`
3. Remove `<LicenseGate>` wrapper from `src/app/layout.tsx`
4. Remove `NEXT_PUBLIC_LICENSE_KEY` and `LICENSE_KEYS` from env

No other changes needed. Zero lock-in after this step.

---

## Ownership Transfer Checklist

- [ ] GitHub repo transferred to client's account (`Settings → Transfer`)
- [ ] Vercel project transferred to client's team
- [ ] Domain DNS handed over or pointed by client
- [ ] All env vars documented and shared securely (via 1Password / encrypted email)
- [ ] `LICENSE_KEYS` env var deleted from your own Vercel account
- [ ] Final invoice marked paid
- [ ] NDA / IP transfer agreement signed

---

## Client FAQ

**Q: Can I remove this activation system?**  
Yes. After final payment, follow Stage 4 above. Full instructions included.

**Q: Does this system phone home or collect data?**  
No. The check is purely local — it reads an environment variable. No external requests.

**Q: What if I lose the activation key?**  
Contact nishalpoojary09@gmail.com. During the contract period, a replacement key will be issued.

**Q: What happens if I don't set the key?**  
Visitors see a clean "Awaiting Activation" screen. No data is lost or modified.
