Student ID Authentication Migration Plan

Objective
Replace Google Sign-In with Student ID–based authentication (via institutional SSO or custom ID verification) without changing protected routes or roles.

Options
1) Institutional SSO (Preferred)
- Use OIDC/SAML provider from the institution
- Auth.js/NextAuth supports SAML/OIDC providers
- Map claims: email, name, unique student ID

2) Credentials Provider (Custom)
- Build a verification API for Student ID + secret (e.g., one-time codes, portal integration)
- On success, create a session via NextAuth Credentials provider

Migration Steps
- Dual-provider phase: Enable both Google and StudentID providers for a period
- Domain/claims checks: Enforce allowed domain or required student attributes
- Data mapping: Map existing Google account emails to Student IDs when possible
- Brownout plan: Announce cutoff date; show banner to migrate logins
- Rollback: Keep Google provider config ready to re-enable quickly if issues

Security Considerations
- Keep the same session/route guard model
- CSRF and secure cookies unchanged
- Rate-limit credential-based attempts

Testing
- End-to-end flows on staging with whitelisted test accounts
- Verify role mapping for admins via email or ID claims

Deliverables
- Provider config
- Updated documentation and sign-in UI text
- Migration banner and support instructions
