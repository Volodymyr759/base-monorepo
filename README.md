# Install
1. Pull the code from repo.
2. From root use yarn install.
# Usage
Application contains backend-part (in a root) and 3 frontend clients: Admin / Agent / Tenant in the 'clients'-folder.

Root-part of app always appears on port: http://localhost:2901/.

Run app as Admin-client: 'yarn admin-dev' - backend should be visible on port 2901, client will be on http://localhost:3000.

As Agent-client: 'yarn agent-dev' - backend should be visible on port 2901, client will be on http://localhost:3001.

As Tenant-client: 'yarn tenant-dev' - backend should be visible on port 2901, client will be on http://localhost:3002.

# StoryBook
StoryBook is in use into new one react-ts client: /packages/ps-ui-toolkit. To run: go to ps-ui-toolkit in terminal and use 'yarn start'.

This client contains all ui-components for using by admin/agent/tenant - clients, they are reexported from index.js

After new component is created and tested in StoryBook - run the command 'yarn webpack-build' for creating actual bundle inside 'dist'-folder, so - component is ready to be used from outside.

