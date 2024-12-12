import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "glassyPDM",
      social: {
        github: "https://github.com/glassypdm"
      },
      sidebar: [
        {
          label: "User Manual",
          items: [
            { label: "Quick Start and Workflow", link: "/manual/quickstart/" },
            { label: "Permissions", link: "/manual/permissions/" },
            { label: "Client Settings", link: "/manual/settings/" },
          ],
        }
      ],
    }),
  ],
});
