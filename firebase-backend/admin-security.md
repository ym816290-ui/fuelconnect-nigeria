
# FuelConnect Nigeria – Admin Security Policy

## 1. Super Admin Protection
- Super Admin accounts must use strong authentication.
- Sensitive actions require password re-authentication.
- Multi-factor authentication should be enabled where supported.
- Super Admin access must never be shared.

## 2. Admin Account Management
- Only the Super Admin can approve new Admin accounts.
- Only trusted backend services can grant or revoke Admin roles.
- Admin permissions must be limited to assigned responsibilities.
- Suspended Admin accounts must lose administrative access.

## 3. Sensitive Actions
- Require re-authentication before:
  - Adding an Admin.
  - Removing an Admin.
  - Changing Admin permissions.
  - Suspending an Admin.
  - Changing important security settings.

## 4. Audit Logs
- Record important administrative activities.
- Record the responsible account and action.
- Include date and time for each recorded activity.
- Protect audit records from unauthorized changes.

## 5. Password and Credential Safety
- Never store passwords in Firestore or GitHub.
- Never publish private keys or service account credentials.
- Use secure authentication and trusted backend services.

## 6. Important Notice
This document defines proposed security requirements.
These protections are not active until implemented, deployed, and tested.
