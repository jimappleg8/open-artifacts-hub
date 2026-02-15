// templates/_data/site.js

// This file contains the configuration for your site.
// It is a JavaScript file so that you can add comments and logic if needed.

export default {

  /**
   * This section is site information that is used across the site AND in the 
   * open-artifact.json file. This data is important for defining the identity 
   * of your site and will likely be used by the Open Artifacts Hub to tell 
   * the world about your project.
   */

  // The title of your site, used in the <title> tag and other places.
  title: "Open Artifacts Hub",

  // A short description of your site, used for SEO and other metadata.
  description: "Discover, share, and collaborate on open artifacts with the Open Artifacts Hub.",

  // A longer description of your site, used in the open-artifact.json file. For
  // multiple paragraphs, use \n\n to separate them.
  longDescription: "The Open Artifacts Hub is an online database with information about existing open artifacts projects. Our mission is to make it easier for cultural creators to find work that needs doing as part of their creative practice.",

  // Information about the site maintainer.
  maintainer: {
    name: "Jim Applegate",
    email: "jimappleg8@gmail.com",
    url: "https://jimapplegate.com/"
  },

  // Tags for your site, used for categorization and discovery in the 
  // Open Artifacts Hub (OpenArtifacts.com).
  tags: ["website", "search", "eleventy", "open artifacts"],

  // Descriptions about important resources for your project. Markdown is 
  // supported. These are simple paragraphs with Markdown links so you can 
  // communicate whatever makes sense for your project.

  homes: "Our [website](http://openartifacts.com/) is the place to start. You can also check out the [README on GitHub](https://github.com/jimappleg8/open-artifacts-hub).",

  collaborativeSpaces: "You can submit issues and pull requests on our [GitHub repository](https://github.com/jimappleg8/open-artifacts-hub).",

  needsDoingLists: "We maintain a list of tasks that we need help with on the website on our [roadmap page](http://openartifacts.com/project/roadmap/). We also use GitHub Issues to track tasks that need doing. Check out the [Issues tab on GitHub](https://github.com/jimappleg8/open-artifacts-hub/issues).",

  adaptingTheProject: "This data is free to use.",

  licenses: "The project website is licensed under [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/). The project's code is licensed under the [MIT License](https://opensource.org/licenses/MIT).",

  // URL for the OA Hub to fetch the "Needs Doing" JSON file for your project.
  // Right now we just support the structured JSON file that this starter
  // template generates at /oa-roadmap.json. In the future we may support
  // other formats or sources, like Github Issues.
  needsDoing: {
    sourceType: "json",
    url: "http://openartifacts.com/oa-roadmap.json"
  },

  // ========================================================================
  /**
   * Starting below this line are configuration options that affect just the
   * appearance and functionality of your site. It is not communicated to the
   * Open Artifacts Hub, but is used by the Eleventy templates to build your
   * site.
   */

  // Social handle (without the '@' symbol) for your "Links in Bio" page.
  // Your link will be like https://example.com/evolve.the.world/
  socialHandle: "evolve.the.world",

  // Links to social media profiles. If a platform is not used, leave the
  // value as an empty string. Additional platforms can be added as needed,
  // but you will need to download logo SVGs from https://simpleicons.org/ 
  // and add them to the templates/_includes/icons/ folder.
  // These links are used in the footer and on the "Links in Bio" page.
  social: {
    github: "https://github.com/jimappleg8/open-artifacts-hub",
    gitlab: "",
    googledrive: "",
    bluesky: "https://bsky.app/profile/evolvetheworld.bsky.social",
    discord: "",
    facebook: "",
    instagram: "https://www.instagram.com/evolve.the.world/",
    x: ""
  },

  // Set this to false to effectively remove the Starter Kit pages from the site.
  showStarterKit: false,

  // Main Menu configuration.
  // The Starter Kit link will not be displayed if `showStarterKit` is false.
  mainMenu: [
    { text: "Home", link: "/" },
    { text: "Starter Kit", link: "/starter-kit/" },
    { text: "The Project", link: "/project/" },
    { text: "How to Contribute", link: "/project/how-to-contribute/" }
  ],

};