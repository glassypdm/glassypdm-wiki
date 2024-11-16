---
title: Quick Start and Workflow
description: Get started using glassyPDM
---

glassyPDM is a CAD collaboration solution that allows for small teams and organizations to stay in sync and iterate quickly.

## Installation and First-time Setup
You can find the latest installer for your operating system on the [GitHub repository for the desktop client](https://github.com/glassypdm/glassypdm-client/releases).
Currently, only Windows is supported.

### Server URL
When opening glassyPDM for the first time, you will be greeted with a server setup screen:

TODO screenshot

You should obtain a server URL to input here from your team/organization.
Be sure to select the correct scheme for your URL - there's no need to include the `https://` or `http://` part of the URL in the text input.

After completing this, you'll be greeted with a login screen.
Once you've made an account, your team lead can add you to your team.

## Client Overview
TODO annotated screenshot
1. List of projects that are being tracked locally
2. View all projects you have access to
3. View your teams
4. Dropdown menu with:
  - Client information
  - Settings
  - Log out

### Client Updates
glassyPDM will automatically update when there is a new version available.
You can view a changelog here link TODO.

## Suggested Workflow
TODO excalidraw diagram

Once you've been added to a team, you'll be able to view the team's projects in the Projects page.

The first step to get a project downloaded is to sync your client with the server.
This will do three things:
1. Search your local project directory for any file changes made
2. Fetch the current project state from the server
3. Determine what needs to be downloaded from the server, and what needs to be uploaded to the server

Depending on the size of the project, this may take a while.

(TODO colorbox) If there are any file conflicts, i.e., files that need to be both uploaded and downloaded, glassyPDM will notify you
of them so you can take the best action, e.g., overwriting it by downloading the revision from the server, backing it up in a separate location,
etc.

After syncing, you will be able to download or upload changes if pertinent.

colorbox TODO If your computer's storage drive is nearing its limits, you can disable the cache to save storage space in Settings.

Uploading files can be done in a similar fashion to downloading them, with the key difference being you can add a message describing the
changes being uploaded.

TODO colorbox To upload files, you will need pertinent permissions to do so.

If more than 200 files are being uploaded, glassyPDM will automatically break up the project update into different parts.

### Project History
TODO screenshot of project update page
You can view project updates by navigating to the Project History tab of a given project.
There, you will be able to see what files have been updated, and download them if desired.

## Further Resources
You're all set up now!

You can learn more about the client settings here (link TODO).

If you are a team lead, proceed to (LINK TODO) to learn more about the permissions system in glassyPDM.
