# Zapply APK Builder

Automated Android APK builder for [Zapply](https://zapply.in) — the AI-powered Android app builder.

## How it works

1. **Zapply generates HTML** — AI creates a complete single-file web app
2. **HTML is uploaded to Supabase Storage** — stored as a downloadable file
3. **GitHub Actions workflow is triggered** via `workflow_dispatch` with:
   - `app_id` — unique identifier from Zapply database
   - `html_url` — Supabase Storage URL of the HTML file
   - `app_name` — display name for the APK
   - `callback_url` — Zapply webhook to receive build results
4. **Cordova wraps the HTML** into a native Android APK
5. **APK is uploaded to Supabase Storage**
6. **Zapply is notified** via callback URL with the APK download link

## Repository Structure

```
├── .github/workflows/
│   └── build-apk.yml        # GitHub Actions workflow
├── cordova-template/
│   ├── config.xml            # Cordova config template
│   └── www/.gitkeep          # Placeholder for web content
└── README.md
```

## Required Secrets

Set these in **Settings → Secrets and variables → Actions**:

| Secret | Description |
|--------|-------------|
| `SUPABASE_URL` | Your Supabase project URL |
| `SUPABASE_SERVICE_KEY` | Service role key for uploading APKs |
| `CALLBACK_SECRET` | Shared secret for callback auth |

## Triggering a Build

From Zapply's backend:

```bash
curl -X POST \
  -H "Authorization: Bearer YOUR_GITHUB_PAT" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/OWNER/zapply-apk-builder/actions/workflows/build-apk.yml/dispatches \
  -d '{
    "ref": "main",
    "inputs": {
      "app_id": "abc123",
      "html_url": "https://xxx.supabase.co/storage/v1/object/public/html-apps/apps/abc123/index.html",
      "app_name": "My Cool App",
      "callback_url": "https://zapply.in/api/build-callback"
    }
  }'
```
