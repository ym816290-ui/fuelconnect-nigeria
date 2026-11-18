
# FuelConnect Nigeria – Database Structure

## 1. Purpose
Cloud Firestore will serve as the central database for the Web and Android applications.

Both applications will use the same Firebase project and database.

## 2. Main Collections

### users
Stores registered user profile information.
- userId
- fullName
- email
- phoneNumber
- accountType
- accountStatus
- createdAt

### suppliers
Stores supplier registration and verification information.
- supplierId
- businessName
- contactInformation
- businessAddress
- licenceInformation
- verificationStatus
- createdAt

### products
Stores available petroleum product listings.
- productId
- supplierId
- productType
- quantityAvailable
- price
- location
- listingStatus
- createdAt

### orders
Stores buyer requests and order information.
- orderId
- buyerId
- supplierId
- productId
- quantityRequested
- orderStatus
- createdAt

### adminUsers
Stores administrative account profiles and assigned roles.
- adminId
- userId
- assignedRole
- permissions
- accountStatus
- createdAt

### auditLogs
Stores records of important administrative activities.
- logId
- actorUserId
- actionType
- affectedRecordId
- actionResult
- timestamp

## 3. Petroleum Product Types
- PMS
- AGO
- DPK
- ATK
- LPG

## 4. Security Requirements
- Firebase Authentication must identify users.
- Firestore Security Rules must control data access.
- Users must not assign administrative roles to themselves.
- Only trusted backend services can grant or revoke Admin roles.
- Sensitive supplier information must have restricted access.
- Audit logs must be protected from unauthorized changes.

## 5. Application Integration
- Web application connects to the central Firestore database.
- Android application connects to the same central Firestore database.
- Both applications follow the same security rules.

## 6. Important Notice
This document describes the proposed database structure.
The collections and fields are not active until implemented, secured, and tested.
