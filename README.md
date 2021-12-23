# Install
1. Pull the code from repo.
2. From root use yarn install.
# Usage
Application contains backend-part (in a root) and 3 frontend clients: Admin / Agent / Tenant in the 'clients'-folder.

Root-part of app always appears on port: http://localhost:2901/.
Run app as Admin-client: 'yarn admin-dev' - backend should be visible on port 2901, client will be on http://localhost:3000.
As Agent-client: 'yarn agent-dev' - backend should be visible on port 2901, client will be on http://localhost:3001.
As Tenant-client: 'yarn tenant-dev' - backend should be visible on port 2901, client will be on http://localhost:3002.
