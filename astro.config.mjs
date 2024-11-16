import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "glassyPDM",
      social: {
        github: "https://github.com/joshtenorio/glassypdm-client",
      },
      sidebar: [
        {
          label: "User Manual",
          items: [
            { label: "Quick Start and Workflow", link: "/manual/quickstart/" },
            { label: "Permissions", link: "/manual/permissions/" },
            { label: "Example", link: "/manual/example/" },
          ],
        },
        {
          label: "Self Hosting",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Installation", link: "/selfhosting/installation/" },
            {
              label: "Prerequisites and Costs",
              link: "/selfhosting/prerequisites/",
            },
          ],
        },
        {
          label: "Software Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
