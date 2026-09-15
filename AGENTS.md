# OTC website publishing instructions

For every new or updated Herald article, follow [docs/HERALD-PUBLISHING-WORKFLOW.md](docs/HERALD-PUBLISHING-WORKFLOW.md).

Required before declaring sharing verified:
- Article-specific cover visible in the article, with OG and Twitter image metadata pointing to the same public, versioned image.
- Pass `python3 scripts/check-herald-share.py content/ARTICLE.json` and repeat with `--live` after deployment.
- Visually inspect desktop/mobile and the user-specified social platform's unsent composer preview; HTTP success is not proof of a rendered card.
- Record unchecked or failing platform previews as pending; never invent a successful result or a cache diagnosis.
- Do not post to social accounts without explicit authorization. Preserve existing user drafts.
- Retain unrelated content and concurrent changes; never force-push to publish an article.
