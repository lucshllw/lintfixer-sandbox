<div align="center">
  <img src=".github/assets/kat-brackets-badge.svg" alt="LintFixer Kat-Brackets Logo" width="88" height="88" />
  <h1>lintfixer-sandbox</h1>
  <p>Repositório sandbox oficial para demonstração e validação do <strong>LintFixer</strong> — Linter Semântico baseado em regras, Git Score, Auto-Fix verificável e PR Bot seguro.</p>
</div>

---

## O que este sandbox demonstra

| Etapa | Arquivo / Fluxo | Comportamento |
| --- | --- | --- |
| **Política na branch protegida** | [.ikigai/rules.md](.ikigai/rules.md) & [.ikigai/config.yaml](.ikigai/config.yaml) | Lidos exclusivamente de main protegida (ARCH-001, SEC-001, TEST-001). |
| **Filtro barato pré-LLM** | pnpm-lock.yaml + src/controllers/orders.ts | Lockfiles e arquivos fora de escopo são pulados antes de consumir créditos de IA. |
| **Violação semântica intencional** | [src/controllers/orders.ts](src/controllers/orders.ts) | Commit eat(orders) injeta SQL direto (db.query) no controller, disparando ARCH-001 FAIL + proposta de Auto-Fix verificável (orderService.listActive()). |
| **Pull Request conforme** | PR aberta (eat/order-metrics) | Delega corretamente ao domínio, recebe ARCH-001 PASS e alerta informativo de cobertura de teste. |
| **CI & Segurança** | [.github/workflows/ci.yml](.github/workflows/ci.yml) & [SECURITY.md](SECURITY.md) | Testes automatizados em main protegida; nenhuma credencial versionada. |

## Executar validação local com o LintFixer

`ash
npm test
npx lintfixer score HEAD
`
"@

  Write-Utf8Clean "package.json" @"
{
  "name": "lintfixer-sandbox",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "test": "node --test test/*.test.ts"
  }
}