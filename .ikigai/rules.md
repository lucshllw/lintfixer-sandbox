# Sandbox Architecture & Security Policy

## ARCH-001

severity: error
scope: src/controllers/**
evidence: code
fixable: true

### Rule

HTTP controllers must delegate database reads and domain logic to service modules instead of calling db.query directly.

### Violation

A controller calls db.query(...) or executes inline SQL directly inside src/controllers/**.

### Allowed

Calling application services such as orderService.listActive() and returning mapped DTO responses.

## SEC-001

severity: error
scope: **
evidence: code
fixable: false

### Rule

Never hardcode API keys, OAuth tokens, or private keys in source files.

### Violation

Embedding literal credentials or raw tokens instead of environment or vault lookups.

### Allowed

Environment variable references and redacted test placeholders.
