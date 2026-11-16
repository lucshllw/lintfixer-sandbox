# Política de Segurança · LintFixer Sandbox

- **Zero segredos no repositório:** chaves de IA (GEMINI_API_KEY, OPENAI_API_KEY, ANTHROPIC_API_KEY) e tokens nunca são versionados no Git; devem permanecer no **Cofre Local Criptografado** (AES-256-GCM + DPAPI/Keystore) ou em **GitHub Actions Secrets** no CI.
- **Branch main protegida:** force push e exclusão são bloqueados; merges exigem revisão em Pull Request e aprovação no status check de CI.
- **Isolamento de Forks:** Pull Requests oriundas de forks rodam apenas em modo COMMENT sem acesso a secrets do repositório.