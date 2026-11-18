
# 
# FuelConnect Nigeria – Admin Roles & Permissions

## 1. Super Admin
- Has the highest administrative authority.
- Can approve, suspend, or remove Admin accounts.
- Can assign or reduce Admin permissions.
- Must re-authenticate before sensitive actions.
- All privileged actions must be processed by a trusted backend.
- No user can assign this role to themselves.

## 2. Operations Admin
- Manages daily marketplace operations.
- Reviews buyer and supplier activities.
- Cannot appoint or remove Admins.
- Cannot change Super Admin permissions.

## 3. Supplier Verification Admin
- Reviews supplier registration information.
- Checks submitted licence information.
- Records verification decisions.
- Cannot approve their own supplier account.

## 4. Customer Support Admin
- Handles buyer and supplier support requests.
- Can view only information needed for support.
- Cannot change security settings or Admin roles.

## 5. Auditor
- Has read-only access to approved audit records.
- Cannot edit users, suppliers, transactions, or permissions.

## Security Requirements
- Apply the principle of least privilege.
- Require strong authentication for Admin accounts.
- Require re-authentication for sensitive actions.
- Record privileged actions in audit logs.
- Only trusted backend services can grant or revoke roles.
- Never store passwords or private keys in this repository.

## Important
These roles are a proposed design.
No application Admin permissions are active until the backend and security rules are implemented and tested.
 Nigeria – Admin Roles & Permissions

## 1. Super Admin
- Has the highest administrative authority.
- Can approve, suspend, or remove Admin accounts.
- Can assign or reduce Admin permissions.
- Must re-authenticate before sensitive actions.
- All privileged actions must be processed by a trusted backend.
- No user can assign this role to themselves.

## 2. Operations Admin
- Manages daily marketplace operations.
- Reviews buyer and supplier activities.
- Cannot appoint or remove Admins.
- Cannot change Super Admin permissions.

## 3. Supplier Verification Admin
- Reviews supplier registration information.
- Checks submitted licence information.
- Records verification decisions.
- Cannot approve their own supplier account.

## 4. Customer Support Admin
- Handles buyer and supplier support requests.
- Can view only information needed for support.
- Cannot change security settings or Admin roles.

## 5. Auditor
- Has read-only access to approved audit records.
- Cannot edit users, suppliers, transactions, or permissions.

## Security Requirements
- Apply the principle of least privilege.
- Require strong authentication for Admin accounts.
- Require re-authentication for sensitive actions.
- Record privileged actions in audit logs.
- Only trusted backend services can grant or revoke roles.
- Never store passwords or private keys in this repository.

## Important
These roles are a proposed design.
No application Admin permissions are active until the backend and security rules are implemented and tested.
